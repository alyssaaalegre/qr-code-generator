function generateQRCode() {
    // Get the value entered by the user
    const value = document.getElementById('qr-code-value').value;

    // Validate the input
    if (!value) {
        alert('Please enter text or a URL to generate a QR Code.');
        return;
    }

    // Create a new QRious object and generate the QR code
    const qrCode = new QRious({
        value: value,
        size: 300,
        level: 'H', // High error correction level
    });

    // Display the QR code in the image element
    const qrCodeImage = document.getElementById('qr-code-image');
    qrCodeImage.src = qrCode.toDataURL();
    qrCodeImage.style.display = 'block'; // Make QR code image visible

    // Show the Save QR Code button
    const saveButton = document.getElementById('save-qr-code-btn');
    saveButton.style.display = 'inline-block';

    console.log('QR Code generated successfully');
}

function saveQRCode() {
    const qrCodeImage = document.getElementById('qr-code-image').src;

    // Validate if a QR Code has been generated
    if (!qrCodeImage || qrCodeImage === "") {
        alert('Please generate a QR Code first!');
        return;
    }

    // Create an anchor element for downloading
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'qr-code.png'; // Set the default file name

    // Trigger the download
    link.click();
    console.log('QR Code saved successfully');
}
