# FitPlan Pro - AI-Powered Workout Generator

A modern, responsive web application that generates personalized workout plans using GPT-3.5. Built with HTML, CSS, JavaScript, and Node.js.

## Features

- 🤖 **AI-Powered Workout Generation**: Uses OpenAI's GPT-3.5 to create personalized workout plans
- 🎯 **Multiple Goal Types**: Weight loss, muscle building, strength training, endurance, and more
- 🏋️ **Equipment Flexibility**: Works with bodyweight, dumbbells, barbells, resistance bands, and full gym access
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 💾 **Download & Share**: Export plans as text files or share via email
- 🔄 **Regenerate Plans**: Create new variations of your workout plans

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd ULV-Project.2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit the .env file and add your OpenAI API key
   nano .env
   ```

4. **Add your OpenAI API key**
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   ```

   > **Note**: Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:3000`

3. **Generate your first workout plan**
   - Fill out the AI Workout Generator form
   - Select your fitness goals, equipment, and preferences
   - Click "Generate AI Workout Plan"

## Environment Variables

The application uses the following environment variables (configured in `.env`):

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | Required |
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment mode | development |
| `CORS_ORIGIN` | CORS origin | http://localhost:3000 |

## API Endpoints

- `GET /` - Serve the main application
- `POST /api/generate-workout` - Generate AI workout plan
- `POST /api/generate-weekly-workout` - Generate weekly workout plan
- `GET /api/health` - Health check endpoint

## Project Structure

```
ULV-Project.2/
├── index.html          # Main HTML file
├── style.css           # Stylesheets
├── script.js           # Frontend JavaScript
├── server.js           # Backend server
├── package.json        # Dependencies and scripts
├── env.example         # Environment variables template
├── .env                # Environment variables (create this)
└── README.md           # This file
```

## Usage

### Basic Workout Generator
1. Navigate to the "AI Generator" section
2. Select your fitness goal (weight loss, muscle building, etc.)
3. Choose your workout frequency and duration
4. Select your fitness level
5. Check available equipment
6. Add any injuries or preferences
7. Click "Generate AI Workout Plan"

### Weekly Workout Generator
1. Navigate to the "Weekly Workout Generator" section
2. Select your primary goal
3. Choose days per week
4. Select available equipment
5. Add preferences or limitations
6. Click "Generate Weekly Plan"

## Features in Detail

### AI Workout Generation
- Uses GPT-3.5-turbo for intelligent workout planning
- Considers fitness level, equipment, and goals
- Provides detailed exercise instructions
- Includes warm-up and cool-down routines

### Equipment Support
- **Bodyweight Only**: No equipment needed
- **Dumbbells**: Various dumbbell exercises
- **Barbell**: Compound movements and strength training
- **Resistance Bands**: Portable resistance training
- **Pull-up Bar**: Upper body strength
- **Cardio Equipment**: Treadmill, bike, etc.
- **Full Gym Access**: Complete equipment selection

### Safety Features
- Form tips and safety notes
- Progressive overload principles
- Injury considerations
- Appropriate exercise selection for fitness level

## Troubleshooting

### Common Issues

1. **"OpenAI API key not configured" error**
   - Make sure you've created a `.env` file
   - Verify your API key is correct
   - Check that the `.env` file is in the project root

2. **"Failed to generate workout plan" error**
   - Check your internet connection
   - Verify your OpenAI API key has sufficient credits
   - Try regenerating the plan

3. **Server won't start**
   - Make sure Node.js is installed
   - Run `npm install` to install dependencies
   - Check if port 3000 is available

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify your environment variables are set correctly
3. Ensure your OpenAI API key is valid and has credits

## Security Notes

- Your OpenAI API key is stored securely in the `.env` file
- API keys are never exposed to the frontend
- All API calls are made through the secure backend
- The `.env` file should never be committed to version control

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License. 