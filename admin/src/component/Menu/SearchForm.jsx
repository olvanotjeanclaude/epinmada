export default function SearchForm() {
  return (
    <form className="p-3">
      <div className="form-group m-0">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
          </div>
        </div>
      </div>
    </form>
  )
}
