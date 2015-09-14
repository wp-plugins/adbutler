=== AdButler ===
Contributors: sparklit
Donate link: 
Tags: Ad serving, AdButler, Ad Server,Ad Management,Ad Rotation
Requires at least: 3.3
Tested up to: 4.3
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

AdButler Wordpress Plugin - Simplify deployment of your ad zones with this highly efficient widget based ad deployment plugin

== Description ==

**AdButler Wordpress Plugin**

The AdButler plugin will generate ad tags enabling you to configure and manage your AdButler ad zones directly from inside your Wordpress administration widget area. 

_This plugin requires an AdButler hosted ad management system account_ to utilize the plugin functionality. Using the AdButler system you can create publisher zones, advertisers and associated banners to help monetize your site and effortlessly manage your ad distribution and configuration. 

Currently this plugin only allows the configuration of widgets within Wordpress. Leaderboard formats and other dimensions outside the standard widget size are not currently supported. Ideal banner sizes are square or rectangle, but if your theme supports it the tags will as well.


**Special Considerations**
The Adbutler Plugin communicates with the Adbutler servers under two circumstances.
First when the API key is input and configured a server to server call is made validating the key and storing basic adserving information for use in generating the tags. 
The second time is during the creation and use of any widgets. At this point the widget makes a AJAX/jsonp call to the AdButler server requesting the current publishers and zones associated with the current account. 

**NOTE:** In both of these instance the only information sent to the server is the AdButler API key and any information returned in the first request. Additionally no confidential or personal AdButler account information is exchanged.

== Installation ==

A visual walk through for setting it up is available here
http://www.adbutlerhelp.com/adbutler-wordpress-plugin

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

= Where do I get my plugin key? =
Your Wordpress plugin key is in the settings panel of your AdButler account.

= Do I require an AdButler account =
Yes


== Screenshots ==

1. screenshot-1.png
1. screenshot-2.png


== Changelog ==

*1.03 Fixed some connection issues.
*1.04 Fixed widgets on customize appearance page.
*1.05 Added the ability to associate AdButler keywords with a given post.
*1.06 Added Async Javascript support.
*1.07 Added Support for shortcodes.
*1.08 Fixed development bug.
*1.09 Added Secure Tags and Refresh Settings.
*1.10 Tag cleanup and secure bug fix.
*1.11 Compatability with customizer.  
*1.12 Compatability with plugins enhancement

== Upgrade notice ==

Added a manual refresh button for the zone list to ensure it will work with client side building plugins like pagebuilder
 


