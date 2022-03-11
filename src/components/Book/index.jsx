import React from 'react'
import {Author, Container, Cover, Title} from './styles'

const Book = ({book, pickBook, isLarge}) => (
  <Container $isLarge={isLarge} onClick={() => pickBook(book)}>
    <Cover src={book.image} alt={`Couverture de ${book.title} par ${book.author}`} />
    <figcaption>
      <Title $isLarge={isLarge}>{book.title}</Title>
      <Author>{book.author}</Author>
    </figcaption>
  </Container>
)

export default Book
