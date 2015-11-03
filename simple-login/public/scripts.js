console.log('sanity check--you have linked scripts.js successfully');

$(document).ready(function(){

	$('#signup-form').submit(function(e){
		e.preventDefault();

		var user = $(this).serialize();
		$.post('/users', user, function(data){
			console.log(data);
		});

	});

	$('#login-form').on('submit', function(e) {
			e.preventDefault();
			console.log($('#login-form').serialize());
			$.ajax ({
				url: '/login',
				type: 'POST',
				data: $('#login-form').serialize()
			})
			.done(function(data){
				console.log("logged in");
				window.location.href="/profile";
			})
			.fail(function(data){
				console.log("failed to login");
			});
		});

});