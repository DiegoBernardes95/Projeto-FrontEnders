// Código para validação da página de recuperação de senha
const emailRecover = document.getElementById('emailRecover');
const btnRecover = document.getElementById('btnRecover');

$(document).ready(function(){
    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true,
            }
        },
        submitHandler: function(form){
            if(emailRecover.value == localStorage.email){
                Swal.fire({
                    text: 'Email de recuperação de senha enviado!',
                    icon: 'success',
                });
                setTimeout(function(){ window.location = 'login.html' }, 1400);
            } else{
                Swal.fire({
                    icon: 'error',
                    text: 'Email incorreto!',
                }) 
            }
        }
    })
})


