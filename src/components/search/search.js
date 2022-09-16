import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function Search(props) {
  return (
    <div className={"search-wrapper"}>
      <span className={"search-header-wrapper"}>Search Term:</span>
      <Box display={"flex"} gap={3}>
        <input className={"search-input"} />
        <Button color={"success"} variant={"contained"} type={"success"}>
          Search
        </Button>
      </Box>
    </div>
  );
}

export default Search;
