/*
 *description: 1号抢购;
 *author: yuting2;
 *date: 2017/01/22;
 *update: 2017/05/17;
 */
define(['zepto','swipeSlide','fastclick','masonry'], function($,swipeSlide,fc,Masonry) {
    fc.attach(document.body);
    // script模块还依赖其他的模块才能运行，用字符串的形式引入
    var exports = {};
    exports.init = function(config){
        this.config = this.config || config;
        exports.popMethods();
        exports.bindEvents();
        exports.adScroll();
        // exports.waterFall();
        // exports.getTop();
    };
   exports.bindEvents = function(){
        // banner轮播
        $('#swipeSlide').swipeSlide({
            speed : 3000,
            continuousScroll:true,
            autoSwipe:true,
            // animateType: 'depth',
            lazyLoad : true,
            firstCallback : function(i,sum,me){
                me.find('.dot span').first().addClass('cur');
                // $shadowPic.attr('src',me.find('li img').eq(i).attr('data-src'));
            },
            callback : function(i,sum,me){
                me.find('.dot span').eq(i).addClass('cur').siblings().removeClass('cur');
                // $shadowPic.attr('src',me.find('li img').eq(i).attr('data-src'));
            }
        });
    };
    exports.popMethods = function(){
		$(window).on('scroll', function() {
			var top = $(window).scrollTop();
			if(top>112){
				
				$('.H5_top').addClass('fixed');
				$('.top_text').addClass('fixed');
				$('.top_left').hide();
			} else {
				$('.H5_top').removeClass('fixed');
				$('.top_text').removeClass('fixed');
				$('.top_left').show();
			}
		});
		$(window).on('scroll', function() {
			var top = $(window).scrollTop();
			if(top>700){
				$('.back_top').show();
			} else {
				$('.back_top').hide();
			}
		});
	};
	exports.adScroll=function(){
		var $slideWrap = $('.swipe_wrap'),
            $ulDom = $slideWrap.find('.slide_box'),
            $liDom = $slideWrap.find('.text-item'),
            liLen = $liDom.length;

        if (liLen <= 1) {
            return false;
        }
        setInterval(function() {
            $ulDom.addClass('scroll transition');
            setTimeout(function() {
                $ulDom.removeClass('scroll transition');
                $ulDom.find('li').eq(0).appendTo($ulDom);
            }, 800);
        }, 4000);
		
	};
	/*瀑布流*/
		// exports.waterFall = function(){
  //       var msnry = new Masonry( '.waterfall-lists', {
  //           itemSelector:  '.waterfall-lists .item-wrap',
  //           gutter: 0,
  //           isAnimated:  true,
  //       });
  //   };
	// exports.getTop=function(){
	// 	function lunbo_dot(){
	// 		var selector = $('.dot').children();
	// 		// console.log(selector)

	// 		// var callback_over=function(){
	// 			// console.log(222)
	// 			var current = selector.filter('.fixed');
	// 			// console.log(current)
	// 			var next = current.next();
	// 			// console.log(next,next.length)
	// 			if(next.length<=0){
	// 				$('.dot span').eq(0).addClass('fixed');
	// 				$('.dot span').eq(3).removeClass('fixed');
	// 			}else{
	// 				next.addClass('fixed');
	// 			    current.removeClass('fixed');
	// 			}
	// 		// };
	// 	}
		
	// 	setInterval(function(){
	// 		lunbo_dot();
	// 	} ,2000);
	// };
       return exports;
   });