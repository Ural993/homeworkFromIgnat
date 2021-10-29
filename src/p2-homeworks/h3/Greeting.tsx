import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {

    const errorClass = s.errorInput // need to fix with (?:)
    const inputClass = s.input
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={(error) ? errorClass : inputClass} />
            <button onClick={addUser} className={s.btn}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <span className={s.error}>{error}</span>


        </div>
    )
}

export default Greeting
