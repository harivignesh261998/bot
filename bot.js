var Twit=require('twit');
var config=require('./config');
// console.log(config);
var T = new Twit(config);
params={ 
    q: 'rainbow',
    count: 2
}
T.get('search/tweets',params,gotData); 
 function gotData(err, data, response) {
    
     console.log(data['statuses']);
  }


