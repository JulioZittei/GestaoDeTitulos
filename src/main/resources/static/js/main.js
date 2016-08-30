$(function(){
      $(".money").maskMoney({
            decimal:',', // Separador do decimal
            precision:2, // Precisão
            thousands:'.', // Separador para os milhares
            symbol:'R$ ', // Simbolo
            showSymbol:true, // Exibe/Oculta o símbolo
            allowZero:true, // Permite que o digito 0 seja o primeiro caractere
            defaultZero:true // Exibe Mascara padrão mostrando 0
      });
});