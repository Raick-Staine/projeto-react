import estilos from './Produtos.module.css';

export default function Produtos() {
    return (
        <section id='produtos' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Mosso produtos</h2>
                <p>Aqui, reunimos as os melhores instrumentos das melhores marcas do mercado instrumental.</p>
                <p>Autenticidade garantida | As melhores marcas do mundo | Envio rápido e seguro.</p>

                <div className={estilos.instrumentos_img}>
                    <div className={estilos.card_instrumentos }>
                        <h3>Guitarra</h3>
                        <picture>
                            <img src='./guitarra.jpg' alt='Foto Guitarra'/>
                        </picture>
                        <p>R$ 3.670,00</p>
                    </div>

                    <div className={estilos.card_instrumentos}>
                        <h3>Bateria</h3>
                        <picture>
                            <img src='./bateria.jpg' alt='Foto Bateria'/>
                        </picture>
                        <p>R$ 4.540,00</p>
                    </div>

                    <div className={estilos.card_instrumentos}>
                        <h3>Teclado</h3>
                        <picture>
                            <img src='./teclado.jpg' alt='Foto Teclado'/>
                        </picture>
                        <p>R$ 11.920,00</p>
                    </div>

                    <div className={estilos.card_instrumentos}>
                        <h3>Baixo</h3>
                        <picture>
                            <img src='./baixo.jpg' alt='Foto Baixo'/>
                        </picture>
                        <p>R$ 2.700,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}