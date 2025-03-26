import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"

import { Descricao, BotaoTema, Sidebarsocorro } from "./styles"

const Sidebar = () => (
    <aside>
        <Sidebarsocorro>
        <Avatar />
        <Title fontSize={20}>Gian Souza</Title>
        <Paragrafo tipo="secundario" fontSize={16}>Gabzineo</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
        </Sidebarsocorro>
    </aside>
)
export default Sidebar 