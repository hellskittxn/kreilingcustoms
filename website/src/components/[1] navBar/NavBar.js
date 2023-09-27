import './NavBar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <h1>Kreiling Marine & Sail</h1> <br/> <h2>Boat Detailing & Services</h2>
      </div>
      <div className="right">
        <ul>
            <li class="li-icons"><i class="bin bi-house"></i><a href="">Home</a></li>
            <li class="li-icons"><i class="bin bi-tools"></i><a href="">Services</a></li>
            <li class="li-icons"><i class="bin bi-currency-dollar"></i><a href="">Pricing</a></li>
            <li class="li-icons"><i class="bin bi-telephone"></i><a href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
