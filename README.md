# MyMoodMap
My Mood Map 

A comprehensive mood tracking application built with React Native and Expo that helps users monitor their emotional well-being through intuitive logging, visualization, and analysis.

Features

Core Features

•	Daily Mood Logging: Select from customizable emoji-based mood categories
•	Journal Entries: Add optional notes (200-character limit) to provide context
•	Mood History: Scrollable timeline of past mood entries with date/time stamps
•	Edit & Delete: Modify or remove previous mood entries with confirmation dialogs

Analytics & Visualization

•	Calendar View: Monthly calendar displaying mood emojis for each day
•	Mood Trends Chart: Line graph showing mood patterns over the last 7 entries
•	Mood Distribution: Bar chart displaying frequency of each mood category
•	Weekly Averages: 4-week trend analysis with average mood levels

Customization & Settings

•	Custom Mood Categories: Add/remove personalized mood emojis (minimum 3)
•	Daily Reminders: Configurable push notifications with on/off toggle
•	Onboarding Tutorial: 3-screen introduction for new users (shows once)


User Management

•	Secure Login: Email/password authentication with session management
•	Welcome Screen: Personal insights with mood statistics
•	Logout Functionality: Secure session termination

Tech Stack

•	Frontend: React Native with TypeScript

•	Framework: Expo (v50+)

•	Navigation: File-based routing

•	Charts: React Native Chart Kit

•	Storage: In-memory storage (demo purposes)

•	Development: Visual Studio Code

Getting Started

Prerequisites
•	Node.js (v16 or higher)
•	npm or yarn
•	Expo CLI
•	iOS Simulator (macOS) or Android Emulator/device


Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-mood-map.git
cd my-mood-map


npm install
Install dependencies: npm install (Command Prompt via Windows and Terminal via Mac)


Start the development server: npx expo start (Command Prompt via Windows and Terminal via Mac)

Run on your preferred platform:

•	Press i for iOS simulator
•	Press a for Android emulator
•	Scan QR code with Expo Go app (iOS/Android device)

Screens

•	Onboarding (3 screens introducing app features)
•	Login: Secure authentication screen
•	Welcome: Dashboard with mood insights
•	Mood Entry: Main logging interface with emoji selection
•	History: Timeline view with edit/delete options
•	Calendar: Monthly view with mood indicators
•	Analytics: Charts and visualizations
•	Settings: Reminders and customization
•	Customization: Mood category management
Project Structure

text
my-mood-map/
app/                Main application code
index.tsx           Entry point
layout.tsx          Layout
assets/             Images, fonts, etc.
node_modules/       Dependencies
package.json        Project metadata and dependencies
└── README.md       This file

Development Notes
Key Implementation Details

•	State Management: React hooks (useState, useEffect)
•	Navigation: Expo Router for screen transitions
•	Data Persistence: In-memory storage simulating AsyncStorage
•	Responsive Design: Flexbox layouts for various screen sizes
•	Type Safety: TypeScript interfaces for mood entries and user data

Project Methodology
•	Agile/Scrum: 6 sprints managed via Jira
•	User Stories: Comprehensive requirement documentation
•	Burndown Charts: Progress tracking and velocity measurement



Sprint Reviews: Regular feature validation

Team & Roles

Team DBA1 University Project Group

Luechia Gyoh: Product Owner & Lead Developer
Conor Fleming: Tester & Wireframe Designer
Zain Haider: Scrum Master & Documentation

Future Enhancements

•	Planned features for future iterations:
•	Cloud synchronization with Firebase
•	AI-powered mood pattern recognition
•	Social sharing capabilities
•	Professional therapist integration
•	Export mood data (PDF/CSV)
•	Dark mode support
•	Multi-language support
•	Known Issues & Limitations

•	Current version uses in-memory storage (data resets on app restart)
•	Limited to 200 characters for mood notes
•	Requires minimum 7 entries for trend analysis
•	Demo authentication accepts any email/password combination
Learning Resources
•	Expo Documentation
•	React Native Documentation
•	React Native Chart Kit
•	TypeScript with React Native
•	
Contributing

This is a university based project done in ATU (Atlantic Technological University), but suggestions and feedback are welcome. Please create an issue to discuss potential improvements.

License

University Project Educational Use Only

Acknowledgments

•	University instructors for guidance and feedback
•	Expo team for the excellent development platform
•	React Native community for resources and support
•	Team members for collaboration and dedication
•	Developed with ❤️ for better mental health awareness
