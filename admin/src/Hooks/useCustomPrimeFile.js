import { useEffect, useRef, useState } from "react";
import primeFileOption from "../Helper/primeFileOption";
import { Cookie } from "../Helper/Cookie";
import uuid from "react-uuid";

const useCustomPrimeFile = (model) => {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const {
        chooseOptions,
        uploadOptions,
        cancelOptions,
        emptyTemplate,
        headerTemplate
    } = primeFileOption(totalSize, fileUploadRef)

    useEffect(() => {
        if (!Cookie.get(model)) {
            Cookie.set(model, uuid())
        }
    }, []);

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


    return {
        onTemplateSelect,
        onTemplateUpload,
        onTemplateClear,
        toast,

        chooseOptions,
        uploadOptions,
        cancelOptions,
        emptyTemplate,
        headerTemplate
    }
}

export default useCustomPrimeFile;