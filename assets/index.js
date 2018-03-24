$('.btn').click(() => {
  const link = $('#input').val();
  $.getJSON('/new/' + link)
    .done(result => {
      const content = `Your short URL<br><a href='${result.shortened_link}'>${result.shortened_link}</a>`;
      $('#root').html(content);
    })
    .fail($('#root').html('Invalid link.'));
  $('#input').val('');
});

$('input').keypress(e => {
  var key = e.which;
  if (key == 13) // the enter key code
  {
    $('.btn').click();
    return false;
  }
});