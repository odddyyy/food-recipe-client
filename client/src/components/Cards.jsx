import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'


export default function Cards({ recipe }) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="card mb-3" style={styles.cards}>
                <img src={recipe.recipe.image} className="card-img-top" alt={recipe.recipe.label} style={styles.image} />
                <div className="card-body text-center">
                    <h5 className="card-title" style={styles.label}>{recipe.recipe.label}</h5>
                    <div className="btn btn-outline-danger" onClick={() => setShow(true)}>Ingredients</div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{recipe.recipe.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {recipe.recipe.ingredients.map((i, idx) => (
                            <li key={idx}>{i.text}</li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const styles = {
    label: {
        fontSize:'15px'
    },
    image: {
        width:'100%',
        height:'250px'
    },
    cards: {
        minWidth: '22rem',
        boxShadow: '5px 5px 20px black'
    }
}
