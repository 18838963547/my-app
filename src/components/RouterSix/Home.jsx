import { useState } from "react"

export default function(){
    const [sum,setSum] = useState(1)
    return (
        <div>
            <p>Home内容</p>
            <p>{sum}</p>
        </div>
    )
}