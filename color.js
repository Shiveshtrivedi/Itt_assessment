const button=document.querySelectorAll('.btn')
// console.log(button)
let div = document.querySelector('#container');
// console.log(div)
button.forEach(function(parms){
    console.log(parms)
    parms.addEventListener('click',function(event){
            console.log(event)
            console.log(event.target)
            if(event.target.id=='red')
            {
                div.style.backgroundColor=event.target.id;
            }
            if(event.target.id=='green')
            {
                div.style.backgroundColor=event.target.id;
            }
            if(event.target.id=='blue')
            {
                div.style.backgroundColor=event.target.id;
            }
            if(event.target.id=='yellow')
            {
                div.style.backgroundColor=event.target.id;
            }
    })
})
