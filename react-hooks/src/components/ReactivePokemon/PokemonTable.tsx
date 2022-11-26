import React from 'react'
import "./style.css";
import { Pokemon, getAll, getByName } from './API';

interface PokemonWithPower extends Pokemon {
    power: number;
}

const calculatePower = (pokemon: Pokemon) =>
    pokemon.hp + 
    pokemon.attack +
    pokemon.defense +
    pokemon.special_attack +
    pokemon.special_defense +
    pokemon.speed;


let tableRender = 0;

const Table: React.FC<{
    pokemon: PokemonWithPower[]
 }> = ({ pokemon }) => {
     return(
         <table>
             <thead>
                 <tr>
                     <td>ID</td>
                     <td>Name</td>
                     <td>Type</td>
                     <td colSpan={6}>Stats</td>
                     <td>Power</td>
                 </tr>
             </thead>
             <tbody>
                 {
                     pokemon.map((p) => (
                         <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.type.join(",")}</td>
                            <td>{p.hp}</td>
                            <td>{p.attack}</td>
                            <td>{p.defense}</td>
                            <td>{p.special_attack}</td>
                            <td>{p.special_defense}</td>
                            <td>{p.speed}</td>
                            <td>{p.power}</td>
                         </tr>
                     ))
                 }
             </tbody>
         </table>
     )
 }

 const MemoizedTable = React.memo(Table);


 let pokemonTableRender = 0;

const PokemonTable: React.FC = () => {

    console.log(`pokemonTableRender = ${pokemonTableRender++}`);

    const [pokemon, setPokemon] = React.useState<Pokemon[]>([]);
    const [search, setSearch] = React.useState("");
    const onSetSearch = React.useCallback((evt) => setSearch(evt.target.value), []);

    React.useEffect(() => {
        getByName(search).then(setPokemon);
    }, [search]);

    const pokemonWithPower = React.useMemo(() => 
        pokemon.map((p) => ({
            ...p,
            power: calculatePower(p),
        }))
    , [])

    const [threshold, setThreshold] = React.useState(0);
    const onSetThreshold = React.useCallback(
        (evt) => setThreshold(parseInt(evt.target.value, 10)), 
        []
    );

    const countOverThreshold = React.useMemo(
        () => pokemonWithPower.filter((p) => p.power > threshold).length,
        [pokemonWithPower, threshold]
    );
    
    return (
        <div>
        <div className="top-bar">
          <div>Search</div>
          <input type="text" value={search} onChange={onSetSearch}></input>
          <div>Power threshold</div>
          <input type="text" value={threshold} onChange={onSetThreshold}></input>
          {/* <div>Count over threshold: {countOverThreshold}</div> */}
        </div>
        <div className="two-column">
          <MemoizedTable pokemon={pokemonWithPower} />
          <div>
            {/* <div>Min: {min}</div>
            <div>Max: {max}</div> */}
          </div>
        </div>
      </div>
    )
}

export default PokemonTable