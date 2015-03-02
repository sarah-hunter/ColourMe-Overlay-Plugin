# ColourMe Overlay

## Overview

A jQuery plugin that takes the dominant colour of your photos and applies that to the background colour of your overlay.
See it live [here](http://sarah-hunter.github.io/ColourMe-Overlay-Plugin)

## How to use it
1. Link "jquery.colourOverlay.js" and "colouroverlay.css" to your HTML file</p>

2. Create a <span class="code">&lt;div&gt;</span> with a <span class="code">&lt;div class=&quot;overlay&quot;&gt;</span> and a <span class="code">&lt;img&gt;</span> inside. </p>
	<pre> 
&lt;div class=&quot;photoDiv&quot;&gt;
	&lt;img src=&quot;images/photoName.jpg&quot; alt=&quot;&quot;&gt;
	&lt;div class=&quot;overlay&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
	</pre>
3. In your main javascript file, add the following code to call the function, remembering to change the class to whatever you've named your div: </p>
	<pre class="function">
$(function() {
	$('.photos').colourMe();
});
	</pre>

## Demo

Here's a little demo of how it works.

![Demo](http://g.recordit.co/ac3iM3m9oo.gif)

## Credit
This plugin is built on top of a script called [RGBaster](https://github.com/briangonzalez/rgbaster.js).

