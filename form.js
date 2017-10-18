
$('.user-submit').on('click', displayError);
$('.website-input').on('keyup', disableBtn);
$('.user-submit').on('click', displayNumberOfCards);
$('.right-side').on('click', '.read-btn', markRead);
$('.right-side').on('click', '.delete-btn', deleteCard);

function displayError() {
	if($('.website-title').val() === "" || $('.website-url').val() === "") {
		alert('Please enter valid Title and URL!');
	}	else { displayCard();
	};
};

function displayCard() {
	var title = $('.website-title').val();
	var url = $('.website-url').val();
	$('.right-side').append(`
		<article class="bookmark-cards ${title}">
			<h2 class="bookmark-content">${title}</h2>
			<hr />
			<p class="bookmark-content-url">${url}</p>
			<hr />
			<button class="bookmark-btn read-btn">Read</button>
			<button class="delete-btn bookmark-btn">Delete</button>
		</article>`);
};

function markRead() {
 $(this).toggleClass('read');
 $('.cards-read').html($('.read').length);
};

function deleteCard() {
	$(this).parents('.bookmark-cards').remove();
	$('.number-of-cards').html($('.bookmark-cards').length);
	$('.cards-read').html($('.read').length);
};

function disableBtn() {
	if($('.website-title').val() === "" && $('.website-url').val() === "") {
		$('.user-submit').attr('disabled', true);
	} else {$('.user-submit').removeAttr('disabled');
	};
};

function displayNumberOfCards() {
	$('.number-of-cards').html($('.bookmark-cards').length);
}

function deleteRead() {
	
}








