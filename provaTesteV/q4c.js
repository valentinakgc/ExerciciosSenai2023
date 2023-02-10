let sexo, filme, contMulheres = 0, contFilmes = 0
        for(i=0; i<50; i++){
            sexo = Math.floor(Math.random() * 2)
            filme = Math.floor(Math.random() * 23)
            
            if(sexo == 1)//1 - feminino
                contMulheres++
            if(filme > 10)
                contFilmes++
        }
percMulheres = contMulheres*100/50
        
        console.log('Questão 4\nQtd de mulheres: ' + contMulheres
        +'\nQtd de pessoas assistiram mais que 10 filmes: ' +contFilmes
        +'\nPercentual de mulheres: '+percMulheres+'%')