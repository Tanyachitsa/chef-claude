import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header-section">
      <FontAwesomeIcon icon={faKitchenSet} className="header-icon" />
      <span className="title">Chef Claude</span>
    </header>
  );
}
