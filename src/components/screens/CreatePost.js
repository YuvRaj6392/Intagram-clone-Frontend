import React from "react";

export default function CreatePost() {
  return (
    <>
      <div className="card input-filed" 
      style={{margin:'30px auto',maxwidth:'500px',padding:'20px',textAlign:'center'}}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="body" />
        <div className="file-field input-field ">
          <div className="btn waves-effect waves-light #64b5f6 blue darken-2">
            <span>Upload Post</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-2"
          
        >
          Submit Post
         
        </button>
      </div>
    </>
  );
}