import './index.css'

export const ResultItem = ({checkboxColor, answer}) => {
    let ans = ""
    if (checkboxColor == "red") {
        ans = "Incorrect: "
    } else {
        ans = "Correct: "
    }
    return(
        <div>
            {ans}{answer}
        </div>
    )
}