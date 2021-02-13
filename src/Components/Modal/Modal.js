import React from 'react';
import './styles.css';
import Title from "../Texts/Title";
import Subtitle from "../Texts/Subtitle";
import Text from "../Texts/Text";


const Modal = ({ show, data, onclick }) => {

    return (
        <div className='modal'>
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                </div>
                <div className='modalBody'>
                    <div className='infoRow'>
                        <h3>Nombre:</h3>
                        <h4>{data.name}</h4>
                    </div>

                    <div className='infoRow'>
                        <h3>Tipo:</h3>
                        {data.types.map((p, i) => (
                            <Subtitle key={i} subtitle={p.type.name} id={i + 1} >
                            </Subtitle>
                        ))}
                    </div>
                    <div className='infoRow'>
                        <h3>Altura:</h3>
                        <h4>{data.height} Pies</h4>
                    </div>
                    <div className='infoRow'>
                        <h3>Peso:</h3>
                        <h4>{data.weight} Kg</h4>
                    </div>
                    <div className='infoRow'>
                        <h3>Habilidades:</h3>
                        <h4>{data.ability.name}</h4>
                    </div>
                    <div className='infoRow'>
                        <h3>Poder:</h3>
                        <h4>{data.stats[0].base_stat}k</h4>
                    </div>
                    <div className='infoRow'>
                        <h3>Especie:</h3>
                        <h4>{data.species.name}k</h4>
                    </div>
                    <div className='infoRow'>
                        <h3> Descripción:</h3>
                        <h4>{data.description}</h4>
                    </div>
                </div>
                <button className='btnClose' onClick={onclick}>Cerrar</button>
            </div>
        </div>

    )
}

export default Modal;