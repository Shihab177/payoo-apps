document.getElementById('addMoney-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin-input').value;
    const convertPin=parseInt(pin)
    const amount = document.getElementById('add-amount').value;
    const convertAmount =parseFloat(amount)
    const mainBalance= document.getElementById('main-balance').innerText;
    const convertMainBalance = parseFloat(mainBalance)

    if (accountNumber.length ===11){
     if (convertPin=== 1234){
       if (convertAmount){
        const sum =convertMainBalance + convertAmount;
        document.getElementById('main-balance').innerText=sum;
       }
     }
     else{
        alert('invalid pin')
     }
    }
    else{
        alert('invalid number')
    }

})