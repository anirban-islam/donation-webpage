const showhistory=document.getElementById('historybtn');
showhistory.addEventListener('click',function(){
    const showhistory1=document.getElementById('history');
    const hidedonate =document.getElementById('donatecard');
    const hidedonate1 =document.getElementById('donatecard1');
    const hidedonate2 =document.getElementById('donatecard2');
    const addcolor=document.getElementById('historybtn');
    showhistory1.classList.remove('hide');
    hidedonate.classList.add('hiddendonate');
    hidedonate1.classList.add('hiddendonate');
    hidedonate2.classList.add('hiddendonate');
    addcolor.classList.add('bgcolor');
    const donatebtnbg=document.getElementById('donatebtn');
    donatebtnbg.classList.add('removebg');
});
const showdonate=document.getElementById('donatebtn');
showdonate.addEventListener('click',function(){
    const hidehistory=document.getElementById('history');
    hidehistory.classList.add('hide');
    const addcolor=document.getElementById('donatebtn');
    addcolor.classList.remove('removebg');
    const removecolor=document.getElementById('historybtn');
    removecolor.classList.remove('bgcolor');
    const hidedonate3 =document.getElementById('donatecard');
    const hidedonate4 =document.getElementById('donatecard1');
    const hidedonate5 =document.getElementById('donatecard2');
    hidedonate3.classList.remove('hiddendonate');
    hidedonate4.classList.remove('hiddendonate');
    hidedonate5.classList.remove('hiddendonate');

});

