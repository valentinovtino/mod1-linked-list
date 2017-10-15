var readBtn = $('.read-btn');


$('.user-submit').on('click', displayCard);
$('.right-side').on('click', readBtn, markRead);

function displayCard() {
	var title = $('.website-title')[0].value;
	var url = $('.website-url')[0].value;
	$('.right-side').append(`
		<article class="bookmark-cards">
			<h2 class="bookmark-content">${title}</h2>
			<hr />
			<p class="bookmark-content-url">${url}</p>
			<hr />
			<button class="bookmark-btn read-btn">Read</button>
			<button class="delete-btn bookmark-btn">Delete</button>
		</article>`)
}

function markRead() {
	console.log('working');
 $('.read-btn').hasClass('read') === true ? $('.read-btn').removeClass('read'): $('.read-btn').addClass('read'); //Why doesn't global var work when targetting.
}