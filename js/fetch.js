let urlAPI = "https://msg.ulbi.ac.id/task/recruitment/all";

fetch(urlAPI)
  .then(response => response.json())
  .then(results => isiTablePresensi(results))
  .catch(error => console.error('Error:', error));

function isiTablePresensi(results) {
    console.log(results);
}




