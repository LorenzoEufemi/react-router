import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const apiUrl = "http://localhost:3000";

function PostPage() {
  const [activeArticles, setActiveArticles] = useState([]);



  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
      setActiveArticles(resp.data.post);


    })

  }





  const removeElem = (toRemove) => {
    console.log(toRemove.id);

    axios.delete(`${apiUrl}/posts/${toRemove.id}`).then((resp) => {
      const newArray1 = activeArticles.filter((curItem) => curItem.id !== toRemove.id)
      setActiveArticles(newArray1)
    })

  }

  return (
    <>
      <div className="container">
        <h2>I nostri articoli</h2>
        {activeArticles.length > 0 ? (
          <div className="row row-cols-2 row-cols-lg-3" >
            {
              activeArticles.map((curItem) => (curItem.id ?
                <div className="col" key={curItem.id}>
                  <h4>{curItem.titolo}</h4>
                  <p>{curItem.contenuto}</p>
                  <img src={`${apiUrl}/${curItem.immagine}`} alt={curItem.titolo} />
                  <button onClick={() => { removeElem(curItem) }}>🗑️</button>
                  <Link className="btn btn-primary" to="/post/create">
                    Aggiungi un nuovo post
                  </Link>
                  <Link className="btn btn-success" to={`/post/${curItem.id}`}>
                    Dettagli
                  </Link>
                </div> : ""
              ))
            }
          </div>
        ) : (
          <p>nessun articolo inserito</p>
        )
        }


      </div>
    </>
  )
};
export default PostPage;