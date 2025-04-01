import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={(e) => handleClick("company", e.target.value)} value="" title="All Products" />
          <Button onClickHandler={(e) => handleClick("company", e.target.value)} value="Nike" title="Nike" />
          <Button onClickHandler={(e) => handleClick("company", e.target.value)} value="Adidas" title="Adidas" />
          <Button onClickHandler={(e) => handleClick("company", e.target.value)} value="Puma" title="Puma" />
          <Button onClickHandler={(e) => handleClick("company", e.target.value)} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
