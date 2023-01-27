'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl:'blog-Detail/blog-Detail.template.html',
        controller: ['$routeParams', '$http',
      function BlogDetailController($routeParams, $http) {
        var self = this;
        self.blogId = $routeParams.id;
        $http.get(`https://jsonplaceholder.typicode.com/posts/${self.blogId}`)
          .then((response) => {
            //console.log(response);
            self.blog = response.data;
            // self.dummyArray = response.data.body.split(' ');
            // console.log(self.blog);
            $http.get(`https://jsonplaceholder.typicode.com/comments?postId=${response.data.userId}`)
            .then((resp) => {
            self.comments = resp.data;
            }).catch(err => alert(`This blog COMMENT not found!`));
            $http.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`).then(
            (respn) => {
              self.author = respn.data;
            }
          ).catch(err => alert("Author not found"));
          })
          .catch(err => alert(`This blog not found!`));
          

          // self.userid = self.blog.userId;
          
      }
    ]
    })