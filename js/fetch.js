let urlAPI = "https://msg.ulbi.ac.id/task/recruitment/all";

fetch(urlAPI)
  .then(response => response.json())
  .then(results => console.log(results))
  .catch(error => console.error('Error:', error));
