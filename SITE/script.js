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


    if (us == 0 || sen == 0) {
        alert("Insira os dados de login")
    }

    else {

        if (usuar.value == us && senhalog.value == sen) {
            alert(`Bem Vindo ${us}! Logado com sucesso! Você será redirecionado para sua dashboard.`);
            window.location.href = 'pagina.html';

        }

        else {
            if (usu_geral == us && sen_geral == sen) {
                alert(`Bem Vindo ${usu_geral}! Logado com sucesso! Você será redirecionado para sua página.`);
                window.location.href = 'pagina.html';
            }

            else {
                alert('Usuário ou Senha Incorretos!');
            }
        }
    }


}


function calcular() {

    var np = numdpags.value;
    var mt = mediatempo.value;


    if (nomelivro.value == 0 || np == 0 || mt == 0) {
        alert("Insira os dados para calcular")

    }

    else {

        msgresult.innerHTML = `Você lerá o livro ${nomelivro.value} em aproximadamente XX dias se lendo YY páginas por dia `

    }

}

function sorteio() {

    var sort = Math.random() * 1 + 1;


    if (genero.value == '') {
        alert("Escolha um gênero para sortear")
    }

    else {

        if (genero.value == 'fantasia' && sort.toFixed() == 1) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Six-crows-mentiras-Leigh-Bardugo/dp/8582353820'>Six Of Crows </a>`;

        }

        else if (genero.value == 'fantasia' && sort.toFixed() == 2) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/BOX-HARRY-POTTER-TRADICIONAL-Rowling/dp/6555320478/ref=pd_lpo_1?pd_rd_i=6555320478&psc=1' > Harry Potter </a>`;

        }

        else if (genero.value == 'romance' && sort.toFixed() == 1) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Orgulho-Preconceito-Jane-Austen/dp/8544001823' > Orgulho e Preconceito </a>`;


        }

        else if (genero.value == 'romance' && sort.toFixed() == 2) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Dom-Casmurro-Machado-Assis/dp/859431860X' > Dom Casmurro </a>`;


        }

        else if (genero.value == 'thriller' && sort.toFixed() == 1) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/coisa-Stephen-King/dp/8560280944' > It - A Coisa </a>`;


        }

        else if (genero.value == 'thriller' && sort.toFixed() == 2) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Caixa-P%C3%A1ssaros-Josh-Malerman/dp/8580576520' > Caixa de Pássaros </a>`;


        }

        else if (genero.value == 'ficcao' && sort.toFixed() == 1) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/1984-George-Orwell/dp/8535914846' > 1984</a>`;


        }

        else if (genero.value == 'ficcao' && sort.toFixed() == 2) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Admir%C3%A1vel-mundo-Aldous-Leonard-Huxley/dp/8525056006' > Admirável Mundo Novo </a>`;


        }

        else if (genero.value == 'autoajuda' && sort.toFixed() == 1) {
            msgsort.innerHTML = `Você deveria ler <a href='https://www.amazon.com.br/coragem-ser-imperfeito-Bren%C3%A9-Brown/dp/8543104335'> A Coragem de Ser Imperfeito </a>`;


        }

        else if (genero.value == 'autoajuda' && sort.toFixed() == 2) {
            msgsort.innerHTML = `Você deveria ler <a href= 'https://www.amazon.com.br/Mindset-Carol-S-Dweck/dp/8547000240'> Mindset </a>`;


        }

    }


}