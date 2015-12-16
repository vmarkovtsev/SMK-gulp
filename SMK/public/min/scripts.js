console.log("scripts are loaded");

function animate(elem){
    		var effect = elem.data("effect");
    		if(!effect || elem.hasClass(effect)) return false;
    elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass(effect);
    }, 1000);
}
 
$(".animated").mouseenter(function() {
    animate($(this));
});

function change_image()
{
	$(document).ready(function() {
    
    	$('#e1').cycle({
    	    fx:     'fade',
    	    rev: 1,
    	});
 
	});
}
num = 1;
i = 0;
setInterval(function(){
if(i == 100)
{
if (num == 3)
{
	num = 0;
}
num++;
(function () {            
     $(document).ready(function () {
     	
     	$('#e1').css("background", "url(i" + num + ".png) no-repeat 0 0");
     	$('#e1').css("background-size", "100%");
     });
     
})(jQuery);
i = 0;
}
else
{
	$('#e1').css("opacity", i/100);
	i++;
}
}, 20);

	$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
    
    
