import './index.css'
import {poems} from '../data/poems'

export const Checkbox = ({poemNumber, number, checkboxColor}) => {
    return(
        <div className='checkbox-wrapper'>
            <span style={{'color':checkboxColor[number-1]}}>{number}</span>
        </div>
    )
}