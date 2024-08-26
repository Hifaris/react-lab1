
function App() {
    const sty = {color: 'white', backgroundColor: 'black' }
    const currentYear = new Date().getFullYear()
    const birthYear = 1998
    const calYear = currentYear - birthYear
    // console.log(calYear)
    const currentMont = new Date().getMonth()
    const birthMonth = 4
    const calMonth = currentMont - birthMonth
    const birthDate = 20
    const currentDate = new Date().getDate()
    const calDate = currentDate - birthDate


    return (
    <div>
        <h1 style={sty}>Nattapong Nakcharin</h1>
        <p style={sty}>Birth year: {calYear} Month: {calMonth} Date: {calDate}</p>
    </div>
    )
}

ReactDOM.createRoot(document.querySelector('.root'))
.render(<App />)