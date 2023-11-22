// 여기에 JavaScript 코드를 넣어주세요
function handleOCR() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const { data: { text } } = await Tesseract.recognize(
      file,
      'kor',
      { logger: m => console.log(m) }
    );
    console.log('인식된 텍스트:', text);
    document.querySelector('.result-container').innerHTML = `<p>${text}</p>`;
  });
  fileInput.click();
}
