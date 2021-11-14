import React, { useRef } from 'react'


const UseRefHook: React.FC = () => {


    const inputRef = useRef<any>(null);

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>

            <input type="text" placeholder="..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>

        </div>
    )
}


export default UseRefHook;
