class App extends React.Component {
  constructor(props) {
    super(props);

    this.selectMainVideo = this.selectMainVideo.bind(this);
    this.getVideos = this.getVideos.bind(this);
    this.getComments = this.getComments.bind(this);

    this.state = { 
      videos: [],
      currentVideo: {'id': '', 'snippet': ''},
      comments: [],
    };
  }

  componentDidMount() {
    window.searchYouTube({}, this.getVideos);
    window.searchComments(this.state.currentVideo.id.videoId, this.getComments);
  }

  selectMainVideo(videoSelected) {
    this.setState({currentVideo: videoSelected});
    window.searchComments(videoSelected.id.videoId, this.getComments);
  }

  getComments(data) {
    this.setState({comments: data});
  }

  getVideos(data) {
    this.setState({
      videos: data,
      currentVideo: data[0]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3"> 
          <Search pressSearch={window.searchYouTube} pressComments={window.searchComments} getVideos={this.getVideos} getComments={this.getComments} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
            <CommentList comments={this.state.comments} />
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
