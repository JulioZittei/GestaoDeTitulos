/***** Mascara para valores monetários */

$(function(){
      $(".money").maskMoney({
            decimal:',', // Separador do decimal
            precision:2, // Precisão
            thousands:'.', // Separador para os milhares
            //prefix:'R$ ', // Simbolo
            //showSymbol:true, // Exibe/Oculta o símbolo
            allowZero:true, // Permite que o digito 0 seja o primeiro caractere
            defaultZero:true // Exibe Mascara padrão mostrando 0
      });
});

/***** Mascara para valores monetários*/


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



/***** Tooltip */

$(function(){
	$('[rel="tooltip"]').tooltip();
});

/***** Tooltip */