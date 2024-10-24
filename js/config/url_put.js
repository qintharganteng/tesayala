const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

export let urlPUT = "https://msg.ulbi.ac.id/task/recruitment?id=6717dd928c184ddf9c366dd5 ";

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "dashboard.html"; //reload halaman setelah klik ok pada alert
}