$(document).ready(function(){
    $("#cpf").mask("000.000.000-00")
    $("#cnpj").mask("00.000.000/0000-00")
    $("#telefone").mask("(00) 0000-0000")
    $("#telefone2").mask("(00) 0000-0000")
    $("#telefone3").mask("(00) 0000-0000")
    $("#salario").mask("999.999.990,00", {reverse: true})
    $("#cep").mask("00.000-000")
    $("#dataNascimento").mask("00/00/0000")
    
    $("#rg").mask("999.999.999-W", {
        translation: {
            'W': {
                pattern: /[X0-9]/
            }
        },
        reverse: true
    })
    
    var options = {
        translation: {
            'A': {pattern: /[A-Z]/},
            'a': {pattern: /[a-zA-Z]/},
            'S': {pattern: /[a-zA-Z0-9]/},
            'L': {pattern: /[a-z]/},
        }
    }
    
    $("#placa").mask("aaa-0S00", options)
    
    $("#hora").mask("00:00")
    
    $("#codigo").mask("AA.LLL.0000", options)
    
    $("#celular").mask("(00) 0000-00009")
    
    $("#celular").blur(function(event){
        if ($(this).val().length == 15){
            $("#celular").mask("(00) 00000-0009")
        }else{
            $("#celular").mask("(00) 0000-00009")
        }
    })
})
console.log('Script na Pasta');
console.log("FEITO POR: João Luiz Silva");
console.log("EMAIL: joaoluisilva.jls@gmail.com");
console.log("WHATS:(82)98809-2556");