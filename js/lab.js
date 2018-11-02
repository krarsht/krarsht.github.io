function convertContent() {
   var converter = new showdown.Converter();
   var finalUrl = window.location + "";
   finalUrl = finalUrl.substring(0, finalUrl.lastIndexOf("/") + 1);

   $( ".mdcontent" ).each(function( index ) {
      var mdDiv = this;
      var mdName = $( this ).attr('class').split(' ').pop();
      $.get(finalUrl + mdName + ".md", function(response) {
         $( mdDiv ).html(converter.makeHtml(response));
      });
   });
 }

