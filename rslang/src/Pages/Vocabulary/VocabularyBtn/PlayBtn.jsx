import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const PlayBtn = ({ src }) => {
    const playExampleSound = (src) => {
        const myAudio = new Audio();
        myAudio.src = `https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/${ src }`;
        myAudio.play();
    }

    return (
        <button type="button" className="btn mr-2" onClick={ () => playExampleSound(src) }><span><FontAwesomeIcon icon={ faPlayCircle } /></span></button>
    )
}

export default PlayBtn