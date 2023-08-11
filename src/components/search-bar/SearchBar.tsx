import { PrimaryButton } from "@fluentui/react";
import { RiSearch2Line } from "react-icons/ri";
import "../../App.css";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useStore";
import { actionGetMoviesByTitle } from "../../redux/actions/moviesActions";
const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionGetMoviesByTitle(input));
    setInput("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input">
        <input type="text" value={input} name="input" onChange={handleChange} />

        <RiSearch2Line className="icon-search-bar" />
      </div>
      <PrimaryButton
        className="button-primary"
        text="Buscar"
        type="submit
      "
      />
    </form>
  );
};

export default SearchBar;
