// Workout Plan Generator JavaScript

// Exercise database with different categories and difficulty levels
const exerciseDatabase = {
  bodyweight: {
    beginner: [
      { name: "Push-ups", sets: 3, reps: "5-10", rest: "60s", category: "upper-body" },
      { name: "Squats", sets: 3, reps: "10-15", rest: "60s", category: "lower-body" },
      { name: "Plank", sets: 3, reps: "20-30s", rest: "60s", category: "core" },
      { name: "Mountain Climbers", sets: 3, reps: "10-15", rest: "60s", category: "cardio" },
      { name: "Lunges", sets: 3, reps: "8-12 each leg", rest: "60s", category: "lower-body" },
      { name: "Wall Sit", sets: 3, reps: "30-45s", rest: "60s", category: "lower-body" },
      { name: "Superman", sets: 3, reps: "10-15", rest: "60s", category: "core" },
      { name: "Jumping Jacks", sets: 3, reps: "20-30", rest: "60s", category: "cardio" }
    ],
    intermediate: [
      { name: "Diamond Push-ups", sets: 3, reps: "8-12", rest: "90s", category: "upper-body" },
      { name: "Pistol Squats", sets: 3, reps: "5-8 each leg", rest: "90s", category: "lower-body" },
      { name: "Side Plank", sets: 3, reps: "30-45s each side", rest: "90s", category: "core" },
      { name: "Burpees", sets: 3, reps: "8-12", rest: "90s", category: "cardio" },
      { name: "Pull-ups", sets: 3, reps: "5-10", rest: "90s", category: "upper-body" },
      { name: "Single-leg Deadlift", sets: 3, reps: "8-12 each leg", rest: "90s", category: "lower-body" },
      { name: "Russian Twists", sets: 3, reps: "15-20 each side", rest: "90s", category: "core" },
      { name: "High Knees", sets: 3, reps: "30-45s", rest: "90s", category: "cardio" }
    ],
    advanced: [
      { name: "One-arm Push-ups", sets: 3, reps: "3-8 each arm", rest: "120s", category: "upper-body" },
      { name: "Plyometric Squats", sets: 3, reps: "10-15", rest: "120s", category: "lower-body" },
      { name: "L-sit Hold", sets: 3, reps: "20-30s", rest: "120s", category: "core" },
      { name: "Box Jumps", sets: 3, reps: "8-12", rest: "120s", category: "cardio" },
      { name: "Muscle-ups", sets: 3, reps: "3-8", rest: "120s", category: "upper-body" },
      { name: "Single-leg Box Jumps", sets: 3, reps: "6-10 each leg", rest: "120s", category: "lower-body" },
      { name: "Dragon Flags", sets: 3, reps: "5-10", rest: "120s", category: "core" },
      { name: "Sprint Intervals", sets: 3, reps: "30s sprint, 90s rest", rest: "120s", category: "cardio" }
    ]
  },
  dumbbells: {
    beginner: [
      { name: "Dumbbell Press", sets: 3, reps: "8-12", rest: "90s", category: "upper-body" },
      { name: "Goblet Squats", sets: 3, reps: "10-15", rest: "90s", category: "lower-body" },
      { name: "Dumbbell Rows", sets: 3, reps: "8-12 each arm", rest: "90s", category: "upper-body" },
      { name: "Dumbbell Deadlifts", sets: 3, reps: "8-12", rest: "90s", category: "lower-body" },
      { name: "Dumbbell Curls", sets: 3, reps: "10-15", rest: "90s", category: "upper-body" },
      { name: "Dumbbell Lunges", sets: 3, reps: "8-12 each leg", rest: "90s", category: "lower-body" },
      { name: "Dumbbell Side Bends", sets: 3, reps: "12-15 each side", rest: "90s", category: "core" },
      { name: "Dumbbell Thrusters", sets: 3, reps: "8-12", rest: "90s", category: "cardio" }
    ],
    intermediate: [
      { name: "Dumbbell Bench Press", sets: 4, reps: "6-10", rest: "120s", category: "upper-body" },
      { name: "Bulgarian Split Squats", sets: 3, reps: "8-12 each leg", rest: "120s", category: "lower-body" },
      { name: "Dumbbell Pullovers", sets: 3, reps: "8-12", rest: "120s", category: "upper-body" },
      { name: "Romanian Deadlifts", sets: 3, reps: "8-12", rest: "120s", category: "lower-body" },
      { name: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", rest: "120s", category: "upper-body" },
      { name: "Dumbbell Step-ups", sets: 3, reps: "8-12 each leg", rest: "120s", category: "lower-body" },
      { name: "Dumbbell Russian Twists", sets: 3, reps: "15-20 each side", rest: "120s", category: "core" },
      { name: "Dumbbell Snatches", sets: 3, reps: "6-10 each arm", rest: "120s", category: "cardio" }
    ],
    advanced: [
      { name: "Dumbbell Incline Press", sets: 4, reps: "6-8", rest: "150s", category: "upper-body" },
      { name: "Dumbbell Pistol Squats", sets: 3, reps: "5-8 each leg", rest: "150s", category: "lower-body" },
      { name: "Dumbbell Flyes", sets: 3, reps: "8-12", rest: "150s", category: "upper-body" },
      { name: "Single-leg Romanian Deadlifts", sets: 3, reps: "6-10 each leg", rest: "150s", category: "lower-body" },
      { name: "Arnold Press", sets: 3, reps: "8-12", rest: "150s", category: "upper-body" },
      { name: "Dumbbell Box Jumps", sets: 3, reps: "6-10", rest: "150s", category: "lower-body" },
      { name: "Dumbbell Windmills", sets: 3, reps: "8-12 each side", rest: "150s", category: "core" },
      { name: "Dumbbell Complex", sets: 3, reps: "5 rounds", rest: "150s", category: "cardio" }
    ]
  },
  barbell: {
    beginner: [
      { name: "Barbell Squats", sets: 3, reps: "8-12", rest: "120s", category: "lower-body" },
      { name: "Barbell Bench Press", sets: 3, reps: "8-12", rest: "120s", category: "upper-body" },
      { name: "Barbell Deadlifts", sets: 3, reps: "6-10", rest: "120s", category: "lower-body" },
      { name: "Barbell Rows", sets: 3, reps: "8-12", rest: "120s", category: "upper-body" },
      { name: "Overhead Press", sets: 3, reps: "8-12", rest: "120s", category: "upper-body" },
      { name: "Romanian Deadlifts", sets: 3, reps: "8-12", rest: "120s", category: "lower-body" }
    ],
    intermediate: [
      { name: "Barbell Squats", sets: 4, reps: "6-8", rest: "150s", category: "lower-body" },
      { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "150s", category: "upper-body" },
      { name: "Barbell Deadlifts", sets: 3, reps: "5-8", rest: "180s", category: "lower-body" },
      { name: "Barbell Rows", sets: 4, reps: "6-8", rest: "150s", category: "upper-body" },
      { name: "Overhead Press", sets: 4, reps: "6-8", rest: "150s", category: "upper-body" },
      { name: "Front Squats", sets: 3, reps: "6-8", rest: "150s", category: "lower-body" }
    ],
    advanced: [
      { name: "Barbell Squats", sets: 5, reps: "5", rest: "180s", category: "lower-body" },
      { name: "Barbell Bench Press", sets: 5, reps: "5", rest: "180s", category: "upper-body" },
      { name: "Barbell Deadlifts", sets: 3, reps: "3-5", rest: "240s", category: "lower-body" },
      { name: "Barbell Rows", sets: 5, reps: "5", rest: "180s", category: "upper-body" },
      { name: "Overhead Press", sets: 5, reps: "5", rest: "180s", category: "upper-body" },
      { name: "Power Cleans", sets: 3, reps: "3-5", rest: "180s", category: "lower-body" }
    ]
  },
  resistance_bands: {
    beginner: [
      { name: "Band Rows", sets: 3, reps: "12-15", rest: "60s", category: "upper-body" },
      { name: "Band Squats", sets: 3, reps: "12-15", rest: "60s", category: "lower-body" },
      { name: "Band Chest Press", sets: 3, reps: "12-15", rest: "60s", category: "upper-body" },
      { name: "Band Deadlifts", sets: 3, reps: "12-15", rest: "60s", category: "lower-body" },
      { name: "Band Curls", sets: 3, reps: "12-15", rest: "60s", category: "upper-body" },
      { name: "Band Lateral Walks", sets: 3, reps: "10 steps each direction", rest: "60s", category: "lower-body" }
    ],
    intermediate: [
      { name: "Band Pull-ups", sets: 3, reps: "8-12", rest: "90s", category: "upper-body" },
      { name: "Band Pistol Squats", sets: 3, reps: "6-10 each leg", rest: "90s", category: "lower-body" },
      { name: "Band Overhead Press", sets: 3, reps: "8-12", rest: "90s", category: "upper-body" },
      { name: "Band Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90s", category: "lower-body" },
      { name: "Band Tricep Extensions", sets: 3, reps: "10-12", rest: "90s", category: "upper-body" },
      { name: "Band Glute Bridges", sets: 3, reps: "12-15", rest: "90s", category: "lower-body" }
    ],
    advanced: [
      { name: "Band Muscle-ups", sets: 3, reps: "3-8", rest: "120s", category: "upper-body" },
      { name: "Band Box Jumps", sets: 3, reps: "8-12", rest: "120s", category: "lower-body" },
      { name: "Band Snatches", sets: 3, reps: "6-10 each arm", rest: "120s", category: "upper-body" },
      { name: "Band Single-leg Deadlifts", sets: 3, reps: "8-12 each leg", rest: "120s", category: "lower-body" },
      { name: "Band Overhead Squats", sets: 3, reps: "6-10", rest: "120s", category: "lower-body" },
      { name: "Band Burpees", sets: 3, reps: "8-12", rest: "120s", category: "cardio" }
    ]
  }
};

// Workout templates based on goals
const workoutTemplates = {
  weightLoss: {
    focus: ["cardio", "full-body"],
    intensity: "high",
    restPeriods: "short"
  },
  muscleGain: {
    focus: ["upper-body", "lower-body"],
    intensity: "moderate",
    restPeriods: "long"
  },
  strength: {
    focus: ["compound-movements"],
    intensity: "high",
    restPeriods: "long"
  },
  endurance: {
    focus: ["cardio", "high-reps"],
    intensity: "moderate",
    restPeriods: "short"
  },
  general: {
    focus: ["balanced"],
    intensity: "moderate",
    restPeriods: "medium"
  }
};

// DOM elements
const aiWorkoutForm = document.getElementById('aiWorkoutForm');
const aiResultsSection = document.getElementById('aiResults');
const aiWorkoutPlanContainer = document.getElementById('aiWorkoutPlan');
const aiGenerateBtn = document.getElementById('aiGenerateBtn');
const aiBtnText = aiGenerateBtn.querySelector('.btn-text');
const aiSpinner = aiGenerateBtn.querySelector('.spinner');

// Store the last form data for regeneration
let lastAiFormData = null;

// Event listeners for AI section
document.addEventListener('DOMContentLoaded', function() {
  if (aiWorkoutForm) {
    aiWorkoutForm.addEventListener('submit', handleAiFormSubmit);
  }
});

// AI Form handling functions
function getSelectedAiEquipment() {
  const checkboxes = document.querySelectorAll('#aiWorkoutForm input[type="checkbox"][value]');
  const selected = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selected.push(checkbox.value);
    }
  });
  return selected;
}

