// $Id$
Drupal.behaviors.buttonFieldBehavior = function(context) {
  $('.button_field').bind('click', function() {
    $.ajax({
      url: Drupal.settings.basePath+'button_field/callback',
	  dataType: 'json',
      data: {id: $(this).attr('id')},
      success: function(data) {
        if (data.redirect) {
          document.location.href = data.redirect;
        }
      }
    }); // end $.ajax()
  }); // end function $.bind()
}; // end function buttonFieldBehavior()
