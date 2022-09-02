import React from 'react';
import BottomAppBar from './bottomAppBar'
import Spinner from './spinner';
import Alerts from './alerts';


const Home = () => {
    
    return (
        <div>
            <Alerts />
            <Spinner />
            <BottomAppBar />
        </div>
    );
};

export default Home;