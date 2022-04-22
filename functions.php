<?php

// Utilities

include('inc/utilities.php');

// CONFIG

include('inc/configure.php');

// JAVASCRIPT & CSS

include('inc/js-css.php');

// ACF
include('inc/acf.php');

// Custom login styles
require_once('inc/login-css.php');

// CUSTOM POST TYPES
require_once('inc/custom-post-types.php');

// CUSTOM TAXONOMIES
require_once('inc/custom-taxonomies.php');

// Tiny MCE Styles
require_once('inc/tiny-mce.php');

// Support theme Title
add_theme_support('title-tag');

add_filter('gform_confirmation_anchor', '__return_true');

// Disable Search & Filter Pro Plugin
add_action('wp_print_scripts', 'my_deregister_javascript', 100);

function my_deregister_javascript()
{
    wp_deregister_script('search-filter-plugin-build');
    wp_deregister_script('search-filter-plugin-chosen');
}

// Gravity Form Remove Currency
add_filter('gform_currencies', 'gw_modify_currencies');
function gw_modify_currencies($currencies)
{
    $currencies['CAD'] = array(
        'name' => esc_html__('Canadian dollars', 'gravityforms'),
        'symbol_left' => '',
        'symbol_right' => '',
        'symbol_padding' => ' ',
        'thousand_separator' => ' ',
        'decimal_separator' => ',',
        'decimals' => 2
    );
    return $currencies;
}


add_filter('gform_stripe_charge_description', 'gf_replace_charge_description', 10, 5);
function gf_replace_charge_description($description, $strings, $entry, $submission_data, $feed)
{

    // Change 21 to your field id number.
    $description = 'Facture : ' . rgar($entry, '1');

    return $description;
}

add_filter('gform_stripe_customer_id', function ($customer_id, $feed, $entry, $form) {
    if (rgars($feed, 'meta/transactionType') == 'product') {
        $customer_meta = array();
        $metadata_field = rgars($feed, 'meta/metaData');

        foreach ($metadata_field as $metadata) {
            if ($metadata['custom_key'] == 'first_name') {
                $first_name = $metadata['value'];
            } else if ($metadata['custom_key'] == 'last_name') {
                $last_name = $metadata['value'];
            } else if ($metadata['custom_key'] == 'phone') {
                $phone = $metadata['value'];
            }
        }

        if (!empty($first_name)) {
            $customer_meta['first_name'] = gf_stripe()->get_field_value($form, $entry, $first_name);
        }

        if (!empty($last_name)) {
            $customer_meta['last_name'] = gf_stripe()->get_field_value($form, $entry, $last_name);
        }

        if (!empty($phone)) {
            $customer_meta['phone'] = gf_stripe()->get_field_value($form, $entry, $phone);
        }

        if (empty($customer_id)) {
            $response = gf_stripe()->get_stripe_js_response();
            if (!empty($response->id) && substr($response->id, 0, 3) === 'pi_') {
                try {
                    $intent = \Stripe\PaymentIntent::retrieve($response->id);
                    if (!empty($intent->customer)) {
                        gf_stripe()->log_debug('gform_stripe_customer_id: PaymentIntent already has customer; ' . print_r($intent->customer, true));

                        return is_object($intent->customer) ? $intent->customer->id : $intent->customer;
                    }
                } catch (\Exception $e) {
                    gf_stripe()->log_debug('gform_stripe_customer_id: unable to get PaymentIntent; ' . $e->getMessage());
                }
            }

            $customer_params = array();

            $response = gf_stripe()->get_stripe_js_response();
            if (!empty($response->id) && substr($response->id, 0, 3) === 'pi_') {
                try {
                    $intent = \Stripe\PaymentIntent::retrieve($response->id);
                    if (!empty($intent->customer)) {
                        gf_stripe()->log_debug('gform_stripe_customer_id: PaymentIntent already has customer; ' . print_r($intent->customer, true));

                        return is_object($intent->customer) ? $intent->customer->id : $intent->customer;
                    }
                } catch (\Exception $e) {
                    gf_stripe()->log_debug('gform_stripe_customer_id: unable to get PaymentIntent; ' . $e->getMessage());
                }
            }

            $email_field = rgars($feed, 'meta/receipt_field');
            if (!empty($email_field) && strtolower($email_field) !== 'do not send receipt') {
                $customer_params['email'] = gf_stripe()->get_field_value($form, $entry, $email_field);
            }

            $customer_params['name'] = rgar($entry, '8.3') . ' ' . gf_stripe()->get_field_value($form, $entry, $first_name) . ' ' . gf_stripe()->get_field_value($form, $entry, $last_name);
            gf_stripe()->log_debug(__METHOD__ . '(): Name: ' . $customer_params['name']);

            $customer = gf_stripe()->create_customer($customer_meta, $feed, $entry, $form);
            $customer_id = $customer->id;
            gf_stripe()->log_debug('gform_stripe_customer_id: Returning Customer ID: ' . $customer_id);
        }

        return $customer->id;
    }

    return $customer_id;
}, 10, 4);

add_filter('gform_currencies', 'add_cad_currency');
function add_cad_currency($currencies)
{
    $currencies['CAD'] = array(
        'name'               => __('Canadian Dollar', 'gravityforms'),
        'symbol_left'        => '',
        'symbol_right'       => '',
        'symbol_padding'     => ' ',
        'thousand_separator' => ' ',
        'decimal_separator'  => ',',
        'decimals'           => 2
    );

    return $currencies;
}

add_filter('gform_confirmation_anchor', '__return_true');
