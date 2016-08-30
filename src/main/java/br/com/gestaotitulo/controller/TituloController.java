package br.com.gestaotitulo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import br.com.gestaotitulo.model.StatusTitulo;
import br.com.gestaotitulo.model.Titulo;
import br.com.gestaotitulo.repository.Titulos;

@Controller
@RequestMapping("/titulos")
public class TituloController {
	
	@Autowired
	private Titulos titulos;

	@RequestMapping("/novo")
	public ModelAndView novo() {
		ModelAndView mv = new ModelAndView("CadastroTitulo");
		mv.addObject(new Titulo());
		return mv;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView salvar(@Validated Titulo titulo, Errors errors) {
		ModelAndView mv = new ModelAndView("CadastroTitulo");
		if(errors.hasErrors()){
			return mv;
		}
		titulos.save(titulo);
		mv.addObject("mensagem", "Titulo salvo com sucesso!");
		return mv;
	}
	
	@RequestMapping
	public ModelAndView pesquisar(){
		ModelAndView mv = new ModelAndView("PesquisaTitulos");
		List<Titulo> todosTitulos = titulos.findAll();
		mv.addObject("titulos", todosTitulos);
		return mv;
	}
	
	@ModelAttribute
	public List<StatusTitulo> todosStatusTitulo(){
		return Arrays.asList(StatusTitulo.values());
	}
	
}
