import React from 'react'
import Book from '../Book'
import {BookList, Container, H2} from './styles'

const BooksContainer = ({books, pickBook, isPanelOpen, title}) => (
  <Container $isPanelOpen={isPanelOpen}>
    <H2>{title}</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} pickBook={pickBook} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
