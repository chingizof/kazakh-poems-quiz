import axios from 'axios'
import './index.css'

export const ShareButton = ({ result }) => {
    const handleShare = () => {
        let val = document.getElementById("name").value
        axios.post("https://kazakh-poems-quiz.vercel.app/share", { name: val, score: result})
    }

    return(
        <div className='button-wrapper'>
            <input id='name' placeholder='Your Name'></input>
            <button onClick={handleShare}>Share Results</button>
        </div>
    )
}