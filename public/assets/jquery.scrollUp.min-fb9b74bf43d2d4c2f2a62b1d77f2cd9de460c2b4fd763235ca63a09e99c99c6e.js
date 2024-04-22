/*

 scrollup v2.3.3
 Author: Mark Goodyear - http://markgoodyear.com
 Git: https://github.com/markgoodyear/scrollup

 Copyright 2014 Mark Goodyear.
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php

 Twitter: @markgdyr

 */
!function(l,o,e){l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,n,i,a=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r);switch(s=a.scrollTrigger?l(a.scrollTrigger):l("<a/>",{id:a.scrollName,href:"#top"}),a.scrollTitle&&s.attr("title",a.scrollTitle),s.appendTo("body"),a.scrollImg||a.scrollTrigger||s.html(a.scrollText),s.css({display:"none",position:"fixed",zIndex:a.zIndex}),a.activeOverlay&&l("<div/>",{id:a.scrollName+"-active"}).css({position:"absolute",top:a.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+a.activeOverlay,zIndex:a.zIndex}).appendTo("body"),a.animation){case"fade":t="fadeIn",c="fadeOut",n=a.animationSpeed;break;case"slide":t="slideDown",c="slideUp",n=a.animationSpeed;break;default:t="show",c="hide",n=0}i="top"===a.scrollFrom?a.scrollDistance:l(e).height()-l(o).height()-a.scrollDistance;var d,p=!1;scrollEvent=l(o).scroll(function(){l(o).scrollTop()>i?p||(s[t](n),p=!0):p&&(s[c](n),p=!1)}),a.scrollTarget?"number"==typeof a.scrollTarget?d=a.scrollTarget:"string"==typeof a.scrollTarget&&(d=Math.floor(l(a.scrollTarget).offset().top)):d=0,s.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:d},a.scrollSpeed,a.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);