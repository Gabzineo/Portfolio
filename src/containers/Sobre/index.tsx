import Title from "../../components/Title";
import Paragrafo from "../../components/Paragrafo";
import { GitHubSecao } from "./styles";

const Sobre = () => (
    <section>
    <Title fontSize={15}>Sobre mim</Title>
    <Paragrafo tipo="principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id dolorem. Temporibus similique vero deleniti dolor, itaque amet pariatur laudantium molestias velit fugiat blanditiis quibusdam mollitia repellendus cumque, fugit corporis!</Paragrafo>
    <GitHubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=Gabzineo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gabzineo&layout=compact&langs_count=7&theme=dracula"/>
    </GitHubSecao>
  </section>
)

export default Sobre