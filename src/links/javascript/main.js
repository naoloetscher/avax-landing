  // Kursor Library

var kursorx = new kursor({
    color: '#562AE5',
    type: 5,
});

  // Smooth Scroll

$(document).on('click', 'a[href^="#"]', function (e) {

    e.preventDefault()
    $('html, body')
          .animate(
        {
          scrollTop: $($(this).attr('href')).offset().top
        },
        400
      )
  });


  // Font Change
function change () {
  var get = document.querySelector("body");
  get.classList.toggle("font-change")
}