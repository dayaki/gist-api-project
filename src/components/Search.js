import React, { useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useDispatch, useSelector } from "react-redux";
import { addToResult, updateSearch } from "../store/appSlice";
import { getGistForUser } from "../services/gistService";

const Search = () => {
  const { searchHistory } = useSelector((state) => state.app);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(updateSearch(searchTerm));
      const temp = searchHistory.find((elem) => elem === searchTerm);
      if (!temp) {
        searchGithub();
      }
    }
  };

  const searchGithub = async () => {
    const { data } = await getGistForUser(searchTerm);
    // store data aganist the username
    const dataToSave = { payload: data, username: searchTerm };
    dispatch(addToResult(dataToSave));
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={searchQueryHandler}
          value={searchTerm}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
