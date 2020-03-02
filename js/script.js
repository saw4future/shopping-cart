//increment operation for mobile phone
const plusBtn = document.getElementById("plusIcon");
plusBtn.addEventListener("click", function(){
    const increment = document.getElementById("phoneQuantity").value; 
    const incrementNumber = parseFloat(increment); 

    const finalNumber = incrementNumber + 1; 
    document.getElementById("phoneQuantity").value = finalNumber; 

    const finalPhonePrice = finalNumber * 1219; 
    document.getElementById("phonePrice").innerText = finalPhonePrice; 

    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal); 
    document.getElementById("subTotal").innerText = finalPhonePrice + subTotalNumber; 
})


//Decrement operation for mobile phone
const minusBtn = document.getElementById("minusIcon"); 
minusBtn.addEventListener("click", function(){
    const minusValue = document.getElementById("phoneQuantity").value; 
    const minusValueNumber = parseFloat(minusValue); 
    if(minusValueNumber == 1){
        document.getElementById("phoneQuantity").value = minusValueNumber; 
    }
    else{
        const minusValueFinalNumber = minusValueNumber - 1; 
        document.getElementById("phoneQuantity").value = minusValueFinalNumber;
        const price = document.getElementById("phonePrice").innerText - 1219; 
        const priceNumber = parseFloat(price); 
        document.getElementById("phonePrice").innerText = priceNumber; 

        const subTotal = document.getElementById("subTotal").innerText;
        const subTotalNumber = parseFloat(subTotal); 
        document.getElementById("subTotal").innerText = -1 * priceNumber + subTotalNumber; 
    }    
})

//increment operation for protector
const plusBtn2 = document.getElementById("plusIcon2");
plusBtn2.addEventListener("click", function(){
    const increment2 = document.getElementById("protector").value; 
    const incrementNumber2 = parseFloat(increment2); 

    const finalNumber2 = incrementNumber2 + 1; 
    document.getElementById("protector").value = finalNumber2; 

    const finalPhonePrice2 = finalNumber2 * 59; 
    document.getElementById("protectorPrice").innerText = finalPhonePrice2;  

    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal); 
    document.getElementById("subTotal").innerText = finalPhonePrice2 + subTotalNumber; 
})


//Decrement operation for protector
const minusBtn2 = document.getElementById("minusIcon2"); 
minusBtn2.addEventListener("click", function(){
    const minusValue2 = document.getElementById("protector").value; 
    const minusValueNumber2 = parseFloat(minusValue2); 
    if(minusValueNumber2 == 1){
        document.getElementById("protector").value = minusValueNumber2; 
    }
    else{
        const minusValueFinalNumber2 = minusValueNumber2 - 1; 
        document.getElementById("protector").value = minusValueFinalNumber2;
        const price2 = document.getElementById("protectorPrice").innerText - 59; 
        const priceNumber2 = parseFloat(price2); 
        document.getElementById("protectorPrice").innerText = priceNumber2; 

        const subTotal = document.getElementById("subTotal").innerText;
        const subTotalNumber = parseFloat(subTotal); 
        document.getElementById("subTotal").innerText = -1 * priceNumber2 + subTotalNumber; 
    }    
})


const removeBtn = document.getElementById("removePhone");
removeBtn.addEventListener("click", function(){
    const phoneArea = document.getElementById("phoneArea");
    phoneArea.style.display = "none"; 
})

const removeBtn2 = document.getElementById("removeProtector");
removeBtn2.addEventListener("click", function(){
    const protectorArea = document.getElementById("protectorArea");
    protectorArea.style.display = "none"; 
})