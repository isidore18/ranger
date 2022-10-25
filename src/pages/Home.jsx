import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
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
    </>
  );
}
