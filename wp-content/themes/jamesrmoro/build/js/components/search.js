window.onload = function() {

	var searchItems = document.querySelector('#search-users');
	var items = document.querySelectorAll('#list-scroll-js li');

	var item = document.querySelectorAll('#list-scroll-js li span');
	var searchVal;


	searchItems.addEventListener('keyup', function() {

		searchVal = this.value.toLowerCase();

		for (var i = 0; i < items.length; i++) {
			if (!searchVal || item[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
				items[i].style['display'] = 'block';
			}
			else {
				items[i].style['display'] = 'none';
			}
			if(searchItems.value == "") {
				items[i].style['display'] = 'block';
			}
		}
	});

}