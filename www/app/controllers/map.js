define([
  'app',
  'services/auth'
], function (app) {
  'use strict';

  app.controller('MapCtrl', function ($scope, $ionicLoading, $timeout) {
    $timeout(function(){
      initialize();
    }, 300)

    function initialize() {
      var myLatlng = new google.maps.LatLng(-23.5169837,-46.6375953);


      var locations = [
        ['Ponto de Coleta 01', -23.5065373,-46.6062129, 4],
        ['Ponto de Coleta 02', -23.5069326,-46.6189593,16, 5],
        ['Ponto de Coleta 03', -23.5069326,-46.6189593,16, 3],
        ['Ponto de Coleta 04', -23.5185839,-46.5685887,17, 2],
        ['Ponto de Coleta 05', -23.5169837,-46.6375953, 1]
      ];

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;


      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
      $scope.map = map;
    }


    // google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function () {
      if (!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Buscando localização atual...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function (pos) {
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function (error) {
        alert('Não foi possivel obter sua localização : ' + error.message);
      });
    };

    $scope.clickTest = function () {
      alert('Local habilitado para receber doações')
    };

  });
});
