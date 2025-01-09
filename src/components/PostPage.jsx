import { useEffect, useState } from "react";
import axios from "axios";


const apiUrl = "http://localhost:3000";

function PostPage() {
    const [activeArticles, setActiveArticles] = useState([]);
  
    const [initialArticles, setInitialArticles] = useState({
  
      titolo: "",
      contenuto: "",
      immagine: "",
      
    });
  
    useEffect(() => {
      getPosts();
    }, []);
    const getPosts = () => {
      axios.get(`${apiUrl}/posts`).then((resp) => {
         setActiveArticles(resp.data.post);
        
      
      })
  
    }
    
  
    const handleArticlesForm = (event) => {
  
      event.preventDefault()
  
        // const newArticle = {
        //   ...initialArticles,
        //   id: Date.now(),
        // };
  console.log(activeArticles);
  
        axios.post(`${apiUrl}/posts`, initialArticles).then((resp) => {
          console.log(resp.data);
          
          const newArray = [...activeArticles, resp.data];
  
        setActiveArticles(newArray);
  
       setInitialArticles(initialArticlesData);
      }
        )}
        
  
  
    
    const removeElem = (toRemove) => {
      console.log(toRemove.id);
      
      axios.delete(`${apiUrl}/posts/${toRemove.id}`).then((resp) => {
        const newArray1 = activeArticles.filter((curItem) => curItem.id !== toRemove.id)
      setActiveArticles(newArray1)
      })
      
    }
    const handleInputChange = (event) => {
      // const keyToChange = event.target.name;
      // // Se l'input è checkbox,
      // //    allora il value da inserire sarà true o false, preso da target.checked
      // let newValue;
      const { name, value, type, checked } = event.target;
      setInitialArticles((prevInitialArticles) => ({
        ...prevInitialArticles,
        [name] : value
      }));
  
      
      // const newData = {
      //   ...initialArticles,
      //   [keyToChange]: newValue,
      // };
  
      // setInitialArticles(newData);
    };
    
  
    return (
      <>
        <div className="container">
          <h2>I nostri articoli</h2>
          {activeArticles.length > 0 ? (
            <div className="row row-cols-2 row-cols-lg-3" >
              {
                activeArticles.map((curItem) => ( curItem.id ?
                <div className="col" key={curItem.id}>
                  <h4>{curItem.titolo}</h4>
                  <p>{curItem.contenuto}</p>
                  <img src={`${apiUrl}/${curItem.immagine}`} alt={curItem.titolo} />
                  <button onClick={() => { removeElem(curItem) }}>🗑️</button>
                </div> : ""
                ))
              }
            </div>
          ) : (
            <p>nessun articolo inserito</p>
          )
          }
  
          <h2>Aggiungi articolo</h2>
          <form action="" onSubmit={handleArticlesForm}>
            <div className="mb-3">
              <label htmlFor="titolo">Inserire titolo </label>
              <input className="form-control" id="titolo" type="text" value={initialArticles.title} onChange={handleInputChange} name="titolo" />
            </div>
  
            <div>
              <label htmlFor="contenuto">Inserire contenuto</label>
              <input type="text" id="contenuto" className="form-control" value={initialArticles.contenuto}
                onChange={handleInputChange} name="contenuto" />
            </div>
            <div>
              <label htmlFor="immagine">Inserire immagine</label>
              <input type="text" id="immagine" className="form-control" value={initialArticles.immagine}
                onChange={handleInputChange} name="immagine" />
            </div>
            
  
  
            <button type="submit" className="btn btn-primary">Salva</button>
          </form>
        </div>
      </>
    )
};
export default PostPage;