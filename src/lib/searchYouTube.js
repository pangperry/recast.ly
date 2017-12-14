var searchYouTube = (options, callback) => {
  options.key = options.key || window.YOUTUBE_API_KEY;
  options.query = options.query || '';
  options.max = options.max || 5;

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
      console.log('success');
      callback(data.items);
    },
    error: (data) => {
      console.log('error');
    }
  });
};

window.searchYouTube = searchYouTube;
