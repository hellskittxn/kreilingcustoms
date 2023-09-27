import './NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <h1>Kreiling Customs</h1>
      </div>
      <div className="right">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
