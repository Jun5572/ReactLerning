// ReactからuseContextをimport
import { useContext } from 'react';

// 作成したContextをimport
import { AdminFlagContext } from './providers/AdminFlagProvider';


const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
}

export const EditButton = () => {
    // Context内のisAdminを取得
    const { isAdmin } = useContext(AdminFlagContext)

    // isAdminがfalse(管理者でない)ときにボタンを非活性にする
    return (
        <button style={style} disabled={!isAdmin}>編集</button>
    )
}