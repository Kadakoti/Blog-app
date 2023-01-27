
angular.module("authors").component('authors',{
    templateUrl:"authors/author.template.html",
    controller: ['$http', function AuthorsController($http){
        $http.get(`http://jsonplaceholder.typicode.com/users`).then(
            (response) =>{
                this.authors = response.data;
            }
        ).catch(err => alert("Authors data not found"))
    }
    ]
})