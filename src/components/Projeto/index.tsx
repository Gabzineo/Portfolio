

import { Title } from "../Title/styles";
import Paragrafo from "../../components/Paragrafo";

import { Card, LinkBotaum } from "./styles"

const Projeto = () => (
    <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista feita com Vue.js</Paragrafo>
    <LinkBotaum>Visualizar</LinkBotaum>
    </Card>
)

export default Projeto