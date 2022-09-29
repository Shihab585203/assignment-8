
import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Home = () => {

    return (
        <section className='row g-5'>

            <div className='col-9'>
                <Header></Header>
                <Card></Card>
            </div>

            <div className='col-3'>
                right side
            </div>
        </section>
    );
};

export default Home;