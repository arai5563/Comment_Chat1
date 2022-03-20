import { useEffect, useState } from "react";

import { getComments as getCommentsApi , createComment as createCommentApi} from "../api";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const Comments = ({currentUserId}) => {

const [backendComments,setbackendComments] = useState([]);

const rootComments = backendComments.filter(
    (backendComments) => backendComments.parentId === null
);
const getReplies = commentId => {

    return backendComments.filter(backendComments => backendComments.parentId === commentId).sort((a,b) =>
     new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
}

const addComment = (text,parentId) => {

    console.log("addComment",text,parentId);
    createCommentApi(text,parentId).then(comment => {
        setbackendComments([comment,...backendComments])
    })
}
console.log(backendComments);

useEffect(() => {
    getCommentsApi().then(data => {
        setbackendComments(data);
    });

},[])
    return (

        <>
        
        <div >
             <h3>Comments</h3>
             <div>Write Comment</div>
             <CommentForm submitLabel= "Write" handleSubmit={addComment}/>
             <div>

             {rootComments.map((rootComment) => (
               

               <Comment key ={rootComment.id} 
               comment ={rootComment} 
               replies = {getReplies(rootComment.id)}/>
               ))}
             </div>
        </div>
        </>
    )

}