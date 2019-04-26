import React, { Component } from 'react';
import './AvatarCards.css';


class AvatarCard extends Component {

    handleAvatarOnClick = event => {
        this.props.AvatarOnClick(event);
    };
 
    shuffleAvatar = (avatarList) => {
        
        // Loop through the AvatarList and shuffle their position
        for (let i = avatarList.length -1; i >= 0; i--) {
            let randomIndex =  Math.floor(Math.random() * (i + 1));
            let currentAvatar = avatarList[i];
            avatarList[i] = avatarList[randomIndex];
            avatarList[randomIndex] = currentAvatar;
        }
        
        return avatarList;
        
    };
    
    render() {
        return (
            <main className='container'>
                {this.shuffleAvatar(this.props.Avatars).map(avatar => (
                    <div 
                        role='img'
                        aria-label='click item'
                        className='click-item'
                        style={{
                            backgroundImage: `url(${avatar.url})`,
                            backgroundRepeat  : 'no-repeat',
                            backgroundPosition: 'center'
                        }}
                        key={avatar.id}
                        onClick={this.handleAvatarOnClick}
                    >
                    </div>
                ))}
            </main>
        );
    }
}

export default AvatarCard;
