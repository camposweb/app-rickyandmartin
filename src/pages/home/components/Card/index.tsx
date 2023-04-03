import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import { CardContainer, DialogContainer, InfoContainer } from './styles'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface CardType {
  id?: number
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
  origin?: {
    name?: string
    url?: string
  }
  location?: {
    name?: string
    url?: string
  }
  image?: string
  episode?: string[]
  url?: string
  created: string
}

interface CardProps {
  card: CardType
}

export function Card({ card }: CardProps) {
  const dateformat = parseISO(card.created)
  /* const dateCreated = format(dateformat, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  }) */
  const dateCreated = format(dateformat, 'dd/MM/yyyy', {
    locale: ptBR,
  })
  // const [cards, setCards] = useState<CardType[]>([])

  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false)
  }

  return (
    <>
      <CardContainer>
        <div>
          <div className="person">
            <Image
              loader={({ src }) => src}
              src={card.image}
              alt=""
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="title">
          <h3>{card.name}</h3>
        </div>
        <div className="info">
          <p>
            <strong>Status: </strong>
            {card.status}
          </p>
          <p>
            <strong>Species: </strong>
            {card.species}
          </p>
          <p>
            <strong>Created: </strong>
            {dateCreated}
          </p>
        </div>
        <div>
          <button onClick={handleOpenModal}>Info</button>
        </div>
      </CardContainer>
      <Dialog
        as="div"
        className="dialog"
        open={isOpenModal}
        onClose={handleCloseModal}
      >
        <DialogContainer>
          <Dialog.Panel className="panel">
            {/* <div></div> */}
            <div className="images">
              <Image
                loader={({ src }) => src}
                src={card.image}
                alt=""
                width={300}
                height={300}
              />
            </div>
            {/* <div>
              <h1>Martin Lurec</h1>
            </div> */}
            <Dialog.Title className="title">{card.name}</Dialog.Title>
            <Dialog.Description className="info">
              <div>
                <strong>Status: </strong>
                <span>{card.status}</span>
                <strong>Species: </strong>
                <span>{card.species}</span>
                <strong>Type: </strong>
                <span>{card.type ? '' : 'unknown'}</span>
                <strong>Gender: </strong>
                <span>{card.gender}</span>
              </div>
              <div>
                <strong>Origin: </strong>
                <span>{card.origin?.name}</span>
                <strong>Location: </strong>
                <span>{card.location?.name}</span>
                <strong>Created: </strong>
                <span>{dateCreated}</span>
              </div>
            </Dialog.Description>
            <div className="button">
              <button onClick={handleCloseModal}>Fechar</button>
            </div>
          </Dialog.Panel>
        </DialogContainer>
      </Dialog>
    </>
  )
}
