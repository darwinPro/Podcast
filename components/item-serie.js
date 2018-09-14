import React from 'react';
import Link from 'next/link'

const ItemSerie = props => {
    const { serie } = props
    return (
        <a className="podcast">
            <img
                style={{ width: '100%' }}
                src={serie.urls.logo_image.original}
                alt=""
            />
            <div style={{ padding: '10px' }}>{serie.title}</div>

            <style jsx>{`       
                .podcast {
                    display: block;
                    text-decoration: none;
                    color: #333;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    cursor: pointer;
                }
                .podcast:hover {
                    color: #000;
                }
                .podcast h3 {
                    margin: 0;
                }
                .podcast .meta {
                    color: #666;
                    margin-top: 0.5em;
                    font-size: 0.8em;
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


    );

}

export default ItemSerie;