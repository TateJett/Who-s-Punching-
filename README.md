# Who-s-Punching-
My First website test project 

Overview:

“Who’s Punching?” is a web application that allows users to upload and compare the attractiveness of two photos using the Face++ API. The platform provides a simple interface for users to upload images and receive comparative feedback. Additionally, the site ensures that non-human images are detected and flagged as invalid for processing.

Features

- Upload and Compare: Users can upload two images and receive an attractiveness comparison based on AI analysis.
- Face Detection: The site verifies that the uploaded images contain human faces, ensuring accurate results.
- Error Handling: If an uploaded image is not detected as a human face, users will be informed that the image is not suitable for comparison.

Technologies Used

- Front-End: HTML, CSS, JavaScript
- Back-End: Node.js (or applicable backend framework)
- API: Face++ for facial attribute analysis and validation

How to Run the Project

1. Clone the repository:

git clone https://github.com/yourusername/whos-punching.git
cd whos-punching

2. Install dependencies:

npm install

3. Set up API keys:
- Sign up for an account with Face++(https://www.faceplusplus.com/).
- Create a .env file and add your API credentials:

FACE_API_KEY=your_api_key
FACE_API_SECRET=your_api_secret

4. Run the server:

npm start

Usage

- Upload two images using the “Choose File” buttons.
- Click “Go” to initiate the comparison.
- If an image does not contain a recognizable human face, an alert will notify the user to upload a valid image.

Future Improvements

- Adding more detailed analysis metrics (e.g., age, gender).
- Allowing users to save comparison results.
- Integrating user feedback for improving the analysis accuracy.

License

This project is licensed under the MIT License.
