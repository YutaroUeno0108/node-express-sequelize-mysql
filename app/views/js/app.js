var app = angular.module('app',['ngResource','ui.router']);

app.config(['$stateProvider',function($stateProvider){
  $stateProvider
  .state('detail',{
    url:'sample/{id:int}',
    templateUrl:'detail.html'
  })
}]);

app.controller('appController',['$scope','$resource','$window','$timeout',function($scope,$resource,$window,$timeout){
  $scope.message = '';
  $scope.loadData = function(){
    $scope.message = "please wait a moment";

    var samples = $resource(
      'http://localhost:3001/sample',
      {get:{method:'GET'}}
    );
    var sampleList = samples.get(
      function(){
        $scope.jsonData = sampleList;
        $scope.samples = $scope.jsonData.res.result;
        $scope.message = 'Complete';
      }
    );
  };
}]);

app.controller('detailController',['$scope','$stateParams','$resource',function($scope,$stateParams,$resource){
  $scope.paramdetail = $stateParams.id;
  $scope.sampleId = '';
  $scope.sampleName = '';
  var samples = $resource(
    'http://localhost:3001/sample/:sampleid',
    {sampleid:$scope.paramdetail},
    {get:{method:'GET'}}
  );
  var sample = samples.get(
    function(){
      $scope.jsonDetail = sample;
      $scope.sampleDetail = $scope.jsonDetail.res.result;
      $scope.sampleId = $scope.sampleDetail.sample_id;
      $scope.sampleName = $scope.sampleDetail.sample_name;
      $scope.message = 'Complete';
    }
  );
}]);
