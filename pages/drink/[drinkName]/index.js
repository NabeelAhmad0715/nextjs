import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import drinkStyles from '../../../styles/Drink.module.css'

const drink = ({ drink }) => {
  return (
    <>
      <Meta title={drink.strDrink} description={drink.strInstructions} />
      <div className={drinkStyles.detail}>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <h1>{drink.strDrink}</h1>
        <p>{drink.strInstructions}</p>
      </div>
      <br />
      <Link href='/'><a className="btn btn-primary">Go Back</a></Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/drinks/${context.params.drinkName}`)

  const drink = await res.json()
  return {
    props: {
      drink,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/drinks`)

  const response = await res.json()
  const drinks = response.drinks.map((drink) => drink.strDrink)
  const paths = drinks.map((strDrink) => ({ params: { drinkName: strDrink } }))

  return {
    paths,
    fallback: false,
  }
}
export default drink
