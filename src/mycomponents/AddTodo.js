
import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');


    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be blank')
        }
        else{
            props.addTodo(title,desc);
            setTitle('')
            setDesc('')
        }
    }
  return (
    <div className="container my-3">
       <h3>Add a Todo</h3>
     <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
           Todo Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
        type = 'text'
        value ={desc}
        onChange={(e)=>{setDesc(e.target.value)}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          
          placeholder={'example->JavaScirpt lectures'}
        />
      </div>
      <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
