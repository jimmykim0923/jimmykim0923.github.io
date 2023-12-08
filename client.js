function handleAnalysis() {
    const textToAnalyze = document.getElementById('textToAnalyze').value;

    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textToAnalyze }),
    })
    .then(response => response.json())
    .then(data => {
        // 서버로부터 받은 결과를 처리합니다.
        console.log(data.result);
        // 결과를 화면에 표시하거나 필요한 동작을 수행합니다.
    })
    .catch(error => {
        // 에러 처리
        console.error('Error:', error);
    });
}
