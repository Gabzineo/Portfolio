import { Title as TitleStyle} from './styles';

export type Props = {
    children: string;
    fontSize?: number;
}


const Paragrafo = (props: Props) =>  (
<TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Paragrafo;