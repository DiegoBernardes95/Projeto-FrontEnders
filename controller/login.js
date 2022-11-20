// Código da página de login
const btnHeader = document.getElementById('btnHeader');
const emailLogin = document.getElementById('emailLogin');
const senhaLogin = document.getElementById('senhaLogin');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    if (emailLogin.value == localStorage.email && senhaLogin.value == localStorage.senha) {
        Swal.fire({
            title: "Login efetuado!",
            text: 'Você será redirecionado para a página inicial.',
            icon: "success",
            button: false,
        });
        setTimeout(function () { window.location = '../../index.html' }, 3100);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<p>Usuário ou senha inválidos! Tente novamente.<br>Se não possui uma conta, cadastre-se!</p>',
          })
    }
})