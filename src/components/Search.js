import "./Search.css";
import SearchResults from "./SearchResults";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import api from "../service/api";
import { useState, useEffect } from "react";

const Search = () => {
  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoidGhpYWdvIiwiZW1haWwiOiJ0aGlhZ28xMjcyMDAwQGdtYWlsLmNvbSIsImFjdGl2ZSI6dHJ1ZX0sInJvbGVzIjpbeyJpZCI6NTEsInZhbHVlIjoiQ2xpZW50IHJvbGUiLCJkZXNjcmlwdGlvbiI6IlJvbGUgd2l0aCBjbGllbnQgcHJpdmlsZWdlcyIsImFjdGl2ZSI6dHJ1ZX1dLCJpYXQiOjE2NTM4NjM3MTEsImV4cCI6MTY1Mzg2NzMxMX0.PYs3_Pe64AiS_Q-nbVp7Lx3bpNpUSv75-GXfPJUM_OA";
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClick = (event) => {
    setSearch(event.target.value);
    event.target.value.length > 0 || !drugs.length === 0
      ? setAnchorEl(event.currentTarget)
      : setAnchorEl(null);

    console.log(event.currentTarget);
  };

  useEffect(() => {
    api
      .get(`drug?userInput= ${search}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.data.content.length === 0) setAnchorEl(null);
        setDrugs(response.data.data.content);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [search]);

  return (
    <div className="search__div">
      <input
       className="drug-search__input"
        type="search"
        value={search}
        onChange={handleClick}
        aria-describedby={id}
      />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <SearchResults data={drugs} />
        </Box>
      </Popper>
    </div>
  );
};

export default Search;
