$(function(){
  $('#experiences').hide();
  $('#formations').hide();
  $('#competences').hide();
  $('#projetNum').hide();
  $('#contacts').hide();


  $('#pres').click(function(){
    $('#presentation').show();
    $('#experiences').hide();
    $('#formations').hide();
    $('#competences').hide();
    $('#projetNum').hide();
    $('#contacts').hide();
  });

  $('#expe').click(function(){
    $('#experiences').show();
    $('#presentation').hide();
    $('#formations').hide();
    $('#competences').hide();
    $('#projetNum').hide();
    $('#contacts').hide();
  });

  $('#form').click(function(){
    $('#formations').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#competences').hide();
    $('#projetNum').hide();
    $('#contacts').hide();
  });

  $('#comp').click(function(){
    $('#competences').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#formations').hide();
    $('#projetNum').hide();
    $('#contacts').hide();
  });

  $('#proj').click(function(){
    $('#projetNum').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#competences').hide();
    $('#formations').hide();
    $('#contacts').hide();
  });

  $('#cont').click(function(){
    $('#contacts').show();
    $('#presentation').hide();
    $('#experiences').hide();
    $('#competences').hide();
    $('#projetNum').hide();
    $('#formations').hide();
  });
  $('.nav-collapse').click('li', function() {
    $('.nav-collapse').collapse('hide');
});
});



// Wrap every letter in a span
$('.ml11 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0,$(".ml11 .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $(document).ready(function() {

    $("#owl-demo").owlCarousel({

      nav: true, // Show next and prev buttons
      navText: ["<span class='icon icon-arrow-left7'></span>","<span class='icon icon-arrow-right7'></span>"],
      slideSpeed : 300,
      paginationSpeed : 400,

      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      loop: true
    });
  });
