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
    // $updateSize(){
    //   console.log("Locked and Loaded");
    //   var nBytes = 0,
    //       oFiles = document.getElementById("uploadInput").files,
    //       nFiles = oFiles.length;
    //   for (var nFileId = 0; nFileId < nFiles; nFileId++) {
    //     nBytes += oFiles[nFileId].size;
    //   }
    //   var sOutput = nBytes + " bytes";
    //   // optional code for multiples approximation
    //   for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    //     sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    //   }
    //   // end of optional code
    //   document.getElementById("fileNum").innerHTML = nFiles;
    //   document.getElementById("fileSize").innerHTML = sOutput;
    //   return false;
    // }
    
    $submit(){
      console.log("Clicked");
      var selectedFile = document.getElementById('input').files[0];
      
      if(selectedFile != 'undefine'){
        console.log("Not empty");
    
      } else
        console.log("Empty");

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
