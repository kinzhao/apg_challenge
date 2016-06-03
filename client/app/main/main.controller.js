'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      console.log("Inside");
      // $scope.$on('$destroy', function() {
      //   socket.unsyncUpdates('thing');
      // });

    }
    $submit(){
      var x = document.getElementById("myFile");
      console.log("Clicked" + x);
      var file = photo.files[0];
      console.log("File name: " + file.fileName);
      console.log("File size: " + file.fileSize);
      return false;
    }

    // $onInit() {
    //   this.$http.get('/api/things')
    //     .then(response => {
    //       this.awesomeThings = response.data;
    //       this.socket.syncUpdates('thing', this.awesomeThings);
    //     });
    // }

    // addThing() {
    //   if (this.newThing) {
    //     this.$http.post('/api/things', {
    //       name: this.newThing
    //     });
    //     this.newThing = '';
    //   }
    // }

    // deleteThing(thing) {
    //   this.$http.delete('/api/things/' + thing._id);
    // }
  }

  angular.module('vaultApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
