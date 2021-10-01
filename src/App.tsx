import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Text from './components/Text/Text'
import './App.css';



const App: React.FC = () => {

  const [data, setData] = useState<string[]>([]);
  const [currentJoke, setCurrentJoke] = useState<string>("")

  const getJoke = (categorie:string) => {
    let url:string;
    if (categorie === "random") url = 'https://api.chucknorris.io/jokes/random'
    else url = `https://api.chucknorris.io/jokes/random?category=${categorie}`
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => setCurrentJoke(result.value),
          (err) => console.warn('fatch failed', err)
        );
    }

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(
        (result) => setData([...result, "random"]),
        (err) => console.warn('fatch failed', err)
      );
      getJoke("random");
  }, [])

  const hendlerClick = (text: string) => {
        getJoke(text)
  }


  return <div>
      <Header />
      <h1>Categories</h1>
      <div className='flex-container'>
        {data.map((text, index) => {
          return (
            <Menu
              key={index}
              text={text}
              onClick={hendlerClick}
            />
          )
        })}
      </div>
      <Text joke={currentJoke} />
    </div>
}

export default App;