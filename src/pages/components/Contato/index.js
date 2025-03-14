import estilos from './Contato.module.css';

export default function Contato() {
    return (
        <section className={estilos.secao_contato}>
            <div className={estilos.separacao}>
                <div className={estilos.logo_descricao}>
                    <picture>
                        <a href='#'><img src='./logo.jpg' /></a>
                    </picture>
                    <p>Obrigado por nos visitar!</p>
                </div>

                <div className={estilos.sncs}>
                    <div>
                        <h4>Sobre Nós</h4>
                        <p>Melhores Marcas</p>
                        <p>Melhor Preço</p>
                        <p>Melhor Loja</p>
                    </div>

                    <div>
                        <h4>Contato</h4>
                        <p>CEP: 11665-600</p>
                        <p>(12) 9817-73056</p>
                        <p>Instrumentosrs@gmail.com</p>
                    </div>

                    <div>
                        <h4>Sociais</h4>
                        <p>instrumentos.rs</p>
                        <p>loja_instrumentosrs</p>
                        <p>Instrumentos RS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}