import { useState } from "react"

export const CommentForm = ({handleSubmit,submitlabel}) => {

    const [text,setText] = useState("");
    const onSubmit = event => {

        event.preventDefault();
        handleSubmit(text);
        setText("");
    }

    return (

        <div>
            <form onSubmit={onSubmit}>
                
                 <textarea value={text} onChange ={
                     (e) => setText(e.target.value)
                 } />

                 <button>{submitlabel} Click</button>


            </form>
        </div>
    )

}