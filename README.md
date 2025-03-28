# MovieSearchApp
movie search app



---

🎬 Movie Search App

A React Native mobile application that allows users to search for movies, view details, and save favorite movies using the OMDb API.


---

📌 Features

✅ Search for movies by title
✅ View movie details (poster, title, year, genre, rating)
✅ Save favorite movies using AsyncStorage
✅ Load more movies when scrolling to the bottom
✅ Smooth navigation between screens


---

🛠 Tech Stack

React Native (Expo or CLI)

React Navigation (for screen transitions)

Axios (for API requests)

AsyncStorage (for storing favorites)



---

🚀 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/imohitsikarwar/MovieSearchApp.git
cd MovieSearchApp

2️⃣ Install Dependencies

npm install

3️⃣ Start the App

For Android:

npx react-native run-android

For iOS (Mac required):

npx react-native run-ios


---

🔑 API Key Setup

This app uses the OMDb API for fetching movie data. The API key is already included in DetailsScreen.js:

const API_KEY = '30e80708';

If needed, get your own API key from OMDb API.


---

📂 Project Structure

MovieSearchApp/
│-- MovieCard.js
│-- HomeScreen.js
│-- DetailsScreen.js
│-- storage.js
│-- App.js
│-- package.json
│-- README.md


---

🎥 Usage

🔍 Search for Movies

1. Open the app and enter a movie title in the search bar.


2. A list of movies matching the title will be displayed.



📜 View Movie Details

Tap on any movie to view its poster, title, year, genre, and rating.


⭐ Save Favorite Movies

Click on "Add to Favorites" to save a movie.

Click "View Favorites" to see all saved movies.


❌ Remove from Favorites

On the movie details page, tap "Remove from Favorites" to delete it.



---

📦 Build & Deployment

Generate Signed APK (Android)

cd android
./gradlew assembleRelease

The APK file will be located at:

android/app/build/outputs/apk/release/app-release.apk


---

🤝 Contributing

Feel free to fork this repo, make improvements, and submit a pull request!


---

📜 License

This project is open-source and available under the MIT License.


---

Now your README.md is ready for GitHub! 🚀 Let me know if you need any modifications.
