var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: (data) => {
      alert('success');
      callback(data);
    },
    error: (data) => {
      console.log('window: ' + window);
    }
  });
};

window.searchYouTube = searchYouTube;
