import React from 'react';
import { wordCards } from '../../constant';
import { playExampleSound } from '../../service';
import { BTN_LABEL } from '../../constant';
import { setWordCards } from '../../Store/PlayZonePage/actions';
import { setDifficultWords, setDeleteWords } from '../../Store/Actions';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from './Card/Card';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import VerticalMenu from './VerticalMenu/VerticalMenu';
import './playZonePage.scss';


const mapStateToProps = (store) => {
  const {
    settings,
    dayLearningWords,
    difficultWords,
  } = store.appSettings;

  return {
    settings: settings,
    difficultWords: difficultWords,
    dayLearningWords: dayLearningWords,
    cards: store.playZone.cards,
  }
}

const mapActionToProps = {
  setDeleteWords,
  setWordCards,
  setDifficultWords,
}

class PlayZonePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: wordCards[1],
      playStep: 0,
      agreeWord: wordCards[1][0].word,
      isNotAgree: true,
      inputValue: '',
    }
    this.difficultWordId = '';
    this.form = '';
    this.settings = props.settings
  }

  incrementPlayStep = () => {
    const { playStep, cards } = this.state;
    if (playStep + 1 === cards.length) {
      return;
    }
    this.setState({
      playStep: playStep + 1,
      agreeWord: cards[playStep + 1].word,
      isNotAgree: true,
      inputValue: '',
    });
  }

  decrementPlayStep = () => {
    const { playStep, cards } = this.state;
    this.setState({
      playStep: playStep - 1,
      agreeWord: cards[playStep - 1].word,
      inputValue: '',
    });
  }

  deleteCard = () => {
    const { cards, playStep } = this.state;
    if (cards.length === 1) {
      return;
    }
    const card = cards.splice(playStep, 1);
    this.setState({ cards: cards });
    this.props.setDeleteWords(card);
  }

  insertCardToDifficult = () => {
    const { cards, playStep } = this.state;
    if (this.difficultWordId === cards[playStep].id) {
      return;
    } else {
      this.difficultWordId = cards[playStep].id;
      this.props.setDifficultWords(cards[playStep]);
    }
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0]; 
    const char = event.target[0].value;
    const { agreeWord, cards, playStep } = this.state;

    if (!char) {
      return;
    } else {
      if (char === agreeWord) {
        if (this.settings.playExampleSound) {
          playExampleSound(cards[playStep].audioExample);
        }
        input.classList.remove('PlayCard_Mistake');
        input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
      } else {
        if (this.settings.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
        input.value = agreeWord;
        input.classList.remove('PlayCard_Agree');
        input.classList.add('PlayCard_Mistake');
        this.setState({ isNotAgree: true });
        setTimeout(() => {
          input.value = '';
          input.classList.remove('PlayCard_Mistake');
        }, 2000);
      }
    }
  }

  handlerInputChange = (event) => {
    this.input = event.target;
    this.setState({ inputValue: event.target.value });
  }

  changeAnswer = () => {
    const {
      agreeWord,
      inputValue,
      cards,
      playStep
    } = this.state;

    if (!inputValue) {
      return;
    } else {
      if (agreeWord === inputValue) {
        if (this.settings.playExampleSound) {
          playExampleSound(cards[playStep].audioExample);
        }
        this.input.classList.remove('PlayCard_Mistake');
        this.input.classList.add('PlayCard_Agree');
        this.setState({ isNotAgree: false });
      } else {
        if (this.settings.playExampleSound) {
          playExampleSound(cards[playStep].audio);
        }
        this.input.value = agreeWord;
        this.input.classList.remove('PlayCard_Agree');
        this.input.classList.add('PlayCard_Mistake');
        this.setState({ isNotAgree: true });
        setTimeout(() => {
          this.input.value = '';
          this.input.classList.remove('PlayCard_Mistake');
        }, 2000);
      }
    }
  }

  render() {
    const { cards, playStep, isNotAgree } = this.state;

    return(
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <Card
              isNotAgree={ isNotAgree }
              settings={ this.settings }
              cards={ cards }
              playStep={ playStep }
              handlerChange={ this.handlerInputChange }
              handlerSubmit={ this.handlerSubmit }
            />
            <VerticalMenu
              insertCardToDifficult={ this.insertCardToDifficult }
              deleteCard={ this.deleteCard }
              settings={ this.settings }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <div class="btn-group" role="group" aria-label="Basic example">
              <Button decrementPlayStep={ this.decrementPlayStep } label={ BTN_LABEL.PREV } isNotAgree={ !playStep ? true : false }/>
              <button
                className="btn btn-primary"
                onClick={ this.changeAnswer }
              >
                Проверить
              </button>
              <Button incrementPlayStep={ this.incrementPlayStep } label={ BTN_LABEL.NEXT } isNotAgree={ isNotAgree } />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-2 text-center">
                <Badge playStep={ playStep } />
              </div>
              <div className="col-8">
                <ProgressBar playStep={ playStep } cards={ cards } />
              </div>
              <div className="col-2 text-center">
                <Badge cards={ cards } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionToProps)(PlayZonePage);

