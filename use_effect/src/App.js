import React, {useState, useEffect} from 'react'
import './App.css';

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.msg}</h5>
  </div>
}

function App() {
  const [val, setVal] = useState(1000);
  const [tax8, setTax8] = useState(0);
  const [tax10, setTax10] = useState(0);
  const [msg, setMsg] = useState(<p>set a price...</p>)

  const doChange = (event) => {
    setVal(event.target.value)
  }

  const doAction = () => {
    let res = <div>
      <p>軽減税率(8%) : {tax8}</p>
      <p>通常税率(10%) : {tax10}</p>
    </div>

    setMsg(res)
  }


  useEffect(() => {
    let res = <div>
      <p>軽減税率(8%) : {tax8}</p>
      <p>通常税率(10%) : {tax10}</p>
    </div>
    setMsg(res)
  }, [tax8, tax10])

  useEffect(() => {
    setTax8(Math.floor(val * 1.08))
  })

  useEffect(() => {
    setTax10(Math.floor(val * 1.1))
  })

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg}></AlertMessage>
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control" onChange={doChange} />
          {/* <button className="btn btn-primary" onClick={doAction}>Calc</button> */}
        </div>
      </div>
    </div>
  )
}

export default App;
