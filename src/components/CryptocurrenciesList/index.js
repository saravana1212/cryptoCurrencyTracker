import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyDetails} = this.props
    return (
      <div className="crypto-currencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-currency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
        />
        <div className="crypto-currencies-list">
          <div className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-values-container">
              <p className="list-coin-value-heading">USD</p>
              <p className="list-coin-value-heading">EURO</p>
            </div>
          </div>
          <ul className="list-body">
            {currencyDetails.map(eachCryptoCurrencyData => (
              <CryptocurrencyItem
                key={eachCryptoCurrencyData.id}
                currencyItem={eachCryptoCurrencyData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
