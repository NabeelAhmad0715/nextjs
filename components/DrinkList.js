import DrinkItem from './DrinkItem'
import drinkStyles from '../styles/Drink.module.css'

const DrinkList = ({ drinks }) => {
  return (
    <div className={drinkStyles.grid}>
      {drinks.drinks.map((drink) => (
        <DrinkItem drink={drink} />
      ))}
    </div>
  )
}

export default DrinkList
