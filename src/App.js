import React from 'react'
import './App.css';
import Baloon from './assets/baloon.png'

function App() {

    const [isVisible, setVisible] = React.useState(true);
    const [position, setPosition] = React.useState({x: 0, y: 0});


    const handleClick = (event) => {
        if(isVisible){
            setVisible(false);
            return ;
        }
        const x = event.nativeEvent.offsetX; // current X
        const y = event.nativeEvent.offsetY; // current X
        setVisible(true);
        setPosition({x, y})
    }

    React.useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setVisible(false);
        }, 1500)

        return () => {
            clearInterval(interval);
        }
    }, [isVisible, position])

    return (
        <div className="App" onClick={handleClick}>
            <div className="background"/>
            <h1> Wszystkiego Najlepszego
                <br/>
                Miśka !!!</h1>
            <div className="invisible">
                <img src={Baloon} style={{
                    display: isVisible ? 'block' : 'none',
                    top: `${position.y}px`,
                    left: `${position.x}px`
                }}/>
            </div>
        </div>
    );
}

export default App;
