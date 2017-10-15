$('.user-submit').on('click', displayCard);


function displayCard() {
	var title = $('.website-title')[0].value;
	var url = $('.website-url')[0].value;
	$('.right-side').append(`
		<article class="bookmark-cards">
			<h2 class="bookmark-content">${title}</h2>
			<hr />
			<p class="bookmark-content-url">${url}</p>
			<hr />
			<button class="bookmark-btn">Read</button>
			<button class="delete-btn bookmark-btn">Delete</button>
		</article>`)
}