function validateAiForm(formData) {
  const errors = [];
  
  if (!formData.fitnessGoal) {
    errors.push('Please select your fitness goal');
  }
  
  if (!formData.workoutDays) {
    errors.push('Please select the number of workout days');
  }
  
  if (!formData.fitnessLevel) {
    errors.push('Please select your fitness level');
  }
  
  if (!formData.workoutDuration) {
    errors.push('Please select your preferred workout duration');
  }
  
  if (formData.equipment.length === 0) {
    errors.push('Please select at least one piece of equipment');
  }
  

  
  return errors;
}

function showMessage(message, type = 'info') {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());
  
  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  
  const icon = type === 'error' ? 'fas fa-exclamation-circle' : 
               type === 'success' ? 'fas fa-check-circle' : 
               'fas fa-info-circle';
  
  messageDiv.innerHTML = `
    <i class="${icon}"></i>
    <span>${message}</span>
  `;
  
  // Insert message before the form
  const form = document.querySelector('.ai-workout-form');
  form.parentNode.insertBefore(messageDiv, form);
  
  // Auto-remove success/info messages after 5 seconds
  if (type !== 'error') {
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }
}

function setLoadingState(loading) {
  if (loading) {
    aiGenerateBtn.disabled = true;
    aiBtnText.classList.add('hidden');
    aiSpinner.classList.remove('hidden');
  } else {
    aiGenerateBtn.disabled = false;
    aiBtnText.classList.remove('hidden');
    aiSpinner.classList.add('hidden');
  }
}

