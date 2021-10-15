import { server } from '../config'
import DrinkList from '../components/DrinkList'

export default function Home({ drinks }) {
  return (
    <div>
      <DrinkList drinks={drinks} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/drinks`)
  const drinks = await res.json();

  return {
    props: {
      drinks,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const drinks = await res.json()

//   return {
//     props: {
//       drinks,
//     },
//   }
// }
