public class Main {
    public static void main(String[] args) {
        
        //Calculadora
        System.out.println("Exercício Calculadora");
        Calculadora.soma(3, 6);
        Calculadora.subtracao(10, 5);
        Calculadora.multiplicacao(6, 5);
        Calculadora.divisao(8, 2);

        //Mensagem
        System.out.println("Exercício Mensagem");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(15);
        Mensagem.obterMensagem(1);

        //Empréstimo
        System.out.println("Exercício Empréstimo");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(1000, 5);
                
    }
    
}
