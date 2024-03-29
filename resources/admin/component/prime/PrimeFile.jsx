
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import http from '../../Helper/makeRequest';
import useCustomPrimeFile from '../../Hooks/useCustomPrimeFile';
import { string } from 'prop-types';
import uuid from 'react-uuid';

PrimeFile.propTypes = {
    model: string,
    action: string
};

export default function PrimeFile({ model, action }) {
    const {
        toast,
        onTemplateUpload,
        onTemplateSelect,
        onTemplateClear,
        chooseOptions,
        uploadOptions,
        cancelOptions,
        emptyTemplate,
        headerTemplate,
    } = useCustomPrimeFile(model);

    const uploadHandler = async (event) => {
        const key = localStorage.getItem(model);

        if (!key) {
            localStorage.setItem(model, uuid());
        }

        await http.post("/files/upload", {
            files: event.files,
            model,
            key: localStorage.getItem(model),
            action
        },)
            .then(res => {
                event.options.clear();
                toast.current.show({ severity: 'info', summary: 'Success', detail: res.data.message });
            })
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choisir..." position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Sauvegarder" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Annuler" position="bottom" />

            <FileUpload
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
