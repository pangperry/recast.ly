var CommentList = (props) => (
  <div className="comment-list">
    {props.comments.map((comment) => 
      <CommentListEntry key={comment.id} comment={comment} /> 
    )}
  </div>
  );


window.CommentList = CommentList;
