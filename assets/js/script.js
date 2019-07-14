// font size adjustments

/* var font_size = 9;

$(function () {
  $("html").css({'cssText':'font-size:' + font_size + 'pt'})
})

function change_font_size(i) {
  font_size += i;
  if (font_size < 6) {
    font_size = 6;
  } else if (font_size > 14) {
    font_size = 14;
  }
  console.log(font_size);
  $("html").css({'cssText':'font-size:' + font_size + 'pt'})
} */

// testimonial stuff
class testimonial {
  constructor(quote, name) {
    this.quote = quote;
    this.name = name;
  }
}

var testimonials = [
  new testimonial("‘Genuinely the best web design ever’ -Michael Scott", "Finn James"),
  new testimonial("As the creator of several websites I feel perfectly qualified to say that this guy knows what he’s doing", "Finn James"),
  new testimonial("I feel like it would be unprofessional to quote yourself in order to make your site look good", "Finn James")
]

var testimonial_index = 0;

function format_testimonials(t) {
  return "“" + t.quote + "” <div class='quoted'>-" + t.name + "</div>";
}

function normalize(index) {
  return Math.abs(index%testimonials.length);
}

function update(direction) {
  testimonial_index += direction;
  $('#paper').html(format_testimonials(testimonials[normalize(testimonial_index)]));
}

$(function () {
  update(0);
  $('#left-arrow').on('click', function () {
    update(-1);
  })
  $('#right-arrow').on('click', function () {
    update(1);
  })
});