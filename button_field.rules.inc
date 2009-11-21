<?php
// $Id$

/**
 * @file
 * Rules integration with the button_field module.
 */

/**
 * Implementation of hook_rules_event_info().
 * 
 * @return array
 * 
 * @todo find out how to pass the field as an argument
 */
function button_field_rules_event_info() {
  $items['button_field_clicked'] = array(
    'label' => t('Users Clicks a Button'),
    'module' => 'Button Field',
    'arguments' => array(
	  'field_name' => array(
		  'type' => 'string',
		  'label' => t('Field Name'),
	  ),
      'node' => array(
          'type' => 'node',
          'label' => t('Node that the button was on')
      ),
    ),
  ); // end $items
  
  return $items;
} // end function button_field_rules_event_info()

/**
 * Implementation of hook_rules_condition_info().
 * 
 * @return array
 * 
 * @todo find out how to pass the field as an argument
 */
function button_field_rules_condition_info() {
  return array(
    'button_field_condition_button_is' => array(
      'label' => t('Button is'),
      'arguments' => array(
        'button_name' => array(
          'type' => 'string',
		  'label' => t('Field name of the button'),
		),
      ),
    ),
  );
} // end function button_field_rules_condision_info()

/**
 * Compares the field name of the button that was clicked to the field name
 * that was expected.
 * 
 * @param string $button_name
 * @param array $arguemnts
 * @param array $settings
 * @param array $variables
 * @return boolean
 * 
 * @todo find a better way to get the button that was clicked
 */
function button_field_condition_button_is($button_name, $arguemnts, $settings,
	$variables) {
	$field_name = $variables['variables']['field_name']->data->_data;
	
	return ($button_name == $field_name);
} // end function button_field_condition_button_is()
