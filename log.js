const login = document.querySelector("#login");
let Token;
var dat='{ "password": "admin", "username": "admin@gmail.com"}';
async function TokenReq() 
{
        const response= await fetch('https://indipl2020.herokuapp.com/authenticate',{method: 'POST',headers: {'Content-Type': 'application/json'},body: dat});
        const data = await response.json();
        console.log(data);
        Token = data['token'];
        console.log(Token);
}
async function login1() 
{
    event.preventDefault();
    localStorage.setItem('Authorization',"");
    if("admin@gmail.com"==document.getElementById("email").value && "admin"==document.getElementById("password").value)   
    {
        console.log("ssss");
        localStorage.setItem('Authorization', Token);
        window.location.href = "homepage.html";
    }
   
    else
    {
        alert("Wrong username or Password"); 
    }
}
TokenReq();
//let kusers=localStorage.getItem('users');
   // console.log(kusers[0]);
    //let x=false;
        // users.forEach(p => {
        //     if(p.username==document.getElementById("email").value && p.password==document.getElementById("password").value)
        //         x=true;
        // });
        // if(!x)
        // return;
// let users=[];
// if(localStorage.getItem("users")==null)
// {
//     localStorage.setItem(`users`,JSON.stringify([]));    
//     addetails({"username":"admin","passowrd":"admin"});
// }
// async function addetails(user)
// {
//     let users=JSON.parse(localStorage.getItem("users"));
//     console.log(users);
//     users.push(user);           
//     localStorage.setItem("users",JSON.stringify(users));
// }