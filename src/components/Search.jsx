// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text"/>
//     <button onClick={function() { 
//       props.pressSearch({'query': $('.form-control').val()}, props.getVideos); 
//     }} className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.state = { 
      options: {
        'key': window.YOUTUBE_API_KEY,
        'max': 5,
        'query': '',
      }
    };

    this.handleChange = this.handleChange.bind(this);


    this.search = props.pressSearch.bind(this);
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
      <input className="form-control" type="text" value={this.state.options.query} onChange={this.handleChange}/>
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
