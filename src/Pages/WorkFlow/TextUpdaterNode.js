import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} />
            <div>
            <label htmlFor="bal" style={{height:"0px", marginTop:"-24px"}}>Text:</label>
                <input className='mt-4' id="text" name="text" onChange={onChange} placeholder="Input Your Text"/>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
    );
}

export default TextUpdaterNode;