import React, {useEffect, useState} from 'react';

const UnmountTest = () => {
    useEffect(()=>{
        console.log("Mount!");

        return () =>{
            //Unmount 시점에 실행되게됨 *기억
            console.log("Unmount!")
        }

    },[]);
    return <div>Unmount Testing Component</div>
};
const Lifecycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    // isVisible 분리화 on/off
    const toggle = () => setIsVisible(!isVisible);

    return (
    <div style={{padding:20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest/>}
    </div>
    );
}

export default Lifecycle;