import { useEffect, useState } from 'react'
import { Card, CardType } from '../Card'
import { CardListContainer } from './styles'
import axios from 'axios'

export function CardList() {
  const [cards, setCards] = useState<CardType[]>([])

  /* const fetcher: Fetcher<CardType[]> = (...args) =>
    fetch(...args).then((res) => res.json()) */

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => {
        const { results } = response.data
        console.log(results)
        setCards(results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <CardListContainer>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />
      })}
    </CardListContainer>
  )
}
