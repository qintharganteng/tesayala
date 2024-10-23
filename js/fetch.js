//fetch
import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://msg.ulbi.ac.id/task/recruitment/all";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}





