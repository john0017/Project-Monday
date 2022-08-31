import React from 'react';
import BottomAppBar from './bottomAppBar'
import Spinner from './spinner';


const Home = () => {
    return (
        <div>
            <Spinner />
            <BottomAppBar />
        </div>
    );
};

export default Home;