import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'
import Search from './components/Search'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  // fetching books
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      setBooks(books)
      setFilteredBooks(books)
    }

    fetchData()
  }, [])

  // function to choose book
  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }
  // function to close panel
  const closePanel = () => {
    setSelectedBook(null)
    setShowPanel(false)
  }
  // function to filter books
  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }
  // check if the books have been filtered
  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? 'Search results' : 'All books available'}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
