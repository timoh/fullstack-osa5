import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'  

const store = createStore(counterReducer)

const laskePositiivisia = (hyvat, maara) => {
  return (hyvat*1.0 / maara*1.0) * 100.0
}

const laskeKeskiarvo = (summa, maara) => {
  return (summa*1.0 / maara*1.0) * 100.0
}

const Statistiikka = () => {
  const hyvat = store.getState().good
  const pahat = store.getState().bad
  const okt = store.getState().ok

  console.log("HyvaT: ", hyvat)
  console.log("HyvaT l: ", hyvat.length)

  const summa = (hyvat* 1) + (pahat* -1)
  const maara = hyvat + pahat + okt

  console.log("Maara: ", maara)
  console.log("Summa: ", summa)

  let keskiarvo = 0.00
  let positiivisia = 0.00

  if (maara > 0) {
    keskiarvo = laskeKeskiarvo(summa, maara)
  }

  if (maara > 0) {
    positiivisia = laskePositiivisia(hyvat, maara)
  }

  console.log("KA: ", keskiarvo)
  console.log("Posi: ", positiivisia)

  if (maara == undefined || maara === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>
              {store.getState().good}
            </td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>
              {store.getState().ok}
            </td>
          </tr>
          <tr>
            <td>huono</td>
            <td>
              {store.getState().bad}
            </td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{ keskiarvo }</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{ positiivisia } %</td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'RESET' })}>nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {

  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={e => store.dispatch({ type: 'GOOD' })}>hyvä</button>
        <button onClick={e => store.dispatch({ type: 'OK' })}>neutraali</button>
        <button onClick={e => store.dispatch({ type: 'BAD' })}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})