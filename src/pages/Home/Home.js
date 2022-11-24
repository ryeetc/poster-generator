import "./Home.scss";
import axios from "axios"
import { useState, useEffect } from "react";


const Home = () => {

    const [cat, setCat] = useState([])
    const [quote, setQuote] = useState([])
    const [attribution, setAttribution] = useState([])



    useEffect(() => {
        let random = Math.floor(Math.random() * 1000) + 1
        
        const catApi = axios.get("https://api.thecatapi.com/v1/images/search")
        catApi  
            .then((response) => {
                let pic = response.data[0].url
                setCat(pic)
            })

        const quoteApi = axios.get("https://type.fit/api/quotes")
            quoteApi
                .then((response) => {
                    let quote = response.data[random]
                    setQuote(quote.text)
                    setAttribution(quote.author)
                })
    }, [])

    const handleClick = () => {

        let random = Math.floor(Math.random() * 1000) + 1
        
        const catApi = axios.get("https://api.thecatapi.com/v1/images/search")
        catApi  
            .then((response) => {
                let pic = response.data[0].url
                setCat(pic)
            })

        const quoteApi = axios.get("https://type.fit/api/quotes")
        quoteApi
            .then((response) => {
                let quote = response.data[random]
                setQuote(quote.text)
                setAttribution(quote.author)
            })
        
    }

    return (
        <div className="home">
            <main className="main">
                <h1 className="main__title">Click the button below to generate a motivational poster</h1>
                <div className="main__container">
                    <img className="main__container--img" src={cat} alt="random cat"></img>
                    <h3 className="main__container--text">{quote}</h3>
                </div>
                <button onClick={handleClick} className="main__button">Generate</button>
            </main>
        </div>
    )
}

export default Home;