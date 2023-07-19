import React from 'react'
import { FileUpload } from 'primereact/fileupload';
import "./primeFile.css";

function PrimeFile() {

  const chooseOptions = { label: 'Choisir...', icon: 'pi pi-fw pi-plus' };
  const uploadOptions = { label: 'Télécharger', icon: 'pi pi-upload', className: 'p-button-success' };
  const cancelOptions = { label: 'Annuler', icon: 'pi pi-times', className: 'p-button-danger' };



  return (

    <FileUpload name="demo[]"
      url="./upload"
      chooseOptions={chooseOptions}
      uploadOptions={uploadOptions}
      cancelOptions={cancelOptions}
      contentStyle={{ border: "1px black dashed", minHeight: "200px" }}
      uploadHandler={() => { }} />
  )
}

export default PrimeFile;