let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        let notas = atleta.notas.slice();
        notas.sort(function(a, b) { return a - b; });
        notas.shift();
        notas.pop();
        let soma = 0;
        for (let j = 0; j < notas.length; j++) {
            soma += notas[j];
        }
        let media = soma / notas.length;
        
        let notasOriginais = atleta.notas.slice();
        let notasDez = notasOriginais.filter(function(nota) { return nota === 10; });
        let outrasNotas = notasOriginais.filter(function(nota) { return nota !== 10; });
        outrasNotas.sort(function(a, b) { return a - b; });
        let notasParaImprimir = notasDez.concat(outrasNotas);
        
        console.log("Atleta: " + atleta.nome);
        console.log("Notas Obtidas: " + notasParaImprimir.join(","));
        console.log("Média Válida: " + media);
        console.log("");
    }
}

calcularMedia(atletas);
