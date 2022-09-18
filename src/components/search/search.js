import React from "react";
import "./style.css";
import { Box, Button } from "@mui/material";
import { getMoviesByName } from "../../api/movies";

function Search(props) {
  const [searchText, setSearchText] = React.useState("");
  const handleSearch = () => {
    getMoviesByName(searchText)
      .then((data) => {
        props?.onMoviesSearch(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={"search-wrapper"}>
      <span className={"search-header-text"}>Search Term:</span>
      <Box display={"flex"} gap={3}>
        <input
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
          value={searchText}
          className={"search-input"}
        />
        <Button
          sx={{ height: "inherit" }}
          color={"success"}
          variant={"contained"}
          type={"success"}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

export default Search;
