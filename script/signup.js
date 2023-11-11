const btnSignUp = document.querySelector(`.btn-signup`);

btnSignUp.addEventListener(`click`, function(){
  Swal.fire({
    icon: "success",
    title: "Sign Up Successful",
    text: "Thank You For Sign Up :)",
    confirmButtonColor: '#40B93C'
  });
});