import React from 'react'

const Jumbotron = () => {
    return (

        <div className="card text-bg-dark">
            <img src="src/img/kawa1.jpg"
                className="card-img" alt="..."
                style={{ width: "100%", height: "700px", display: "block", objectFit: "cover"  }} />
            <div className="card-img-overlay">
                <h1 className="card-title" style={{ color:"black", fontSize: "120px", fontWeight: "bold" , marginTop:"40px", }} >Kawasaki</h1>
                <h3 className="card-text" style={{marginTop:"23%"}} >Un mundo de emoción, diseño y potencia...!!!</h3>
    
            </div>
        </div>
    )
}
export default Jumbotron;