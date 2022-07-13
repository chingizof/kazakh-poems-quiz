import axios from 'axios'
import './index.css'

export const ShareButton = ({ result }) => {
    const handleShare = () => {
        let val = document.getElementById("name").value
        axios.post("https://kazakh-poems-quiz.vercel.app/share", { name: val, score: result})
        window.location.reload()
    }

    return(
        <div className='button-wrapper'>
            <input 
            id='name' 
            placeholder='Сіздін атыңыз'
            className="input-name"
            type="input"
            required="yes"
            />
            <button className="send-button" onClick={handleShare}>Нәтижені жіберу</button>
        </div>
    )
}