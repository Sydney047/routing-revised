import { useNavigate } from "react-router";

export default function DefaultProfile() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Default Profile</h1>
            <p>This is the default profile page.</p>
            <button onClick={() => navigate("./sub")}>Go to Sub Profile</button>
            <button onClick={() => navigate("./other")}>Go to Other Sub Profile</button>
            <button onClick={() => navigate("/")}>Go to Main</button>
        </div>

    )
} 