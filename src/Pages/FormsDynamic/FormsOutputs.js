import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FormsOutputs = () => {
    const [formOutput, setFormsOutputs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/formDynamic')
        .then(res => res.json())
        .then(data => setFormsOutputs(data))
    },[])
    return (
        <div>
            {
                formOutput.map(formData=><div>
                    <h1>{formData._id}</h1>
                    <h2>{formData.element}</h2>
                </div>)
            }
        </div>
    );
};

export default FormsOutputs;
