package br.com.gestaotitulo.model;

public enum StatusTitulo {

	PENDENTE("Pendente"),
	CANCELADO("Cancelado"),
	RECEBIDO("Recebido");
	
	private String descricao;
	
	StatusTitulo(String descricao){
		this.descricao = descricao;
	}
	
	public String getDescricao(){
		return this.descricao;
	}
	
	
}
