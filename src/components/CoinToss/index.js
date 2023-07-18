// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0, result: 0}

  flipToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        result: tossResult,
        toss: prevState.toss + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        result: tossResult,
        toss: prevState.toss + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {toss, heads, tails, result} = this.state

    const coinApp = (
      <div className="coin-home-cont">
        <div className="toss-cont">
          <div className="main-cont">
            <h1 className="toss-head">Coin Toss Game</h1>
            <p className="option">Heads (or) Tails</p>
            {result === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                className="coin-img"
                alt=" toss result"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                className="coin-img"
                alt=" toss result"
              />
            )}

            <button className="toss-btn" type="button" onClick={this.flipToss}>
              Toss Coin
            </button>
            <div className="result-cont">
              <p className="result">Total:{toss}</p>
              <p className="result">Heads:{heads}</p>
              <p className="result">Tails:{tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
    return coinApp
  }
}

export default CoinToss
