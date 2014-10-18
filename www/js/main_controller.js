(function(){
  'use-strict';

  angular.module('bc-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.stopped = true;
    var timer;


    $scope.clear = function(){
      $scope.remain = 0;
    };

    $scope.start = function(){
      $scope.stopped = false;
      timer = $interval($scope.countdown, 1000);
    };

    $scope.stop = function(){
      $scope.stopped = true;
      $interval.cancel(timer);
    };

    $scope.add = function(int){
      $scope.remain += int;
    };

    $scope.countdown = function(){
      $scope.remain -= 1000;

      if($scope.remain <= 0){
        navigator.vibrate([100, 100, 100, 100, 100, 100, 100]);
        $scope.stopped = true;
        $interval.cancel(timer);
      }
    };

    $scope.clear();
  }]);
})();
