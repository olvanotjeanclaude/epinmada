import React, { useEffect, useState } from 'react'
import { Dropzone, FileMosaic, FullScreen, ImagePreview } from '@files-ui/react'
import { Card, CardContent, FormHelperText, Typography } from '@mui/material'

export default function UploadInvoice({ errors, setValue }) {
    const [files, setFiles] = useState([]);
    const [imgSrc, setImgSrc] = useState(undefined);

    const removeFile = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };

    useEffect(() => {
        setValue("files", files[0]?.file ?? null, { shouldValidate: true });
    }, [files]);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" mb={1}>Facture</Typography>
                <Dropzone
                    // fakeUpload
                    behaviour="replace"
                    localization="FR-fr"
                    maxFileSize={10 * 1024 * 1024}
                    maxFiles={1}
                    label='Déposez ici votre facture'
                    headerConfig={{
                        customHeader: <Typography textAlign="left" p={1} variant="h5">
                            Maximum 10 MB
                        </Typography>
                    }}
                    footerConfig={{
                        style: { padding: "10px" },
                        customFooter: <FormHelperText sx={{ p: 1 }}>{errors.files?.message}</FormHelperText>

                    }}
                    cleanFiles
                    accept={"image/*"}

                    onChange={(newFiles) => setFiles(newFiles)} value={files}>
                    {files.map((file, index) => (
                        <React.Fragment key={index}>
                            <FileMosaic
                                onSee={imageSource => setImgSrc(imageSource)}
                                preview
                                key={file.id}
                                {...file}
                                onDelete={removeFile} info />

                            <FullScreen
                                open={imgSrc !== undefined}
                                onClose={() => setImgSrc(undefined)}
                            >
                                <ImagePreview src={imgSrc} />
                            </FullScreen>
                        </React.Fragment>
                    )
                    )}
                </Dropzone>
            </CardContent>
        </Card>
    )
}
