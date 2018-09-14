import React, { Component } from 'react';
import 'isomorphic-fetch'
import Link from 'next/link'
import PlayerAudio from '../components/player-audio';
import PicturePodcast from '../components/picture-podcast';
import Layout from '../components/Layout';

class Podcast extends Component {

  static async getInitialProps({ query }) {
    let id = query.id
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    let clip = (await fetchClip.json()).body.audio_clip
    return { clip }
  }

  render() {

    const { clip } = this.props

    return (
      <Layout>
        <header>Podcast</header>
        <div className="modal">
          <div className="clip">
            <nav>
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className="close">&lt; Volver</a>
              </Link>
            </nav>

            <PicturePodcast clip={clip}/>

            <PlayerAudio clip={clip} />
          </div>
        </div>

        <style jsx>{`
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>

        <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
      </Layout>
    );
  }
}

export default Podcast;