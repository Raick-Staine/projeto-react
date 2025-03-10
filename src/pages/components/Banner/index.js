import estilos from './Banner.module.css';

export default function Banner() {
    return (
        <section className={estilos.secao_banner}>
            <div>
                <p>As melhores ofertas</p>
                <h1>As melhores marcas</h1>
                <p>Você só encontra aqui!</p>
            </div>
        </section>
    )
}