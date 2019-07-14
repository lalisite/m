app.controller('gCtrl', function($scope,gSrv) {

    $scope.goral="";
    
    var rndNum=0;
    
    $scope.result="";
    //console.log();
    $scope.goral=async function(g,n){
            //rnd num 
            rndNum=Math.floor((Math.random()*n)+1);
           
            await  gSrv.getGoralById(g,rndNum.toString()).then(function (res) {
                $scope.result=res;

                $scope.$apply();
        })
    } ;
 
   


});