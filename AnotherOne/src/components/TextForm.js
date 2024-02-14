import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [copyText, setCopyText] = useState(<span class="material-symbols-outlined">
    content_copy
    </span>);
    const pasteIt = ()=>{
        navigator.clipboard.readText().then((text)=>{
            setText(document.getElementById("myBox").value += text);
        
        })

    }


    const [text, setText] = useState('Enter text here');
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const ToUpperCase = ()=>{
        let tempText = text.toUpperCase();
        setText(tempText)
    }
    const ClearIt = () =>{
        setText("")
    }
    const ToLowerCase = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    const[currentColor, setColor] = useState('#0c00ff');
    const handleColor = (event)=>{
        setColor(event.target.value);
    
    }
    const CopyText = ()=>{
        let copied = document.getElementById("myBox");
        copied.select(); // Select the text field, so that we can copy the text. 
        navigator.clipboard.writeText(text)//;
        setCopyText(<span class="material-symbols-outlined">
        done
        </span>)
        setTimeout(()=>{
            setCopyText(<span class="material-symbols-outlined">
            content_copy
            </span>)
        },2000)
    }
    return (
   <>
    
<div className="mb-3">
    <h1>{props.welcome}</h1>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control my-3" value={text} onChange={handleChange}id="myBox" rows="7" style={{color: currentColor}}></textarea>
  <button className="btn btn-primary mx-3" onClick={ToUpperCase}>Convert to UPPERCASE</button> 
  <button className="btn btn-warning mx-3" onClick={ToLowerCase}>Convert to lower case</button>
  <button className="btn btn-danger mx-3" onClick={ClearIt}>Clear</button>
  <button className="btn btn-success mx-3" onClick={CopyText}>{copyText}</button>
  <button type="button" onClick={pasteIt}className="btn btn-info"><span class="material-symbols-outlined">
content_paste
</span></button>
<input type="color" className="form-control form-control-color mx-3 my-3" id="colorpicker" title="Choose your color" value={currentColor} onChange={handleColor}></input>
<h4 style={{color: currentColor}}>Hex for the color is {currentColor}</h4>
</div>
<div className="container my-3">
    <h2>Text Summary</h2>
    <ul className="list-styled : sqaure;">
        <il><h4>Number of character are : {text.trim().length}</h4></il>
        <il><h4>Number of words are : {text.split(" ").length-1}</h4></il>
        <il><h4>Time to read : {0.008 * text.split(" ").length} minutes</h4></il>
    </ul>
    <h3>Preview : </h3>
    <p>{text}</p>
    
</div>
   
   </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    welcome: PropTypes.string
    }