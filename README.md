# Speech to Text Converter

This is a simple web application that converts speech to text using the Web Speech API. It allows users to record their voice and see the transcription in real-time. The application also saves the transcripts to a MySQL database.

## Features

- Real-time speech-to-text conversion
- Continuous recording with interim results
- Save transcripts to a MySQL database
- Simple and intuitive user interface

## Requirements

- XAMPP (or similar local server environment with PHP and MySQL)
- Modern web browser that supports the Web Speech API (im using Google Chrome)

## Installation and Setup

1. Clone this repository or download the ZIP file and extract it to your XAMPP's `htdocs` folder.

2. Start XAMPP and ensure that Apache and MySQL services are running.

3. in "phpMyAdmin" Create a new MySQL database named `speech_to_text`.
   ![image](https://github.com/user-attachments/assets/411192e1-2d0d-49be-af38-5a8d899d8fe2)


4. Create a new table named "transcripts" with 3 columns
![Screenshot 2024-07-25 184051](https://github.com/user-attachments/assets/3e770828-e803-4618-828d-c3b06b001dbe)

5. ensure your table has the following setup :
   ![Screenshot 2024-07-25 184242](https://github.com/user-attachments/assets/6b2d437e-3191-454b-8c8e-24c87330a27b)

6. Update the database connection details in save_transcript.php if necessary: (if you are using xampp on default settings you don't have to do this step)
   
  ```
phpCopy$servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "speech_to_text";
```

## Usage

1. make sure xampp is on (both apacha and mySql)
    ![image](https://github.com/user-attachments/assets/d2e49856-ac29-4267-a41e-70dde00cd33b)
   
2. Open your web browser and navigate to http://localhost/index.html (adjust the path if you placed the files in a different location).
3. Grant microphone permission when prompted by the browser.
    ![image](https://github.com/user-attachments/assets/d22eb28c-99a0-49e9-9317-fe0847b758d2)

4. Click the "Start Recording" button to begin speech recognition.

      ![image](https://github.com/user-attachments/assets/478b8b32-6952-4e42-aecc-455a1229b5aa)

6. Click the "Stop Recording" button to end the session and save the transcript to the database.
       ![Screenshot 2024-07-25 184900](https://github.com/user-attachments/assets/e6b5fa52-ba08-45e4-ad79-5e509d02de5a)
