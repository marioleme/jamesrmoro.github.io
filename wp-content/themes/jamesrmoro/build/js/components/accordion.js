window.onload = function() {

	scrollTo = (element) => {
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: element.offsetTop-63
		});
	}

	var buttonClickScroll = document.querySelectorAll('.list-scroll-js li a');

	for (var i = 0; i < buttonClickScroll.length; i++) {
		var addClick = buttonClickScroll[i];
		addClick.addEventListener('click',function(e){
			e.preventDefault();
			var href = this.getAttribute("href");
			id = href.substring(1);
			scrollTo(document.getElementById(id));
		});
	}

}

