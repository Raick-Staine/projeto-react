import estilos from './Topo.module.css';

export default function Topo() {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                    <a href='#'><img src='./logo.jpg'/></a>
                </picture>

                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </header>
    )
}