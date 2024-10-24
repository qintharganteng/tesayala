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
<td style="border: 1px solid #000000; padding: 8px; text-align: center;">
    <a href="formup.html?id=${job.id}" style="text-decoration: none;">
        <button class="edit-btn" style="padding: 5px 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">
            Edit
        </button>
    </a>
    <button class="delete-btn" style="padding: 5px 10px; background-color: #f44336; color: white; border: none; cursor: pointer;" data-id="${job.id}">Delete</button>
</td>

`;


      tableBody.appendChild(row);
    });

    // Adding event listener for Delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const jobId = event.target.getAttribute('data-id');
        console.log(`Delete button clicked for job ID: ${jobId}`); // Log ID
        // Confirmation before deletion
        const confirmDelete = confirm(`Are you sure you want to delete job ID: ${jobId}?`);
        if (confirmDelete) {
          deleteJob(jobId);
        }
      });
    });
  })
  .catch((error) => console.error("Fetch error:", error));

// Function to delete job by ID
function deleteJob(id) {
  const deleteEndpoint = `https://msg.ulbi.ac.id/task/recruitment?id=${id}`;
  
  fetch(deleteEndpoint, {
    method: 'DELETE',
  })
    .then(response => {
      console.log('Response status:', response.status); // Log status
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Remove the row from the table after successful deletion
      const rowToDelete = document.querySelector(`button[data-id="${id}"]`).closest('tr');
      if (rowToDelete) {
        console.log(`Row found for job ID: ${id}. Proceeding to remove it.`);
        rowToDelete.remove(); // Remove row from the table
        console.log(`Job with ID ${id} deleted from table.`);
      } else {
        console.error(`Row not found for job ID: ${id}`);
      }
    })
    .catch(error => console.error("Delete error:", error));
}
