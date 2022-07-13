import './index.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
export const RatingTable = () => {

    const [rating, setRating] = useState([]);

    useEffect(() => {
        async function fetchRating() {
            let response = await axios.get("http://localhost:3001/result")
            console.log(response)
            setRating(response.data)
        }
        fetchRating();
    }, [])

    return(
        <div className='rating-wrapper'>
            <h1>Top Results:</h1>
            {rating.map((person)=>(
                <div key={person._id}>{person.name}: {person.score}</div>
            ))}
        </div>
    )
}