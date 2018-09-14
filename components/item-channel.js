import React from 'react';
import { Link } from '../routes'
import slug from '../helpers/slug'

const ItemChannel = props => {
    const { channel } = props
    return (
        <Link route="channel" params={{
            slug: slug(channel.title),
            id: channel.id
        }} prefetch>
            <a className="channel">
                <img
                    src={channel.urls.logo_image.original}
                    alt=""
                />

                <h3>{channel.title}</h3>

                <style jsx>{`
                                   
                    .channel{
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                        text-decoration: none;
                    }

                    .channel img {
                        width: 100%;
                    }

                    .channel h3 {
                        text-align:center;
                        color: #333;
                    }

                    .channel h3:hover {
                        color: #000;
                    }

                `}</style>

                <style jsx global>{`
                    body{
                        margin:0;
                        font-family: system-ui;
                        background: white;
                    }
                `}</style>
            </a>
        </Link>

    );

}

export default ItemChannel