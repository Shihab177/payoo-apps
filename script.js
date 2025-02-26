document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('hello')
    const accountNumber= document.getElementById("account-number").value;
    const pin= document.getElementById("pin-input").value;
    const convertPin=parseInt(pin)

    if(accountNumber.length ===11){
        
        if (convertPin === 1234){
         window.location.href ='main.html'
        }else{
            alert ('invalid pin')
        }

    }
    else{
        alert ('invalid number')
    }
   

    
})