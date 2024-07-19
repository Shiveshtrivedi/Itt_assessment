let random=Math.floor(Math.random()*100)
console.log(random)
let submitButton=document.querySelector('#btn');
// console.log(submitButton)
let chances=10;
function getRandom()
{
    let userInput=document.querySelector('#number').value;
    if(userInput==random)
    {
         document.querySelector('#output').textContent='You guess correct'
    }
    else
    {
        if(chances>0)
        {
             document.querySelector('#output').textContent=`Try again ,chances left ${chances}`;
        }
        else
        {
            document.querySelector('#output').textContent='Game over'
        }
    }

    chances--;
}
submitButton.addEventListener('click',getRandom);
