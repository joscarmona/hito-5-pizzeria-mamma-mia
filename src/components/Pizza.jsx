import { useState, useEffect } from "react"

/************************************************************** */
/* *********** COMPONENTE CART (CARRITO DE COMPRAS) *********** */
/************************************************************** */
const Pizza = () => {
    /* GUARDAR LA CONSULTA REALIZADA LA API DE PIZZAS POR LA INFORMACIÓN DE LA PIZZA*/
    const [pizza, setPizza] = useState({})

    /* PARA CONSULTAR A LA API POR PIZZAS POR LA INFORMACIÓN DE LA PIZZA */
    const getPizza = async () => {
        /* ENPOINT DE LA API PIZZAS */
        const url = "http://localhost:5000/api/pizzas/p001"
        const response = await fetch(url)
        const dataPizza = await response.json()
        setPizza(dataPizza)
    }

    /* useEffect, SE CONSULTA A LA API CUANDO EL COMPONENTE PIZZA SE MONTA EN App.jsx */
    useEffect(() => {
        getPizza()
    }, [])

    const {img, name, desc, ingredients, price, id} = pizza



    return (
        <main className="main-section">
            <section className="cart-container">
                {console.log("enpoint pizzas/p001", pizza)}
                {/* INFROMACIÓN DE LA PIZZA */}
                <div className="infoPizzaContainer">
                    {/* IMAGEN */}
                    <article className="pizzaImageContainer">
                        <img src={img} alt={"pizza " + name} className="pizzaImage"/>
                    </article>
                    {/* NOMBRE, DESCRIPCIÓN, INGREDIENTES, PRECIO */}
                    <article className="pizzaNamDescIngPricContainer">
                        {/* NOMBRE */}
                        <h3 className="pizza-name">{"Pizza " + name}</h3>
                        {/* DESCRIPCIÓN */}
                        <p className="pizzaDescription">{desc}</p>
                        {/* INGREDIENTS */}
                        <div>
                            <p className="">Ingredientes:</p>
                            <ul>
                                {ingredients?.map((ing) => <li key={ing} className="ingredientsLi">&#127829; {ing}</li>)}
                            </ul>
                        </div>
                        {/* PRECIO */}
                        <h2 className="pricePizza">Precio: ${price?.toLocaleString("es-CL")}</h2>


                    </article>
                </div>
                {/* BUTTON AÑADIR AL CARRITO */}
                <button className="button-add-carro">Añadir &#128722;</button>

            </section>
        </main>
    )
}

export default Pizza