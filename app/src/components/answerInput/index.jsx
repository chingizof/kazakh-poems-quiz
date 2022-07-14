import './index.css'
import {alertSuccess} from '../container'

export const AnswerInput = ({author, poemNumber, setPoemNumber, setCheckboxColor, result, setResult, resultBannerOn, setResultBannerOn}) => {

    const handleSend = () => {
        if (poemNumber==9){
            alertSuccess()
            setTimeout(alertSuccess, 500)
            setTimeout(alertSuccess, 1000)
            setTimeout(alertSuccess, 1500)
            setTimeout(alertSuccess, 2000)
            setTimeout(alertSuccess, 2500)
            setTimeout(alertSuccess, 3000)
            setResultBannerOn(true)
        }
        var val = document.getElementById('input-author').value
        console.log(val)
        if (val == author) {
            setCheckboxColor(checkboxColor => [...checkboxColor, "green"])
            alertSuccess()
            console.log('correct')
            setResult(parseInt(result)+1)

        } else {
            setCheckboxColor(checkboxColor => [...checkboxColor, "red"])
        }
        document.getElementById('input-author').value = ""
        if (poemNumber!=9) {
            setPoemNumber(parseInt(poemNumber)+1)
        }
    }
    //geeg

    

    return(
        <div className={`answer-input`}>
            <input
            id="input-author"
            className="input-field"
            type="input"
            required="yes"
            />
            <button className='send-button' onClick={handleSend}>Тексеру</button>
        </div>
    )
}