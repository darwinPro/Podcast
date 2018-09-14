import React from 'react';

const PlayerAudio = props => {
    const { clip } = props
    return (
        <div className="player">
            <h3>{clip.title}</h3>
            <h6>{clip.channel.title}</h6>
            <audio className="player_audio" controls autoPlay={true}>
                <source  src={clip.urls.high_mp3} type='audio/mpeg' />
            </audio>
            <style jsx>{`                
                .player {
                    padding: 30px;
                    background: rgba(0,0,0,0.3);
                    text-align: center;
                }     
                .player_audio{
                    width:100%;
                }           
            `}</style>

            <style jsx global>{`
                body {
                margin: 0;
                font-family: system-ui;
                background: white;
                }
            `}</style>
        </div >
    )
}

export default PlayerAudio