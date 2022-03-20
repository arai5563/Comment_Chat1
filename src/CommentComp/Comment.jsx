import "../CommentStyles/Comment.css";
export const Comment = ({comment,replies}) => {


    return (

       <>
       
       <div>
            <div className="comment-img-cont">
              <img src="f" alt="not avilable" />
            </div>

            <div className="right">
               <div className="comnt-contnt">
                  <div className="cmnt-athor">
                    {comment.username}
                  </div>

                  <div>
                      {comment.createdAt}
                  </div>
                  
               </div>

               <div className="cmnt-text">
                   {comment.body}
               </div>

               <div className="comment-actions" style={{display:"flex", flexDirection:"column"}} >
                  <div className="comment-action">Reply</div>
                  <div className="comment-action">Give reward</div>
                  <div className="comment-action">Share</div>
                  <div className="comment-action">Report</div>
                  <div className="comment-action">Save</div>
               </div>

               {replies.length > 0 && (
                   <div className="replies">
                       {replies.map(reply => (
                          <Comment comment={reply} key={reply.id} replies={[]}/> 
                       ))}
                   </div>
               )}

            </div>
        </div>
        </>
    )

}