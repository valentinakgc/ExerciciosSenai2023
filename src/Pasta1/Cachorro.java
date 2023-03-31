package Pasta1;

public class Cachorro extends Animal{
	
	private String raca;
	
	public Cachorro() {}
	public Cachorro(String nome, double peso, String raca) {
		super(nome, peso);
		this.raca = raca;
	}
	
	public void imprimir() {
		super.imprimir();
		System.out.println("Raça: " +this.raca);
	}
	
	

	public String getRaca() {
		return raca;
	}
	public void setRaca(String raca) {
		this.raca = raca;
	}
	
	
	

}
