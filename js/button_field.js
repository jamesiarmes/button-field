// $Id$
Drupal.behaviors.buttonFieldBehavior = function(context) {
  $('.button_field').bind('click', function() {
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
}; // end function buttonFieldBehavior()
