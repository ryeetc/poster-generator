import "./Home.scss";
import axios from "axios"
import { useState, useEffect } from "react";


const Home = () => {

    const [cat, setCat] = useState([])

    useEffect(() => {
        const catApi = axios.get("https://api.thecatapi.com/v1/images/search")
        catApi  
            .then((response) => {
                let pic = response.data[0].url
                setCat(pic)
            })
    }, [])
   

    return (
        <div className="home">
            <main className="main">
                <h1 className="main__title">Click the button below to generate a motivational poster</h1>
                <div className="main__container">
                    <img className="main__container--img" src={cat} alt="random cat"></img>
                    <h3 className="main__container--text">Text will go here</h3>
                </div>
                <button className="main__button">Generate</button>
            </main>
        </div>
    )
}

export default Home;