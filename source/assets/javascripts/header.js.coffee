# Menu fixed on top
Menufixed = ->
  elementPosition = $('#content').offset()
  if $(window).scrollTop() > elementPosition.top
    $('#header').removeClass 'header--top'
    $('#header').addClass 'header--fixed'
  else
    $('#header').removeClass 'header--fixed'
    $('#header').addClass 'header--top'

# Toggle Button menu text
Menubuttontext = ->
  $('#header-menu-button').click ->
    if $.trim($(this).text()) == 'Menu'
      $(this).text 'Fermer'
      $('#header').addClass 'menu--open'
    else
      $(this).text 'Menu'
      $('#header').removeClass 'menu--open'

# Launch scripts
$(document).ready ->
  Menubuttontext()
$(window).scroll ->
  Menufixed()
