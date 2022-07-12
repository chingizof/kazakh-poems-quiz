import './index.css'
import { PoemName } from '../poemName'
import { PoemText } from '../poemText'

export const Poem = ({name, text}) => {
    return(
        <div className='poem-wrapper'>
            <PoemName name={name} />
            <PoemText text={text} />
        </div>
    )
}