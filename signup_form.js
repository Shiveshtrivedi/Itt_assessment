const submitButton=document.querySelector('form')
// console.log(submitButton)
let formdata=[];
submitButton.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e)
    const name=document.querySelector('#name').value;
    // console.log(name);
    const email=document.querySelector('#email').value;
    // console.log(email);
    const mobile=document.querySelector('#mobile').value;
    // console.log(mobile);
    const radio=document.querySelectorAll('input[name="gender"]')
    // console.log(radio);
   let genderValue=0;
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked)
        {
             genderValue=radio[i].value;
        }
    }
    const password=document.querySelector('#password').value;
    // console.log(password);
    const bio=document.querySelector('#bio').value;
    // console.log(bio);
    const dropdown=document.querySelector('#role');
    // console.log(dropdown)
    const dropdownOption=dropdown.options[dropdown.selectedIndex].value;
    console.log(dropdownOption)
    formdata.push({
        name:name,email:email,mobile:mobile,gender:genderValue,password:password,bio:bio,dropdown:dropdown
    })
    console.log("form data is ",formdata)
    alert('click ok to show')
    localStorage.setItem('object',JSON.stringify(formdata))
    window.location.href='data_show.html'
    formdata.reset();
}
)
