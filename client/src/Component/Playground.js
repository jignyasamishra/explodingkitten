import React, { useEffect, useState } from 'react'
import cat from '../Photos/cat.png'
import bomb from '../Photos/bomb.png'
import defuse from '../Photos/defuse.png'
import shuffle from '../Photos/shuffle.png'

export default function Playground() {
   
    const imgarr = [cat, bomb, defuse, shuffle]
    const randomcard = imgarr[(Math.floor(Math.random() * imgarr.length))]
   const shuffler=()=>{
    window.location.reload(true)
   }
   

    return (
        <div className='playhere '>
            <div className='card' style={{ backgroundImage: `url(${cat})` }}>CAT</div>
            <div className='card' style={{ backgroundImage: `url(${bomb})` }}>BOMB</div>
            <div className='card' style={{ backgroundImage: `url(${defuse})` }}>SHUFFLE</div>
            <div className='card' style={{ backgroundImage: `url(${shuffle})` }}>DEFUSE</div>
            <div className='card' style={{ backgroundImage: `url(${randomcard})` }} >RANDOM</div>
            <button onClick={shuffler}>Shuffle</button>

        </div>
    )
}
