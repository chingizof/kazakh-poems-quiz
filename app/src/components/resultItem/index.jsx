import './index.css'

export const ResultItem = ({checkboxColor, answer}) => {
    let ans = ""
    if (checkboxColor == "red") {
        ans = "Дұрыс емес: "
    } else {
        ans = "Дұрыс: "
    }
    return(
        <div>
            {ans}{answer}
        </div>
    )
}