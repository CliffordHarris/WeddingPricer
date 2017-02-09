var csb = angular.module('csb', []);

csb.controller('weddingPriceController', ['$scope', function($scope){
	
	$scope.guestCount = 1;
	$scope.gazebo = 25;
	$scope.cPlate2 = 30;
	$scope.cPlate3 = 35;
	$scope.gPlate2 = 40;
	$scope.gPlate3 = 45;
	$scope.gratuity = .18;
	$scope.tax = .051;
	$scope.drinks = [ 
		{ name: "Beer Wine & Soda", price: 2.3 }, 
		{ name: "Call Brand", price: 4.5 },
		{ name: "Radiant Cut", price: 6.7 },
		{ name: "Princess Cut", price: 7.8 } 
	];

	$scope.drinkPrice;
	$scope.sum;
	$scope.plate;
	$scope.re = re;	
	$scope.getPriceForDrinks = getPriceForDrinks;
	$scope.selectPlate = selectPlate;
	$scope.selectBuffet = selectBuffet;
	$scope.findSum = findSum;
	$scope.totalCost;
	$scope.grandBuffet = grandBuffet;
	$scope.isReady = false;

	if ($scope.guestCount && $scope.drinkPrice && $scope.foodPrice) {
		var sub = $scope.guestCount * ($scope.singleDrinkPrice + $scope.plate);
		$scope.totalCost = $scope.gazebo + sub;
		$scope.isReady = true;
	}

	function re () {
		location.reload(); 
	}

	function selectPlate (plate) {
		console.log(plate);
		if ($scope.buffet) {
			$scope.plate = plate;
			$scope.entree = plate + " Entree Plate";
			$scope.selectBuffet($scope.buffet);
		} else{
			alert("Choose a Buffet first!");
		}
		findSum();
	}

	function selectBuffet (buffet) {
		console.log(buffet);
		if(buffet == "Grand Buffet"){
			$scope.buffet = "Grand Buffet";
			grandBuffet($scope.plate);
		} else {
			$scope.buffet = "Country Springs Buffet 2"
			csb2($scope.plate);
		}
		$scope.foodPrice = $scope.plate * $scope.guestCount;
		findSum();
	}

	function csb2 (entreeCount) {
		$scope.plate = entreeCount == 2 ? $scope.cPlate2 : $scope.cPlate3;
		findSum();
	}

	function grandBuffet(entreeCount) {
		$scope.plate = entreeCount == 2 ? $scope.gPlate2 : $scope.gPlate3;
		findSum();
	}

	function getPriceForDrinks (drink) {
		$scope.drinkName = drink.name;
		$scope.singleDrinkPrice = drink.price;
		$scope.drinkPrice = $scope.guestCount * drink.price;
		findSum();
	}

	function findSum() {
		$scope.isReady = false;
		if ($scope.guestCount && $scope.drinkPrice && $scope.foodPrice) {
			var sub = $scope.guestCount * ($scope.singleDrinkPrice + $scope.plate);
			var total = $scope.gazebo + sub;
			var taxTotal = total * $scope.tax + total;
			var outOfPockettotal =  taxTotal * $scope.gratuity + taxTotal;
			$scope.totalCost = outOfPockettotal.toFixed(2);
			$scope.isReady = true;
		}
	}
}]);





