import React, { useState } from "react";

const SimpleUploadFile = ({ setValue }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setValue("file", file);
    }
    else {
      setSelectedFile(null);
      setValue("file", null);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // Adjust the file type as needed
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className="mt-3">
          <img src={selectedFile} alt="Preview" height="120" />
        </div>
      )}
    </div>
  );
};

export default SimpleUploadFile;
