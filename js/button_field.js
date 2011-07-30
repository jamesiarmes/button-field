Drupal.behaviors.buttonFieldBehavior = function(context) {
  $('.button_field').bind('click', function() {
    var id = $(this).attr('id'),
      process = true;
    
    // if a confirmation message was provided then display it now
    if (Drupal.settings[id].confirmation) {
      process = confirm(Drupal.settings[id].confirmation);
    } // end if a confirmation message was provided
    
    // if we should process the rules for this button then do so now
    if (process) {
      $.ajax({
        url: Drupal.settings.basePath+'button_field/callback',
        dataType: 'json',
        data: {
           id: $(this).attr('id'),
           path: location.pathname
        },
        success: function(data) {
          if (data.redirect) {
            document.location.href = data.redirect;
          }
        }
      }); // end $.ajax()
	} // end if we should process this button
    
    return false;
  }); // end function $.bind()
}; // end function buttonFieldBehavior()
