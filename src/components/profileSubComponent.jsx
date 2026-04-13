import { Link } from "react-router";

export default function SubProfile() {

  return (
    <div>
      <h1>Sub Profile 1</h1>
      <p>This is the first sub profile page. Something is surely going on here</p>
      <Link to="/">Go to Main</Link>
    </div>
  );
}