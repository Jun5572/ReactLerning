import { useState } from "react"
import { Card } from "./components/Card"


export const App = () => {
    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false)

    // 切り替えボタン　押下時
    const onClickSwitch = () => setIsAdmin(!isAdmin)


    return(
        <div>
            {/* 管理者フラグがtrueのときとそれ以外で文字を出しわけ */}
            {isAdmin ? <span>管理者</span> : <span>一般</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin}/>
        </div>
    )
}