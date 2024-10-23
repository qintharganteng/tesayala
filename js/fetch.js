const endpoint = "https://msg.ulbi.ac.id/task/recruitment/all";

fetch(endpoint, {
    method: 'GET',
    mode: 'no-cors' 
})
.then(response => {
    console.log(response); 
})
.catch(error => console.error('Error:', error));
