// JavaScript Document

//Review section

    /* Add your logic here */


	let reviewArray = ['Great spice has it going on here.. great foods great menu great staff, free popadoms with both my orders.. came back twice in a row, that says it all.. go get some great spice tandoori Indian.. chioce<span>Shaun Harris</span>',"I love this place. Went here because I'd had Great Spice before and it's really good food and consistent. The whole family was stoked with their meals - they nail the heat level, and the portions always leave us feeling full and happy. Highly recommend!<span>Emily Brouwer</span>","This is the best curry in town, complete with goat curry you wont find in many other Indian restaurants. The drinks are alway cold and there is a great selection. Wether you dine in or take away this is an awesome spot with authentic food.was disappointed when the Plaza renovations meant the Great Spice Restaurant closed, however the food is just as good from the new food court! You will never want to eat a store bought naan again once you taste theirs!<span>Gregory Calderon</span>", "Visited on a Thursday night for takeaway. Restaurant was busy so there was a bit of a wait, but they did have a number of tables to serve. Twenty minutes later we were home tucking into a pretty decent meal. My tikka masala was the best I've had in a long time. Big portions too. Well worth a visit. Will book a table next time.<span>Al Bax</span>", "Ordered takeaway in-store and was ready promptly, best Indian Restaurant/Takeaway in Tauranga. Fast Service, great atmosphere. Thanks Khem<span> Andy Roberts</span>", "Rang through for an order whine driving over from the Waikato (on the hands free car phone). I was calling before their opening time and didn't leave a message. About 10 minutes later they called me back having seen the caller ID. Awesome service and the food is always very good<span>Matt Collier</span>","We love the food from Buretta,  the hot spicy is really hot and spicy. Service is good and we always have a fun night.  Recommend the $45 takeaway special.<span>Felicity Turner</span>" ]; 
  	
	let count=0; 
	$("#review-second-svg").on('click', function(){ 
		
		count++; 
		if (count==7){ 
			count=0; 
		}
		document.getElementById('review-paragraph').innerHTML = reviewArray[count]; 
		let numbers=reviewArray.length; 
		console.log(numbers); 
		console.log("counting" + count); 
	})

	$('#review-first-svg').on('click',function(){ 
		count--; 
		if (count==-1){ 
			count=6; 
		}
		document.getElementById('review-paragraph').innerHTML = reviewArray[count]; 
		console.log("-- counting "+count); 
		
		
	})

//faq section
	$('.faq-second-part').hide();
	$('.more-faq').click(function(){ 
		$('.faq-second-part').slideDown("slow");
		$('.more-faq').hide(); 
	}); 


		//animation for special section 
		//animation for tandoori section 
	var tl2= new TimelineMax({onUpdate:updatePercentageCatering}); 
		var tl10= new TimelineMax(); 
		const controllerTandooriSection= new ScrollMagic.Controller(); 
		
		
		tl10.from(".dinner-special-image", 0.5, {x:200, opacity:0 }); 
		tl10.from(".dinner-special-text-animation",0.5, { x:200, opacity: 0}); 
		tl10.from(".lunch-special-image", 0.5, {x:-200, opacity:0 }); 
		tl10.from(".lunch-special-text-animation", 0.5, {x:200, opacity:0}); 
		

	//automatic animation
		const sceneTandoori = new ScrollMagic.Scene({
  triggerElement: ".two-special",
	triggerHook:0.2,
	duration:"100%"
})
  .setTween(tl10)
		.addTo(controllerTandooriSection);
		
	function updatePercentageCatering(){ 
				tl10.progress(); 
				console.log(tl10.progress()); 
				}

		
		
		
	

			
	
	