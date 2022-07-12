import { poems } from '../data/poems'
import { ResultItem } from '../resultItem'
import './index.css'

export const ResultBanner = ({result, checkboxColor}) => {
    return(
        <div className='result-wrapper'>
            <h1>Your score: {result}/10</h1>
            {poems.map((poem) => (
                <ResultItem checkboxColor={checkboxColor[parseInt(poem.number)-1]} answer={poem.author}/>
            ))}
        </div>
    )
}