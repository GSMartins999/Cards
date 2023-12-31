import styles from "./ProductCard.module.css";

function ProductCard({ itens, nome,image }) {
  return (
    <>
      <h3> Itens da loja do {nome} </h3>
      <div className={styles.container}>
        {
          itens.map((itens) => (
            <div className={styles.CardItem}>
            <img src={itens.image} className={styles.imagemFundo}/>
              <p>{itens.name}</p>
              <div>
                <button className={styles.ButaoComprar}>{itens.price}</button>
              </div>
              <div>
                <p>{itens.id}</p>
              </div>
            </div>
          ))

          //   {itens.name} {itens.price} {itens.id}
        }
      </div>
    </>
  );
}

export default ProductCard;
