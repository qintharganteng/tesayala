const endpoint = "https://msg.ulbi.ac.id/task/recruitment/all";

fetch(endpoint, {
    method: 'GET',
    mode: 'cors', // coba tambahkan ini
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // parsing response ke json
})
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));
