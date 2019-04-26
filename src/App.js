import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AvatarCards from './components/AvatarCards';
import AvatarList from './components/AvatarCards/AvatarList.json';
import Footer from './components/Footer';


class App extends Component {

    game = () => {
        window.location.reload(); 
    }

    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <AvatarCards 
                Avatars={AvatarList}
                AvatarOnClick={this.game}
                />
                <Footer />
            </div>
        );
    } 
}

export default App;
