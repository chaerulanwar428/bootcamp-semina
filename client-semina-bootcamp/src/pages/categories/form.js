import React from 'react';
import {Form} from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';


export default function CategoriesFrom ({
    handleSubmit,
    form,
    handleChange,
    isiLoading,
    edit
}){
    return(
        <Form>
        <TextInputWithLabel 
        placeholder={'Masukan nama kategori'}
        label={'Nama kategori'}
        name='name'
        value={form.name}
        type='text'
        onChange={handleChange}
        />
        <SButton variant='primary' action={handleSubmit} loading={isiLoading}>
        {edit ? 'Ubah' : 'Simpan'}
        </SButton>
        </Form>
    );
}