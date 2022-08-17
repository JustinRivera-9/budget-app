import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="my-name">
          EASY BUDGET
        </a>
        <ul className="nav-items">
          <li>
            <a href="#">OVERVIEW</a>
          </li>
          <li>
            <a href="#">DETAILED</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
