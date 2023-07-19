import React, { useEffect } from 'react';
import Dropzone from 'dropzone';
import 'dropzone/dist/min/dropzone.min.css'; // Import Dropzone CSS
import './DropzoneComponent.css'; // Custom styles for DropzoneComponent

const DropzoneComponent = () => {
  useEffect(() => {
    const dropzone = new Dropzone('#myDropzone', {
      url: '/upload', // Set the URL where the files will be uploaded
      maxFilesize: 5, // Set the maximum file size in MB
      acceptedFiles: '.jpg, .jpeg, .png', // Set the allowed file types
      addRemoveLinks: true, // Display remove links for uploaded files

      init: function () {
        this.on('success', function (file, response) {
          // Handle successful file upload here if needed
        });

        this.on('removedfile', function (file) {
          // Handle file removal here if needed
        });
      },
    });

    return () => {
      dropzone.destroy(); // Clean up the Dropzone instance when component unmounts
    };
  }, []);

  return (
    <div className="p-fileupload">
      <form action="/upload" className="dropzone" id="myDropzone">
        <div className="fallback">
          <input name="file" type="file" multiple />
        </div>
      </form>
      <div className="dropzone-text">
        Drop files here
        <i className="fas fa-file"></i>
      </div>
    </div>
  );
};

export default DropzoneComponent;
