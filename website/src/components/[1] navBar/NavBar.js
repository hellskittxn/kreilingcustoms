import './NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <h1>Kreiling Marine & Sail</h1> <br/> <h2>Boat Detailing & Services</h2>
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
