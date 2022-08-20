import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnChangeSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    
    const handleUpClick = (event)=> {
        let newText = text.toUpperCase();
        setText(newText); // We use this to change the state
        props.showAlert("Converted to uppercase","success");
    }

    const handleDownClick = (event)=> {
        let newText = text.toLowerCase();
        setText(newText); // We use this to change the state
        props.showAlert("Converted to lowercase","success");
    }

    const searchText = (event)=> {
        if(text.indexOf(searchQuery) !== -1) {
            console.log(text.indexOf(searchQuery));
        }
    }
    const clearText = (event)=> {
        let newText = '';
        setText(newText); // We use this to change the state
        props.showAlert("Cleared the text","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text Copied","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces R","success");
    }

    const[searchQuery,setSearchQuery] = useState('');
    const[text, setText] = useState('');

    return (
        <>
        <div className="container" style = {{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} style = {{backgroundColor:props.color,color:props.mode==='light'?'black':'white'}} className="form-control" id="myBox" rows="10"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
            <button onClick={handleDownClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
            <button onClick={clearText} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style = {{color:props.mode==='light'?'black':'white'}}>
        
            {/* <input value={searchQuery} onChange={handleOnChangeSearch} className="form-control me-2" placeholder="Search text" aria-label="Search"/>
            <button onClick={searchText} className="btn btn-outline-primary my-3">Search</button> */}
        
            <h2>Your Text Summary</h2>
            <p>Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}<br/>Characters:{text.length}<br/> {0.008 * text.split(" ").length} minutes read </p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Enter something in the texxtbox above to preview it here"}</p>
        </div>
        </>
    )
}
