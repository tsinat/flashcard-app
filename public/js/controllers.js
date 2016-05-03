'use strict';
var app = angular.module('flashCard');

app.controller('homeCtrl', function($scope, Flashcard) {
    console.log('homeCtrl');

    $scope.addFlashCard = () => {
        Flashcard.create($scope.newflashcard);
        $scope.newflashcard = {};
    }


});
app.controller('falshcardCtrl', function($scope, Flashcard) {
    console.log('falshcardCtrl');

    Flashcard.getAll()
        .then(res => {
            // console.log(res.data);
            $scope.flashcards = res.data;
        })
        .catch(err => {
            console.log("err:", err);
        });

    var editingId;
    $scope.editCard = flashcard => {
        editingId = flashcard._id;
        console.log(flashcard);
        $scope.editFlashCard = angular.copy(flashcard);
    }

    $scope.saveEditedFlashCard = () => {
        Flashcard.edit(editingId, $scope.editFlashCard);
        Flashcard.getAll()
            .then(res => {
                console.log(res.data);
                $scope.flashcards = res.data;
            })
            .catch(err => {
                console.log("err:", err);
            });
        $scope.editFlashCard = {};
    }

    $scope.removeFlashCard = flashcard => {
        Flashcard.delete(flashcard._id);
        Flashcard.getAll()
            .then(res => {
                console.log(res.data);
                $scope.flashcards = res.data;
            })
            .catch(err => {
                console.log("err:", err);
            });
    }
    $scope.formHide = true;
    $scope.hideMyForm = () => {
        if($scope.formHide){
            $scope.formHide = false;
        }
        else{
            $scope.formHide = true;
        }
    }
});
app.controller('quizCtrl', function($scope, Flashcard) {
    $scope.startQuiz = category => {
        Flashcard.getCategory(category)
            .then(res => {
                $scope.selectedCategory = res.data;
                $scope.currentCategory = $scope.selectedCategory[Math.floor(Math.random() * (res.data).length)];
            })
            .catch(err => {
                console.log(err);
            })
    }
    $scope.myAnswer = true;
    $scope.toggleAnswer =( ) => {
        if($scope.myAnswer){
            $scope.myAnswer = false;
        }else{
            $scope.myAnswer = true;
        }
    }
});
