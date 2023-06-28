import {useRef,useState} from 'react' 
function LogButtonClicks(){
    const countRef = useRef(0);
    const [count, setCount] = useState(0);
    const handleRefs=()=>{
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    }
    const handleState=()=>{
        const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
    }
    console.log('I rendered!');
    return(
        <div>
            <button onClick={handleRefs}>Click Refs</button>
            <button onClick={handleState}>Click State</button>
        </div>
    );

}

export default LogButtonClicks;