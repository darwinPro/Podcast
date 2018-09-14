import React from 'react';
import Link from 'next/link'

const ItemPodcast = props => {
    const { clip } = props
    return (
        <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
            <a className="podcast">
                <img
                    style={{ width: '100%' }}
                    src={clip.urls.image}
                    alt=""
                />
                <div style={{ padding: '10px' }}>
                    <div>{clip.title}</div>
                    <br />
                    <div style={{ fontSize: '12px' }}>
                        {Math.ceil(clip.duration / 60)} minutes
                    </div>
                </div>

                <style jsx>{`
                   
                    .podcasts {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                    .podcast{
                        display: block;
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        margin-bottom: 0.5em;
                    }

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
        </Link>
    );

}

export default ItemPodcast;