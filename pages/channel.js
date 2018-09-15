import 'isomorphic-fetch'
import Link from 'next/link'
import React, { Component } from 'react';
import Layout from '../components/Layout';
import ItemPodcast from '../components/item-podcast';
import ItemSerie from '../components/item-serie';
import ContainerGrid from '../components/container-grid';
import Error from './_error'
import PodcastPlayer from '../components/PodcastPlayer';

class Channel extends Component {

    state = {
        openPodcast: null
    }

    static async getInitialProps({ query, res }) {
        let idChannel = query.id

        try {
            let [reqChannel, reqSeries, reqAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
            ])

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status
                return { channel: null, audioClip: null, series: null, statusCode: reqChannel.status }
            }

            let dataChannel = await reqChannel.json()
            let channel = dataChannel.body.channel

            let dataAudio = await reqAudios.json()
            let audioClip = dataAudio.body.audio_clips

            let dataSeries = await reqSeries.json()
            let series = dataSeries.body.channels

            return { channel, audioClip, series, statusCode: 200 }
        } catch (error) {
            return { channel: null, audioClip: null, series: null, statusCode: 503 }
        }
    }

    openPodcast = (event, podcast) => {
        event.preventDefault()
        this.setState({
            openPodcast: podcast
        })
    }

    onClose = (event) => {
        event.preventDefault()
        this.setState({
            openPodcast: null
        })
    }

    render() {

        const { channel, audioClip, series, statusCode } = this.props
        const { openPodcast } = this.state

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title={channel.title}>

                <picture >
                    <div
                        className="cover"
                        style={{
                            backgroundImage: `url(${channel.urls.banner_image.original})`,
                            backgroundPosition: 'center'
                        }}
                    ></div>
                </picture>

                {
                    openPodcast &&
                    <div className="modal">
                        <PodcastPlayer clip={openPodcast} onClose={this.onClose}></PodcastPlayer>
                    </div>
                }

                <h1>{channel.title}</h1>

                <ContainerGrid title="Ultimos Podcast">
                    {
                        audioClip.map((clip) => <ItemPodcast clip={clip} onPress={this.openPodcast} />)
                    }
                </ContainerGrid>

                <ContainerGrid title="Series">
                    {
                        series.map((serie) =>
                            <ItemSerie serie={serie}></ItemSerie>
                        )
                    }
                </ContainerGrid>


                <style jsx>{`
                    .cover{
                        width:100%;
                        height:350px;
                    }
                    .modal{
                        position:fixed;
                        top:0;
                        left:0;
                        right:0;
                        bottom:0;
                        z-index:99999;
                        background:white;
                    }
                `}</style>

            </Layout>
        );
    }
}

export default Channel;