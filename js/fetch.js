console.log("FETCH");

const endpoint = "https://msg.ulbi.ac.id/task/recruitment/all";

fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => console.log(result))
  .catch((error) => console.error("Fetch error:", error));
