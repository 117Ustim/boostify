import "./burger.scss";
import { menu_item } from "../../../../data";

export default function Burger() {
  return (
    <div className="burger-menu">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <ul className="menubox">
        <li>
          <span className="menu-item">Menu</span>
        </li>
        {menu_item.map((item, index) => (
          <li key={index}>
            <a className="menu-item" href={item.link}>
              {item.blog}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
