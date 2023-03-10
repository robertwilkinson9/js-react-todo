import './edit.css';
import Summary from './summary';
import Datetime from './datetime';
import Text from './text';

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
	  <form onSubmit ="">
	  <table className="table table-hover">
	  {/* <tr><td>Summary</td><td><input type ="text" id="summary" /></td></tr> */}
	  { /* <tr><td>Datetime</td><td><input type ="text" id="datetime" /></td></tr> */}
	  { /* <tr><td>Text</td><td><input type ="text" id="text" /></td></tr> */ }
	  <Summary />
	  <Datetime />
	  <Text />
	  </table>
	  <input type="submit" />
	  </form>
	  { /*`
	  <table className="table table-hover">
	  <form>
	  <tr><td><label for="summary">Summary</label></td><td><input type ="text" id="summary" /></td></tr>
	  <tr><td><label for="datetime">Datetime</label></td><td><input type ="text" id="datetime" /></td></tr>
	  <tr><td><label for="text">Text</label></td><td><input type ="text" id="text" /></td></tr>
	  </form>
	  </table>
	  */ }
      </header>
    </div>
	  </>
  );
}

export default Edit;
