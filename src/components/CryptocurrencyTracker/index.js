import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.map(eachCryptoCurrency => ({
      id: eachCryptoCurrency.id,
      currencyLogoUrl: eachCryptoCurrency.currency_logo,
      currencyName: eachCryptoCurrency.currency_name,
      usdValue: eachCryptoCurrency.usd_value,
      euroValue: eachCryptoCurrency.euro_value,
    }))
    this.setState({cryptoCurrenciesData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesData, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currencyDetails={cryptoCurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
