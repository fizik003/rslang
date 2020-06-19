import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import {
  imageRender,
  playExampleSound,
  renderPlayString,
 } from '../../../service'; 

const Card = (props) => {
  const {
    cards,
    playStep,
    handlerSubmit,
    handlerChange,
    settings,
    isNotAgree
  } = props;

  return(
    <div className="card PlayCard">
      <img
        className="card-img-top"
        src={ imageRender(cards[playStep].image) }
        alt="image"
      />
      <div className="card-body">
        <form
          onSubmit={ handlerSubmit }
        >
          <div className="form-row">
            <div className="col-12 mt-3">
              <div className="row PlayString">
                { renderPlayString(cards[playStep], handlerChange) }
              </div>
            </div>
            <div className="col-12">
              <hr />
              { settings.showTranslateWord && !isNotAgree ?
                cards[playStep].wordTranslate : '' 
              } 
            </div>
            <div className="col-12">
              <hr />
              <span>
                { settings.showExplanationString && !isNotAgree ? cards[playStep].textExampleTranslate : '' }
              </span>
            </div>
          </div>
          <div className="col-12 text-right mt-3">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Play example sound"
              onClick={ () => playExampleSound(cards[playStep].audio) } 
            >
              <FontAwesomeIcon icon={ faVolumeUp } />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
