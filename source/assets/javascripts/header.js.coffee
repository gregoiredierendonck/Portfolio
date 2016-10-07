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
  $('header').headroom
    'offset': 30
    'tolerance': 50
    'classes':
      'initial': 'animated'
      'pinned': 'slideDown'
      'unpinned': 'slideUp'
  Menubuttontext()