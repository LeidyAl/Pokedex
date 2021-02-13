import React from 'react';
import './styles.css'
import Title from '../Texts/Title';
import Subtitle from '../Texts/Subtitle'

const Cards = ({ item, openCard, id }) => {
    return (
        <div className='container' onClick={() => openCard()}>
            <div className='imageContainer'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
            </div>
            <div className='infoContainer'>
                <Title title={item.name} />
                {item.types.map((p, i) => (
                    <Subtitle key={i} subtitle={p.type.name} id={i + 1} >
                    </Subtitle>
                ))}
         </div>
        </div>
    )
}
export default Cards
