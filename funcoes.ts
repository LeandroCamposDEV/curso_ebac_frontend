function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoDaMultiplicacao = multiplicar(3, 6);
console.log(resultadoDaMultiplicacao);

const saudacao = saudar("Leandro");
console.log(saudacao);