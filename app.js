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
}
else{
    alert("Invalid Amount Try Agein");
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
    console.log(updateshow3);
}
else{
    alert("Invalid Input Try Again");
}
});
