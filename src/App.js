import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const downloadQRCode = () => {
    // Check if the name is an empty string
    if (name.trim() === '') {
      alert('Please enter a valid name before downloading.'); // Display an error message if the name is empty
      return;
    }

    // Create a data URL for the QR code image
    const qrCodeDataUrl = document.getElementById('qr-code').toDataURL();

    // Create an anchor element for downloading
    const a = document.createElement('a');
    a.href = qrCodeDataUrl;
    a.download = `${name}.png`; // Set the filename
    a.click();
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Enter Image Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <QRCode id="qr-code" value={url} />
      <br />
      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
}

export default App;
