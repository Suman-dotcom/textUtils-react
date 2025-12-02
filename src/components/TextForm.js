import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("uppercase was clicked" + text );
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
       // console.log("uppercase was clicked" + text );
        let newText= text.toLowerCase();
        setText(newText)
         props.showAlert("converted to lowercase","success");
    }
    const handleClearClick=()=>{
        //console.log("uppercase was clicked" + text );
        let newText= '';
        setText(newText)
         props.showAlert("Text is cleared","success");
    }
    const handleCopyClick=()=>{
        //console.log("uppercase was clicked" + text );
        navigator.clipboard.writeText(text);
        //setText(newText)
        alert("text copied to clipboard");
        //  props.showAlert("text copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new text");
  return (
    <>
    <div className="container">
         <h1>{props.heading} </h1>

        <div className="mb-3">
            
       <textarea
  className="form-control"
  id="myBox"
  rows="8"
  value={text}
  onChange={handleOnChange}
  style={{
    backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    caretColor: props.mode === 'dark' ? 'white' : 'black'   // ⭐ cursor visible
  }}
></textarea>

            </div>
            <button className="btn btn-warning mx-2" onClick={handleUpClick}> convert to uppercase </button>
            <button className="btn btn-warning mx-2" onClick={handleLoClick}> convert to lowercase </button>
            <button className="btn btn-warning mx-2" onClick={handleClearClick}> clear text </button>
            <button className="btn btn-warning mx-2" onClick={handleCopyClick}> copy text </button>
    </div>
   <div className="container my-3">
    <h2>your text summery</h2>
    <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters </p>
    {/* <p> {text.split(" ").length} words and {text.length} characters</p> */}

    
    <p> {0.008* text.split(" ").length} minutes to read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>

    </>
  )
    }
