app.factory('gameFactory', function() {
  var factory = {};
    
  factory.gameList = new Array();
  factory.userGameList = new Array();
  factory.startList = function(param){
    factory.gameList = param;
  }
  factory.addGameToList = function(param){
    factory.gameList.push(param);
  }
  factory.getGameList = function(){
    return factory.gameList;
  }
  factory.getUserList = function(){
    return factory.userGameList;
  }
  factory.addUserGameToList = function(param){
    factory.userGameList.push(param);
  }
  factory.checkList = function(param){
    if(typeof param != "undefined" && param != null && param.length > 0){
      return true;
    }
    else{
     return false;
    };
  }
  factory.isGameThereUSer = function(value,list){
      var isThere=false;
      var i=0;
          while(i<list.length && isThere==false)
          {
            var j=0;
              while(j<value.length && isThere==false)
              {
          if(value[j].name.toUpperCase()==list[i].name.toUpperCase()){
                    isThere=true;
                }
                j++;
              }
              i++;
          }  
      return isThere;
  }
  factory.isGameThere = function(value,list){
      var isThere=false;
      var i=0;
          while(i<list.length && isThere==false)
          {
            if(value.name.toUpperCase()==list[i].name.toUpperCase()){
              isThere=true;
            }
            i++;
          }  
      return isThere;
  }
   return factory;
});