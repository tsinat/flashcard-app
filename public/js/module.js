'use strict';
var app = angular.module('flashCard', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl'
        })
        .state('flashcard', {
            url: '/flashcard',
            templateUrl: '/html/flashcards.html',
            controller: 'falshcardCtrl'
        })
        .state('quiz', {
            url: '/quiz',
            templateUrl: '/html/quiz.html',
            controller: 'quizCtrl'
        })
        $urlRouterProvider.otherwise('/');
});
