class VideoDetails extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>    
    );
  }
}

{/* need to add a new ajax call here to get new information from youtube
   the ajax call should take the video id and use that to return a new ajax response object
   that includes information other than the snippet info we already have*/}




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
