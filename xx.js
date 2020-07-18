function tinyFriend(numbers){
        var tiny =numbers[0];
        for(var i=0; i<numbers.length; i++){
        var friendList = numbers[i];
        if(friendList.length < tiny.length){
        tiny = friendList;
        }
         }
        return tiny;
    }
    var friendsList = ['karimullah','monirul','rayhan','hasanuzzaman','mehjabin'];
    console.log(tinyFriend(friendsList));