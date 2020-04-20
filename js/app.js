$(document).ready(function(){
// 	document.getElementsByClassName('img_content').forEach(element => {
// 		console.log(element.innerHTML)
// });



// -------------------
var r = document.getElementsByClassName('img_content');
var result = Object.keys(r).map(function(key) {
	return [Number(key), r[key]];
  });
let img_arr=[];
  for (let i = 0 ; i<=result.length-1;i++){
	img_arr+=result[i][1].innerHTML
  }
//   console.log(img_arr)
  $('.slider_cli_image').append(img_arr)


var r_text = document.getElementsByClassName('text_content');
var resultText = Object.keys(r_text).map(function(key) {
	return [Number(key), r_text[key]];
  });
var text_arr = [];
for (let i = 0 ; i<=resultText.length-1;i++){
	$('.slider_cli_text').append(`<div class="cli_text_item cli_text_item${i}">`+resultText[i][1].innerHTML+`</div>`)

}

// ----------------


$('.geo-nav').on('click',()=>{
	$('.address_header').toggle(50)
})

if(window.innerWidth<=640){
	$('.slider_cli_image').slick({
		arrows:true,
		centerMode: true,
		slidesToShow:1,

		speed:100,
		autoplaySpeed:800,

		slidesToShow: 1,
		slidesToScroll: 3,
	});
	$('.slick-next').html("&#9658;");
	$('.slick-prev').html("&#9668;");
// }

$('.cli_text_item').hide()
$('.cli_text_item0').show()

let i = 0;
console.log(i)

$('.slider_cli_image .slick-next').on('click',()=>{
	$('.cli_text_item').hide()
	i++;


	console.log(i)
	if(i>resultText.length-1){

		i=0;
	}
	$('.cli_text_item'+i).show()

})


$('.slider_cli_image .slick-prev').on('click',()=>{

	i--;
	console.log(i)
	if(i<0){
		i=resultText.length-1;
	}

	$('.cli_text_item').hide()

$('.cli_text_item'+i).show()
})


}





$('.while').on('click',()=>{
	$('.while').hide()

})

if(window.innerWidth>=900){

	$('a.btn-cool').on('click',()=>{
		$('.wrapp-fixed').toggle()
	})
	$('.closed-krest').on('click',()=>{
		$('.wrapp-fixed').toggle()
	})
}else{
	$('a.btn-cool').on('click',()=>{
		$('.wrapp-fixed_sm').toggle()
	})
	$('.wrapp-fixed_sm .closed-krest').on('click',()=>{
		$('.wrapp-fixed_sm').toggle()
	})
}

$('.info_map').on("mouseleave",()=>{
	// alert()
	// $('.client__text').toggle('zoomInDown')
	// $('.client__text').toggle('zoomInDown')
	
	// $('.bottom_info_text').toggle('zoomOutLeft')
	// $('info_map_wrapper').toggle('bg')
	$('.client__text').removeClass('slide-out-top')
	// $('.bottom_info_text').toggleClass('roll-out-bottom')
	$('.info_map_wrapper').slideToggle(250)

	$('.client__text').addClass('slide-in-top')

})
// zoomOutLeft
// slide-in-top


$('.info_map').on("mouseenter",()=>{
	// alert()
	// $('.client__text').addClass('zoomInDown')
	$('.client__text').addClass('slide-out-top')
	$('.client__text').removeClass('slide-in-top')




	// $('.client__text').removeClass('slide-out-top')
	// $('.bottom_info_text').toggleClass('roll-out-bottom')
	// $('info_map').toggle('bg')
	$('.info_map_wrapper').slideToggle(250)
})


















	$('.nav-link_more').append($('.nav-bar_content').html());
	$('.nav-bar_links').hide()
	if(window.innerWidth>=1025){
		$('.nav-link_more').on('click',function(){
		$('.nav-bar_links').toggle()
		$('.navbar-nav').show()
		})
	}

	if(window.innerWidth<=1025){
		$('.nav-bar_content').hide()
		$('.nav-link_more').on('click',function(){	
			$('.nav-bar_content').show(100)
			$('.navbar-nav').hide(100)
			$('.wr').show()
			$('.btn_back').show(100)
			$('.nav-bar_links').show(100)
		})
		$('.btn_back').on('click',function(){
			$('.navbar-nav').show(100)
			$('.nav-bar_content').hide(100)
			$('.btn_back').hide(100)
			$('.nav-bar_links').hide(100)
		})
		
		$('.close_btn').on('click',function(){
			$('.con-right').hide()
			$('.wrapper-page').hide()
		})
		$('.menu-btn').on('click',function(){
			$('.con-right').show();
			$('.wrapper-page').show();
			$('.wr').hide();

		})
	}

	

	if(window.innerWidth<=625){
		$('.slider').slick({
			arrows:true,
			centerMode: true,
			slidesToShow:1,
	
			speed:800,
			autoplaySpeed:800,
	
			slidesToShow: 1,
			slidesToScroll: 1,
		});
		$('.slick-next').html("&#9658;");
		$('.slick-prev').html("&#9668;");
	}



	$('.client_slider').slick({
		arrows:true,
		// dots:true,
		centerMode: true,
		slidesToShow:1,
		// autoplay:true,
		speed:800,
		autoplaySpeed:800,

		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('.slick-next').html("&#9658;");
	$('.slick-prev').html("&#9668;");
});





$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});