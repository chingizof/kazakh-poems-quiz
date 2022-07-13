import './index.css'
import { useState } from 'react'
import { Poem } from '../poem'
import {poems} from '../data/poems'
import { AnswerInput } from '../answerInput'
import { Footer } from '../footer'
import { ResultBanner } from '../resultBanner'
import { RatingTable } from '../ratingTable'



export const Container = () => {

    const [poemNumber, setPoemNumber] = useState(0)
    let poem = poems[poemNumber]
    const [checkboxColor, setCheckboxColor] = useState([]) //right and wrong answers
    const [result, setResult] = useState(0)
    const [resultBannerOn, setResultBannerOn] = useState(false)

    return(
        <div className={`container-wrapper`}>
            <div className={`${resultBannerOn ? "banner-wrapper" : "hide-poem"}`}><ResultBanner result={result} checkboxColor={checkboxColor} /></div>
            <div className={`poem ${resultBannerOn ? "hide-poem" : ""}`}>
                <Poem name={poem.name} text={poem.text} />
                <AnswerInput author={poem.author} poemNumber={poemNumber} setPoemNumber={setPoemNumber} setCheckboxColor={setCheckboxColor} result={result} setResult={setResult} resultBannerOn={resultBannerOn} setResultBannerOn={setResultBannerOn} />
            </div>
            <Footer checkboxColor={checkboxColor} poemNumber={poemNumber}/>
            <RatingTable />
        </div>
    )
}