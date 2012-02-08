(function ($) {
Drupal.behaviors.buttonFieldBehavior = {
  attach: function(context) {
    $('.button_field', context).bind('click', function(e) {
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
            path: location.pathname,
            entity_id: Drupal.settings[id].entity_id,
            entity_type: Drupal.settings[id].entity_type,
            field_name: Drupal.settings[id].field_name
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
  } // end function attach()
};
})(jQuery);
