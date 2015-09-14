<?php

/*
Plugin Name: AdButler
Plugin URI: http://example.com/wordpress-plugins/adbutler
Description: AdButler ad management system integration plugin. Simplify deployment of your ad zones with this highly effective manner of deploying your publishing needs
Version: 1.12
Author: Sparklit Networks
Author URI: http://sparklit.com
License: GPLv2
*/
if ( !defined( 'ABSPATH' ) ) exit;


/**
 * Plugin location constants
 */
define( 'ADBUTLER_FILEPATH', __FILE__ );
define( 'ADBUTLER_PLUGINDIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'ADBUTLER_PLUGINBASE', plugin_basename( __FILE__ ) );
define( 'ADBUTLER_URLPATH', trailingslashit( plugins_url( '', __FILE__ ) ) );
define( 'ADBUTLER_CACHEDIR', ADBUTLER_PLUGINDIR . 'cache/' );
define( 'ADBUTLER_CACHEURL', ADBUTLER_URLPATH . 'cache/' );
define( 'ADBUTLER_ADSERVE_URL','https://adbutler.com/external_request.spark');
//define( 'ADBUTLER_ADSERVE_URL','http://admin.adbutler.com.stephen.dev/external_request.spark');


/**
 * Register plugin activation/deactivation/uninstall hooks and create a class instance
 */
require_once( ADBUTLER_PLUGINDIR . 'includes/adbutler_plugin.class' );
register_activation_hook( ADBUTLER_FILEPATH, array( 'adbutler_plugin', 'activate' ) );
register_deactivation_hook( ADBUTLER_FILEPATH, array( 'adbutler_plugin', 'deactivate' ) );
register_uninstall_hook( ADBUTLER_FILEPATH, array( 'adbutler_plugin', 'uninstall' ) );
global $abinst;
$abinst = adbutler_plugin::get_instance();
$abinst->init();

//Localization High Priority
load_plugin_textdomain('adbutler',false,'adbutler/languages');
?>