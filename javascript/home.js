function periodical() {
	$('#exploreMe').effect('shake', { times:2 }, 300);
}
$(document).ready(function() {
	$('#exploreMe').hide().css('display','').fadeIn(100);
    setInterval(periodical, 5000);
		
});