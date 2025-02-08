import React from 'react';
import { useFormik } from 'formik';
import "./ItemForm.css";

const validate = values => {
    const errors = {};

    return errors;
};

const ItemForm = () => {
    const formik = useFormik({
        initialValues: {
            itemFormName: "",
            itemFormQuantity: "",
            itemFormPurpose: "",
            itemFormAgreeToTerms: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <h2>Add an Item to the Inventory</h2>
            <form className="ItemForm" onSubmit={formik.handleSubmit}>
                <input
                    className="ItemFormInput"
                    name="itemFormName"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.itemFormName}
                />

                <input
                    className="ItemFormInput"
                    name="itemFormQuantity"
                    type="text"
                    placeholder="Quantity"
                    onChange={formik.handleChange}
                    value={formik.values.itemFormQuantity}
                />

                <textarea
                    className="ItemFormInput"
                    name="itemFormPurpose"
                    placeholder="Purpose"
                    rows={"4"}
                    onChange={formik.handleChange}
                    value={formik.values.itemFormPurpose}
                />

                <div className="ItemFormInput ItemFormCheckbox">
                    <input
                        name="itemFormAgreeToTerms"
                        type="checkbox"
                        placeholder="Quantity"
                        onChange={formik.handleChange}
                        value={formik.values.itemFormQuantity}
                    />
                    <label htmlFor="itemFormAgreeToTerms">Agree to Terms</label>
                </div>

                <div className="ItemFormSubmit">
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
};

export default ItemForm;