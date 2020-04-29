import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'
import './App.css';
//components import
import Form from './components/Form'
import Card from './components/Cards'



const App = () => {
  //local state
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('beef')

  const RECIPE_SERVER = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
  //hooks
  useEffect(() => {
    getRecipes()
  },[query])

  console.log(recipes)
  const getRecipes = async () => {
    try {
      const response = await fetch(RECIPE_SERVER)
      const parse = await response.json()
      setRecipes(parse.hits)
    } catch (err) {
      console.log(err)
    }
  }

  const handleQuery = (search) => {
    setQuery(search)
  }

  return (
    <div className="App">
      <div className="container-lg">
        <h1 style={{fontSize:'100px'}}>My Recipee App</h1>
        <Form 
          handleQuery={handleQuery}
        />
        <div className="row">
          {recipes.map((i, idx) => (
            <div className="col-4" key={idx}>
                <Card 
                  recipe={i}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;
