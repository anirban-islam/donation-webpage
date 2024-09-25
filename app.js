// for card 1//
const donatebtn1=document.getElementById("donate1");
donatebtn1.addEventListener('click',function(event){
event.preventDefault();
const accbal=document.getElementById("account-bal");
const accountamount=parseFloat(accbal.innerText);
const donatebal=document.getElementById("input1").value;
const donateamount=parseFloat(donatebal);
const showbal=document.getElementById("showbal");
const showamount=parseFloat(showbal.innerText);
// validate data//
if(donatebal>0){
    const updatebalance=donateamount+showamount;
    const updatemainbal=accountamount-donatebal;
    showbal.innerHTML=updatebalance;
    accbal.innerHTML=updatemainbal;

    const mainDiv=document.getElementById('history');
    const newDiv=document.createElement('myDiv');
  
    const date = new Date();
    newDiv.classList.add('datahis');
    const head=document.createElement('h2');
    const pera=document.createElement('p');
    pera.innerHTML=date;
    mainDiv.appendChild(newDiv);
    
    head.innerHTML=(`${donatebal} Taka is Donate for famine-2024 at Noakhali , Bangladesh `);
    newDiv.appendChild(head);
    newDiv.appendChild(pera);

    const popmsg = document.getElementById('poop');
    popmsg.classList.remove('popup-none');

}
else{
    alert("Invalid Amount Try Again");
}
});

// card-2//
const donbtn2=document.getElementById('don2');
donbtn2.addEventListener('click', function(e){
e.preventDefault();
const dona1=document.getElementById('dona2');
const dona1n=parseFloat(dona1.value);
const accbal2=document.getElementById("account-bal");
const mainbal2n=parseFloat(accbal2.innerText);
const sbalance=document.getElementById('showbal2');
const sbal2n=parseFloat(sbalance.innerText);

if(dona1n>0){
    const update2=mainbal2n-dona1n;
    accbal2.innerHTML=update2;
    const ushowb=dona1n+sbal2n;
    sbalance.innerHTML=ushowb;

    const mainDiv=document.getElementById('history');
    const newDiv=document.createElement('myDiv');
  
    const date = new Date();
    newDiv.classList.add('datahis');
    const head=document.createElement('h2');
    const pera=document.createElement('p');
    pera.innerHTML=date;
    mainDiv.appendChild(newDiv);
    
    head.innerHTML=(`${dona1n} Taka is Donate for Flood Relief at Feni Bangladesh `);
    newDiv.appendChild(head);
    newDiv.appendChild(pera);

    const popmsg = document.getElementById('poop');
    popmsg.classList.remove('popup-none');
}
else{
    alert("Invalid Input Try Again");
}
});
// Card -3//
const don3=document.getElementById('don3');
don3.addEventListener('click', function(a){
a.preventDefault();
const dona3=document.getElementById('dona3');
const adona3=parseFloat(dona3.value);
const accbal3=document.getElementById("account-bal");
const mainbal3n=parseFloat(accbal3.innerText);
const sbal3=document.getElementById('showbal3');
const nsbal3=parseFloat(sbal3.innerText);

if(adona3>0){
    const updatemain3=mainbal3n-adona3;
    const updateshow3=nsbal3+adona3;
    accbal3.innerHTML=updatemain3;
    sbal3.innerHTML=updateshow3;

    const mainDiv=document.getElementById('history');
    const newDiv=document.createElement('myDiv');
  
    const date = new Date();
    newDiv.classList.add('datahis');
    const head=document.createElement('h2');
    const pera=document.createElement('p');
    pera.innerHTML=date;
    mainDiv.appendChild(newDiv);
    
    head.innerHTML=(`${adona3} Taka is Donate for for Injured in the Quota Movement  Bangladesh `);
    newDiv.appendChild(head);
    newDiv.appendChild(pera);

    const popmsg = document.getElementById('poop');
    popmsg.classList.remove('popup-none');
}
else{
    alert("Invalid Input Try Again");
}
});

const conformation=document.getElementById('poop-btn');
conformation.addEventListener('click',function(){
const popupmassage=document.getElementById('poop');
popupmassage.classList.add('popup-none');


});
