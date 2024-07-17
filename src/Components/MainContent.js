import React from "react";
import "./MainContent.css"
import {useState} from "react";

export default function MainContent(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    });
    const [allMemeImages, setAllMemeImages] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    function memeRendering() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) }
    
    function handleChange(event){
        const{name,value} = event.target;
        setMeme(
            prevMeme=>{
                return{
                    ...prevMeme,
                    [name]:value
                }
            }
        )
    }
    return(
        <div className="main">
            <div className="inputs">
                <div>
                    <p>Top text</p>
                    <input placeholder="Enter.." type="text" title="top" name="topText" onChange={handleChange}></input>
                </div>
                <div>
                    <p>Bottom text</p>
                    <input placeholder="Enter.." type="text" title="bottom" name="bottomText" onChange={handleChange}></input>
                </div>
            </div>
            <button className="img-btn" onClick={memeRendering}>Get a new meme image</button>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}