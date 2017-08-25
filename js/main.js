

$('.hamburger-icon').on('click', function () {
$('#superburger').slideToggle();
});


$('.headeretc').on('mouseenter', function () {
$('#about').fadeIn();
});


$('#w1 h4').on('mouseenter' , function (){
  $('#w1 .writing'). slideToggle();
});


$('#w2 h4').on('mouseenter' , function (){
  $('#w2 .writing'). slideToggle();
});

$('#w3 h4').on('mouseenter' , function (){
  $('#w3 .writing'). slideToggle();
});


//expand .read section with javascript?

$('#playheader').on('mouseenter' , function(){
  $('#pastwork').fadeIn(700);
});

$('#pastwork').on('mouseenter' , function(){
  $('#current').fadeIn(700);
});

//how to use scroll instead?





$('#button').on('click', function () {
   $('#slideout').slideToggle(500);
   $('#links').addClass('linksactive');
 });




 $('#footertext a').on('click', function() {
    $('#modal-border').slideToggle();
 });
