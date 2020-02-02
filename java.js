 function somarValores(){
        var mulher = document.getElementById("qtdmulher").value;
        var homem = document.getElementById("qtdhomem").value;
        var crianca = document.getElementById("qtdcrianca").value;
        var carne = document.getElementById("qtdcarne").value;
        var alcool = document.getElementById("qtdalcool").value;
        var totalmulher = mulher * 300;
        var totalhomem = homem*400;
        var totalcrianca = crianca*150;
        var totalcarne = parseInt(totalmulher) + parseInt(totalhomem) + parseInt(totalcrianca);
        var totalcarneportipo = totalcarne/carne;
        var totalalcool = alcool*5;
        alert("Comprar " +totalcarneportipo + " de cada tipo de carne");
        alert("Comprar " + totalalcool+ " longnecks");


    }