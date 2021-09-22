// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  alert ('Ao clicar em " Ok ", Você dara continuidade a sua compra !! ') ;
  
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Function {
//   alert ('Dá uma moral ai professor !! ') ;
// }
