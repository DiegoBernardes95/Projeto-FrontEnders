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
        btnHeader.innerHTML = `${localStorage.nome}`;
        setTimeout(function () { window.location = '../../index.html' }, 4100);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário ou senha inválidos! Tente novamente.',
          })
    }
})