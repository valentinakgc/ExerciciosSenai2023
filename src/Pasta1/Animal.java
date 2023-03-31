package Pasta1;

public class Animal {

	//Atributos
	//Encapsulamento
	private String nome;
	private double peso;
	
	//Constructor
	public Animal() {}	
	public Animal(String nome, double peso) {
		super();
		this.nome = nome;
		this.peso = peso;
	}


	//Método
	public void imprimir() {
		System.out.println("Nome: " +this.nome+ "\nPeso: " +this.peso);
	}
	
	
	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public String getNome() {
		return nome;
	}

	public double getPeso() {
		return peso;
	}
		
		
		
	
	}
