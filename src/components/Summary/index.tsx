import { useContext } from 'react';
import entradaImg from '../../assets/Entradas.svg';
import saidaImg from '../../assets/Saidas.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionContext';
import { Container } from './style'

export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    return(
        <Container>
            <div>
                <header>
                    <p>
                        Entradas
                    </p>
                    <img src={ entradaImg } alt="Entradas" />
                </header>
                <strong>
                    R$2000,00
                </strong>
            </div>

            <div>
                <header>
                    <p>
                        Saidas
                    </p>
                    <img src={ saidaImg } alt="Saidas" />
                </header>
                <strong>
                    -R$1000,00
                </strong>
            </div>

            <div className="destaqueFundo">
                <header>
                    <p>
                        Total
                    </p>
                    <img src={ totalImg } alt="Total" />
                </header>
                <strong>
                    R$1000,00
                </strong>
            </div>
        </Container>
    )
}