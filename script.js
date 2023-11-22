function handleOCR() {
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);

    // 이미지 표시
    const uploadedImage = document.getElementById('uploaded-image');
    uploadedImage.src = imageURL;
    uploadedImage.style.display = 'block';

    const { data: { text } } = await Tesseract.recognize(
      file,
      'kor',
      { logger: m => console.log(m) }
    );
    console.log('인식된 텍스트:', text);
    document.querySelector('.result-container #recognized-text').innerText = text;
  });
}
