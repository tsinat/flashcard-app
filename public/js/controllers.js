'use strict';
var app = angular.module('flashCard');

app.controller('homeCtrl', function($scope, Falshcard){
    console.log('homeCtrl');

    $scope.addFlashCard = () => {
        Falshcard.create($scope.newflashcard);
    }


})
app.controller('falshcardCtrl', function($scope){
    console.log('falshcardCtrl');
})
app.controller('quizCtrl', function($scope){
    console.log('quizCtrl');
})
