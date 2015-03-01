

// Include RGBaster - https://github.com/briangonzalez/rgbaster.js
!function(n){"use strict";var t=function(){return document.createElement("canvas").getContext("2d")},e=function(n,e){var a=new Image,o=n.src||n;"data:"!==o.substring(0,5)&&(a.crossOrigin="Anonymous"),a.onload=function(){var n=t("2d");n.drawImage(a,0,0);var o=n.getImageData(0,0,a.width,a.height);e&&e(o.data)},a.src=o},a=function(n){return["rgb(",n,")"].join("")},o=function(n){return n.map(function(n){return a(n.name)})},r=5,i=10,c={};c.colors=function(n,t){t=t||{};var c=t.exclude||[],u=t.paletteSize||i;e(n,function(e){for(var i=n.width*n.height||e.length,m={},s="",d=[],f={dominant:{name:"",count:0},palette:Array.apply(null,new Array(u)).map(Boolean).map(function(){return{name:"0,0,0",count:0}})},l=0;i>l;){if(d[0]=e[l],d[1]=e[l+1],d[2]=e[l+2],s=d.join(","),m[s]=s in m?m[s]+1:1,-1===c.indexOf(a(s))){var g=m[s];g>f.dominant.count?(f.dominant.name=s,f.dominant.count=g):f.palette.some(function(n){return g>n.count?(n.name=s,n.count=g,!0):void 0})}l+=4*r}if(t.success){var p=o(f.palette);t.success({dominant:a(f.dominant.name),secondary:p[0],palette:p})}})},n.RGBaster=n.RGBaster||c}(window);


$.fn.colourMe = function() {

	// the 'each' is the jquery version of a for loop for each item on the page.
	return $(this).each(function() {
		// Go find the images and for each image store them in a var called 'image'
		var image = $(this).find('img');

		//for each overlay we're going to find the image inside
		var overlay = $(this).find('.overlay');

		// this is store each photo's div.
		var item = $(this);

		RGBaster.colors(image[0], {
		   exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
		  success: function(payload) {
		    // You now have the payload.
		    // console.log(payload.dominant);
		    console.log(payload.secondary);
		    // console.log(payload.palette);
		    overlay.css('background', payload.secondary);
		  }
		});

	});
	// console.log(img);
	
}