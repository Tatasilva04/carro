function Carro(marca,modelo,ano, cor) {
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
this.cor = cor;
this.ligar = function(){
    console.log(" o carro está ligado.");
};
}

//criando uma nova instância de carro
let meuCarro = new Carro("volkswagen",   "Gol",  2016,  "preto");
console.log(meuCarro.marca);  //saída: volkswagen
meuCarro.ligar();
    console.log(meuCarro);
