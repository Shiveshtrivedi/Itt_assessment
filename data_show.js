const val=JSON.parse(localStorage.getItem('object'))
console.log(val)
const formData = val[0];
console.log("Name:", formData.name);
console.log("Email:", formData.email);
console.log("Mobile:", formData.mobile);
console.log("Gender:", formData.gender);
console.log("Password:", formData.password);
console.log("Bio:", formData.bio);
console.log("Role:", formData.dropdown);
const formDataContainer=document.getElementById('datashow_form-data');
formDataContainer.innerHTML='';
Object.keys(formData).forEach((key) => {
    const div = document.createElement('div');
    div.innerHTML = `
       <h2 class="field-name">${key}</h2>
        <p class="field-value">${formData[key]}</p>
    `;
    formDataContainer.appendChild(div);
});