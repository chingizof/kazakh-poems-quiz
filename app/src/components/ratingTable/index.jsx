import './index.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
export const RatingTable = () => {

    const [rating, setRating] = useState([]);

    useEffect(() => {
        async function fetchRating() {
            let response = await axios.get("https://kazakh-poems-quiz.vercel.app/result")
            console.log(response)
            setRating(response.data)
        }
        fetchRating();
    }, [])

    return(
        <div className='rating-wrapper'>
            <div className='rating-content'>
                <h1>Үздік нәтижелер:</h1>
                {rating.map((person)=>(
                    <div key={person._id}>{person.name}: {person.score}</div>
                ))}
            </div>
        </div>
    )
}