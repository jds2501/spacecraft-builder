import React from 'react';
import { useFormik } from 'formik';
import "./ItemForm.css";

const AGREE_TO_TERMS = "itemFormAgreeToTerms";
const NAME = "itemFormName";
const QUANTITY = "itemFormQuantity";
const PURPOSE = "itemFormPurpose";
const REQUIRED_STRING_FIELDS = [NAME, QUANTITY, PURPOSE];

const validate = values => {
    const errors = {};

    for (let index = 0; index < REQUIRED_STRING_FIELDS.length; index++) {
        if (values[REQUIRED_STRING_FIELDS[index]] === "") {
            errors[REQUIRED_STRING_FIELDS[index]] = true;
        }
    }

    if (!values[AGREE_TO_TERMS]) {
        errors[AGREE_TO_TERMS] = true;
    }

    return errors;
};

const ItemForm = () => {
    const formik = useFormik({
        initialValues: {
            [NAME]: "",
            [QUANTITY]: "",
            [PURPOSE]: "",
            [AGREE_TO_TERMS]: false
        },
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.errors);

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
                    className={formik.errors.itemFormQuantity ? "ItemFormInput-error" : "ItemFormInput"}
                    name="itemFormQuantity"
                    type="text"
                    placeholder="Quantity"
                    onChange={formik.handleChange}
                    value={formik.values.itemFormQuantity}
                />

                <textarea
                    className={formik.errors.itemFormPurpose ? "ItemFormInput-error" : "ItemFormInput"}
                    name="itemFormPurpose"
                    placeholder="Purpose"
                    rows={"4"}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.itemFormPurpose}
                />

                <div className={formik.errors[AGREE_TO_TERMS] ? "ItemFormInput-error ItemFormCheckbox" : "ItemFormInput ItemFormCheckbox"}>
                    <input
                        name={AGREE_TO_TERMS}
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.itemFormAgreeToTerms}
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