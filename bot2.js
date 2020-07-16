var Twit=require('twit');
var config=require('./config');
console.log('The follow bot started');
var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '@harivignesh26998' });

stream.on('follow',followed);

function followed(events){
    

        console.log('some one followed me');
        var name=events.source.name;
        var screenName=events.source.screen_name;
        console.log(name);
        console.log(screenName);
        tweetit('@' + screenName + 'Thank you following me! Do yo like rainbow');
       

}

function tweetit(txt){
    
    var tweet={ 
        status: txt,
    }

    T.post('statuses/update',tweet,tweeted);
}


 function tweeted(err, _data, _response) {
    if(err){
        console.log('something went wrong!!!' +err)
    }
    else{
        console.log('worked!!');

    }
  }
  