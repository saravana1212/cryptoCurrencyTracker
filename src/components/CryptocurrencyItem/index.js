import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  // const {currencyLogoUrl,currencyName,usdValue,euroValue}=currencyItem

  return (
    <li className="item-container">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={currencyItem.currencyLogoUrl}
          alt={currencyItem.currencyName}
        />
        <p className="currency-name">{currencyItem.currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{currencyItem.usdValue}</p>
        <p className="currency-value">{currencyItem.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
