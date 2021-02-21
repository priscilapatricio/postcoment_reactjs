import React from 'react';
import './styles/App.css'

import Post from './Post';

export default class App extends React.Component {
    render() { 
        return(

            <div className="card">
                    <div>
                        <h1>Premier League</h1>
                        <Post title="Resultados"/>
                        <Post title="Clubes"/>
                        <Post title="Atletas"/>
                    </div>
            </div>


            
        );
    }
}