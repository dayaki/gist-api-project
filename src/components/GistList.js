import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Gist from "./Gist";

const GistList = () => {
  const { currentUsername, activeSearch } = useSelector((state) => state.app);
  const searchResults =
    useSelector((state) => state.app.searchResults[currentUsername]) || [];

  return (
    <>
      {activeSearch ? (
        searchResults && searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Gist gist={result} key={index} />
          ))
        ) : (
          <NoContent>
            <NoContentText>
              User has not gist yet, try searching for another user.
            </NoContentText>
          </NoContent>
        )
      ) : (
        <NoContent>
          <NoContentText>Search to see a user gist files.</NoContentText>
        </NoContent>
      )}
    </>
  );
};

const NoContent = styled.div`
  width: 50%;
  padding-top: 80px;
  margin: 0 auto;
  text-align: center;
`;
const NoContentText = styled.a`
  text-align: center;
  font-size: 16;
  font-weight: bold;
`;

export default GistList;
