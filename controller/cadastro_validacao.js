// Impedir que números sejam digitados nos campos de nome e sobrenome
const inputNome = document.querySelector('#inputNome');
inputNome.addEventListener('keypress', function (event) {
    let keyCode = (event.keyCode ? event.keyCode : event.wich);
    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
});
const inputSobrenome = document.querySelector('#inputSobrenome');
inputSobrenome.addEventListener('keypress', function (event) {
    let keyCode = (event.keyCode ? event.keyCode : event.wich);
    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
});

// Código para a validação do formulário

const inputEmail = document.getElementById('inputEmail4');
const inputSenha = document.getElementById('inputPassword4');
const modalFull = document.querySelector('.modalFull');

$(document).ready(function () {
    $('#inputCEP').mask('00000-000')
    $('#phone').mask('(00) 00000-0000')
    $('#phone').blur(function (event) {
        if ($(this).val().length == 15) {
            $('#phone').mask('(00) 00000-0000');
        } else {
            $('#phone').mask('(00) 0000-00000');
        }
    })
    $('#RG').mask('999.999.999-W', {
        translation: {
            'W': {
                pattern: /[xX0-9]/
            }
        },
        reverse: true,
    }),
        $('.formRegistro').validate({
            rules: {
                nome: {
                    required: true,
                    maxlength: 100,
                    minlength: 3,

                },
                sobrenome: {
                    required: true,
                    maxlength: 100,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true,
                },
                senha: {
                    required: true,
                    minlength: 8,
                },
                confirmarSenha: {
                    required: true,
                    equalTo: '#inputPassword4',
                }
            },
            submitHandler: function (form) {
                localStorage.nome = inputNome.value;
                localStorage.email = inputEmail.value;
                localStorage.senha = inputSenha.value;
                modalFull.remove();
                Swal.fire({
                    title: "Dados cadastrados!",
                    text: 'Faça seu login e aproveite!',
                    icon: "success",
                    button: false,
                });
                setTimeout(function () { window.location = 'login.html' }, 4100);
            }
        })
})