import React, {FC, useRef, useState} from "react";

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input value={value} type='text' onChange={changeHandler} />
            <input ref={inputRef} type='text' placeholder="useRef" />
            <button onClick={clickHandler}>OK</button>

            <div onDrag={dragHandler} draggable style={{width: 70, height: 70, background: '#ccc'}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWidthPreventHandler} 
                style={{marginTop: '10px', width: 70, height: 70, background: isDrag ? 'red' : '#ddd'}}></div>

            
        </div>
    )
}

export default EventsExample