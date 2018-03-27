$(document).ready(function(){

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('.fullscreen-nav').toggleClass('open');
	});
  $('.subButton').submit(function (event) {
    event.preventDefault();
    var emailInput=$("input#email").val();
    alert(emailInput+" has been successfully added to our email list. Thank you.")
  });
});
