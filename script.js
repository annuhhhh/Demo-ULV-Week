// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Parallax effect for background
  const parallaxBg = document.querySelector('.parallax-bg');
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Section fade-in on scroll
  const sections = document.querySelectorAll('section');
  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.92;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.style.opacity = 1;
        section.style.transform = 'none';
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // Weekly Workout Plan Generator
  const weeklyForm = document.getElementById('weekly-plan-form');
  const planLoading = document.getElementById('plan-loading');
  const planError = document.getElementById('plan-error');
  const planOutput = document.getElementById('plan-output');
  const regenerateBtn = document.getElementById('regenerate-plan');

  let lastFormData = null;

  async function generatePlan(formData) {
    planLoading.style.display = 'flex';
    planError.style.display = 'none';
    planOutput.innerHTML = '';
    regenerateBtn.style.display = 'none';

    // Build prompt
    const prompt = `You are a fitness coach. Create a detailed weekly workout plan for the following user:\n\nFitness goal: ${formData.goal}\nDays per week: ${formData.days}\nEquipment available: ${formData.equipment}\nLimitations or preferences: ${formData.limitations || 'None'}\n\nReturn the plan in markdown or HTML. Include:\n- Daily workout breakdown (for each day)\n- Optional warm-up and cool-down\n- Notes or tips tailored to the user\n- Use clear headings and bullet points for readability.`;

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      if (!response.ok) throw new Error('Failed to fetch plan.');
      const data = await response.json();
      const plan = data.choices?.[0]?.message?.content || 'No plan generated.';
      // Render markdown/HTML
      planOutput.innerHTML = marked.parse(plan);
      planLoading.style.display = 'none';
      regenerateBtn.style.display = 'inline-block';
    } catch (err) {
      planLoading.style.display = 'none';
      planError.style.display = 'block';
      planError.textContent = 'Error generating plan. Please try again.';
      regenerateBtn.style.display = 'inline-block';
    }
  }

  if (weeklyForm) {
    weeklyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = {
        goal: document.getElementById('fitness-goal').value,
        days: document.getElementById('days').value,
        equipment: document.getElementById('equipment').value,
        limitations: document.getElementById('limitations').value
      };
      lastFormData = formData;
      generatePlan(formData);
    });
  }
  if (regenerateBtn) {
    regenerateBtn.addEventListener('click', function() {
      if (lastFormData) generatePlan(lastFormData);
    });
  }
}); 