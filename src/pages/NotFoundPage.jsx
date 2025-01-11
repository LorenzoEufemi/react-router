import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <button className="btn btn-primary"
                onClick={() => {
                    navigate(-1);
                }}
            >
                indietro
            </button>
            <Link to="/">Home</Link>
        </>
    );
}

export default NotFoundPage;