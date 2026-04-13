import { useParams } from "react-router";
import DefaultProfile from "./defaultProfile.jsx";
import OtherSubProfile from "./otherSubComponent";
import SubProfile from "./profileSubComponent";

import { Link } from "react-router";

export default function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page. Nothing much going on here.</p>
      <Link to="./sub">Go to Sub Profile</Link>
      <Link to="./other">Go to Other Sub Profile</Link>
      { name === "other" ? <SubProfile /> : name === "sub" ? <OtherSubProfile /> : <DefaultProfile /> }
    </div>
  );
}