var adbutler;
(function ($) {
    adbutler = {
        default_settings: {},
        settings: {},
        account_data: {},
        zone_list: [],
        zone_list_populated: false,
        init: function (settings) {
            adbutler.settings = $.extend({}, adbutler.default_settings, settings);
            if ($('.adbutler_widget').length > 1) {
                adbutler.populate_zone_lists();
                //adbutler.attach_events();
                // initialize events on all existing items
            }

            $('div.widgets-sortables')
                .on('sortstop', function (event, ui) {
                    // only if this widget has an adbutler_widget container in it (aka ours), do something
                    if (ui.item.find('.adbutler_widget').length == 0)
                        return;

                    // initialize events on the item
                    adbutler.populate_zone_lists(true);
                });
        },
        handle_zone_select: function (selectEl) {
            var $select = $(selectEl),
                $widget = $select.parents('.adbutler_widget'),
                $selected = $select.find('option:selected'),
                zone_id = $selected.val();
            adbutler.populate_widget_type_select($widget, zone_id);
            adbutler.store_selected_zone_defintion($widget, zone_id);
        },

        get_zone_definition: function (zone_id) {
            var def = false;
            $.each(adbutler.zone_list, function (pubid, pubobj) {
                $.each(pubobj.zones, function (k, v) {
                    if (v.zone_id == zone_id) {
                        def = v;
                        return false;
                    }
                });
                if (def)
                    return false;
            });
            return def;
        },

        populate_zone_lists: function (force) {
            force = (force === true);

            if (adbutler.zone_list_populated && force !== true)
                return;

            jQuery.ajax({
                dataType: 'jsonp',
                data: {
                    key: adbutler.settings.adbutler_key,
                    form: 'jsonp',
                    action: 'zones'
                },
                url: adbutler.settings.api_url + "?callback=?",
                // url: "http://admin.adbutler.com/external_request.spark?callback=?",
                jsonp: true
            })
                .done(adbutler.populate_callback_done)
                .fail(adbutler.populate_callback_fail)
                .always(function () {

                });
            adbutler.zone_list_populated = true;
        },


        update_all_lists: function () {
            // find the widgets
            var $sortable_widgets = $('.widgets-sortables'),
                $adbutler_widgets = $sortable_widgets.find('.adbutler_widget');

            // for each widget, find the zone selection drop down for population
            $adbutler_widgets.each(function (k, v) {
                var $widget = $(v),
                    $select = $widget.find('.adbutler_zone_select'),
                    selected_value = $select.data('default-zone');//$select.find(':selected').val();

                // remove any existing options (other than the default)               
                $select.empty().append('<option value="0">-- Select a zone --</option>');
                var o = [];
                // for each zone possibility, add an option to the drop down at the end of the list
                $.each(adbutler.zone_list, function (k, v) {
                    console.log(k,v);
                    if(v.zones !== null){
                    o.push('<optgroup label="' + v.name + '">');
                    $.each(v.zones, function (k, v) {

                        o.push('<option value="' + v.zone_id + '"');
                        // if this zone was our previously selected zone, maintain that selection
                        if (v.zone_id == selected_value)
                            o.push(' selected');
                        o.push('>' + v.zone_name + ' (' + v.zone_size + ')</option>');
                    });
                    o.push('</optgroup>');
                    }
                });
                $select.append(o.join(''));
            });

        },
        populate_callback_done: function (data, status, xhr) {

            if (data.success) {
                adbutler.zone_list = data.success.publisher_zones;
                adbutler.update_all_lists();
            }
            else if (data.failure) {
                console.log(data.failure)
            }
            else
                console.log("Big Failure");
        },
        populate_callback_fail: function (data, status, xhr) {
            console.log("fail");
        },

        populate_widget_type_select: function (widget, zone_id) {
            if (zone_id == 0) {
                adbutler.toggle_tag_type_select(widget, 'AUTO');
            }
            else {
                var zone_def = adbutler.get_zone_definition(zone_id);
                adbutler.toggle_tag_type_select(widget, zone_def.responsive_type);
            }
        },
        toggle_tag_type_select: function (widget, responsive_type) {
            var $select_fixed = widget.find('.adbutler_type_fixed'),
                $select_responsive = widget.find('.adbutler_type_responsive');

            if (responsive_type == 'FIXED') {
                $select_responsive.find('select').prop('disabled', true);
                $select_responsive.hide();

                $select_fixed.find('select').prop('disabled', false);
                $select_fixed.show();
            }
            else if (responsive_type == 'AUTO' || responsive_type == 'INHERIT') {
                $select_fixed.find('select').prop('disabled', true);
                $select_fixed.hide();

                $select_responsive.find('select').prop('disabled', false);
                $select_responsive.show();
            }
            else {
                console.log('Something went terribly terribly wrong...');
            }
        },
        store_selected_zone_defintion: function (widget, zone_id) {
            if (zone_id == 0)
                return;
            var zone_def = adbutler.get_zone_definition(zone_id);
            var $size = widget.find('.size_hidden'),
                $name = widget.find('.name_hidden'),
                $responsive = widget.find('.responsive_hidden');
            $size.val(zone_def.zone_size);
            $name.val(zone_def.zone_name);
            $responsive.val(zone_def.responsive_type);
        }    };
}(jQuery));
adbutler.init(adbutlerParams);



