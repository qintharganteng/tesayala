console.log('Kode JavaScript berjalan');

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    console.log('Form dikirim');
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil data dari form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const id = generateId(); // Menghasilkan ID baru

    console.log('Data form:', name, email, phone, alamat);

    // Validasi data
    if (name === '' || email === '' || phone === '' || alamat === '') {
        console.log('Semua field harus diisi!');
        alert('Semua field harus diisi!');
        return;
    }

    // Membuat objek data sesuai dengan struktur yang diinginkan
    const data = {
        id: id, // ID seharusnya dimasukkan di sini jika diperlukan oleh API
        alamat: alamat,
        email: email,
        name: name,
        phone: phone
    };

    console.log('Data yang dikirim:', data);

    // Mengirim data ke API menggunakan fetch
    fetch('https://msg.ulbi.ac.id/task/recruitment', { // Pastikan endpoint benar
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Respons dari server:', response);
        return response.text().then(text => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${text}`);
            }
            return JSON.parse(text);
        });
    })
    .then(data => {
        console.log('Success:', data);
        alert('Data berhasil dikirim!');
        // Reset form setelah pengiriman berhasil
        document.getElementById('registrationForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert(`Terjadi kesalahan saat mengirim data: ${error.message}`);
    });
});

// Fungsi untuk menghasilkan ID unik (misalnya menggunakan UUID)
function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
