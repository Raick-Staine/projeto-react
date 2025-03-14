import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id='sobre' className={estilos.sobre}>
            <div className={estilos.titulos}>
                <h2>Mosso produtos</h2>
                <p>Aqui está nossa localização com fotos e falando sobre nossos produtos</p>

                <div className={estilos.fotos_descricao}>
                    <div className={estilos.card_sobre}>
                        <picture>
                            <img src='./loja.jpg' alt='Foto da Loja' />
                        </picture>
                    </div>

                    <div className={estilos.descricao}>
                        <h2>Localização</h2>
                        <p>Nossa loja fica localizada no centro de Caraguatatuba-SP proximo a lojas cem, Avenida Rio Branco, 1615, em Indaia - caraguatatuba -SP</p>
                    </div>
                </div>

                <div className={estilos.fotos_descricao}>
                    <div className={estilos.descricao}>
                        <h2>Nossos Produtos</h2>
                        <p>Nossos produtos são fabricados pelas melhores marcas do Brasil como Seizi, Ibanez, Yamaha, Dylan, RMV, Tagima, Nord, Roland e Dixon</p>
                    </div>

                    <div className={estilos.card_sobre}>
                        <picture>
                            <img src='./i-descricao.jpg' alt='Foto dos Instrumentos' />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}