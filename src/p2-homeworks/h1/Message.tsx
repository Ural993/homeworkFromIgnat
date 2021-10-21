import React from 'react'
import s from './Message.module.css'
type PropsType = {
    avatar: string
    name: string
    message: string
    time: string

}
function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.inner}>
                <div className={s.img_wrapper}>
                    <img className={s.img} src={props.avatar} alt="#" />
                </div>
                <div className={s.wrapper}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
