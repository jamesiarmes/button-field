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
    'label' => t('User Clicks a Button'),
    'module' => 'Button Field',
    'arguments' => array(
      'node' => array(
          'type' => 'node',
          'label' => t('Node that the button was on')
      ),
      'user' => array(
        'type' => 'user',
        'label' => t('Currently logged in user'),
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
 * @return boolean
 */
function button_field_condition_button_is($button_name, $arguemnts, $settings,
	$variables) {
  $id = $_REQUEST['id'];
  list($field_name, $nid) = explode('-', $id);
  
  return ($button_name == $field_name);
} // end function button_field_condition_button_is()
