import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AvatarCards from './components/AvatarCards';
import AvatarList from './components/AvatarCards/AvatarList.json';
import Footer from './components/Footer';


class App extends Component {

    // Set Initial States
    state = {
        score: 0,
        topScore: 0,
        selectedAvatars: [],
        message: "Click an image to begin!",
        messageClass: ""
    }

    // When DOM is ready
    componentDidMount = () => {
        this.gameInitialize();
    }

    // Function to Initialize the Game
    gameInitialize = () => {
        this.setState({
            score: 0,
            selectedAvatars: []
        })
    }

    // Function called after each Avatar is Clicked
    gameRound = (event) => {
        
        let ID = event.target.getAttribute('id');
        let Score = this.state.score;
        let TopScore = this.state.topScore;
        let SelectedAvatars = this.state.selectedAvatars;

        // Check if Avatar has already been selected
        if (SelectedAvatars.includes(ID)) {
            
            this.setState({
                score: 0,
                message: "You lost!",
                messageClass: ""
            }, () => {
                setTimeout(() => this.setState({ messageClass: "incorrect" }), 0)
            })

            this.gameInitialize();

        } else {

            Score ++;
            SelectedAvatars.push(ID);
            
            this.setState({
                score: Score,
                topScore: (Score > TopScore) ? Score : TopScore,
                message: Score === AvatarList.length ? "You Won!" : "You guessed correctly!",
                messageClass: ""
            }, () => {
                setTimeout(() => this.setState({ messageClass: "correct" }), 0)
            })

            if (Score === AvatarList.length) {
                this.gameInitialize();
            }

        }

    }



    render() {
        return (
            <div>
                <NavBar 
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message}
                    messageClass={this.state.messageClass}
                />
                <Header />
                <AvatarCards 
                    Avatars={AvatarList}
                    AvatarOnClick={this.gameRound}
                />
                <Footer />
            </div>
        );
    } 
}

export default App;
