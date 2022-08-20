import React, { useState } from 'react'

export default function About(props) {
    const[myStyle,setMyStyle] = useState({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
    });

    const[btnText,setBtnText] = useState('Enable Dark Mode');
    const toggleStyle = ()=>{
        if(myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode');
        }

        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText('Enable Light Mode');      
        }
    }

    return (
    <div className='container' style = {{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
        <h1>About Text Utils Functionalities</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
                Convert to Uppercase and Lowercase
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
                Converts any text in the text box to uppercase or lowercase respectively
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
                Clear text
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
                Clears the tect
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
                Remove Extra Spaces
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.color,color:props.mode === 'light'?'black':'white'}}>
               Removes the spaces between characters. If you put two spaces between words, then this utility will remove those spaces.
            </div>
            </div>
        </div>
    </div>
</div>
  )
}
