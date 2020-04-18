document.onreadystatechange = function () {
	if (document.readyState === 'interactive') {

	} else if (document.readyState === 'complete') {
		$( ".content-wrapper-js h2" ).each(function( index ) {
			titles = $( this ).text();
			slug = titles.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			$(".list-scroll-js").append('<li><a href="#'+slug+'" title="'+titles+'"><span>'+titles+'</span></a></li>');
			$( this ).attr('id', slug);
			$(this).text("");
			$(this).addClass('has-anchor-hash');
			$(this).append('<span>'+titles+'<a href="#'+slug+'" class="anchor-hash-link"></a></span>');
		});

		$( ".content-wrapper-js a" ).each(function( index ) {
			$(this).find('img').closest("a").addClass("no-blank");
		});

	}

}
