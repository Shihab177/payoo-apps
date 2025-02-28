document.getElementById('addMoney-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin-input').value;
    const convertPin=parseInt(pin)
    const amount = document.getElementById('add-amount').value;
    const convertAmount =parseFloat(amount)
    const mainBalance= document.getElementById('main-balance').innerText;
    const convertMainBalance = parseFloat(mainBalance)
    const selectBank = document.getElementById('select-bank').value;
    console.log(selectBank)
     if(convertAmount < 0){
      alert('invalid amounts');
      return
     }
    if (accountNumber.length ===11 && selectBank){
     if (convertPin=== 1234){
       if (convertAmount){
        const sum =convertMainBalance + convertAmount;
        document.getElementById('main-balance').innerText=sum;
        const commentDiv = document.getElementById('comment-div');
        const div = document.createElement('div');
        div.classList.add('border','border-red-500','mb-2', 'rounded-[15px]' ,'py-3','px-2')
        div.innerHTML= `
        <h3>from ${selectBank}</h3>
        <h1 class="text-[16px] font-bold">Add Money</h1>
        <p class="text-[16px] font-bold">${convertAmount}</p>
        <p class="text-[16px] font-bold">account number: ${accountNumber}</p>
        `
        commentDiv.appendChild(div)
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