import { useState } from "react"
import { pizzaCart } from "../pizzas"

/************************************************************** */
/* *********** COMPONENTE CART (CARRITO DE COMPRAS) *********** */
/************************************************************** */
const Cart = () => {
    /* ESTADO PARA MANIPULAR EL ARREGLO DE PIZZAS EN EL CARRITO DE COMPRAS */
    const [cart, setCart] = useState(pizzaCart)

    /* FUNCIÓN PARA CALCULAR EL TOTAL A PAGAR */
    const total = (accumulator, currentValue) => accumulator + currentValue.price

    /* FUNCIÓN PARA AUMENTAR CANTIDAD DE PIZZAS EN EL CARRITO */
    const agregarPizza = (pizza) => {
        const newCart = cart.map((pizzaa) => {
            if (pizzaa.name === pizza.name) {
                pizza.count += 1;
                pizza.price += pizza.price
            }
        })

        //setCart(newCart)
    }

    return (
        <main  className="main-section">
            <section className="cart-container">
                <h2>Detalles del pedido</h2>
                {/* PRODUCTOS A COMPRAR */}
                <ul className="products-to-buy">
                    {/* SE RENDERIZA LA INFORMACIÓN DE CADA PIZZA QUE SE ENCUENTRA EN EL CARRITO DE COMPRAS */}
                    {cart.map((pizza) => <li key={pizza.id} className="cart-pizza">
                        {/* IMAGEN DE LA PIZZA Y NOMBRE */}
                        <article className="pizza-img-name-container">
                            {/* IMAGEN DE LA PIZZA */}
                            <img src={pizza.img} alt= {"Pizza " + pizza.name} className="cart-pizza-image"/>
                            {/* NOMBRE DE LA PIZZA */}
                            <p>{pizza.name}</p>
                        </article>
                        {/* PRECIO - BOTONES DE INC & DEC - CANTIDAD DE PIZZAS EN EL CARRITO */}
                        <article className="pizza-price-count-container">
                            {/* PRECIO DE LA PIZZA */}
                            <p>{"$" + pizza.price.toLocaleString('es-CL')}</p>
                            {/* BOTÓN DE DECREMENTAR, PERMITE DISMINUIR LA CANTIDAD DE PIZZAS EN EL CARRITO Y SI LA CANTIDAD ES CERO ELIMINA LA PIZZA DEL CARRITO */}
                            <button className="dec-button">-</button>
                            {/* MUESTRA LA CANTIDAD DE PIZZAS EN EL CARRITO */}
                            <p>{pizza.count}</p>
                            {/* BOTÓN DE INCREMENTAR, PERMITE AUMENTAR LA CANTIDAD DE PIZZAS EN EL CARRITO */}
                            <button className="inc-button" onClick={() => agregarPizza(pizza)}>+</button>
                        </article>
                    </li>)}
                </ul>
                {/* TOTAL A PAGAR */}
                <h2>
                    Total: ${
                        /* EL MÉTODO .REDUCE() EJECUTA UN FUNCIÓN REDUCTORA POR CADA ELEMENTO*/
                        /* array.reduce(function(total, currentValue, currentIndex, arr), initialValue) */
                        pizzaCart.reduce(total, 0).toLocaleString('es-CL')
                    }
                </h2>
                {/* IR A PAGAR */}
                <button className="button-add-carro">Pagar</button>

            </section>
        </main>
    )
}

export default Cart