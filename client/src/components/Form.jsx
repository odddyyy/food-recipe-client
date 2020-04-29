import React from 'react'
import { useState } from 'react'

export default function Form({ handleQuery }) {
    const [input, setInput] = useState('')
    const search = e => {
        e.preventDefault()
        handleQuery(input)
        setInput('')
    }
    return (
        <div>
            <form onSubmit={search}>
                <div className="input-group mb-5 mt-5 mx-auto" style={styles.input}>
                    <input type="text" className="form-control" value={input} placeholder="search recipe..." onChange={e => setInput(e.target.value)}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const styles = {
    input: {
        width:'30%'
    }
}