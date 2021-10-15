import Link from 'next/link'
import drinkStyles from '../styles/Drink.module.css'

const DrinkItem = ({ drink }) => {
  return (
    <Link href={`/drink/${drink.strDrink}`}>
      <a className={drinkStyles.card}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
        <h3 className={drinkStyles.title}>{drink.strDrink} &rarr;</h3>
        <p>{drink.strInstructions}</p>
      </a>
    </Link>
  )
}

export default DrinkItem
