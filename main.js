
		
$(document).ready(function() {
	$('.content-about').hide();
	$('.content-video').hide();
	$('.content-coding').hide();
	$('.content-resume').hide();
	$('.animation').hide();
	$('.animation').fadeIn(2000);
	$('.upper-left').animate({ left:'30%'}, 2000);
	$('.lower-left').animate({ left:'30%'}, 2000);
	$('.upper-right').animate({ left:'100%'}, 2000);
	$('.lower-right').animate({ left:'100%'}, 2000);
	$('.logo').animate({ top:'52%'}, 2000);
	
	
	$('.about-field').click(function() {
		$('.resume-field').fadeOut(1000);
		$('.video-field').fadeOut(1000);
		$('.coding-field').fadeOut(1000);
		$('.logo').fadeOut(1000);
		$('.about-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-about').fadeIn({queue: false, duration: 1000});
		$('.content-about').animate({top: '50%'}, 1000);
        
});
	
	
	$('.backbutton-about').click(function() {
		$('.resume-field').fadeIn(1000);
		$('.video-field').fadeIn(1000);
		$('.coding-field').fadeIn(1000);
		$('.logo').fadeIn(1000);
		$('.about-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-about').fadeOut({queue: false, duration: 1000});
<<<<<<< HEAD
		$('.content-about').animate({top: '45%'}, 1000);	
=======
		$('.content-about').animate({top: '55%'}, 1000);	
>>>>>>> a785a0f4474bcf6398884ceff928c98e3d6515fd
	});
	
		$('.video-field').click(function() {
		$('.resume-field').fadeOut(1000);
		$('.about-field').fadeOut(1000);
		$('.coding-field').fadeOut(1000);
		$('.logo').fadeOut(1000);
		$('.video-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-video').fadeIn({queue: false, duration: 1000});
		$('.content-video').animate({top: '63%'}, 1000);
});
	
	
	$('.backbutton-video').click(function() {
		$('.resume-field').fadeIn(1000);
		$('.about-field').fadeIn(1000);
		$('.coding-field').fadeIn(1000);
		$('.logo').fadeIn(1000);
		$('.video-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-video').fadeOut({queue: false, duration: 1000});
<<<<<<< HEAD
		$('.content-video').animate({top: '60%'}, 1000);
=======
		$('.content-video').animate({top: '68%'}, 1000);
>>>>>>> a785a0f4474bcf6398884ceff928c98e3d6515fd
	});
	
	$('.coding-field').click(function() {
		$('.resume-field').fadeOut(1000);
		$('.about-field').fadeOut(1000);
		$('.video-field').fadeOut(1000);
		$('.logo').fadeOut(1000);
		$('.coding-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-coding').fadeIn({queue: false, duration: 1000});
		$('.content-coding').animate({top: '30%'}, 1000);
});
	
	
	$('.backbutton-coding').click(function() {
		$('.resume-field').fadeIn(1000);
		$('.about-field').fadeIn(1000);
		$('.video-field').fadeIn(1000);
		$('.logo').fadeIn(1000);
		$('.coding-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-coding').fadeOut({queue: false, duration: 1000});
<<<<<<< HEAD
		$('.content-coding').animate({top: '33%'}, 1000);
=======
		$('.content-coding').animate({top: '55%'}, 1000);
>>>>>>> a785a0f4474bcf6398884ceff928c98e3d6515fd
	});
	
	$('.resume-field').click(function() {
		$('.coding-field').fadeOut(1000);
		$('.about-field').fadeOut(1000);
		$('.video-field').fadeOut(1000);
		$('.logo').fadeOut(1000);
		$('.resume-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-resume').fadeIn({queue: false, duration: 1000});
		$('.content-resume').animate({top: '30%'}, 1000);
});
	
	
	$('.backbutton-resume').click(function() {
		$('.coding-field').fadeIn(1000);
		$('.about-field').fadeIn(1000);
		$('.video-field').fadeIn(1000);
		$('.logo').fadeIn(1000);
		$('.resume-field').animate({left: '20%', top: '15%' }, 1000);
		$('.content-resume').fadeOut({queue: false, duration: 1000});
<<<<<<< HEAD
		$('.content-resume').animate({top: '33%'}, 1000);
=======
		$('.content-resume').animate({top: '55%'}, 1000);
>>>>>>> a785a0f4474bcf6398884ceff928c98e3d6515fd
	});
	
});


            

