$(document).ready(function(){

	$.ajax({
		url: "https://www.materiaisricos.com.br/wp-json/wp/v2/posts",
		dataType: "json",
		success: function(data, k) {
	        $.each(data, function (i, k) {
	            var title = k.title.rendered;
	            var link = k.link;
	            var resumo = k.excerpt.rendered;
	            var image = k.fimg_url;
	            template = `<div class="item-post">
	           	${image ? '<div class="image"><a href="'+link+'" target="_blank" title="'+title+'"><img src="' +image+ '"></div></a>' : '<div class="image"><a href="'+link+'" target="_blank" title="'+title+'"><img src="https://www.materiaisricos.com.br/wp-content/themes/materiaisricos/src/images/sem-imagem.jpg"></a></div>'}
		            <div class="text">
						<h2><a href="${link}" target="_blank" title="${title}">${title}</a></h2>
						${resumo}
						<a href="${link}" target="_blank" title="${title}">Continuar lendo</a>
					</div>
				</div>`;
	            $("#list-blog").append(template);
	        });
        },
        complete: function() {
		    $('.ajax').remove();
		}
    });

});