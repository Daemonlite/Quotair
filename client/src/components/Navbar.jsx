import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
 <div>
<nav className="navbar navbar-dark bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-dark" href="/home">Quotair</a>
    <form className="d-flex mt-3 " role="search">
          <input className="form-control me-2 fill" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success fill" type="submit">Search</button>
        </form>
    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Quaotair</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/feed">Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feed">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feed">Events</a>
          </li>
        {user &&   <li className="nav-item">
            <a className="nav-link" href="/profile">Profile</a>
          </li>}
         {!user &&  <li className="nav-item">
            <a className="nav-link  btn btn-secondary but" href="/">Login</a>
          </li>}
        </ul>
        <br />
      {user &&  <button className="btn btn-secondary but" onClick={logout}>Logout</button>}

        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2 fit" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success fit" type="submit">Search</button>
        </form>
     
      </div>
    </div>
  </div>
</nav>
 </div>
  )
}

export default Navbar
