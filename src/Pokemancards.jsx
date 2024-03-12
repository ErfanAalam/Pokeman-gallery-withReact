import React from "react";
import { useState, useEffect } from "react";

function Pokemancards({ num }) {
  const [name, setname] = useState("");
  const [stats_name, setstats_name] = useState([]);
  const [stats_value, setstats_value] = useState([]);
  const [hw, sethw] = useState([]);
  const imageurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;
  const [clicked,setclicked] = useState(false)


  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${num}/`; //ability type
    fetch(URL).then((response) => {
      response.json().then((res) => {
        console.log(res.name); //pokeman name
        setname(res.name);

        hw.push(res.height * 100 + " cm"); //height
        hw.push(res.weight / 10 + " kg"); //weight
        console.log(res.stats[0]);

        res.stats.map((stat) => {
          let obj = stat;
          stats_name.push(obj.stat.name);
          stats_value.push(obj.base_stat);
        });
      });
    });
  }, []);
  
  let handlechange = ()=>{
    setclicked(!clicked)
  }

  
  return (
    <>
      <div className="flex flex-col justify-center text-center mx-auto rounded-[30px] p-6 m-4 border-2 border-black min-w-[160px] items-center bg-yellow-200">
        <img src={imageurl} width={120} height={120} alt="" />

        <div className="space-y-2">
          <h1 className="text-[20px] font-bold">{name}</h1>
          

          <button
            className=" p-2 bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-lg"
            onClick={handlechange}
          >
           {
            clicked?"Know Less":"Know More"
           }
          </button>

         {
            clicked?
            <div className="space-y-3">
            <p>height is {hw[0]}</p>
            <p>weight is {hw[1]}</p>
              <p>
                {stats_name[0]}: {stats_value[0]}
              </p>
              <p>
                {stats_name[1]}: {stats_value[1]}
              </p>
              <p>
                {stats_name[2]}: {stats_value[2]}
              </p>
              <p>
                {stats_name[3]}: {stats_value[3]}
              </p>
              <p>
                {stats_name[4]}: {stats_value[4]}
              </p>
              <p>
                {stats_name[5]}: {stats_value[5]}
              </p>
            </div>:
            ""
         }

        </div>
      </div>
    </>
  );
}

export default Pokemancards;
