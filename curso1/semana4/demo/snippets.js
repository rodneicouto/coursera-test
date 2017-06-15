
console.log(typeof(window));

console.log(this === window);

console.log(window.retangulo === retangulo);

//====== #09 =========
var comprimento = 10;
var largura = 10;

function perimetro() {
    console.log("Perimetro: " + (2 * this.largura + 2 * this.comprimento));
    console.log(this === window);
}

perimetro();

//====== #10 =========

retangulo.perimetro = perimetro;
retangulo.perimetro();

//====== #11 =========

var Aluno = function(nome, matricula) {
    console.log("Criando aluno");
    console.log(typeof(this));
    this.nome = nome;
    this.matricula = matricula;
}
var pedro = new Aluno("Pedro Costa", "123456");
console.log(pedro.nome);
console.log(pedro.matricula);

//====== #12 =========

var Curso = function(nome) {
    this.nome = nome;
    return "curso " + nome;
}

var c01 = Curso("C01");
console.log(typeof(c01));
console.log(c01);

var c02 = new Curso("c02");
console.log(typeof(c02));
console.log(c02);

//====== #13 =========

return {
    "nome": "NovoCurso"
};

//====== #14 =========

var Aluno = function(nome, matricula) {
    console.log("Criando aluno");
    console.log(typeof(this));
    this.nome = nome;

    if (matricula) this.matricula = matricula;
}
Aluno.prototype.matricula = -1;

var joao = new Aluno("Joao");
console.log(joao.nome);
console.log(joao.matricula);

//====== #15 =========

this.primeiraLetra = function() {
    console.log(this.nome.charAt(0));
}

Aluno.prototype.primeiraLetra2 = function() {
    console.log(this.nome.charAt(0));
};

joao.primeiraLetra();
joao.primeiraLetra2();

