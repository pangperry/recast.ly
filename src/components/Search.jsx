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
    this.handleKeyPress = _.debounce(this.handleKeyPress.bind(this), 500);
    this.search = props.pressSearch.bind(this);
  }

  handleKeyPress(event) {
    this.search(this.state.options, this.props.getVideos);
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
      <input className="form-control" type="text" value={this.state.options.query} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
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
