// $Id$
(function($) {
  $.button_field = {
    init: function(element) {
      $('#'+element).bind('click', function() {
        var $this = $(this),
          success_url = $this.attr('data-button_field_url');
        
        $.ajax({
          url: '/button_field/callback',
          data: {id: $this.attr('id')},
          success: function() {
            if (success_url) {
              location.href = success_url;
            }
          }
        }); // end $.ajax()
      }); // end function $.bind()
    } // end function init
  }; // end $.button_field
})(jQuery);
