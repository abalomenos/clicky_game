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
        messageClass: "",
        avatarClass: "click-item"
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
        });
    }

    // Function called after each Avatar is Clicked
    gameRound = (event) => {
        
        let ID = event.target.getAttribute('id');
        let Score = this.state.score;
        let TopScore = this.state.topScore;
        let SelectedAvatars = this.state.selectedAvatars;

        // Check if we lost the game
        if (SelectedAvatars.includes(ID)) {
            
            // Update the DOM
            this.setState({
                messageClass: "" // In order to get CSS effect
            }, () => {
                setTimeout(() => this.setState({ 
                    score: 0,
                    message: "You lost!",
                    messageClass: "incorrect",
                    avatarClass: "click-item shake"
                }), 0);
            })

            this.gameInitialize();

        } else {

            // Increase our score by 1
            Score ++;
            // Push our selected image ID to our array
            SelectedAvatars.push(ID);
            
            // Check if we won the game
            if (Score === AvatarList.length) {
                
                // Update the DOM
                this.setState({
                    messageClass: "" // In order to get CSS effect
                }, () => {
                    setTimeout(() => this.setState({
                        score: 0,
                        topScore: Score,
                        message: "You won!",
                        messageClass: "correct",
                        avatarClass: "click-item"
                    }), 0);
                });
                
                this.gameInitialize();

            } else { // Update our game progress

                // Update the DOM
                this.setState({
                    messageClass: "" // In order to get CSS effect
                }, () => {
                    setTimeout(() => this.setState({
                        score: Score,
                        topScore: (Score >= TopScore) ? Score : TopScore,
                        message: (AvatarList.length - Score == 1) ? `Almost there, ${AvatarList.length - Score} image left!` : `${AvatarList.length - Score} images left!`,
                        messageClass: "correct",
                        avatarClass: "click-item"
                    }), 0);
                });

            }

        }

    }

    // Render the DOM
    render() {
        return (
            <div>
                <NavBar 
                    GameScore={this.state.score}
                    GameTopScore={this.state.topScore}
                    GameMessage={this.state.message}
                    GameMessageClass={this.state.messageClass}
                />
                <Header />
                <AvatarCards 
                    Avatars={AvatarList}
                    AvatarOnClick={this.gameRound}
                    AvatarClass={this.state.avatarClass}
                />
                <Footer />
            </div>
        );
    } 
}

export default App;
