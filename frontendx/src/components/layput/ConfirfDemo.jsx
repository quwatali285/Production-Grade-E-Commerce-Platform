'use client';

import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

const ConfirmDemo = () => {
    const toast = useRef(null);

    const accept = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Action accepted',
            life: 3000
        });
    };

    const reject = () => {
        toast.current?.show({
            severity: 'error',
            summary: 'Rejected',
            detail: 'Action rejected',
            life: 3000
        });
    };

    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    return (
        <div className="card">
            <Toast ref={toast} />

            <ConfirmPopup />

            <h3>Confirm Popup Example</h3>

            <Button
                label="Delete"
                icon="pi pi-trash"
                severity="danger"
                onClick={confirm}
            />
        </div>
    );
};

export default ConfirmDemo;