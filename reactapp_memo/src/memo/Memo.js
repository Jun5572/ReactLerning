import React, {useState, useEffect} from 'react'
import usePersist from '../Persist'

import Item from './Item'


function Memo(props) {
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [mode, setMode] = usePersist("mode", "default")

    let data = []

    
    switch (mode) {
        case "default":
            data = memo.map((value, key)=> (
                <Item key={value.message} value={value} index={key + 1} />
            ))
            break;
        case "find":
            data = memo.map((value, key)=> (
                <Item key={value.message} value={value} index={key + 1} />
            ))
            break;
        default:
            break;
    }

    return (
        <table className="table mt-4">
            <tbody>{data}</tbody>
        </table>
    )
}


export default Memo