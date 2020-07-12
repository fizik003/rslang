import React from 'react';

const PlayGame = ({ recordSound }) => {
  return (
    <button
      className="btn btn-primary w-100"
      type="button"
      onClick={recordSound}
    >
      Запись слова
    </button>
  );
}

export default PlayGame;
