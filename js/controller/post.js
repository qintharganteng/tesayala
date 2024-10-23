document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Mengambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const alamat = document.getElementById('alamat').value;

    // Membuat objek data
    const data = {
        name: name,
        email: email,
        phone: phone,
        alamat: alamat
    };

    console.log('Data yang akan dikirim:', JSON.stringify(data)); // Log data

    // Mengirim data ke API
    fetch('https://msg.ulbi.ac.id/task/recruitment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Status respons:', response.status); // Tambahkan log status
        if (!response.ok) {
            return response.json().then(errData => {
                throw new Error(`Error: ${errData.message || 'Something went wrong'}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Sukses:', data);
        alert('Data berhasil dikirim!');
    })
    .catch((error) => {
        console.error('Kesalahan:', error);
        alert('Terjadi kesalahan saat mengirim data: ' + error.message);
    });
});
