const submitButton = document.querySelector("button[type='submit']");
let formdata = JSON.parse(localStorage.getItem("object")) || [];
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const radio = document.querySelectorAll('input[name="gender"]');
  let genderValue = null;

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      genderValue = radio[i].value;
      break;
    }
  }

  const password = document.querySelector("#password").value;

  const bio = document.querySelector("#bio").value;

  const role = document.querySelector("#role").value;
  const userId = formdata.length + 1; 
   if(name==='' || mobile==='' || bio==='' || password==='' || genderValue===null)
   {
       alert("all fields are required")
   }
   else{
    // console.log(genderValue)
    formdata.push({
      id:userId,
      name,
      email,
      mobile,
     genderValue,
     password,
      bio,
      role,
    });
    console.log("form data is ", formdata);
    alert("click ok to show");
    localStorage.setItem("object", JSON.stringify(formdata));
    window.location.href = `data_show.html?id=${userId}`;
    // e.target.reset();
   }
  
});
document.getElementById('hamburger').addEventListener('click', function() {
  const navbar = document.querySelector('.navbar_container');
  navbar.classList.toggle('active'); 
});