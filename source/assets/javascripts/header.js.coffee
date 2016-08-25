# Init headroom - menu appear only on scroll top when not on top
launchHeadroom = ->
	header = document.querySelector('#header')
	headroom = new Headroom(header,
		offset: 300
		tolerance: 10
	)
	headroom.init()

# Launch functions
$(document).ready ->
	launchHeadroom()
