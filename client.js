<!-- Rest of your HTML code remains unchanged -->

<div class="container">
  <!-- 이미지 업로드 버튼 -->
  <input type="file" id="file-input" accept="image/*" style="display: none;" onchange="handleFileSelect(event)">
  <button class="button" onclick="triggerFileInput()">Upload photo</button>
</div>

<div class="result-container">
  <!-- 이미지 및 인식된 텍스트를 표시할 영역 -->
  <img id="uploaded-image" alt="Uploaded Image" style="display: none;">
  <div id="recognized-text" style="height: 300px;"></div>
  <!-- 분석 버튼 및 다운로드 링크 -->
  <button id="check-button" onclick="analyzeImage()">Check</button>
  <a href="#" id="download-button">Download</a>
</div>

<script>
// Function to handle file selection
function handleFileSelect(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload_image/', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the backend returns the processed image URL
      const imageUrl = data.processedImageUrl;

      // Display the uploaded image on the webpage
      const uploadedImage = document.getElementById('uploaded-image');
      uploadedImage.src = imageUrl;
      uploadedImage.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}

// Function to trigger the file input click
function triggerFileInput() {
  const fileInput = document.getElementById('file-input');
  fileInput.click(); // Simulate a click on the file input
}
</script>
