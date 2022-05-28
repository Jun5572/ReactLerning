import { useContext } from "react"
import { Card } from "./components/Card"
import { AdminFlagContext } from "./components/providers/AdminFlagProvider"


export const App = () => {
    // 管理者フラグ
    // Context内のisAdminと更新関数を取得
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext)

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