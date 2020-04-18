$(document).ready(function(){

	function limpa_campo(t){
	
		var valor_combustivel = Number($(".wrapper-tipo em").html());
		r = $(".situacao .valor-tanque i").html()*valor_combustivel.toFixed(2);
		$('.line2 input[type="number"]').val(r);
		$(t).removeClass("show");
		$(".abastecer").removeClass("disabled2");
		$(".abastecer-mobile").removeClass("disabled2");
	
	}

	if($(window).width() < 1024) {

		function get_value() {

			var reais = Number($("#reais").val());
			var item1 = reais*0.12;
			$(".porcentagem .item1 i.value").html(item1.toFixed(2));

			var item2 = reais*0.12;
			$(".porcentagem .item2 i.value").html(item2.toFixed(2));

			var item3 = reais*0.28;
			$(".porcentagem .item3 i.value").html(item3.toFixed(2));

			var item4 = reais*0.15;
			$(".porcentagem .item4 i.value").html(item4.toFixed(2));

			var item5 = reais*0.33;
			$(".porcentagem .item5 i.value").html(item5.toFixed(2));
		}

		$("body").on("click", ".abastecer-mobile, .sim", function(e) {
			e.preventDefault();
			$(".bomba").addClass("show").removeClass("hide");
			$(".deseja").addClass("hide").removeClass("show");
			$(".bomba .abastecer").removeClass("disabled2");
			get_value();
			setTimeout(function() {
				$(".porcentagem .item1").addClass("animate-1");
				$(".porcentagem .item2").addClass("animate-2");
				$(".porcentagem .item3").addClass("animate-3");
				$(".porcentagem .item4").addClass("animate-4");
				$(".porcentagem .item5").addClass("animate-5");
		   }, 500);
		});

		$("body").on("click", ".bomba #abastecer", function() {
			$(".deseja").addClass("show").removeClass("hide");
			$(".bomba").addClass("hide").addClass("show");
			get_value();
			$(".porcentagem .item1").removeClass("animate-1");
			$(".porcentagem .item2").removeClass("animate-2");
			$(".porcentagem .item3").removeClass("animate-3");
			$(".porcentagem .item4").removeClass("animate-4");
			$(".porcentagem .item5").removeClass("animate-5");
		});

		$("body").on("click", ".sim", function() {
			var valor_combustivel = Number($(".wrapper-tipo em").html());
			r = $(".situacao .valor-tanque i").html()*valor_combustivel.toFixed(2);
			$('.line2 input[type="number"]').val(r);
			get_value();
		});

		$("body").on("click", ".mensagem-1", function() {
			limpa_campo(this);
			get_value();
		});

	}

	function reset(t) {
		if ($(t).val() === "") {
			$(".litros-p").removeClass("show");
			$(".reais-p").removeClass("show");
			$(".abastecer").addClass("disabled");
		} else {
			$(".litros-p").addClass("show");
			$(".reais-p").addClass("show");
			$(".abastecer").removeClass("disabled");
		}
	}

	function msg() {

		if (Number($(".situacao .valor-tanque i").html()) >= $("#litros").val()) {
        	$("#litros").css("border", '1px solid #8bc34a');
        	$(".completar").css("display", "none");
        } else {
			$("#litros").css("border", '1px solid red');
			$(".completar").css("display", "inline-block");
        }
	}

	$('.button-next').prop('disabled', true);

	$('.button-next').each(function(){
		$('.button-next').addClass("disabled");
	});

	$("body").on("click", ".mensagem-1", function() {
		limpa_campo(this);
	});

	$('input[type="number"]').keyup(function() {
		if ($(this).val() === "") {
			$(".screen-1 .button-next").addClass("disabled");
			$('.screen-1 .button-next').prop('disabled', true);
			
		} else {
			$(".screen-1 .button-next").removeClass("disabled");
			$('.screen-1 .button-next').prop('disabled', false);
		}
	});

	$('.screen-2 input').change(function() {
	    $('.screen-2 .button-next').prop('disabled', false);
	    $(".screen-2 .button-next").removeClass("disabled");
	});

	$('.screen-3 input').change(function() {
	    $('.screen-3 .button-next').prop('disabled', false);
	    $(".screen-3 .button-next").removeClass("disabled");
	});

	$("body").on("click", ".button-next", function() {
		$(".screen.show").next().addClass("show");
		$(".screen.show").prev().removeClass("show");
	});

	$("body").on("click", ".button-prev", function() {
		$(".screen.show").prev().addClass("show");
		$(".screen.show").next().removeClass("show");
	});

	var tanque = $("#tanque").val();






	$("body").on("click", ".sim", function() {
		var valor_combustivel = Number($(".wrapper-tipo em").html());
    	var s = Number($(".situacao .valor-tanque i").html());
    	var r = valor_combustivel*s;
    	$(".abastecer").removeClass("disabled2");
    	$(".mensagem").parent().removeClass("aviso");
    	$("#litros").val(s);
    	$("#reais").val(r);
    	msg();
    });

    $("body").on("click", ".nao", function() {
    	$("#litros").val("");
    	$("#reais").val("");
    	$(".abastecer").removeClass("disabled");
    	msg();
    });

    $("body").on("click", ".fieldset-fuel input[type='radio']", function() {
    	v_combustivel = Number($(this).val());
    	t_combustivel = $(this).attr("id");
    	$(".wrapper-tipo em").html(v_combustivel);
    	$(".wrapper-tipo i").html(t_combustivel);

    	switch(t_combustivel) {
            case "etanol":
                $(".bomba").addClass("etanol");
            break;
            case "gasolina":
                $(".bomba").addClass("gasolina");
            break;
            case "diesel":
                $(".bomba").addClass("diesel");
            break;
            case "gas":
                $(".bomba").addClass("gas");
            break;
        }
    });

	$("body").on("click", ".fieldset input[type='radio']", function() {
		tanque = Number($("#tanque").val());
		situacao = Number($(this).val());
		total_tanque = tanque*situacao;
		$(".situacao .valor-tanque i").html(total_tanque);
		$(".situacao .valor-tanque-inicial i").html(tanque);
		$(".descr i").html(total_tanque);
	});

    $('#reais').keyup(function() {
    	var valor_combustivel = Number($(".wrapper-tipo em").html());
        var valor_reais = $(this).val();
        total_litros = valor_reais/valor_combustivel;
        $("#litros").val(total_litros);
        $(".reais-p i").html(total_litros.toFixed(2));
        var r1 = Number($("#reais").val());
        $(".litros-p i").html(r1.toFixed(2));
        if (total_litros > $(".situacao .valor-tanque i").html()) {
        	$("#litros").val($(".situacao .valor-tanque i").html());
        }
        if (valor_reais > $(".situacao .valor-tanque i").html()*valor_combustivel){
        	$(".abastecer").addClass("aviso-1");
        	r = $(".situacao .valor-tanque i").html()*valor_combustivel.toFixed(2);
        	$(".aviso-1 i").html(r.toFixed(2));
        	$(".abastecer, .abastecer-mobile").addClass("disabled2");
        	$(".line2 .mensagem-1").addClass("show");
        } else {
        	$(".abastecer").removeClass("aviso-1");
        	$(".abastecer, .abastecer-mobile").removeClass("disabled2");
        	$(".line2 .mensagem-1").removeClass("show");
        }
       reset(this);
    });

    $('#litros').keyup(function() {
    	valor_combustivel = Number($(".wrapper-tipo em").html());
        valor_litros = $(this).val();
        total_reais = valor_combustivel*valor_litros;
        $("#reais").val(total_reais);
        if (Number($(".situacao .valor-tanque i").html()) >= $("#litros").val()) {
        	$("#litros").css("border", '1px solid #8bc34a');
        	$(".completar").css("display", "none");
        	$(".abastecer, .abastecer-mobile").removeClass("disabled2");
        } else {
			$("#litros").css("border", '1px solid red');
			$(".completar").css("display", "inline-block");
			$(".abastecer, .abastecer-mobile").addClass("disabled2");
        }
        var l1 = Number($("#litros").val());
        $(".reais-p i").html(l1.toFixed(2));
        $(".litros-p i").html(total_reais.toFixed(2));
        reset(this);

    });

    function limpa_reais () {
	    if ($('#reais').val() === "") {$("#litros").val("");}
    }

    function limpa_litros () {
	    if ($('#litros').val() === "") {$("#reais").val("");}
    }

    $('#reais').blur(function() {
    	limpa_reais();
    });

    $('#litros').blur(function() {
    	limpa_litros();
    });

	$("body").on("click", "#abastecer, .sim, .button-mobile", function() {

		var valor_combustivel = Number($(".wrapper-tipo em").html());
		var litros = Number($("#litros").val());
		var reais = Number($("#reais").val());
		var total_reais = valor_combustivel*litros;
		var total_litros = reais/valor_combustivel;
		var time = 3000;

		var item1 = reais*0.12;
		$(".valor-pago .item1 i").html(item1.toFixed(2));

		var item2 = reais*0.12;
		$(".valor-pago .item2 i").html(item2.toFixed(2));

		var item3 = reais*0.28;
		$(".valor-pago .item3 i").html(item3.toFixed(2));

		var item4 = reais*0.15;
		$(".valor-pago .item4 i").html(item4.toFixed(2));

		var item5 = reais*0.33;
		$(".valor-pago .item5 i").html(item5.toFixed(2));

		$(".valor-pago").addClass("animate");

		$("#litros").prop('Counter',0).animate({
			Counter: total_litros
		}, {
			duration: time,
			easing: 'swing',
			step: function (now) {
				var n = now.toFixed(2);
				$(".litros span").text(n > 9.99 ? n : "0"+n);
			}

		});

		$("#reais").prop('Counter',0).animate({
			Counter: total_reais
		}, {
			duration: time,
			easing: 'swing',
			step: function (now) {
				var n = now.toFixed(2);
				$(".reais span").text(n > 9.99 ? n : "0"+n);
			}

		});
	})

});