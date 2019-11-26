import React from "react";
import styled from "styled-components";
import { axiosInstance } from "../../../utils/axios/axios";
import { useDebounce } from "use-debounce";
import ItemsWrapper from "../../../Components/Main/ItemUiContent/ItemsWrapper";

/**
 * TODO:
 * paginate (NOT IMPORTANT BUT ITS BETTER TO DO)
 */
const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #000000, #470000);
`;
const SearchBox = styled.div`
  width: 100%;
  height: 70px;

  margin-bottom: 50px;
`;
const SearchBoxInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  color: #c6c6c6;
  font-size: 2rem;
  padding: 0 15px;
  :focus {
    outline: none;
  }
  background-color: rgb(0, 0, 0, 0.6);
  ::placeholder {
    color: #3f3f3f;
    font-size: 2rem;
    letter-spacing: 1.5px;
  }
`;
const Search = () => {
  const [query, setQuery] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [debouncedQuery] = useDebounce(query, 500);

  React.useEffect(() => {
    if (debouncedQuery) {
      console.log(debouncedQuery);
      axiosInstance("/search", {
        params: {
          q: query,
          type: "track"
        }
      }).then(res => {
        console.log(res.data.tracks.items);
        setItems(res.data.tracks.items);
      });
    } else {
      setItems([]);
    }
  }, [debouncedQuery]);

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchBox>
        <SearchBoxInput
          value={query}
          type="text"
          placeholder="Search..."
          onChange={handleQueryChange}
        ></SearchBoxInput>
        {/* <ItemsWrapper items={items.map(item => item.album)} /> */}
      </SearchBox>
      <ItemsWrapper items={items.map(item => item.album)} />
    </SearchContainer>
  );
};

export default Search;
