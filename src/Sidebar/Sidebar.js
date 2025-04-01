import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={(e) => handleChange("category", e.target.value)} />
        <Price handleChange={(e) => handleChange("newPrice", e.target.value)} />
        <Colors handleChange={(e) => handleChange("color", e.target.value)} />
      </section>
    </>
  );
};

export default Sidebar;
