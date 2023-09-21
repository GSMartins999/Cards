import styles from "./CartCard"

function CartCard({itens}){


    return(
    <>

        <div className={styles.Container}>
            <ul>
                <li>
                    {itens.name}
                </li>
                <li>
                    {itens.price}
                </li>
                <li>
                    {itens.id}
                </li>
            </ul>
        </div>

    </>
    )
}

export default CartCard;