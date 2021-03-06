(function ($) {

  Drupal.behaviors.leafletMapField = {
    attach:function (context, settings) {

    var latitude = Drupal.settings.leaflet_map_field.lat; 
    var longitude = Drupal.settings.leaflet_map_field.lon;

    var map = L.map('field_map', {maxZoom: 17}).setView([51.495, -0.075], 14);
    var marker;
    var imageUrl = Drupal.settings.leaflet_map_field.image_path; //'/sites/default/files/TM_pano.jpg';
    var imageBounds =[[51.490, -0.122], [51.510, -0.028]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);


    function onMapClick(e) {
        console.log(e);
        $('.leaf-map-field').val(e.latlng.lat+', '+ e.latlng.lng);
        console.log(marker);
        if(typeof marker !== "undefined"){
           console.log('hola d ddd');
           map.removeLayer(marker);
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng]);
        map.addLayer(marker);
    }
    punto = $('.leaf-map-field').val();
    console.log(typeof(punto));
    if(punto != ''){
        var latlng =  punto.split(',');
        marker = L.marker([latlng[0], latlng[1]]);
        map.addLayer(marker);
      console.log(punto);
    }
    map.on('click', onMapClick);
    map.setMaxBounds(imageBounds);
    }
  };
})(jQuery);
