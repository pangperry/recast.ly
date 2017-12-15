class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      options: {
        'key': window.YOUTUBE_API_KEY,
        'max': 5,
        'query': '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = _.debounce(this.handleKeyPress.bind(this), 1000);
    this.search = props.pressSearch.bind(this);
    this.searchComments = props.pressComments.bind(this);
  }

  handleKeyPress(event) {
    this.search(this.state.options, this.props.getVideos);
    this.searchComments({}, this.props.getComments);
  }

  handleChange(event) {
    this.setState({
      options: {
        query: event.target.value
      }
    }); 
  }

  render() {    

    return (
    <div className="search-bar form-inline"> 
      <input className="form-control" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        <button onClick={() => { this.search(this.state.options, this.props.getVideos); }} className="btn hidden-sm-down">
         <span className="glyphicon glyphicon-search"></span>
        </button>
    </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
