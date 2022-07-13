import { poems } from '../data/poems'
import { ResultItem } from '../resultItem'
import { ShareButton } from '../shareButton'
import './index.css'

export const ResultBanner = ({result, checkboxColor}) => {
    return(
        <div className='result-wrapper'>
            <h1>Сіздің нәтиже: {result}/10</h1>
            {poems.map((poem) => (
                <ResultItem key={poem.number} checkboxColor={checkboxColor[parseInt(poem.number)-1]} answer={poem.author}/>
            ))}
            <ShareButton result={result}/>
        </div>
    )
}