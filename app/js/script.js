var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) { // маршрутиризация
  $routeProvider

  .when('/', {
    controller: 'mainCtrl',
    templateUrl: 'template/home.html'
  })

  $routeProvider

  .when('/:id', {
    controller: 'pageCtrl',
    templateUrl: 'template/page.html'
  })
})

app.controller('mainCtrl', function ($scope, $http) { // получаем json файл с информацией о блоках
  $http.get('js/productJson.json').then(function(response) {
      $scope.products = response.data;
  });
  setTimeout(function () {$('.block-product_face_content span').css({"background": $('.footer').css("background")})}, 10); //небольшой велосипед ))
})

app.controller('pageCtrl', function ($scope, $http, $routeParams) { // получаем json файл с информацией о конкретном блоке
  $scope.number = $routeParams.id;
  $http.get('js/productJson.json').then(function(response) {
      $scope.productsPage = response.data[$scope.number];
      console.log($scope.productsPage);
  });
  $('.block-product_face_content span').css({"background": $('.footer').css("background")})
})
