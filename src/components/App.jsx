class App extends React.Component {
  constructor(props) {
    super(props);

    this.selectMainVideo = this.selectMainVideo.bind(this);
    this.getVideos = this.getVideos.bind(this);

    props.searchYouTube({}, this.getVideos);

    this.state = { 
      videos: [],
      currentVideo: {'id': '', 'snippet': ''}
    };
  }

  selectMainVideo(videoSelected) {
    this.setState({currentVideo: videoSelected});
  }

  getVideos(data) {
    this.setState({
      videos: data,
      currentVideo: data[0]
    });
  }


  // videoHandler()
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3"> 
          <Search pressSearch={window.searchYouTube} getVideos={this.getVideos} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList selectMainVideo={this.selectMainVideo} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
