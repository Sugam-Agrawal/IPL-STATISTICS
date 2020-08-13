const lurl = "https://indipl2020.herokuapp.com/ipl2020/team/"; 
let role= new Map();
google.charts.load('current', {'packages':['corechart']});
const toke=localStorage.getItem('Authorization');
console.log(toke);
const token="Bearer "+toke; 
getdata();

async function getdata()
{
    const url=`${lurl}labels`;
    const response=await fetch(url,{headers:{"Authorization": token}});
    const data= await response.json();
    console.log(data);
    labels=data["labels"];
    let str="";
    op=document.querySelector("#select1");
    
    for(let i=0;i<8;i++) 
    {
        console.log(labels[i]);
        var opt = document.createElement('option');
        opt.value = labels[i];
        opt.innerHTML = labels[i];
        op.appendChild(opt);
     }
    console.log(str);    
}

function startwork()
{
    let op=document.querySelector("#select1");
    let value=op.value;
    console.log("start");
    console.log(value);
    if(value!=="")
        findteam(value);
}
async function findteam(value)
{    
    const url = `https://indipl2020.herokuapp.com/ipl2020/team/${value}`; 
    const response=await fetch(url,{headers:{"Authorization": token}});
    const data= await response.json();
    console.log(data);
    showtable(data); 
}
// var row=tableData.insertRow(-1);
// let d1=row.insertCell(0);// let d2=row.insertCell(1);// let d3=row.insertCell(2);// let d4=row.insertCell(3);
// d1.innerHTML=p.name;// d2.innerHTML=p.name;// d3.innerHTML=p.name;// d4.innerHTML=p.name;
function showtable(data)
{    
    let tableData = document.querySelector("#b");
    let str=`<table id="tabledata" class='table bg-light text-dark mt-2 table-striped'>
    <tr><th>Name</th><th>Label</th><th>Role</th><th>Price</th><tr>`;
    role.clear();
    data.forEach(p => {
        str += `<tr><td>${p.name}</td><td>${p.label}</td><td>${p.role}</td><td>${p.price}</td></tr>`;
        if(role.get(p.role))
            role.set(p.role,role.get(p.role)+1);
        else
            role.set(p.role,1);
        console.log(p.role+" "+role.get(p.role));
    });
    str+=`</table>`;    
    tableData.innerHTML=str;
    google.charts.setOnLoadCallback(make_chart);
}
//make_chart();
//console.log(str);
//tableData.append(str);
let arr=[];
function logMapElements(value, key, map) 
{
    console.log(`map.get('${key}') = ${value}`);
    arr.push([key,value]);
}

function make_chart()
{
    
    role.forEach(logMapElements);
    console.log("aaa");
    arr=[['Task', 'Hours per Day']];
    role.forEach(logMapElements)    
    console.log(arr);
    var data1 = google.visualization.arrayToDataTable(
        arr
  );
  var options = {'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data1, options);
}  
// let response = function(url){
//     return fetch(url, {
//         headers: {
//             "Authorization": token
//         }
//     });
// }
// const url = "https://indipl2020.herokuapp.com/ipl2020/team/all/"; 
// getTeamLabels = function(){
//     const lurl=`${url}labels`;
//     response(lurl).then(res=>res.json()).then(data=>{
//         labels=data["labels"];
//         selectid=document.querySelector("#select");
//         let str="<select id='idLabel'>";
//         labels.array.forEach(element => {
//             str+=`<option>${element}</option>`
//         });    
//         console.log("str"); 
//    }).catch(error=>{console.error();
//    })
//  }
// console.log(getTeamLabels);
/* <div class="py-2 bg-danger text-white">
        <h1 class="display-5 text-center">Java Script IPL Stat Application</h1>
        <p class="lead text-center">
        IPL Team Stat Information</p>
    </div> */