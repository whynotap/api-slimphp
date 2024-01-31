<?php
class User {
    private $id;
    private $username;
    private $mail;
    private $password;
    private $motto;
    private $tokens;

    public function __construct($id, $username, $mail, $password, $motto, $tokens) {
        $this->id = $id;
        $this->username = $username;
        $this->mail = $mail;
        $this->password = $password;
        $this->motto = $motto;
        $this->tokens = $tokens;
    }

    public function getId() {
        return $this->id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getMail() {
        return $this->mail;
    }

    public function getPassword() {
        return $this->password;
    }

    public function getMotto() {
        return $this->motto;
    }

    public function getTokens() {
        return $this->tokens;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setUsername($username) {
        $this->username = $username;
    }

    public function setMail($mail) {
        $this->mail = $mail;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function setMotto($motto) {
        $this->motto = $motto;
    }

    public function setTokens($tokens) {
        $this->tokens = $tokens;
    }
    
    public function displayUser() {
        return "Username: " . $this->username . ", Mail: " . $this->mail . ", Motto: " . $this->motto;
    }

    public static function register($db, $username, $mail, $password, $motto) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $db->prepare("INSERT INTO users (username, mail, password, motto) VALUES (:username, :mail, :password, :motto)");

        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':mail', $mail);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':motto', $motto);
        $stmt->execute();
        $id = $db->lastInsertId();
        return new User($id, $username, $mail, $hashedPassword, $motto, 0);
    }
}
