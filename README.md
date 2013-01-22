#Responsive images

This is a test for loading different images with javascript, based on screen width.

##How it works
Include the responsiveImages.js, then set it up using the following.  

```html
<div data-image-500="http://placekitten.com/g/500/500"></div>
```

The number after the data-image- is at what size (or bigger) the image should be used. So `data-image-500` will only load the image when the 
screen width is greater than 500px, while `data-image-800` will only load an image when the screen is bigger than 800px wide.
You can use multiple data-image-<size> and only the biggest image will be loaded.

```html
<div data-image-500="http://placekitten.com/g/500/500"  
     data-image-800="http://placekitten.com/g/800/800">
</div>
```

[View it in action here](http://martinblackburn.github.com/responsive-images/)

###Notes
This was written using jQuery 1.9.0