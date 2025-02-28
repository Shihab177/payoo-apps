document.getElementById('cash-out').style.display='none'
document.getElementById('history').style.display='none';

document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('cash-out').style.display='none'
    document.getElementById('add-money').style.display='block'
    document.getElementById('history').style.display='none';
     
})
document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('cash-out').style.display='block'
    document.getElementById('add-money').style.display='none'
    document.getElementById('history').style.display='none';
})
document.getElementById('Transactions-box').addEventListener('click',function(){
    document.getElementById('history').style.display='block';
    document.getElementById('add-money').style.display='none';
    document.getElementById('cash-out').style.display='none'
})