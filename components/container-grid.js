import React from 'react';

const ContainerGrid = props => {
    const { children, title } = props
    return (
        <div >
            <h2>{title}</h2>
            <div className="podcasts">
                {
                    children
                }
            </div>

            <style jsx>{`
                .podcasts {
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }
            `}</style>
        </div>

    )
}

export default ContainerGrid