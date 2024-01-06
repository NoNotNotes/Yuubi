---
title: Welcome to Quartz
---
<script type="text/javascript">
	if (window.addEventListener) { // Mozilla, Netscape, Firefox
	    window.addEventListener('load', generateCountdown, false);
	} else if (window.attachEvent) { // IE
	    window.attachEvent('onload', generateCountdown);
	}
	
	function generateCountdown(){
		let element = document.getElementsByClassName('countdown')[0]
		let msRemaining = Date.parse('2025-11-9') - new Date()
		element.innerHTML = Math.floor(msRemaining/1000/86400) + ' days'
	}
</script>

Daily (or more) notes of my undergrad studies. Hopefully complete on or within the next <code class="countdown"></code>.