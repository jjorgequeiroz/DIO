programa
{
	
	funcao inicio()
	{
		cadeia vendedor 
		real vendaJan,vendaFev,vendaMar,vendaAbr,media,total
		
		
		escreva("Digite o nome do vendedor: ")
		leia(vendedor)

		escreva("Digite o valor da venda de Janeiro: ")
		leia(vendaJan)
		escreva("Digite o valor da venda de Fevereiro: ")
		leia(vendaFev)
		escreva("Digite o valor da venda de Março: ")
		leia(vendaMar)
		escreva("Digite o valor da venda de Abril: ")
		leia(vendaAbr)

		total = vendaJan+vendaFev+vendaMar+vendaAbr
		escreva("O valor total de vendas de " + vendedor + " nos primeiros quatro meses é de R$ " + total) 
			
		media = (vendaJan+vendaFev+vendaMar+vendaAbr)/4
		escreva("\nA média de vendas de " + vendedor + " nos primeiros quatro meses é de R$ " + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 176; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */