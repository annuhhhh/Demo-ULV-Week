const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// OpenAI configuration
const OpenAI = require('openai');
let openai = null;

// Initialize OpenAI client only if API key is available
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// AI Workout Generation Endpoint
app.post('/api/generate-workout', async (req, res) => {
  try {
    const { formData } = req.body;
    
    if (!openai) {
      return res.status(500).json({
        error: 'OpenAI API key not configured. Please add your API key to the .env file.'
      });
    }

    const prompt = createWorkoutPrompt(formData);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a certified fitness trainer and nutritionist with expertise in creating personalized workout plans. Provide detailed, safe, and effective workout routines."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;
    
    res.json({
      success: true,
      workoutPlan: aiResponse,
      formData: formData
    });

  } catch (error) {
    console.error('Error generating workout:', error);
    res.status(500).json({
      error: 'Failed to generate workout plan. Please try again.',
      details: error.message
    });
  }
});

// Weekly Workout Generation Endpoint
app.post('/api/generate-weekly-workout', async (req, res) => {
  try {
    const { formData } = req.body;
    
    if (!openai) {
      return res.status(500).json({
        error: 'OpenAI API key not configured. Please add your API key to the .env file.'
      });
    }

    const prompt = createWeeklyWorkoutPrompt(formData);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a certified fitness trainer specializing in weekly workout planning. Create comprehensive, progressive weekly workout schedules that are safe and effective."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;
    
    res.json({
      success: true,
      weeklyPlan: aiResponse,
      formData: formData
    });

  } catch (error) {
    console.error('Error generating weekly workout:', error);
    res.status(500).json({
      error: 'Failed to generate weekly workout plan. Please try again.',
      details: error.message
    });
  }
});

// Helper function to create workout prompt
function createWorkoutPrompt(formData) {
  const {
    aiFitnessGoal,
    aiWorkoutDays,
    aiFitnessLevel,
    aiWorkoutDuration,
    aiEquipment,
    aiInjuries,
    aiPreferences
  } = formData;

  return `Create a detailed, personalized workout plan with the following specifications:

Fitness Goal: ${aiFitnessGoal}
Workout Frequency: ${aiWorkoutDays} days per week
Fitness Level: ${aiFitnessLevel}
Workout Duration: ${aiWorkoutDuration} minutes per session
Available Equipment: ${aiEquipment.join(', ')}
Injuries/Considerations: ${aiInjuries || 'None'}
Additional Preferences: ${aiPreferences || 'None'}

Please provide:
1. A structured workout plan for ${aiWorkoutDays} days
2. Specific exercises with sets, reps, and rest periods
3. Warm-up and cool-down recommendations
4. Progression tips
5. Safety considerations
6. Expected results timeline

Format the response in a clear, easy-to-follow structure with day-by-day breakdowns.`;
}

// Helper function to create weekly workout prompt
function createWeeklyWorkoutPrompt(formData) {
  const {
    weeklyGoal,
    weeklyDays,
    weeklyLevel,
    weeklyDuration,
    weeklyEquipment,
    weeklyFocus,
    weeklySchedule
  } = formData;

  return `Create a comprehensive weekly workout plan with the following specifications:

Weekly Goal: ${weeklyGoal}
Training Days: ${weeklyDays} days per week
Fitness Level: ${weeklyLevel}
Session Duration: ${weeklyDuration} minutes
Available Equipment: ${weeklyEquipment.join(', ')}
Focus Areas: ${weeklyFocus.join(', ')}
Schedule Preferences: ${weeklySchedule}

Please provide:
1. A complete 7-day weekly schedule
2. Progressive overload principles
3. Rest day recommendations
4. Exercise variations and alternatives
5. Nutrition tips for the goal
6. Recovery strategies
7. Weekly progress tracking methods

Format as a detailed weekly planner with specific exercises, sets, reps, and rest periods for each day.`;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    openaiConfigured: !!process.env.OPENAI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 FitPlan Pro server running on port ${PORT}`);
  console.log(`📱 OpenAI API configured: ${!!process.env.OPENAI_API_KEY}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
}); 