import React, {useState} from "react";

export default function CapUp() {
  const [imageSrc, setImageSrc] = useState("");
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" capture="environment" onChange={handleFileSelect}/>
      {imageSrc && (
        <div>
          <h2>Preview:</h2>
          <img src={imageSrc} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "300px" }}/>
        </div>
      )}
    </div>
  );
}
