import React, { useState } from "react";
import './edit.css';

const Edit = (props) => {
  const [todos, edit_id, setid, index, setter, updater, seteditmode] = [props.todos, props.edit_id, props.setid, props.index, props.setter, props.updater, props.seteditmode];
  console.log("EDIT edit_id is ", props.edit_id);
  console.log("Edit TODOs is ", JSON.stringify(props.todos));

  const todoToEdit = todos.filter((todo) => todo.id === edit_id );
  console.log("todoToEdit is ", JSON.stringify(todoToEdit));

  let todo = {};
  if (index < 0) {
  // new element
  console.log("length of todos is ", todos.length);
  const last_index = todos.length - 1;
  const last_todo = todos[last_index]
  console.log("last id of todos is ", last_todo.id);
  console.log("ADDING new element to todos");
  } else {
  todo = todoToEdit[0];
  }

  let initDT=""
  let initSumm=""
  let initText=""
  if (todo) {
   console.log("and TODO is ", JSON.stringify(todo));
   initDT=todo.datetime
   initSumm=todo.summary
   initText=todo.text
  }
  console.log("initDT is ", initDT);
  console.log("initSumm is ", initSumm);
  console.log("initText is ", initText);
  
  const [datetime, setDatetime] = React.useState(initDT);
  const [summary, setSummary] = React.useState(initSumm);
  const [text, setText] = React.useState(initText);

  const handleDatetime = (event) => {
    setDatetime(event.target.value);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const myprops = {...props, datetime, summary, text };
    console.log("Edit handleSubmit MYPROPS is ", JSON.stringify(myprops));
    updater(myprops); 
  }

  const handleCancel = event => {
    event.preventDefault();
    console.log("Edit handleCancel PROPS is ", JSON.stringify(props));
    setid(-1);
    seteditmode(false)
  }

  return (
	  <>
    <div className="edit">
	  <form onSubmit={handleSubmit} onCancel={handleCancel}>
          <fieldset>
          <div>
	  <label htmlFor="datetime">Datetime</label><input type ="text" id="datetime" value={datetime} onChange={handleDatetime}/>
          </div>
          <div>
	  <label htmlFor="summary">Summary</label><input type ="text" id="summary" value={summary} onChange={handleSummary} />
          </div>
          <div>
	  <label htmlFor="text">Text</label><input type ="text" id="text" value={text} onChange={handleText} />
          </div>
          </fieldset>
	  <button type="submit">Submit Form</button>
          <button type="submit" onClick={handleCancel}>Cancel</button>
	  </form>
    </div>
	  </>
  );
}

export default Edit;
