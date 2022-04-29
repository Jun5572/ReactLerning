import React, { useState } from 'react';
import './App.css';

// 関数コンポーネント：AlertMessage
function AlertMessage(props) {
  const data = ["Hello", "Welocome...", "Good-bye?"];

  const actionAlert = ()=> {
    const re = data[Math.floor(Math.random() * data.length)];
    props.setAlert(`message: ${re}.`);
  }

  return <div className="alert- alert-primary h5 text-primary">
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">Click me!</button>
  </div>
}


// 関数コンポーネント：CardMessagenpm
function CardMessage(props) {
  // countをステートとして管理。初期値を0とし、変更があった場合はsetCountが実行される。
  const [count, setCount] = useState(0);

  // 変数に用意しても関数コンポーネントは更新されるときに再実行するので、関数を実行し終えると消えてしまう。
  // let count = 0;

  const actionCard = ()=> {
    setCount(count + 1);
    props.setCard(`card counter: ${count} count.`);

    // 以下の書き方ではコンポーネントが更新され、再実行されたときにlet count = 0が渡ってくるので、カウントアップされない（値が保持されない）
    // props.setCard(`card counter: ${count} count.`);
    // count++;
  }

  return <div className="card p-3 border-dark text-center">
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">Click me!</button>
  </div>
}

// 関数コンポーネント：App
function App() {
  // alertとcardの２つのステートを用意。
  // const [state, setstate] = useState(initialState);
  const [alert, setAlert] = useState("This is alert message!!");
  const [card, setCard] = useState("This is card message!!");

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        {/* 用意したステートを以下のコンポーネントタグに設定する */}
        {/* 子コンポーネント側で操作する */}
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className="text-right">
          <p>{alert}</p>
          <p>{card}</p>
        </div>
      </div>
    </div>
  
  )
}

export default App;