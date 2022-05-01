import { useState, useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage"
import { CssModules } from "./CssModules";
import { StyledComponents } from "./StyledComponents";
import { StyledJsx } from "./StyledJsx";
import { Emotion } from "./Emotion"
import { TailwindCss } from "./TailwindCss";


// コンポーネントは、ステートが更新されたときに再レンダリングされる！

export const App = () => {

    // Stateを定義
    const [num, setNum] = useState(0)

    // ボタンを押した時にStateをカウントアップ
    const onClickButton = () => {
        // num+1 はsetNum関数を複数回書いても処理は１回に見える
        // setNum(num + 1)
        // setNum(num + 1)

        // 中に関数を書いた方は複数回記述した文だけnumが足されていた
        setNum((lastNum)=> lastNum +1)
        // setNum((lastNum)=> lastNum +1)
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton} >ボタン</button>
            <p>{num}</p>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
            <TailwindCss />
        </>
    )
}