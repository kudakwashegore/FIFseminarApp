//defining all controllers for the app
//if this was a big app, would have a file for each controller
angular.module('fifApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) { 
	
})

//splash screen
.controller('SplashCtrl', function($scope, $ionicModal, $timeout) {
	  
	 $ionicModal.fromTemplateUrl('templates/tooltip.html', {
		scope: $scope
	  }).then(function(modal) {
		$scope.modal = modal;
		// Triggered in the login modal to close it
		  $scope.closeMessage = function() {
			window.localStorage["firstTimer"] = false;
			$scope.modal.hide();
		  };
		
		  // Open the login modal
		  $scope.showModal = function() {
			$scope.modal.show();
		  }; 
		  
         //display helper pop up
		  if(window.localStorage["firstTimer"] == undefined || window.localStorage["firstTimer"] == "") 
			{ 	
				$scope.showModal();				
				window.localStorage["firstTimer"] = false;
			}	  
		 
	  });
	
})

//program controller
.controller('ProgramCtrl', ['$scope', 'Programs',function($scope, Programs) {
  $scope.programs = Programs.all();
}])

//speaker list controller
.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.all();
})

//speaker details controller
.controller('SpeakerCtrl', ['$scope', '$stateParams', 'Speakers',function($scope, $stateParams, Speakers) {
	$scope.speaker = Speakers.get($stateParams.speakerId);
}])


//songs controller
.controller('SongsCtrl', ['$scope', 'Songs',function($scope, Songs) {
	$scope.songs = Songs.all();
}])

//song details controller
.controller('SongCtrl', ['$scope','$stateParams', 'Songs',function($scope, $stateParams, Songs) {
	$scope.song = Songs.get($stateParams.songId);
}])

//venue controller
.controller('VenueCtrl', ['$scope', 'Map',function($scope, Map) {
	var countTime = 0;  
	//GoogleMaps();
	Map.drawMap();
	
	var initDist = setInterval(function(){	  	
			if(countTime > 300 && distance < 0){alert("Failed to get your current location."); countTime = 0;}
			if(Map.getDistance() != -1)
			{						
				$scope.distance = "You are about " + Map.getDistance() + " from the venue.";
				$scope.$apply();
				clearInterval(initDist);
			}
			countTime++;
	}, 100);  	
}]);
