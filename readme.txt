=== AdButler ===
Contributors: sparklit
Donate link: 
Tags: Adserving, AdButler, advertising, 
Requires at least: 3.3
Tested up to: 3.6
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

AdButler Wordpress Plugin - Simplify deployment of your ad zones with this highly efficient widget based ad deployment plugin

== Description ==

AdButler Wordpress Plugin

The AdButler plugin will generate ad tags enabling you to configure and manage your AdButler ad zones directly from inside your Wordpress administration widget area. 

This plugin requires an AdButler hosted ad management system account to utilize the plugin functionality. Using the AdButler system you can create publisher zones, advertisers and associated banners to help monetize your site and effortlessly manage your ad distribution and configuration. 

Currently this plugin only allows the configuration of widgets within Wordpress. Leaderboard formats and other dimensions outside the standard widget size are not currently supported. Ideal banner sizes are square or rectangle, but if your theme supports it the tags will as well.

A short code implementation is currently under development.

Special Considerations
The Adbutler Plugin communicates with the Adbutler servers under two circumstances.
 First when the API key is input and configured a server to server call is made validating the key and storing basic adserving information for use in generating the tags. 
The second time is during the creation and use of any widgets. At this point the widget makes a AJAX/jsonp call to the AdButler server requesting the current publishers and zones associated with the current account. 
NOTE: In both of these instance the only information sent to the server is the AdButler API key and any information returned in the first request. Additionally no confidential or personal AdButler account information is exchanged.

== Installation ==

**Repository**

1. In your Admin, go to menu Plugins > Add.
2. Search for AdButler.
3. Click to install.
4. Activate the plugin.
5. Click on settings to configure.

**Download**

1. Download the plugin (.zip file) on the right column of this page.
2. In your Admin, go to menu Plugins > Add.
3. Select the tab "Upload".
4. Upload the .zip file you just downloaded.
5. Activate the plugin.
6. Click on the settings to configure.

== Frequently asked questions ==

=Where do I get my plugin key?=

Your Wordpress plugin key is in the settings panel of your AdButler account.


== Screenshots ==

settings-screenshot1.png
widget-screenshot1.png


== Changelog ==

This is the 1.0 beta version.

== Upgrade notice ==

This is an initial release.


