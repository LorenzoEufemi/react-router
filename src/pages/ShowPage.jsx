import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const apiUrl = "http://localhost:3000";

function ShowPage() {
    const [post, setPost] = useState(null);
    
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${apiUrl}/posts/${id}`)
            .then((resp) => {
                setPost
                    (resp.data);
            })
            .catch((err) => {
                if (err.status === 404) {
                    navigate("/not-found");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <>
            <div>
                <a className="btn btn-primary" onClick={() => navigate(-1)}>
                    Ritorna
                </a>
            </div>
            {post && (
                <div>
                    <h1>{post.titolo}</h1>
                    <img className="w-50" src={`${apiUrl}/${post.immagine}`} alt="" />

                    <div className="mt-4">
                        <Link className="btn btn-primary" to={`/post/${post.id - 1}`}>
                            Precedente
                        </Link>
                        <Link className="btn btn-primary" to={`/post/${post.id + 1}`}>
                            Successiva
                        </Link>
                    </div>
                </div>
            )}
            {loading && <p>Loading...</p>}
        </>
    );
}

export default ShowPage;