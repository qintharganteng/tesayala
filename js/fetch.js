console.log("FETCH");

  const endpoint = "https://msg.ulbi.ac.id/task/recruitment/all";

  fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      const tableBody = document.querySelector("#jobTable tbody");
      result.forEach((job) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left" style="border: 1px solid #111; padding: 8px;">${job.id}</td>
          <td class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center" style="border: 1px solid #111; padding: 8px;">${job.name}</td>
          <td class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-500 text-left" style="border: 1px solid #111; padding: 8px;">${job.phone}</td>
          <td class="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left" style="border: 1px solid #111; padding: 8px;">${job.email}</td>
          <td class="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left" style="border: 1px solid #111; padding: 8px;">${job.alamat}</td>

        `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Fetch error:", error));