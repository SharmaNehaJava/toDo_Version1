function AddComponent({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-1">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddComponent;
