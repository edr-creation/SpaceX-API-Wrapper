const SpaceXAPI = require('../../index');

let SpaceX = new SpaceXAPI();

SpaceX.getAllLaunchPads(function(err, info){
    console.log(err);
    console.log(info);
});