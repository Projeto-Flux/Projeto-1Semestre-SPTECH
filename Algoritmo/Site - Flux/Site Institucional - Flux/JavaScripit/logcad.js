var entradaNome = nome_form.value;
var entradaEmail = email_form.value;
var entradaSenha = senha_form.value;
var entradaCNPJ = cnpj_form.value;
var entradaNumero = num_form.value;
var entradaCEP = cep_form.value;
var confirmSenha = confirm_form.value;


function Cadastrar() {
    if (entradaNome === 'Shopping JK Iguatemi' && entradaCNPJ === '12345678901010' && entradaCEP === '12345123' && entradaNumero === '15' && entradaEmail === 'jkiguatemi@jkiguatemi.com' && entradaSenha === 'jkiguatemi@' && confirmSenha === entradaSenha) {
        window.open("Dashboard.html");
    } if (entradaNome === 'Tiete Plaza' && entradaCNPJ === '09876543211010' && entradaCEP === '45612340' && entradaEmail === 'tieteplaza@tieteplaza.com' && entradaSenha === 'tieteplaza@' && confirmSenha === entradaSenha) {
        window.open("Dashboard.html");
    } else alert(`Cadastro não efetuado, preencha corretamente os campos`);
}

function logar() {
    if (entradaEmail === 'jkiguatemi@jkiguatemi.com' && entradaSenha === 'jkiguatemi@') {
        window.open("Dashboard.html");

    } else if (entradaEmail === 'tieteplaza@tieteplaza.com' && entradaSenha === 'tieteplaza@') {
        window.open("Dashboard.html");

    } else if (entradaEmail === 'shoppingguaianazes@shoppingguaianazes.com' && entradaSenha === 'shoppingguaianazes@') {
        window.open("Dashboard.html");

    }
    else alert(`Usuário não encontrado`)
}