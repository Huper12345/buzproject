import './InstructionButton.scss';
import { DocumentIcon } from './DocumentIcon';
import InstructionFile from "./files/InstrucionImmunoCompleks.pdf"



export const InstructionButton = () => {
    return(
        <a href={InstructionFile} className='Instruction-Button' target="blank">
            <DocumentIcon />
            Открыть инструкцию
            </a>
    )
}