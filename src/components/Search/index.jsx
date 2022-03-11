import React, {useRef, useState} from 'react'
import {Icon, Input, SearchContainer, Wrapper} from './styles'
import {Close} from '../../styles'

const Search = ({filterBooks}) => {
  // function to get the entire input element
  const inputEl = useRef(null)

  // logic to expand or not the input for desktop view, by default false
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  // function to filter book with the current input value
  const handleChange = (event) => {
    filterBooks(event.target.value)
  }
  // function to clear the input search & results, and contract it
  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  // function to expand the input search
  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input type="text" name="search" autoComplete="off" onChange={handleChange} ref={inputEl} />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
