package br.com.gestaotitulo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.gestaotitulo.model.Titulo;

public interface Titulos extends JpaRepository<Titulo, Long> {
	
	
	
}
