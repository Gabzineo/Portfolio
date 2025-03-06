import styled from "styled-components";

type BotaoProps = {
    principal: boolean;
    fontSize?: string
}

const Botao = styled.button<BotaoProps> `
background-color: ${(props) => (props.principal ? 'green' : 'blue')};
font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled (Botao)`
    background-color: red;
    color: #fff;
    font-size: 20px;
`

function Teste () {
    return (
        <>
        <Botao principal>Enviar</Botao>
        <Botao fontSize="13px" principal ={false}>Cancelar</Botao>
        <BotaoPerigo principal>Não clica aq não fia da puta</BotaoPerigo>
        </>
    )
}

export default Teste