// Código para buscar informações do CEP
const estado = document.querySelector('#inputEstado');
const bairro = document.querySelector('#inputBairro');
const cidade = document.querySelector('#inputCity');
const endereço = document.querySelector('#inputAddress');
const formCEP = document.querySelector('.formCep');

formCEP.addEventListener('input', infoCep);
function infoCep() {
    const cep = document.querySelector('#inputCEP').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
    ajax.send();
    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        estado.value = obj.uf;
        cidade.value = obj.localidade;
        bairro.value = obj.bairro;
        endereço.value = `${obj.logradouro}, ${obj.complemento}`;
        if(estado.value == 'undefined' || cidade.value == 'undefined' || bairro.value == 'undefined' || endereço.value == 'undefined'){
            estado.value = 'CEP inválido! Digite novamente.';
            cidade.value = 'CEP inválido! Digite novamente.';
            bairro.value = 'CEP inválido! Digite novamente.';
            endereço.value = 'CEP inválido! Digite novamente.';
        }
    }
}

estado.addEventListener('keypress', function(event){
    if (!checkChar(event)){
        event.preventDefault();
    }
})
