import React from 'react';

const form = (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
    }
} 