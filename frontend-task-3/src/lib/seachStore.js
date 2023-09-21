const { createContext, useContext, useState } = require("react");

const SearchContext = createContext(null);

export const SearchContextProvider = ({children}) => {

    const [searchData, setSearchData] = useState("")
    const value = {searchData, setSearchData}
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)