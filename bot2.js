var Twit=require('twit');
var config=require('./config');
// console.log(config);
var T = new Twit(config);

var tweet={ 
    status: '#piatta' 
}

T.post('statuses/update',tweet,tweeted);

 function tweeted(err, data, response) {
    if(err){
        console.log('something went wrong!!!' +err)
    }
    else{
        console.log(data)

    }
  }
  