
const Navbar = () => {
 

  return (
 <div>
<nav class="navbar navbar-dark bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-dark" href="/home">Quaotair</a>
    <form class="d-flex mt-3 look" role="search">
          <input class="form control me-2 find" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
    <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Quaotair</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/feed">Popular</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/feed">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/feed">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/feed">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  btn btn-secondary but" href="/login">Login</a>
          </li>
        </ul>
        <br />
        <button className="btn btn-secondary but">Logout</button>
     
      </div>
    </div>
  </div>
</nav>
 </div>
  )
}

export default Navbar
