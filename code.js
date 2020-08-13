function multiply()
{    
    inputtable=document.querySelector("#tab1");
    let num = Number.parseInt(inputtable.value);
    if(Number.isNaN(num))
    {
        alert("Enter a value");
        let str="";
        domulti.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'>${num}*${1} = ${num}<br>`;
    for(let i=2;i<=10;i++)
    {
        str+=`<div class='text-secondary'>${num}*${i} = ${num*i}<br>`;
    }
    domulti.innerHTML=str;
 }
function add()
{    
    i1=document.querySelector("#num1");
    i2=document.querySelector("#num2");
    let num1 = Number.parseInt(i1.value);
    let num2 = Number.parseInt(i2.value);
    if(Number.isNaN(num1) || Number.isNaN(num2))
    {
        alert("Enter proper value");
        let str="";
        res.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'>${num1}+${num2} = ${num1+num2}<br>`;
    res.innerHTML=str;
}
function sub()
{    
    i1=document.querySelector("#num1");
    i2=document.querySelector("#num2");
    let num1 = Number.parseInt(i1.value);
    let num2 = Number.parseInt(i2.value);
    if(Number.isNaN(num1) || Number.isNaN(num2))
    {
        alert("Enter proper value");
        let str="";
        res.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'>${num1}-${num2} = ${num1-num2}<br>`;
    res.innerHTML=str;
}
function mul()
{    
    i1=document.querySelector("#num1");
    i2=document.querySelector("#num2");
    let num1 = Number.parseInt(i1.value);
    let num2 = Number.parseInt(i2.value);
    if(Number.isNaN(num1) || Number.isNaN(num2))
    {
        alert("Enter proper value");
        let str="";
        res.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'>${num1}*${num2} = ${num1*num2}<br>`;
    res.innerHTML=str;
}
function div()
{    
    i1=document.querySelector("#num1");
    i2=document.querySelector("#num2");
    let num1 = Number.parseInt(i1.value);
    let num2 = Number.parseInt(i2.value);
    if(Number.isNaN(num1) || Number.isNaN(num2))
    {
        alert("Enter proper value");
        let str="";
        res.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'>${num1}/${num2} = ${num1/num2}<br>`;
    res.innerHTML=str;
}
function mod()
{    
    i1=document.querySelector("#num1");
    i2=document.querySelector("#num2");
    let num1 = Number.parseInt(i1.value);
    let num2 = Number.parseInt(i2.value);
    if(Number.isNaN(num1) || Number.isNaN(num2))
    {
        alert("Enter proper value");
        let str="";
        res.innerHTML=str;
        return;
    }
    let str=`<div class='text-secondary'> ${num1}%${num2} = ${num1}%${num2}`; 
    res.innerHTML=str;
}
function reverse()
{    
    inputtable=document.querySelector("#op1");
    let num = Number.parseInt(inputtable.value);
    if(Number.isNaN(num))
    {
        alert("Enter a value");
        let str="";
        extra.innerHTML=str;
        return;
    }
    let rev = 0;
    let x=num;
    while (num != 0) 
    {
        rev = rev * 10 + (num % 10);
        num = Number.parseInt(num / 10);
    }
    let str=`<div class='text-secondary'> Reverse of ${x} is : ${rev}`;
    extra.innerHTML=str;
 }
 function single()
{    
    inputtable=document.querySelector("#op1");
    let num = Number.parseInt(inputtable.value);
    if(Number.isNaN(num))
    {
        alert("Enter a value");
        let str="";
        extra.innerHTML=str;
        return;
    }
    let x=0;
    let y=num;
    while(num!=0)
    {
        x=x+num%10;
        x=x%10+Number.parseInt(x/10);
        x=x%10+Number.parseInt(x/10);
        num = Number.parseInt(num / 10);
    }
    let str=`<div class='text-secondary'> Single Digit Sum of ${y} is : ${x}`;
    extra.innerHTML=str;
 }
 function arm()
{    
    inputtable=document.querySelector("#op1");
    let num = Number.parseInt(inputtable.value);
    if(Number.isNaN(num))
    {
        alert("Enter a value");
        let str="";
        extra.innerHTML=str;
        return;
    }
    let flag,remainder,addition = 0;
        flag = num;
		while(num != 0)
		{
			remainder = num % 10;
			addition = addition + remainder * remainder * remainder;
			num = Number.parseInt(num/10);
        }
        let str="";
		if(addition === flag)
           str=`<div class='text-danger'>${flag} is not an armstrong Number`;
        else
        str=`<div class='text-secondary'>${flag} is  an armstrong Number`;
        extra.innerHTML=str;
 }


 function primes(n)
    {
        for(let i=2;i*i<=n;i++)
        {
            if(n%i==0)
                return false;
        }
        return true;
    }
 function prime()
{    
    inputtable=document.querySelector("#op1");
    let num = Number.parseInt(inputtable.value);
    if(Number.isNaN(num))
    {
        alert("Enter a value");
        let str="";
        extra.innerHTML=str;
        return;
    }    
    str=`<div class='text-secondary'>prime factors of ${num} are:-<br>`;
    let flag=false;
    for(let i=2;i<=num;i++)
    {
        if(num%i==0 && primes(i))
        {
            flag=true;
            str+=`<div class='text-secondary'>${i} is a prime factor of ${num}<br>`;
        }   
    }
    if(!flag)
        str+=`${num} is a prime factor of ${num}`;
    extra.innerHTML=str;
 }

// <div class="col-5 ml-3">
//           <label>Calculator</label>
//           <div class="mt-2">
//             <input type="number" id="num1" placeholder="Enter a number" class="form-control">
//           </div>
//           <div class="mt-2">
//             <input type="number" id="num2" placeholder="Enter a number" class="form-control">
//           </div>
//             <div class="row">
              
//               <!-- addition -->
//               <div class="col">
//                 <div class="mt-2">
//                     <!-- <button id="+" class="btn btn-sm btn-primary" onclick="multiply()">+</button> -->
//                 </div>
//               </div>

//               <!-- subtraction -->
//               <div class="col">
//                 <div class="mt-2">
//                     <!-- <button id="-" class="btn btn-sm btn-primary" onclick="multiply()">-</button> -->
//                 </div>
//               </div>
              
//               <!-- multiply -->
//               <div class="col">
//                 <div class="mt-2">
//                     <!-- <button id="*" class="btn btn-sm btn-primary" onclick="multiply()">*</button> -->
//                 </div>
//               </div>
              
//               <!-- divide -->
//               <div class="col">
//                 <div class="mt-2">
//                     <!-- <button id="/" class="btn btn-sm btn-primary" onclick="multiply()">/</button> -->
//                 </div>
//               </div>
//             </div>

//             <!-- output -->
//           <div class="mt-5" id="domulti"> </div>
        
//         </div>


//       </div>