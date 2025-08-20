let fullname = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let button = document.querySelector('button')
let success = document.querySelector('.success')
const form = document.querySelector('form');


form.addEventListener('submit',(e)=>{
  e.preventDefault();
})


fullname.addEventListener('input',()=>{
  if (fullname.value.length < 3) {
    fullname.classList.add('errorBorder')
    fullname.classList.remove('successBorder')
      
    

  }else{
    fullname.classList.remove('errorBorder')
    fullname.classList.add('successBorder')
    
    

    

  }
})

email.addEventListener('input',()=>{
  const pattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (pattern.test(email.value) == false) {
    email.classList.add('errorBorder')
    email.classList.remove('successBorder')
      
    


  }else{
    email.classList.remove('errorBorder')
    email.classList.add('successBorder')
   
     

    

  }
})

password.addEventListener('input',()=>{
  if (password.value.length < 8 ) {
    password.classList.add('errorBorder')
    password.classList.remove('successBorder')
     
    


  }
   
  if ( confirmpassword.value.length >= 8 && password.value !== confirmpassword.value) {
           confirmpassword.classList.add('errorBorder')
           confirmpassword.classList.remove('successBorder')

     }
  if (confirmpassword.value.length >= 8 && password.value == confirmpassword.value) {
          confirmpassword.classList.remove('errorBorder')
          confirmpassword.classList.add('successBorder')
  }

  if (password.value.length >= 8) {
         password.classList.remove('errorBorder')
         password.classList.add('successBorder')
     }

    

  
})

confirmpassword.addEventListener('input',()=>{
  if (confirmpassword.value !== password.value) {
    confirmpassword.classList.add('errorBorder')
    confirmpassword.classList.remove('successBorder')
     
    


  }else{
    confirmpassword.classList.remove('errorBorder')
    confirmpassword.classList.add('successBorder')
   
    




  }
})




// .............................................................

let nameerror = document.querySelector('.nameerror')
let emailerror = document.querySelector('.emailerror')
let passworderror = document.querySelector('.passworderror')
let confirmpassworderror = document.querySelector('.confirmpassworderror')
nameerror.value='qwdwdwd'



button.addEventListener('click',()=>{
nameerror.textContent ='';
emailerror.textContent ='';
passworderror.textContent ='';
confirmpassworderror.textContent ='';
let  isValid =true

  if (fullname.classList.contains('errorBorder')) {
     nameerror.textContent='your name should have 3 or more characters.'
     isValid = false
      
  }
    if (email.classList.contains('errorBorder')) {
     emailerror.textContent='email address is not valid.'
     isValid = false
      
  }  
  if (password.classList.contains('errorBorder') ) {
     passworderror.textContent='your password should have 8 or more characters.'
     isValid = false
     
      
  }  
  if (confirmpassword.classList.contains('errorBorder')) {
     confirmpassworderror.textContent='passwords do not match.'
     isValid = false
      
  }
  if (isValid == true) {
    success.style.display='block'
  }else{
    success.style.display='none'

  }
  
  
   
  
})

// eyeicon

let eyeicon = document.querySelector('.icon-eye');
let openeye = document.querySelector('.fa-eye');
let closeeye = document.querySelector('.fa-eye-slash');

eyeicon.addEventListener('click',()=>{
  openeye.classList.toggle('hidden')
  closeeye.classList.toggle('hidden')
  if (password.type == 'password') {
      password.type ='text'
  }
  else{
     password.type = 'password'

  }

})




