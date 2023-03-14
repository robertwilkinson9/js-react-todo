import './edit.css';

const Edit = () => {
  return (
	  <>
	        <div className="row mb-2">
	          <h5 className="themeFontColor text-center">
	            Form for adding new items
	          </h5>
	        </div>
    <div className="edit">
      <header className="edit-header">
	  {/* <form action =""> */}
	  {/* <form onSubmit =""> */}
	  <form>
	  <table className="table table-hover">
	  <tbody>
	  <tr><td>Datetime</td><td><input type ="text" id="datetime" /></td></tr>
	  <tr><td>Summary</td><td><input type ="text" id="summary" /></td></tr>
	  <tr><td>Text</td><td><input type ="text" id="text" /></td></tr>
	  </tbody>
	  </table>
	  <input type="submit" />
	  </form>
      </header>
    </div>
	  </>
  );
}

export default Edit;
