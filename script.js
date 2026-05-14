console.log("BookVerse iniciado com sucesso!");

let generoSelecionado = "";

function selecionarGenero(genero, botao) {

    generoSelecionado = genero;

    console.log("Gênero escolhido: " + genero);

    let botoes = document.querySelectorAll(".botoes button");

    botoes.forEach((btn) => {
        btn.classList.remove("selecionado");
    });

    botao.classList.add("selecionado");
}

function mostrarLivro() {

    let nome = "";
    let descricao = "";
    let imagem = "";

    if (generoSelecionado === "fantasia") {

        nome = "Harry Potter e a Pedra Filosofal";

        descricao =
            "Harry descobre que é um bruxo e inicia sua jornada em Hogwarts.";

        imagem =
            "https://m.media-amazon.com/images/I/61jgm6ooXzL._SY466_.jpg";
    }

    else if (generoSelecionado === "romance") {

        nome = "Orgulho e Preconceito";

        descricao =
            "Um clássico romance sobre amor e diferenças sociais.";

        imagem =
            "https://m.media-amazon.com/images/I/51lC3sHYyML._SY445_SX342_ML2_.jpg";
    }

    else if (generoSelecionado === "suspense") {

        nome = "A Paciente Silenciosa";

        descricao =
            "Um suspense psicológico sobre uma mulher que para de falar após um crime.";

        imagem =
            "https://m.media-amazon.com/images/I/413th2NQc8L._SY445_SX342_ML2_.jpg";
    }

    else {

        alert("Selecione um gênero primeiro!");

        return;
    }

    document.getElementById("nomeLivro").innerHTML = nome;

    document.getElementById("descricaoLivro").innerHTML = descricao;

    document.getElementById("imagemLivro").src = imagem;

    document.getElementById("resultado").style.display = "block";
}