import React from 'react';
import './shortStats.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import english from './english.gif';

const ShortStatsHeader = () => {
  return (
    <div className="row align-items-center flex-column shortStatsHeader">
      <img src={english} alt="stats pic" />
      <h1>Серия завершена</h1>
    </div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
const ShortStatsInfo = (props) => {
<<<<<<< HEAD
  const { total, right, newWords, rightInArrow } = props;
=======
  const { total, right, newWords, rightInARow } = props;
>>>>>>> fix
  return (
    <ul className="row align-items-center flex-column shortStatsInfo">
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faDragon} /> Карточек завершено: </span><span>{total}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCrown} /> Правильные ответы: </span><span>{right}%</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCartPlus} /> Новые слова: </span><span>{newWords}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
<<<<<<< HEAD
        <span><FontAwesomeIcon icon={faUserGraduate} /> Правильных ответов подряд: </span><span>{rightInArrow}</span>
=======
        <span><FontAwesomeIcon icon={faUserGraduate} /> Правильных ответов подряд: </span><span>{rightInARow}</span>
>>>>>>> fix
      </li>
    </ul>
  )
}

export default class ShortStats extends React.Component {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD
>>>>>>> fix: token & id
<<<<<<< HEAD

=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> feat: stats from server BETA
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
<<<<<<< HEAD
=======
=======
>>>>>>> fix
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
=======
>>>>>>> fix: token & id
  render() {
    return (
      <div className="container shortStats">
        <ShortStatsHeader />
        <ShortStatsInfo {...this.props} />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD
>>>>>>> fix: token & id
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
>>>>>>> fix: token & id
=======
>>>>>>> feat: stats from server BETA:rslang/src/Components/ShortStats/ShortStats.js
=======
>>>>>>> fix
=======
>>>>>>> fix after update
=======
>>>>>>> feat: stats from server BETA
    render() {
        return (
            <div className="container shortStats">
                <ShortStatsHeader />
                <ShortStatsInfo {...this.props}  />
            </div>
        )
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:rslang/src/Components/ShortStats/ShortStats.jsx
=======
>>>>>>> feat: stats from server BETA
>>>>>>> feat: stats from server BETA:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> feat: stats from server BETA
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
<<<<<<< HEAD
>>>>>>> fix: token & id
=======
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
<<<<<<< HEAD
=======
=======
>>>>>>> fix
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
=======
>>>>>>> fix: token & id:rslang/src/Components/ShortStats/ShortStats.js
>>>>>>> fix: token & id
=======
>>>>>>> fix
=======
=======

  render() {
    return (
      <div className="container shortStats">
        <ShortStatsHeader />
        <ShortStatsInfo {...this.props} />
      </div>
    )
  }
>>>>>>> fix after update
>>>>>>> fix after update
=======
>>>>>>> feat: stats from server BETA
=======
>>>>>>> fix: token & id
};
=======
// const token = getCookie("token");
// const userId = getCookie("userId");

const getStats = async () => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${getCookie("userId")}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${getCookie("token")}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const content = await rawResponse.json();
  let stats = content.optional.optional;
  return stats;
};

const ProgressLabel = () => {
=======
const ShortStatsInfo = (props) => {
  const { total, right, newWords, rightInArrow } = props;
>>>>>>> feat: stats from server BETA
  return (
    <ul className="row align-items-center flex-column shortStatsInfo">
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faDragon} /> Карточек завершено: </span><span>{total}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCrown} /> Правильные ответы: </span><span>{right}%</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faCartPlus} /> Новые слова: </span><span>{newWords}</span>
      </li>
      <li className="shortStatsInfo-item d-flex">
        <span><FontAwesomeIcon icon={faUserGraduate} /> Правильных ответов подряд: </span><span>{rightInArrow}</span>
      </li>
    </ul>
  )
}

export default class ShortStats extends React.Component {
  render() {
    return (
      <div className="container shortStats">
        <ShortStatsHeader />
        <ShortStatsInfo {...this.props} />
      </div>
    )
  }
<<<<<<< HEAD

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ]
  };

  showStats = (id) => {
    this.setState((state) => {
      const items = this.toggleProp(state.items, id, 'visible');
      switch (id) {
        case 2 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
          state.count = this.state.count;
          break;
        case 3: 
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.minigameSavannaStats}`); 
          break; 
        case 4 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
          this.props.setSavannaStats([10,20,30]);
          console.log(`${this.props.minigameSavannaStats}`);
          break;  
        case 5 :
          state.count = (state.count).map(elem => elem.newWords + 2);
          break;
        case 6 : 
          console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`);
          state.count = this.props.minigameSavannaStats;
          break;  
      }   
      return { items };  
    })
  }

  getSum(arr) {
    let prev = 0;
    return arr.map((elem) => {
      prev += elem;
      return prev;
    })
  }

  componentDidMount() {   
    this._asyncRequest = getStats().then(
      result => {
        const resultWords = result.wordStat.map((item) => {
          const elem = item.newWords;
          return elem;
        }); 
        const resultDate = result.wordStat.map((item) => {
          const date = new Date(item.timestamp).toString().slice(4, 15);
          return date;
        })
        this.state.datasets[0].data = this.getSum(resultWords);
        this.state.datasets[1].data = resultWords;
        this.state.labels = resultDate;
        this.state.wordsNow = Math.ceil((this.state.datasets[0].data[this.state.datasets[0].data.length-1] * 100) / this.props.totalWords);
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

  
  render() {    
    const { items } = this.state;  
    return ( 
      <React.Fragment>
      <div className="graph longStatsElem col-md-9">
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Все слова',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              tooltips: {
                mode: 'index',
                intersect: true
              }
            }}
          />
        </div>
        <div className="longStatsElem row d-flex justify-content-center">
          <div className="col-md-8">
            <ProgressBar variant="success" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
            <ProgressLabel />
           
            <div className="longStatsElem">
              <BtnsBar items={items} showStats={this.showStats} />
              <div className="longStatsElem-field">
              <MiniStats count={this.state.count} />
              </div>
            </div>     
            </div>     
        </div>
      </React.Fragment>
    );
  }
}

export default connect(miniGameStats, changeMiniStats)(LongStats);
>>>>>>> fix: token & id
=======
};
>>>>>>> feat: stats from server BETA
