app.controller('IssueCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.rowCollectionBasic = [
      {Sno: 1, itemcode: 15230, itemname: 'CAKE BOARD 1/2 KG', balance: 102, uom: 'NOS',rate: 3,ret_qty: 4,city: 'chennai',value: 123},
      {Sno: 2, itemcode: 552340, itemname: 'CAKE BOARD 1/3 KG', balance: 323, uom: 'TEST',rate: 6,ret_qty: 1,city: 'puducherry',value: 342},
      {Sno: 3, itemcode: 45230, itemname: 'CAKE BOARD 1/2 KG', balance: 4233, uom: 'DATA',rate: 2,ret_qty: 2,city: 'chennai',value: 23}
  ];
}]);