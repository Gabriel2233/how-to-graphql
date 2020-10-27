const { createContext, useState, useContext } = require("react");
const { useForm } = require("react-hook-form");
const { LINKS_FEED, SEARCH_LINKS_FEED } = require("../graphql/queries");

const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {

  const { errors, handleSubmit, register } = useForm()
  const [feedQuery, setFeedQuery] = useState(LINKS_FEED)
  const [variable, setVariable] = useState('')

  const onSubmit = (data) => {

    if(data.searchInput === '') {
      setFeedQuery(LINKS_FEED)
    }

    setFeedQuery(SEARCH_LINKS_FEED)
    setVariable(data.searchInput)
  }

   return (
     <SearchContext.Provider value={{ variable, register, handleSubmit, onSubmit, errors, feedQuery }}>{children}</SearchContext.Provider>
   )
}

export const useSearch = () => {
  return useContext(SearchContext)
}