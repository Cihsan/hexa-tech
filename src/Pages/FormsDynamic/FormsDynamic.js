import React from 'react';
import { FormBuilder } from "cb-react-forms";
import './FormsDynamic.css'
import Swal from 'sweetalert2';

const FormsDynamic = () => {
    const onSubmitFunc = (data) => {
        console.log(data);
        const formDatas = { data: data }

        const url = `https://hexatech-server.herokuapp.com/formDynamic`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formDatas)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Form has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
            )
    }
    return (
        <div className='formBuilder-container'>
            <FormBuilder onSubmit={onSubmitFunc} />
        </div>
    );
};

export default FormsDynamic;