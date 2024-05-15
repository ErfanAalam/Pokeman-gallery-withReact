import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

const Card = () => {
  let initialvalue = 0
  const [limit, setlimit] = useState(20)
  const [pokemons, setPokemons] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(false)
  const [type, setType] = useState("all")
  const [name, setName] = useState("")

  const handlecount = () => {
    setlimit(limit + 20)
  }

  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${initialvalue}&limit=${limit}`;



  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      const fetches = response.data.results.map(pokemon => axios.get(pokemon.url));
      // console.log();
      Promise.all(fetches).then(results => {
        console.log(results);
        const pokemonData = results.map(result => ({
          type: result.data.types[0].type.name,
          src: result.data.sprites.other.dream_world.
            front_default,
          name: result.data.name,
          weight: result.data.weight,
          height: result.data.height,
          stats: result.data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
          }))
        }));
        setPokemons(pokemonData);
        // console.log(pokemonData);
      });
    });
  }, [limit]);

  let handlechange = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null)
    } else {
      setClickedIndex(index)
    }
  }
  console.log(name);


  return (
    <>
      <form action="/" className='flex flex-col justify-center items-center gap-10'>
        <select name="type" id="type" className='p-4 px-16 rounded-lg' onChange={(e) => setType(e.target.value)}>
          <option value="all">Filter by Type</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="poison">Poison</option>
          <option value="fight">Fight</option>
          <option value="ice">Ice</option>
          <option value="ground">Ground</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="flying">Flying</option>
          <option value="psychic">Psychic</option>
          <option value="bug">Bug</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="steel">Steel</option>
          <option value="fairy">Fairy</option>
        </select>
        <input type="text" placeholder='Search by Name' className='p-4 px-8 rounded-lg' onChange={(e) => setName(e.target.value)} />

      </form>
      <div className='flex flex-wrap gap-6'>
        {/* Filter by name and type of pokemon */}
        {pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase())).map((pokemon, index) => (
          type === "all" ?

            <div key={index} className='className="flex flex-col justify-center text-center mx-auto rounded-[30px] p-6 m-4 border-2 border-black min-w-[160px] items-center bg-white/30 hover:bg-gradient-to-r from-[#d67be4] to-[#605dbf] backdrop-blur-lg'>
              <div key={index}>
               <img src={pokemon.src} width={"200px"} alt="" />
                <h1>{pokemon.name}</h1>
                <button className='p-2 bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-lg' onClick={() => handlechange(index)}>
                  {clickedIndex === index ? "Know Less" : "Know More"}
                </button>
                {
                  clickedIndex === index
                    ?
                    <div>
                      <p>Type: {pokemon.type}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p>Height: {pokemon.height}</p>
                      <h3>Stats:</h3>
                      <ul>
                        {pokemon.stats.map((stat, index) => (
                          <li key={index}>{stat.name}: {stat.value}</li>
                        ))}
                      </ul>
                    </div>
                    : ""
                }
              </div>

            </div>

            :
            type === pokemon.type &&

            <div key={index} className='className="flex flex-col justify-center text-center mx-auto rounded-[30px] p-6 m-4 border-2 border-black min-w-[160px] items-center bg-white/30 hover:bg-gradient-to-r from-[#d67be4] to-[#605dbf] backdrop-blur-lg'>
              <div key={index}>
                <img src={pokemon.src} width={"200px"} alt="" />
                <h1>{pokemon.name}</h1>
                <button className='p-2 bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-lg' onClick={() => handlechange(index)}>
                  {clickedIndex === index ? "Know Less" : "Know More"}
                </button>
                {
                  clickedIndex === index
                    ?
                    <div>
                      <p>Type: {pokemon.type}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p>Height: {pokemon.height}</p>
                      <h3>Stats:</h3>
                      <ul>
                        {pokemon.stats.map((stat, index) => (
                          <li key={index}>{stat.name}: {stat.value}</li>
                        ))}
                      </ul>
                    </div>
                    : ""
                }
              </div>

            </div>


        ))}

      </div>
      <button className='p-2 bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-lg my-12 flex' onClick={() => handlecount()}>Add More Pokemons</button>
    </>
  );
}

export default Card;
