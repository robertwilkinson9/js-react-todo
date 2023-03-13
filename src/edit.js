import './edit.css';
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
	  {/* <form onSubmit =""> */}
	  <form>
	  <table className="table table-hover">
	  <tbody>
	  <Datetime />
	  <Text />
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
