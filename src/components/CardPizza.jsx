/************************************************************** */
/* ************************ COMPONENTE ************************ */
/************************************************************** */
// const CardPizza = ({name, price, ingredients, img}) => {
const CardPizza = ({producto}) => {
    /* DESTRUCTURING PRODUCTO (PROPS) */
    // const {name, price, ingredients, img, desc, id} = producto
    const {name, price, ingredients, img, desc} = producto
    return (
        /* ****** CARD ****** */
        <article className = "card">
            {/* CARD IMAGE */}
            <img src = {img} alt = {"Pizza " + name} className="card-image" />
            {/* CARD BODY */}
            <div className="card-body">
                {/* NOMBRE-DESCRIPCIÓN*/}
                <div className="pizza-name-description">
                    <h3 className="pizza-name">{"Pizza " + name}</h3>
                    <p className="pizza-description">{desc}</p>
                </div>
                {/* INGREDIENTES */}
                <div className="ingredientes">
                    <p>
                        Ingredientes:
                        {/* <br /> */}
                        {/* UTF-8 EMOJI PIZZA: &#x1F355; */}
                        {/* EL MÉTODO .JOIN() CONVIERTE UN ARREGLO A UN STRING */}
                        {/* <span className="span-ingredientes">&#127829; {ingredients.join(", ")}</span> */}
                    </p>
                    <ul className="ingredients-list">
                        {ingredients.map((ing) => <li key={ing} className="ingredients-li">&#127829; {ing}</li>)}
                    </ul>
                </div>                
                {/* PRECIO & BOTONES DE VER MÁS Y AÑADIR AL CARRO DE COMPRAS */}
                <div className="precio-botones">
                    <h2>Precio: ${price.toLocaleString('es-CL')}</h2>
                    <div className="buttons">
                        {/* VER MÁS */}
                        {/* UTF-8 EMOJI EYES: &#128064; */}
                        <button className="button-ver-mas">Ver más &#128064;</button>
                        {/* AÑADIR AL CARRO DE COMPRAS */}
                        {/* UTF-8 EMOJI SHOPPING CART: &#128722; */}
                        <button className="button-add-carro">Añadir &#128722;</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardPizza