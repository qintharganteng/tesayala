console.log("FETCH")

const endpoint = "https://msg.ulbi.ac.id/task/recruitment/all"

fetch(endpoint)
.then((data) => console.log(data))
.then((result) => console.log(result))