function createOpenAIPrompt(formData) {
  const goalLabels = {
    'weight-loss': 'Weight Loss & Fat Burning',
    'muscle-building': 'Muscle Building & Hypertrophy',
    'strength-training': 'Strength & Power',
    'endurance': 'Cardiovascular Endurance',
    'functional-fitness': 'Functional Fitness & Mobility',
    'sports-performance': 'Sports Performance',
    'general-wellness': 'General Wellness & Maintenance'
  };

  const levelLabels = {
    'complete-beginner': 'Complete Beginner (New to exercise)',
    'beginner': 'Beginner (0-6 months experience)',
    'intermediate': 'Intermediate (6 months - 2 years)',
    'advanced': 'Advanced (2+ years experience)',
    'elite': 'Elite (Competitive athlete)'
  };

  const equipmentLabels = {
    'bodyweight-only': 'Bodyweight Only',
    'dumbbells': 'Dumbbells',
    'barbell': 'Barbell & Plates',
    'resistance-bands': 'Resistance Bands',
    'kettlebells': 'Kettlebells',
    'pull-up-bar': 'Pull-up Bar',
    'cardio-equipment': 'Cardio Equipment (Treadmill, Bike, etc.)',
    'full-gym': 'Full Gym Access'
  };

  const prompt = `Create a detailed, personalized weekly workout plan in HTML format for a fitness enthusiast with the following specifications:

**User Profile:**
- Primary Goal: ${goalLabels[formData.fitnessGoal]}
- Fitness Level: ${levelLabels[formData.fitnessLevel]}
- Workout Frequency: ${formData.workoutDays} days per week
- Session Duration: ${formData.workoutDuration} minutes per session
- Available Equipment: ${formData.equipment.map(eq => equipmentLabels[eq]).join(', ')}

**Additional Information:**
${formData.limitations ? `- Limitations/Preferences: ${formData.limitations}` : ''}
${formData.additionalInfo ? `- Additional Info: ${formData.additionalInfo}` : ''}

**Requirements:**
1. Create a ${formData.workoutDays}-day workout plan
2. Each day should include:
   - Warm-up routine (5-10 minutes)
   - Main workout with specific exercises, sets, reps, and rest periods
   - Cool-down/stretching (5-10 minutes)
3. Include progressive overload principles appropriate for the fitness level
4. Consider the user's limitations and preferences
5. Provide form tips and safety notes where relevant
6. Include optional modifications for different fitness levels

**Output Format:**
Return the response in clean HTML format with proper structure. Use semantic HTML tags and include:
- Day-by-day breakdown with clear headings
- Exercise lists with sets, reps, and rest periods
- Tips and notes in highlighted boxes
- Proper formatting for easy reading

**Important Notes:**
- Ensure exercises are appropriate for the available equipment
- Consider the user's fitness level for exercise selection and intensity
- Include variety to prevent plateaus
- Provide clear instructions for form and safety
- Make the plan realistic and achievable for the specified duration

Please provide a comprehensive, well-structured workout plan that the user can follow immediately.`;

  return prompt;
}

async function callOpenAI(apiKey, prompt) {
  const response = await fetch('/api/generate-workout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formData: {
        aiFitnessGoal: document.getElementById('aiFitnessGoal').value,
        aiWorkoutDays: document.getElementById('aiWorkoutDays').value,
        aiFitnessLevel: document.getElementById('aiFitnessLevel').value,
        aiWorkoutDuration: document.getElementById('aiWorkoutDuration').value,
        aiEquipment: getSelectedAiEquipment(),
        aiInjuries: document.getElementById('aiLimitations').value,
        aiPreferences: document.getElementById('aiAdditionalInfo').value
      }
    })
  });

  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new Error('Invalid server response. Please try again later.');
  }

  if (!response.ok) {
    throw new Error(data?.error || `HTTP error! status: ${response.status}`);
  }

  return data.workoutPlan;
}

async function handleAiFormSubmit(e) {
  e.preventDefault();

  const formData = {
    fitnessGoal: document.getElementById('aiFitnessGoal').value,
    workoutDays: document.getElementById('aiWorkoutDays').value,
    fitnessLevel: document.getElementById('aiFitnessLevel').value,
    workoutDuration: document.getElementById('aiWorkoutDuration').value,
    equipment: getSelectedAiEquipment(),
    limitations: document.getElementById('aiLimitations').value.trim(),
    additionalInfo: document.getElementById('aiAdditionalInfo').value.trim()
  };

  // Validate form
  const errors = validateAiForm(formData);
  if (errors.length > 0) {
    showMessage(errors.join(', '), 'error');
    return;
  }

  // Store form data for regeneration
  lastAiFormData = { ...formData };

  // Show loading state
  setLoadingState(true);
  showMessage('Generating your personalized workout plan...', 'info');

  try {
    // Call backend API
    const aiResponse = await callOpenAI(null, null);
    
    // Display results
    displayAiWorkoutPlan(formData, aiResponse);
    
    // Show success message
    showMessage('Workout plan generated successfully!', 'success');
    
  } catch (error) {
    console.error('Error generating workout plan:', error);
    showMessage(`Error: ${error.message}`, 'error');
  } finally {
    setLoadingState(false);
  }
}

function displayAiWorkoutPlan(formData, aiResponse) {
  // Update summary cards
  const goalLabels = {
    'weight-loss': 'Weight Loss & Fat Burning',
    'muscle-building': 'Muscle Building & Hypertrophy',
    'strength-training': 'Strength & Power',
    'endurance': 'Cardiovascular Endurance',
    'functional-fitness': 'Functional Fitness & Mobility',
    'sports-performance': 'Sports Performance',
    'general-wellness': 'General Wellness & Maintenance'
  };

  const levelLabels = {
    'complete-beginner': 'Complete Beginner',
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced',
    'elite': 'Elite'
  };

  const equipmentLabels = {
    'bodyweight-only': 'Bodyweight Only',
    'dumbbells': 'Dumbbells',
    'barbell': 'Barbell & Plates',
    'resistance-bands': 'Resistance Bands',
    'kettlebells': 'Kettlebells',
    'pull-up-bar': 'Pull-up Bar',
    'cardio-equipment': 'Cardio Equipment',
    'full-gym': 'Full Gym Access'
  };

  document.getElementById('aiGoalText').textContent = goalLabels[formData.fitnessGoal];
  document.getElementById('aiScheduleText').textContent = `${formData.workoutDays} days per week, ${formData.workoutDuration} minutes per session`;
  document.getElementById('aiEquipmentText').textContent = formData.equipment.map(eq => equipmentLabels[eq]).join(', ');
  document.getElementById('aiLevelText').textContent = levelLabels[formData.fitnessLevel];

  // --- New: Parse and format the AI response as a table sorted by day ---
  // This assumes the AI response contains day headings like "Day 1", "Day 2", etc.
  // We'll extract each day's section and build a table for each.
  let planHTML = '';
  const dayRegex = /Day\s*(\d+)[^\n\r]*[\n\r]+([\s\S]*?)(?=Day\s*\d+|$)/gi;
  let match;
  let days = [];
  while ((match = dayRegex.exec(aiResponse)) !== null) {
    days.push({
      day: parseInt(match[1]),
      content: match[2].trim()
    });
  }
  days.sort((a, b) => a.day - b.day);

  days.forEach(dayObj => {
    // Try to extract exercises as lines or list items
    let exercises = [];
    // Try to find bullet points or numbered lists
    const bulletRegex = /(?:\u2022|\*|\-|\d+\.)\s*(.+)/g;
    let bulletMatch;
    while ((bulletMatch = bulletRegex.exec(dayObj.content)) !== null) {
      exercises.push(bulletMatch[1]);
    }
    // If no bullets, split by lines
    if (exercises.length === 0) {
      exercises = dayObj.content.split(/\n|\r/).map(l => l.trim()).filter(l => l);
    }
    planHTML += `<h4>Day ${dayObj.day}</h4><table class="ai-plan-table"><thead><tr><th>Exercise</th></tr></thead><tbody>`;
    exercises.forEach(ex => {
      planHTML += `<tr><td>${ex}</td></tr>`;
    });
    planHTML += `</tbody></table>`;
  });
  if (planHTML === '') {
    // fallback: show original response
    planHTML = aiResponse;
  }
  aiWorkoutPlanContainer.innerHTML = planHTML;

  // Show results section
  aiResultsSection.classList.remove('hidden');
  aiResultsSection.scrollIntoView({ behavior: 'smooth' });
}

