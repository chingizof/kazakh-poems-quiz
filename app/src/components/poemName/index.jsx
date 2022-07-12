import './index.css'

export const PoemName = ({name}) => {
    return(
        <div className='poem-name-wrapper'>
            <h1>{name}</h1>
        </div>
    )
}