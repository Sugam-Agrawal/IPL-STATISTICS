const lurl = "https://indipl2020.herokuapp.com/ipl2020/team/";
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {packages: ['corechart']});

const toke=localStorage.getItem('Authorization');
console.log(toke);
const token="Bearer "+toke;
console.log(token);
async function getdata()
{
    const url=`${lurl}all`;
    const response=await fetch(url,{headers:{"Authorization": token}});
    const data= await response.json();
    console.log(data);
    op=document.querySelector("#b");
    op=document.querySelector("#b");
    let str=`<table id="tabledata" class='table bg-light text-dark mt-2 table-striped'>
    <tr><th>Label</th><th>Team</th><th>City</th><th>Coach</th><th>Home</th><tr>`;
    for(let i=0;i<data.length;i++) 
    {
        console.log(data[i]['city']);
        str+=`<tr><th>${data[i]['label']}</th><th>${data[i]['team']}</th><th>${data[i]['city']}</th><th>${data[i]['coach']}</th><th>${data[i]['home']}</th></tr>`
    }
    str+=`</table>`;
    op.innerHTML=str;    
    google.charts.setOnLoadCallback(drawChart);      
}
getdata();
async function drawChart() 
{   
    const url=`${lurl}totalamount`;
    const response=await fetch(url,{headers:{"Authorization": token}});
    const data1= await response.json();
    let arr=[['Team Name','Amount']];
    
    for(let i=0;i<data1.length;i++)
        arr.push([data1[i]['teamName'],data1[i]['amount']]);

    console.log(arr);
    //Make Chart
    var dat = google.visualization.arrayToDataTable(arr);
    var options = {title: 'Expenditure of IPL Teams','width':550, 'height':265};
    var chart = new google.visualization.ColumnChart(document.getElementById('CC'));
    chart.draw(dat, options);
    // Next Step 
    google.visualization.events.addListener(chart, 'select', selectHandler);

    function selectHandler(e) 
    {
        console.log(chart.getSelection());
        let n=chart.getSelection()[0]['row'];
        let x=arr[n+1][0];
        show_chart(x);
    }
 }
 let role= new Map();
 async  function show_chart(value)
 {
    const url = `https://indipl2020.herokuapp.com/ipl2020/team/${value}`; 
    const response=await fetch(url,{headers:{"Authorization": token}});
    const data= await response.json();
    google.charts.setOnLoadCallback(make_chart(data));
    
 }
 let arr=[];
 function logMapElements(value, key, map) 
 {
    console.log(`map.get('${key}') = ${value}`);
    arr.push([key,value]);
 }
    function make_chart(data)
 {
    console.log(data); 
    data.forEach(p => {
        if(role.get(p.role))
            role.set(p.role,role.get(p.role)+1);
        else
            role.set(p.role,1);
        console.log(p.role+" "+role.get(p.role));
    });
    role.forEach(logMapElements);
    console.log("aaa");
    arr=[['Task', 'Hours per Day']];
    role.forEach(logMapElements)    
    console.log(arr);
    var data1 = google.visualization.arrayToDataTable(
        arr
  );
  var options = {'width':550, 'height':400};
  var chart = new google.visualization.PieChart(document.getElementById('ooo'));
    chart.draw(data1, options); 
 }