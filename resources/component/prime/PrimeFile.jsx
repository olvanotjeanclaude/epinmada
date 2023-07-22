
import React, { useEffect, useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';
import http from '../../Helper/makeRequest';

export default function PrimeFile({ model }) {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const [imageKey, setImageKey] = useState("");

    useEffect(() => {
        http.get("/files/generate-key")
            .then(response => {
                setImageKey(response.data);
            })
            .catch(e => e.message);
    }, [])

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateClear = () => {
        setTotalSize(0);
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
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const uploadHandler = async (params) => {
        await http.post("/files/upload", {
            files: params.files,
            model,
            imageKey
        },)
            .then(res => {
                console.log(res.data)
                toast.current
            })
    }


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

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choisir..." position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Sauvegarder" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Annuler" position="bottom" />

            <FileUpload ref={fileUploadRef}
                url="/api/files/upload"
                accept="image/*"
                customUpload
                uploadHandler={uploadHandler}
                maxFileSize={15000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions} />
        </div>
    )
}
