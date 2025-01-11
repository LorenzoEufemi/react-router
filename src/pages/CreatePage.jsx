import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = "http://localhost:3000";

function CreatePage() {
    const [initialArticles, setInitialArticles] = useState({

        titolo: "",
        contenuto: "",
        immagine: "",

    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        // const keyToChange = event.target.name;
        // // Se l'input è checkbox,
        // //    allora il value da inserire sarà true o false, preso da target.checked
        // let newValue;
        const { name, value, type, checked } = event.target;
        setInitialArticles((prevInitialArticles) => ({
            ...prevInitialArticles,
            [name]: value
        }));


        // const newData = {
        //   ...initialArticles,
        //   [keyToChange]: newValue,
        // };

        // setInitialArticles(newData);
    };
    const handleArticlesForm = (event) => {

        event.preventDefault()

        // const newArticle = {
        //   ...initialArticles,
        //   id: Date.now(),
        // };
       

        axios.post(`${apiUrl}/posts`, initialArticles).then((resp) => {
            console.log(resp.data);
            navigate("/post");


        }
        )
    }
    return (
        <section>
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

        </section>
    )

};

export default CreatePage;