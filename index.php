<?php
require 'vendor/autoload.php';

$factory = new \Nyholm\Psr7\Factory\Psr17Factory();
$serverRequestCreator = new \Nyholm\Psr7Server\ServerRequestCreator($factory, $factory, $factory, $factory);
$request = $serverRequestCreator->fromGlobals();
$app = \Slim\Factory\AppFactory::create();
$app->get('/', function ($request, $response, $args) {
    $response->getBody()->write("Bienvenue sur SlimPHP !");
    return $response;
});

$app->run();