import axios from 'axios'
import './index.css'

export const ShareButton = ({ result }) => {
    const handleShare = () => {
        let val = document.getElementById("name").value
        axios.post("http://localhost:3001/share", { name: val, score: result})
        window.location.reload()
    }

    return(
        <div className='button-wrapper'>
            <input id='name' placeholder='Your Name'></input>
            <button onClick={handleShare}>Share Results</button>
        </div>
    )
}