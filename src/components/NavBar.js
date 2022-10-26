import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <Navbar variant="dark">
      <Link to="/gto-solver">
        {" "}
        <Button variant="outline-light" onClick={() => {}}>
          GTO SOLVER
        </Button>
      </Link>
      <Link to="/range-builder">
        <Button variant="outline-light" onClick={() => {}}>
          RANGE BUILDER
        </Button>
      </Link>
    </Navbar>
  );
}
