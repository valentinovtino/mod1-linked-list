
$('.user-submit').on('click', displayError);
$('.website-input').on('keyup', disableBtn);
$('.user-submit').on('click', displayNumberOfCards);

function displayError() {
	if($('.website-title').val() === "" || $('.website-url').val() === "") {
		alert('Please enter valid Title and URL!');
	}	else { displayCard();
	}
};


function displayCard() {
	var title = $('.website-title').val();
	var url = $('.website-url').val();
	cardCounter = $('.bookmark-cards').length;
	$('.right-side').append(`
		<article class="bookmark-cards ${title}">
			<h2 class="bookmark-content">${title}</h2>
			<hr />
			<p class="bookmark-content-url">${url}</p>
			<hr />
			<button class="bookmark-btn read-btn">Read</button>
			<button class="delete-btn bookmark-btn">Delete</button>
		</article>`);
  $('.read-btn').on('click', markRead);
  $('.delete-btn').on('click', deleteCard);
};

function markRead() {
 $('.read-btn').hasClass('read') === true ? $('.read-btn').removeClass('read'): $('.read-btn').addClass('read'); //Why doesn't global var work when targetting.
};

function deleteCard() {
	$(this).parents('.bookmark-cards').remove();
	$('.number-of-cards').html($('.bookmark-cards').length);
};

function disableBtn() {
	if($('.website-title').val() === "" && $('.website-url').val() === "") {
		$('.user-submit').attr('disabled', true);
	} else {$('.user-submit').removeAttr('disabled');
	}
};

function displayNumberOfCards() {
	$('.number-of-cards').html($('.bookmark-cards').length);
	// console.log($('.bookmark-cards').length)
}







