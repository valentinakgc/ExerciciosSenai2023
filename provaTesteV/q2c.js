let salario = 3000, reajuste, novoSalario, indiceReajustado
if (salario <= 2000){
    reajuste = salario * 0.15
    indiceReajustado = 15
}       
else if (salario <= 4000){
    reajuste = salario * 0.12
    indiceReajustado = 12 
}   
else{
    reajuste = salario * 0.10
    indiceReajustado = 10
}
novoSalario = salario + reajuste
console.log('Questão 2\nNovo Salário: R$'+novoSalario
+'\nValor Reajustado: R$'+reajuste
+'\nÍndice Reajustado:'+indiceReajustado+'%')