import "./style.min.css";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

const Searchbar = () => {
  return (
    <div className="dropdown searchbar">
      <Input1 placeholder="search store..." />
      <Button1 icon="fas fa-search" />
    </div>
  );
};

export default Searchbar;
