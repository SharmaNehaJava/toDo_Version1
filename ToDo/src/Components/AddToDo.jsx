function AddToDo() {
  return (
    <div className="Input_Center kg-row">
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Enter ToDo Here"></input>
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
