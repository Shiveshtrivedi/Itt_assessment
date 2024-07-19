const sumbitButton=document.querySelector('form');
sumbitButton.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector("#input_height").value);
    const weight=parseInt(document.querySelector('#input_weight').value);
    console.log(height);
    console.log(weight);
    const result=((weight)/height**2)*100*100;
    // console.log(result);
    document.getElementById('result').textContent= `Your BMI is ${result.toFixed(2)}`;
})
console.log(height)