import React, {useState, useEffect} from 'react'
import './App.css';

// 引数で渡された関数をつかって計算を行い、その結果を返すようにすれば、計算の仕方そのものをコンポーネントから切り離せる

// 合計計算の関数
const total = (a)=> {
  let re = 0
  for (let i = 0; i <= a; i++) {
    re += i
  }

  return re
}


// 消費税計算の関数
const tax = (a)=> {
  return Math.floor(a * 1.1)
}

// 数値をけいさんしてメッセージをかえす独自フック関数
function useCalc( num = 0, func = (a) => {return a;}) {
  const [msg, setMsg] = useState(null);

  const setValue = (p) => {
    let res = func(p);
    setMsg(
      <p className="h5">
        ※{p}の結果は、{res}です。
      </p>
    );
  };

  return [msg, setValue];
}

// デフォルトのコンポーネント
function PlainMessage(props) {
  const [msg, setCalc] = useCalc()

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="p-3 h5">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} className="form-control" />
  </div>
}

// 合計計算コンポーネント
function AlertMessage(props) {
  const [msg, setCalc] = useCalc(0, total)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <input type="number" onChange={onChange} min="0" max="10000" className="form-control" />
  </div>
}

// 消費税計算コンポーネント
function CardMessage(props) {
  const [msg, setCalc] = useCalc(0, tax)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className="card p-3 h5 border-primary">
    <h5>{msg}</h5>
    <input type="range" onChange={onChange} min="0" max="10000" step="100" className="form-control" />
  </div>
}


// ベースコンポーネント
function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <PlainMessage></PlainMessage>
        <AlertMessage></AlertMessage>
        <CardMessage></CardMessage>
      </div>
    </div>
  )
}

export default App;
