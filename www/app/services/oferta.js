define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.service('ofertaService', [
    '$q',
    '$timeout',
    'dataService',
    function ($q, $timeout, dataService) {

      function check(currentOferta) {
        return true;
      }


      this.search = function (searchString) {
        var ofertas = dataService.ofertas,
            deferred = $q.defer(),
            founds = [],
            currentEvent,
            i = 0;

        for (i; i < ofertas.length; i = i + 1) {
          currentEvent = ofertas[i];
          if (currentEvent.nome && currentEvent.nome.indexOf(searchString) !== -1 ||
            currentEvent.cidade && currentEvent.cidade.indexOf(searchString) !== -1 ||
            currentEvent.estado && currentEvent.estado.indexOf(searchString) !== -1) {
            if (check(currentEvent)) {
              currentEvent.thumb = 'http://lorempixel.com/200/200/sports/?' + ((new Date()).getTime() + i);
              founds.push(currentEvent);
            }
          }
        }
        // simulate asynchronous requests
        $timeout(function () {
          deferred.resolve(angular.copy(founds));
        }, 2000);

        return deferred.promise;
      };

      this.getNext = function () {
        var deferred = $q.defer(),
            ofertas = [],
            i = 0;

        for (i; i < dataService.ofertas.length; i = i + 1) {
          if (i === 5) {
            break;
          }
          dataService.ofertas[i].thumb = 'http://lorempixel.com/200/200/sports/?' + ((new Date()).getTime() + i);
          ofertas.push(dataService.ofertas[i]);
        }

        $timeout(function () {
          deferred.resolve(ofertas);
        }, 1000);

        return deferred.promise;
      };

      this.getOne = function (id) {
        var deferred = $q.defer(),
            oferta,
            i = 0;

        for (i; i < dataService.ofertas.length; i = i + 1) {
          if (dataService.ofertas[i].id.toString() === id.toString()) {
            oferta = angular.copy(dataService.ofertas[i]);
            oferta.image = 'http://lorempixel.com/620/480/sports/?' + ((new Date()).getTime() + i);
            break;
          }
        }

        $timeout(function () {
          if (oferta) {
            deferred.resolve(oferta);
          } else {
            deferred.reject();
          }
        }, 1000);

        return deferred.promise;
      };
    }
  ]);
});
