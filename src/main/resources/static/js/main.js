/***** Funções prontas ao carregar a pagina  */

$(function(){

    $(".money").maskMoney({decimal:',', // Separador do decimal precision:2, // Precisão
        thousands:'.', // Separador para os milhares
        //prefix:'R$ ', // Simbolo
        //showSymbol:true, // Exibe/Oculta o símbolo
        allowZero:true, // Permite que o digito 0 seja o primeiro caractere
        defaultZero:true // Exibe Mascara padrão mostrando 0
    });

    $('[rel="tooltip"]').tooltip();

    $('.js-atualizar-status').on('click', function(event){
    	event.preventDefault();
    	//var botaoReceber = $(event.currentTarget);
    	var botaoReceber = $(this);
    	var urlReceber = botaoReceber.attr('href');

    	var response = $.ajax({
    		url:urlReceber,
    		type:'PUT'
    	});

    	response.done(function(e){
    		var codigoTitulo = botaoReceber.data('codigo');
    		$('[data-role='+codigoTitulo+']').html('<span class="label label-success">'+ e +'</span>');
    		botaoReceber.hide();
    	});

    	response.fail(function(e){
    		console.log(e);
    		alert('Erro recebendo cobrança')
    	});
    });

});

/***** Funções prontas ao carregar a pagina*/


/***** Modal Do bootstrap */

$('#confirmacaoExclusaoModal').on('show.bs.modal', function(event){
	var button = $(event.relatedTarget);
	var codigoTitulo = button.data('codigo');
	var descricaoTitulo = button.data('descricao');
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('url-base');
	if(!action.endsWith('/')){
		action += '/';
	}
	form.attr('action',action + codigoTitulo);

	modal.find('.modal-body span').html('Tem certeza que deseja excluir o titulo <strong>'+descricaoTitulo+'</strong>?');
});

/***** Modal Do bootstrap */