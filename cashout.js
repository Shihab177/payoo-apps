 document.getElementById('cash-out-btn').addEventListener('click',function(event){
     event.preventDefault();

    
     const agentNumber = document.getElementById('agent-number').value;
     const cashOutPin = document.getElementById('cashOut-pin').value;
     const convertCashOutPin=parseInt(cashOutPin)
     const amount = document.getElementById('withdraw-amount').value;
     const convertAmount =parseFloat(amount)
     const mainBalance= document.getElementById('main-balance').innerText;
     const convertMainBalance = parseFloat(mainBalance)
 
     if (agentNumber.length ===11){
      if (convertCashOutPin=== 1234){
        if (convertAmount){
         const sum =convertMainBalance - convertAmount;
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