function regenerateAiPlan() {
  if (!lastAiFormData) {
    showMessage('No previous plan to regenerate. Please fill out the form first.', 'error');
    return;
  }

  // Scroll back to form
  document.querySelector('.ai-workout-generator').scrollIntoView({ 
    behavior: 'smooth' 
  });
  
  // Hide results
  aiResultsSection.classList.add('hidden');
  
  // Pre-fill the form with last data
  document.getElementById('aiFitnessGoal').value = lastAiFormData.fitnessGoal;
  document.getElementById('aiWorkoutDays').value = lastAiFormData.workoutDays;
  document.getElementById('aiFitnessLevel').value = lastAiFormData.fitnessLevel;
  document.getElementById('aiWorkoutDuration').value = lastAiFormData.workoutDuration;
  document.getElementById('aiLimitations').value = lastAiFormData.limitations;
  document.getElementById('aiAdditionalInfo').value = lastAiFormData.additionalInfo;

  // Re-check equipment boxes
  const checkboxes = document.querySelectorAll('#aiWorkoutForm input[type="checkbox"][value]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = lastAiFormData.equipment.includes(checkbox.value);
  });

  showMessage('Form filled with previous data. Click "Generate AI Workout Plan" to create a new plan.', 'info');
}

function downloadAiPlan() {
  const planContent = aiWorkoutPlanContainer.innerHTML;
  const summaryText = `
AI-GENERATED WORKOUT PLAN
========================

Goal: ${document.getElementById('aiGoalText').textContent}
Schedule: ${document.getElementById('aiScheduleText').textContent}
Equipment: ${document.getElementById('aiEquipmentText').textContent}
Level: ${document.getElementById('aiLevelText').textContent}

${planContent.replace(/<[^>]*>/g, '\n')}
  `;

  const blob = new Blob([summaryText], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-workout-plan.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

function shareAiPlan() {
  const planText = `
🤖 AI-Generated Workout Plan

${document.getElementById('aiGoalText').textContent}
${document.getElementById('aiScheduleText').textContent}
${document.getElementById('aiEquipmentText').textContent}
${document.getElementById('aiLevelText').textContent}

Generated by FitPlan Pro AI
  `;

  if (navigator.share) {
    navigator.share({
      title: 'My AI-Generated Workout Plan',
      text: planText,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(planText).then(() => {
      showMessage('Workout plan copied to clipboard!', 'success');
    }).catch(() => {
      showMessage('Failed to copy to clipboard', 'error');
    });
  }
} 

// === Weekly Workout Generator (OpenAI) ===
// Remove all code related to the weekly workout generator and results, including:
// - weeklyWorkoutForm, weeklyResultsSection, weeklyPlanSummary, weeklyWorkoutPlan, downloadWeeklyPlanBtn, emailWeeklyPlanBtn
// - handleWeeklyFormSubmit, displayWeeklyWorkoutPlan, setWeeklyLoadingState, downloadWeeklyPlan, emailWeeklyPlan
// - Event listeners for weeklyWorkoutForm, downloadWeeklyPlanBtn, emailWeeklyPlanBtn
//
// Add new functions for Export as PDF and Email Plan for the AI workout plan:

function exportAiPlanAsPDF() {
  if (window.jspdf || window.jsPDF) {
    const doc = new (window.jspdf || window.jsPDF)();
    doc.html(aiWorkoutPlanContainer, {
      callback: function (doc) {
        doc.save('ai-workout-plan.pdf');
      },
      x: 10,
      y: 10
    });
  } else {
    // Fallback: download as .txt
    const text = aiWorkoutPlanContainer.innerText || aiWorkoutPlanContainer.textContent;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-workout-plan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

function emailAiPlan() {
  const subject = encodeURIComponent('My AI-Generated Workout Plan');
  const body = encodeURIComponent((aiWorkoutPlanContainer.innerText || aiWorkoutPlanContainer.textContent).slice(0, 2000));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const downloadWeeklyPlanBtn = document.getElementById('downloadWeeklyPlanBtn');
  const emailWeeklyPlanBtn = document.getElementById('emailWeeklyPlanBtn');
  if (downloadWeeklyPlanBtn) {
    downloadWeeklyPlanBtn.addEventListener('click', exportAiPlanAsPDF);
  }
  if (emailWeeklyPlanBtn) {
    emailWeeklyPlanBtn.addEventListener('click', emailAiPlan);
  }
}); 

function scrollToAiGenerator() {
  const section = document.getElementById('ai-workout-generator');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
} 