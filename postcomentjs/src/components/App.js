import React from 'react';

import Post from './Post';

export default class App extends React.Component {
    render() { 
        return(
            <div>
                <h1>Hello</h1>
            <Post title="Aprendendo ReactJS com a Rocketseat"/>
            <Post title="ReactJS é demais!"/>
            <Post title="Em breve mais vídeos de ReactJS"/>
            </div>
        );
    }
}