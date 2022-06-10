import Modal from 'react-modal';
import fecharImg from '../../assets/Fechar.svg'
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../Dice/api';
import { TransactionsContext } from '../../TransactionContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const { createTransaction }  = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');
        onRequestClose();
    }

    return (
        <Modal 
            isOpen={ isOpen }
            onRequestClose={ onRequestClose }
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={ onRequestClose } className="react-modal-close">
                <img src={ fecharImg } alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder='Nome do Título' value={title} onChange={ event => setTitle(event.target.value) } />
                <input placeholder='Valor' type="number" value={amount} onChange={ event => setAmount(Number(event.target.value)) } />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('deposit'); }} 
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={ incomeImg } alt="Entradas" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('withdraw'); }} 
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={ outcomeImg } alt="Saidas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder='Categoria' value={category} onChange={ event => setCategory(event.target.value) } />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}