const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const output = document.getElementById('output');
const status = document.getElementById('status');

let recognition;

function updateStatus(message) {
    status.textContent = message;
}

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        updateStatus('Recording started. Speak now.');
        startButton.classList.add('recording');
    };

    recognition.onend = function() {
        updateStatus('Recording stopped.');
        startButton.classList.remove('recording');
    };

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        output.innerHTML = finalTranscript + '<i style="color:#999">' + interimTranscript + '</i>';
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        updateStatus('Error: ' + event.error);
    };

    startButton.onclick = function() {
        recognition.start();
        startButton.disabled = true;
        stopButton.disabled = false;
    };

    stopButton.onclick = function() {
        recognition.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
        saveTranscript();
    };
} else {
    updateStatus('Web Speech API is not supported in this browser.');
}

function saveTranscript() {
    const text = output.textContent;
    $.ajax({
        url: 'save_transcript.php',
        method: 'POST',
        data: { text: text },
        success: function(response) {
            console.log('Transcript saved:', response);
            updateStatus('Transcript saved successfully.');
        },
        error: function(xhr, status, error) {
            console.error('Error saving transcript:', error);
            updateStatus('Error saving transcript: ' + error);
        }
    });
}

// Request microphone permission on page load
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        updateStatus('Microphone permission granted. You can start recording.');
        stream.getTracks().forEach(track => track.stop());
    })
    .catch(function(err) {
        updateStatus('Microphone permission denied. Please allow microphone access to use this app.');
        console.error('Error accessing microphone:', err);
    });