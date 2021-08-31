let ekran = document.getElementById("table");
let tr="";
let arr= [];
arr=[Math.floor(Math.random()*17)];
let count="";
console.log(arr);




count=16;
for(i=0; i<4; i++){
    tr += `<tr>`;
      for(j=0; j<4; j++){
            tr += `<td> ${arr[i]}</td>`;
      }  
      tr += `</tr>`;
}
document.getElementById("table").innerHTML = tr;
