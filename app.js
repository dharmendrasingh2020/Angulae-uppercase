( function(){
  'use strict';
  angular.module('DIApp', [])
  .controller('DIController', DIController);
  
     function DIController($scope,$filter){
$scope.name = "Dharmendra";

    $scope.upper= function()
    {
var upCase=$filter('uppercase');
    $scope.name= upCase($scope.name);
     };
     
    }
function annotate(name,job,blah)
{
    return  "blah";
}
})();
 