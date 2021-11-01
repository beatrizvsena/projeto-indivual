function cadastrese() {

    window.location.href = 'cadastro.html';

}


function cad() {

    window.location.href = 'cadastro.html'


}

var uuar = '&';
var sen = '&';
var e = '&';
var usu_geral = 'trizsena';
var sen_geral = 'livro1234';
var csen = '&';

function cadas() {

    var no = nome.value;
    var u = usuario.value;
    var s = senha.value;
    var e = email.value;
    var csen = senhaconfir.value;

    if (no <= 0) {
        alert("Insira seu nome")
    }

    if (u.length < 5) {
        alert('Seu usuário precisa ter no mínimo 5 caracteres!');
    }

    if (s.length < 8) {
        alert('Sua senha precisa ter no mínimo 8 caracteres!');
    }

    if (csen != s) {
        alert('As senhas não coincidem');
    }

    if (e.indexOf('@') == -1 || e.length < 8 || e.indexOf('.') == -1) {
        alert('Email Inválido!');
    }


    if (u.length >= 5) {
        if (s.length >= 8) {
            if (csen == s) {
                if (e.indexOf('@') != -1 && e.length >= 8 && e.indexOf('.') != -1) {
                    alert('Cadastrado com sucesso! Faça o login para continuar');
                    window.location.href = 'login.html';
                }
            }
        }
    }


}

function login() {
    var us = usuar.value;
    var sen = senhalog.value;


    if (usuar.value == us && senhalog.value == sen) {
        alert(`Bem Vindo ${us}! Logado com sucesso! Você será redirecionado para sua dashboard.`);
        window.location.href = 'index.html';

    } 
    
    else {
        if (usu_geral == us && sen_geral == sen) {
            alert(`Bem Vindo ${usu_geral}! Logado com sucesso! Você será redirecionado para sua dashboard.`);
            window.location.href = 'index.html';
        } 
        
        else {
            alert('Usuário ou Senha Incorretos!');
        }
    }



}
