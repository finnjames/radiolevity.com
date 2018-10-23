// swap out the slogan
$(function () {
  var slogans = {
    0: "Quakers!",
    1: "we hope your visit to our site was intentional",
    2: "gluten free",
    3: "funded by viewers like you, thank you",
    4: "the best thing since sliced bread",
    5: "not affiliated with the oats",
    6: "since 1937",
    7: "Quakers founded Pennsylvania",
    8: "Quakers won the 1947 Nobel Peace Prize",
    9: "part of the Religious Society of Friends",
    10: "Quakerism was founded by George Fox",
  };
  var x = Math.floor(Math.random() * (Object.keys(slogans).length));
  $("#slogan").html(slogans[x]);
});


// diversity popover
$(function () {
  $('#diversityPop').popover()
})

// make the nav item underlines
$(function () {
  $('.navElement').append('<div class="hilight"></div>');
});


// underline nav items
$(function () {
  var aniTimeIn = 250;
  var aniTimeOut = 250;
  var easeInType = "easeOutExpo";
  var easeOutType = "easeOutExpo";
  var originalMarginTop = $('div.hilight').css('margin-top');

  // make the current page's hilight always shown
  $(".navElement").each(function (i, obj) {
    if ($(this).children("a").hasClass('currentPage')) {
      $(this).children('div.hilight').css({ "height": originalMarginTop, "margin-top": "0px" });
    }
  });

  $('.navElement').mouseover(function () {
    // make the current page not animate
    if (!($(this).children("a").hasClass('currentPage'))) {
      $(this).children('div.hilight').stop().animate({ height: originalMarginTop, marginTop: "0px" }, aniTimeIn, easeInType);
    }
  });
  $('.navElement').mouseout(function () {
    // make the current page not animate
    if (!($(this).children("a").hasClass('currentPage'))) {
      $(this).children('div.hilight').stop().animate({ height: "0px", marginTop: originalMarginTop }, aniTimeOut, easeOutType);
    }
  });
});


// make the navbar snap to the top
$(function () {
  var collapseNav = function (direction) {
    if (direction) {
      $('#content').css({ "margin-top": $('#navbar').height() });
      $('#navbar').css({ "position": "fixed", "margin-top": "0px" });

    } else {
      $('#navbar').css({ "position": "relative", "margin-top": "0px" });
      $('#content').css({ "margin-top": "0px" });
    }
  }
  $(window).scroll(function () {
    if ($(window).width() >= 720) {
      var headerHeight = 0;
      $('.heading-container').each(function () {
        headerHeight += $(this).height();
      });

      // make the navbar snap to the top when scrolled past it
      if ($(window).scrollTop() >= headerHeight) {
        collapseNav(1);
      } else {
        collapseNav(0);
      }

      // make the shadow be dependent on how far scrolled
      var shadowHeight = Math.log(headerHeight + 100 - headerHeight) * 2;
      if ($(window).scrollTop() < $('#header').height()) {
        shadowHeight = 0;
      } else if ($(window).scrollTop() <= (headerHeight + 100)) {
        shadowHeight = (Math.log($(window).scrollTop() - headerHeight) * 2);
      }
      var shadowValue = "0px " + shadowHeight * .3 + "px " + shadowHeight * 1 + "px rgba(0, 0, 0, " + (shadowHeight * .04) + ")";
      $('#navbar').css({ "box-shadow": shadowValue });

    }
  });
});


// sign up popover
$(function () {
  $("#newsPop").click(function () {
    return false; // prevent default browser refresh on "#" link
  });

  $('#newsPop').popover({
    title: 'Newsletter Sign Up',
    html: true,
    content: newsletterPop,
    container: 'body',
  });

  $(document).on("click", "#closeNewsPop", function () {
    $(this).parents(".popover").popover('hide');
    return false;
  });

});

// function that verifies the input is an email address
function validEmail(v) {
  var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  return (v.match(r) == null) ? false : true;
}


// sends the form info to the Google Sheet
$(function () {
  $(document).on('click', "#submit-email", function (e) {

    var formResults = $('#emailForm')
    var url = 'https://script.google.com/macros/s/AKfycbx_t17zYdn_52lq_k4SsJT8VuIHOOUeoz-mmSWtilsTKQz__hg/exec'

    if (validEmail(decodeURIComponent(formResults.serialize()).substring(14))) {
      $('#emailError').addClass('d-none'); //hide the error message if it is shown
      e.preventDefault();

      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: formResults.serialize(),
      }).done(
        $(function () {
          $('#submit-email').html('<img class="icon" src="assets/images/icons/checkmark-light.svg" alt="check" />Submitted!')
          $('#submit-email').attr('disabled', true)
        })
      );
    } else {
      // show the error message
      $('#emailError').removeClass('d-none');
    }
    return false;
  });
});

// makes the credits appear when you click my name
$(function () {  
  var originalHeight = $('#credits').height();
  
  var state = true;
  
  $('#copyright').click(function () {
    if (state) {
      $('#creditsReveal').stop().animate({ height: 0 }, 500, 'easeOutBounce');
    } else {
      $('#creditsReveal').animate({ height: originalHeight }, 500, 'easeOutExpo');
    }
    state = !state;
  });
});

// end o' the jQuery
