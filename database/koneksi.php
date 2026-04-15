<?php
$host = "localhost";
$db_name = "coffe";
$username = "admin";
$password = "hakimlnh11";
try {
    // Membuat koneksi PDO
    $kon = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    
    // Mengatur mode error PDO ke Exception
    $kon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $kon->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    echo "Koneksi Gagal: " . $e->getMessage();
    die();
}
?>