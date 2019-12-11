var axios = require('axios');
var TV = function() {
  this.findShow = function(term) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + term;

    axios.get(URL).then(function(res){
    // console.log(res.data);
    var JSONdata=res.data;
      var showData=[
        'Name: '+JSONdata.name,
        "Genres: "+JSONdata.genres.join(', '),
        'Rating: '+JSONdata.rating.average,
        'Network Name: '+JSONdata.network.name,
        'Summary: '+JSONdata.summary
      ]
      console.log(showData);
      // console.log(showData);
      }).catch(function(error){
        console.log(error);
      })
      
  };
};

module.exports = TV;
