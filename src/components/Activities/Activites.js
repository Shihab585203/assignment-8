import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Information from '../Information/Information';
import Item from '../Item/Item';
import './Activites.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Activites = () => {
    const [activites, setActivites] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivites(data))
    }, [])
    // button handler 
    const handleAddToLIst = (item) => {
        // console.log(item);
        const newList = [...list, item];
        setList(newList);
    }

    return (
        <div className='activites-container'>

            <div className="activites-item-container my-3 ">
            <h1> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> HealthFit</h1>
                <h5 className='mb-5'>Select today’s exercise</h5>
                <div className='grid-items'>
                    {
                        activites.map(item => <Item
                            key={item.id}
                            item={item}
                            handleAddToLIst={handleAddToLIst}
                        ></Item>)
                    }
                </div>
            </div>
            <div className="activites-cart-container">
                <Information></Information>
                <Break list={list} ></Break>
            </div>
        </div>
    );
};

export default Activites;