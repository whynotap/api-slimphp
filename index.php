<?php
require 'vendor/autoload.php';
require 'src/User.php'; // Assurez-vous que le chemin vers User.php est correct

use Slim\Factory\AppFactory;
use Nyholm\Psr7\Factory\Psr17Factory;
use Nyholm\Psr7Server\ServerRequestCreator;
use App\User;

$factory = new Psr17Factory();
$serverRequestCreator = new ServerRequestCreator($factory, $factory, $factory, $factory);
$request = $serverRequestCreator->fromGlobals();

$app = AppFactory::create();

// Ajout de la configuration de la base de données
$container = $app->getContainer();

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
        $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->get('/', function ($request, $response, $args) {
    $response->getBody()->write("Bienvenue sur SlimPHP !");
    return $response;
});

$app->post('/login', function ($request, $response, $args) use ($container) {
    $data = $request->getParsedBody();
    $user = User::findByUsername($container['db'], $data['username']);

    if ($user && password_verify($data['password'], $user->getPassword())) {
        $_SESSION['user'] = $user->getId();
        $response->getBody()->write('Vous êtes désormais connecté avec succès !');
    } else {
        $response->getBody()->write('Vos identifiants sont incorrect');
    }

    return $response;
});

$app->run();
