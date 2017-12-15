class CommentListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-list-entry">
        <p className="comment-list-name">{this.props.comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
        <p className="comment-list-text">{this.props.comment.snippet.topLevelComment.snippet.textDisplay}</p>
      </div>
    );
  }
}


window.CommentListEntry = CommentListEntry;
