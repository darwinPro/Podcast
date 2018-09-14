import React from 'react';

const PicturePodcast = props => {
    const { clip } = props
    return (
        <div className="picture">
            <picture style={{width:'100%',height:'100%'}}>
                <div className="image" style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>

            <style jsx>{`
               
                .picture {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1 1;
                flex-direction: column;
                width: auto;
                padding: 10%;
                }

                .image {
                width: 100%;
                height: 100%;
                background-position: 50% 50%;
                background-size: contain;
                background-repeat: no-repeat;
                }
              
            `}</style>
        </div>
    )
}

export default PicturePodcast