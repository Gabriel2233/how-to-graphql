import { Container, SearchInput } from './styles'
import { useSearch } from '../../contexts/SearchContext'

export const Search = () => {

  const { handleSubmit, onSubmit, errors, register } = useSearch()

  return (
    <Container as='form' onSubmit={handleSubmit(onSubmit)}>
      <h2>Search :</h2>
       <SearchInput ref={register} name='searchInput' />
       <button type='submit'>Search</button>
    </Container>
  )
}