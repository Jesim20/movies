angular.module('appMovies', [])
    .controller('listMoviesController', function ($scope, $http){
    
        try{
            $scope.date = new Date();
            $scope.word = "";
            //Listado
            $scope.moviesList = [];
            $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f366507213d4ad5da2a4aecb1998665d')    
            .then( function(response){
                $scope.moviesList = response.data;
            })
            .catch( function(error){
                $scope.response = "ERROR: " + error;
            })
            //Busqueda
            $scope.searchMovies = function() {
                $http.get('https://api.themoviedb.org/3/search/movie?api_key=f366507213d4ad5da2a4aecb1998665d&query=' + $scope.word)
                    .then( function(response){
                        $scope.moviesList = response.data;
                    })
                    .catch( function(error){
                        $scope.response = "ERROR: " + error;
                    })
            }
            
        }catch(error){
            console.log("ERROR: ", error);
        }
    })