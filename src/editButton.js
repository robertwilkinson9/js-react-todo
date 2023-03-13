const EditButton = props => {
	const [edit_mode, toggle_edit_callback] = [props.edit_mode, props.toggle_edit_callback]
	console.log("EDIT BUTTON MODE is ", JSON.stringify(edit_mode));

  return (
    <>
      <button className="btn btn-primary" onClick={() => toggle_edit_callback(edit_mode)}>
       Toggle Edit Mode 
      </button>
    </>
  );
};

export default EditButton;
