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
    const updatemainbal=accountamount-showamount;
    showbal.innerHTML=updatebalance;
    accbal.innerHTML=updatemainbal;

   console.log(updatebalance);

}
else{
    alert("Invalid Amount Try Agein");
}





});