<?php
// Set header untuk memberi tahu bahwa respons adalah JSON
header('Content-Type: application/json');

// Periksa apakah metode request adalah POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Periksa apakah data POST tersedia
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comments'])) {
        // Ambil data dari POST
        $name = $_POST['name'];
        $email = $_POST['email'];
        $comments = $_POST['comments'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(array('message' => 'Email tidak valid'));
            http_response_code(400); // Bad Request
            exit;
        }


        // Response dengan pesan sukses
        echo json_encode(array('message' => 'Data berhasil diterima'));
        http_response_code(200); // OK
    } else {
        // Jika data POST tidak lengkap, kirim respons dengan kode status 400 (Bad Request)
        echo json_encode(array('message' => 'Data tidak lengkap'));
        http_response_code(400); // Bad Request
    }
} else {
    // Jika metode request bukan POST, kirim respons dengan kode status 405 (Method Not Allowed)
    echo json_encode(array('message' => 'Metode request tidak diizinkan'));
    http_response_code(405); // Method Not Allowed
}
