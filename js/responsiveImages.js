ResponsiveImage = function()
{   
    var width = $(document).width();
    var pattern = new RegExp(/data-image-/);
            
    $(".replaceImage").each(function()
    {        
        var newImageSRC = "";
        var lastShowSize = 0;
        
        $.each(this.attributes, function(i, attribute)
        {
           var name = attribute.name;
           
           //test is attribute name starts "data-image-"
           if(pattern.test(name))
           {
               var minShowSize = name.split('-')[2];
               
               if((width >= minShowSize) && (minShowSize > lastShowSize))
               {
                   newImageSRC = attribute.value;
                   
                   lastShowSize = minShowSize;
               }
           }
        });
        
        //load new image if needed
        if(newImageSRC)
        {
            $(this).replaceWith("<img src='" + newImageSRC + "' />");
        }
    });
};


$(function() 
{
    new ResponsiveImage();
});