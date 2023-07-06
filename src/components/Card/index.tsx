import { Handle, Position } from 'reactflow';
import { CardContainer } from './styles';
export function Card() {
    return (
        <CardContainer>
            <Handle type="target" position={Position.Top} />
            <span>Card</span>
            <Handle type="source" position={Position.Bottom} id="a" />
        </CardContainer>
    );
}
