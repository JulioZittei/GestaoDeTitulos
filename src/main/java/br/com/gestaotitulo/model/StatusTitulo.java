package br.com.gestaotitulo.model;

public enum StatusTitulo {

	PENDENTE("Pendente","label-warning"),
	CANCELADO("Cancelado","label-danger"),
	RECEBIDO("Recebido","label-success");
	
	private String descricao;
	private String classe;
	
	StatusTitulo(String descricao, String classe){
		this.descricao = descricao;
		this.classe = classe;
	}
	
	StatusTitulo (String descricao){
		this.descricao = descricao;
	}
	
	public String getDescricao(){
		return this.descricao;
	}
	
	public String getClasse(){
		return this.classe;
	}
}
