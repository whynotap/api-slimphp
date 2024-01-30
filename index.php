<?php
require 'vendor/autoload.php';

$factory = new \Nyholm\Psr7\Factory\Psr17Factory();
$serverRequestCreator = new \Nyholm\Psr7Server\ServerRequestCreator($factory, $factory, $factory, $factory);
$request = $serverRequestCreator->fromGlobals();

$app = \Slim\Factory\AppFactory::create();

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

$app->run();
