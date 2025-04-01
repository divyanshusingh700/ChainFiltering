import "./Product.css";

const Products = ({ result }) => {
  if(result.length === 0){
    return (
      <h2
        style={{
          color: "black",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        No matching results found
      </h2>
    );
  }

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
