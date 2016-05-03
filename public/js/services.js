'use strict';
var app = angular.module('flashCard');

app.service('Falshcard', function($http, $q){
    this.getAll = () => {
        return $http.get('/api/flashcards');
    }
    this.getById = id => {
        return $http.get(`/api/flashcards/${id}`);
    }
    this.create = flashcard => {
        console.log(flashcard);
        // return $http.post('/api/flashcards', flashcard);
    }
    this.delete = id => {
        return $http.delete(`/api/flashcards/${id}`);
    }
    this.edit = flashcard => {
        return $http.put(`/api/flashcards/${id}`, flashcard )
    }
});
