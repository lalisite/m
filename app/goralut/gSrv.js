app.factory("gSrv", function ($http, $q) {
    
     
            async function getGoralById(goral,gId) 
            {
                
                    let res= await  $http.get("db/"+goral+".json").then(function(response) {
                    let myData = response.data.data;
                    return myData[gId-1].meaning;
                    
                    });

                    return res;
            }

   
    
            
    return {

        getGoralById:getGoralById

    }


})