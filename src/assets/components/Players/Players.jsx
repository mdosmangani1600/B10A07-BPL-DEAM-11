import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';


const Players = ({handleAddToSelected}) => {
    const [players, setPlayers] = useState([]);

    useEffect( () =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])



    return (
        <div>
            <div className="flex justify-between text-center mt-20">
            <h2 className="font-bold text-2xl">Available Players</h2>
            
            <div className="flex">
                <button className="font-bold p-2 border rounded-s-xl">Available</button>
                <button className="p-2 border rounded-e-xl">Selected</button>
            </div>
            </div>
        <div className="mt-10 grid grid-cols-3 gap-5 w-full p-5 ">
        {
                players.map(player => <Player key={player.playerId} handleAddToSelected={handleAddToSelected}
                 player={player}></Player>)
            }
        </div>
        </div>
    );
};

Players.propTypes ={
    handleAddToSelected:PropTypes.func
}

export default Players;