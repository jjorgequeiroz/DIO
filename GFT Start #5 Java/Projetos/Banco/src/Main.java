public class Main {

    public static void main(String[] args) {
        Cliente Jorge = new Cliente();

        Jorge.setNome("Jorge");

        Conta cc = new ContaCorrente(Jorge);
        Conta poupanca = new ContaPoupanca(Jorge);

        cc.depositar(100);
        cc.transferir(100, poupanca);

        
        cc.imprimirExtrato();
        poupanca.imprimirInfosComuns();
    }

}