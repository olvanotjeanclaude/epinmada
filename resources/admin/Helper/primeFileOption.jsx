import React from 'react';
import { ProgressBar } from "primereact/progressbar";

const primeFileOption = (totalSize,fileUploadRef) =>{
    const chooseOptions = {
        icon: 'pi pi-fw pi-images',
        iconOnly: true,
        className: 'custom-choose-btn p-button-rounded p-button-outlined'
    };
    const uploadOptions = {
        icon: 'pi pi-fw pi-cloud-upload',
        iconOnly: true,
        className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'
    };
    const cancelOptions = {
        icon: 'pi pi-fw pi-times',
        iconOnly: true,
        className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'
    };
    
    const emptyTemplate = () => {
        return (
            <div className="d-flex justify-content-between align-items-center flex-column" style={{
                border: "2px dashed #bcbcbc",
                borderRadius: "5"
            }}>
                <div className="icon">
                    <i className="pi pi-image mt-3 p-5"
                        style={{ fontSize: '2em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}>
                    </i>
                </div>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-4">
                    Déposez l'image ici
                </span>
            </div>
        );
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';
    
        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                {/* <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div> */}
            </div>
        );
    };
    
    
    return {
        chooseOptions,
        uploadOptions,
        cancelOptions,
        emptyTemplate,
        headerTemplate
    }
}

export default primeFileOption;    
