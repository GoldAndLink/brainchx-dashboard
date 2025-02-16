export function downloadPNGasJPEG(base64String: string, filename: string = 'image.jpeg', backgroundColor: string = '#FFFFFF') { // Default white background
  return new Promise<void>((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject("Could not get 2D rendering context");
        return;
      }

      // Fill with background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, 0, 0);

      // Convert to JPEG and download
      const jpegData = canvas.toDataURL('image/jpeg'); // Quality defaults to 0.92
      const link = document.createElement('a');
      link.href = jpegData;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      resolve();
    };

    img.onerror = (error) => {
      reject("Error loading image: " + error);
    };

    img.src = base64String;
  });
}
