

$("#js-button-start").click(function(event) {
	event.preventDefault();
	$("#js-begin-quiz").hide(); 
	$('form').first().show();
	$('form').each(function(){
		$(this)[0].reset();
	});
});

$('form').each(function(index, value) {
	$(this).find('input[type="radio"]').each(function() {
		$(this).attr('unchecked', true); 
		$(this).attr('name', `js-question-${index + 1}`); 
	});

	var form = $(this);
	$(this).find('.button').attr('disabled');
	$(this).on('click', function(){
		$(form).find('.button').removeAttr('disabled');
	});

	$(this).find('#js-button-end').click(function(event) {
		$('form').hide();
		$('form').each(function(){
			$(this)[0].reset();
		});
		$('#js-begin-quiz').show();
		$('.js-score-correct').html(0);
		$('.js-score-incorrect').html(0);
		$('.js-counter').html(0);
	});
});

$('form').submit(function(event) {
	event.preventDefault();
	var formData = $(this).serializeArray(); 
	var isCorrect = (formData[0].value == "correct");

	if (isCorrect) {
		$('.js-score-correct').html(function(index, value) {
			return + value +1;
		});
		$('.js-counter').html(function(index, value) {
			return + value +1;	
		});
	} else {
		$('.js-score-incorrect').html(function(index, value) {
			return + value + 1;
		});	
		$('.js-counter').html(function(index, value) {
			return + value +1;	
		});
	} try {
		$(this).hide().next().show();
	} catch(e) {
		console.error(e);
		};
});


		
