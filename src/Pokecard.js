
import "./Pokecards.css";
//import "./index.css";


function Pokecard({id, name,type, base_experience}){

    const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className = "Pokecard">
            <h3 className = "Pokecard-name">{name}</h3>

            <img src = {imgSource} className = "Pokecard-img"/>

            <p className = "Pokecard-type">Type: {type}</p>
            <p className = "Pokecard-experience">EXP: {base_experience}</p>
            



        </div>

    )



}

export default Pokecard;