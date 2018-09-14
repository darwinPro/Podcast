import React, { Component } from 'react';

import Link from 'next/link'
import ContainerGrid from './container-grid';
import ItemChannel from './item-channel';

const ChannelGrid = props => {
    const { channels } = props
    return (
        <div>
            <ContainerGrid title="Canales">
                {channels.map((channel) =>
                    <ItemChannel channel={channel}/>
                )}
            </ContainerGrid>

            <style jsx>{`
                    header{
                        color:#fff;
                        background:#345678;
                        padding:15px;
                        text-align:center;
                    }
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                    .channel{
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                    }

                    .channel img {
                        width: 100%;
                    }
                `}</style>

            <style jsx global>{`
                    body{
                        margin:0;
                        font-family: system-ui;
                        background: white;
                    }
                `}</style>
        </div>
    );
}

export default ChannelGrid;