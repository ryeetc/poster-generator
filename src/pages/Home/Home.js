import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <main className="main">
                <h1 className="main__title">Click the button below to generate a motivational poster</h1>
                <div className="main__container">
                    <img className="main__container--img" src="" alt="random cat"></img>
                    <h3 className="main__container--text">Text will go here</h3>
                </div>
                <button className="main__button">Generate</button>
            </main>
        </div>
    )
}

export default Home;