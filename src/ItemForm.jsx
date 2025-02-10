import React from 'react';
import { useFormik } from 'formik';
import "./ItemForm.css";

const AGREE_TO_TERMS = "agreeToTerms";
const NAME = "name";
const QUANTITY = "quantity";
const PURPOSE = "purpose";
const REQUIRED_STRING_FIELDS = [NAME, QUANTITY, PURPOSE];
const INITIAL_VALUES = {
    [NAME]: "",
    [QUANTITY]: "",
    [PURPOSE]: "",
    [AGREE_TO_TERMS]: false
};

const validate = values => {
    const errors = {};

    for (let index = 0; index < REQUIRED_STRING_FIELDS.length; index++) {
        if (values[REQUIRED_STRING_FIELDS[index]] === "") {
            errors[REQUIRED_STRING_FIELDS[index]] = true;
        }
    }

    if (isNaN(values[QUANTITY])) {
        errors[QUANTITY] = true;
    }

    if (!values[AGREE_TO_TERMS]) {
        errors[AGREE_TO_TERMS] = true;
    }

    return errors;
};

const ItemForm = ({ addItemCallback }) => {
    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values, { resetForm }) => {
            const id = crypto.randomUUID();
            addItemCallback({ ...values, id: id });
            resetForm();
        },
    });

    return (
        <>
            <h2>Add an Item to the Inventory</h2>
            <form className="ItemForm" onSubmit={formik.handleSubmit}>
                <input
                    className={formik.errors[NAME] ? "ItemFormInput-error" : "ItemFormInput"}
                    name={NAME}
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values[NAME]}
                />

                <input
                    className={formik.errors[QUANTITY] ? "ItemFormInput-error" : "ItemFormInput"}
                    name={QUANTITY}
                    type="text"
                    placeholder="Quantity"
                    onChange={formik.handleChange}
                    value={formik.values[QUANTITY]}
                />

                <textarea
                    className={formik.errors[PURPOSE] ? "ItemFormInput-error" : "ItemFormInput"}
                    name={PURPOSE}
                    placeholder="Purpose"
                    rows={"4"}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[PURPOSE]}
                />

                <div className={formik.errors[AGREE_TO_TERMS] ? "ItemFormInput-error ItemFormCheckbox" : "ItemFormInput ItemFormCheckbox"}>
                    <input
                        name={AGREE_TO_TERMS}
                        type="checkbox"
                        onChange={formik.handleChange}
                        checked={formik.values[AGREE_TO_TERMS]}
                    />
                    <label htmlFor={AGREE_TO_TERMS}>Agree to Terms</label>
                </div>

                <div className="ItemFormSubmit">
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    );
};

export default ItemForm;