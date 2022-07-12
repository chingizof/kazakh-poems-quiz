import { Checkbox } from '../answerCheckbox'
import './index.css'
import { poems } from '../data/poems'

export const Footer = ({checkboxColor, poemNumber}) => {
    

    return (
        <div className="footer-wrapper">
            {/* здесь будут квадратики с правильными или нет ответами */}
            {poems.map((poem) => (
                <Checkbox poemNumber={poemNumber} number={poem.number} key={poem.number} checkboxColor={checkboxColor} />
            ))}
        </div>
    )
}