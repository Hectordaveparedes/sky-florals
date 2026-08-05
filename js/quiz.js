// SKY FLORALS - INTERACTIVE EMOTIONAL SOLUTION QUIZ WIZARD

const quizData = {
  step1: {
    question: "What emotion do you need to express today?",
    subtitle: "Select the core feeling you want your arrangement to speak on your behalf.",
    options: [
      { id: "apology", title: "Sincere Apology & Reconciliation", desc: "When words feel incomplete and you need quiet, elegant redemption." },
      { id: "romance", title: "Unspoken Romance & Devotion", desc: "A high-fashion declaration of affection that leaves a lasting impression." },
      { id: "gratitude", title: "Quiet Luxury Gratitude", desc: "To honor a mentor, client, or friend with sophisticated elevated grace." },
      { id: "selflove", title: "Self-Love & Home Sanctuary", desc: "Treating your own personal space to an elevated aesthetic ritual." }
    ]
  },
  step2: {
    question: "Who is receiving this moment?",
    subtitle: "We tailor the stem palette and handwritten note tone based on the recipient.",
    options: [
      { id: "partner", title: "Significant Other / Partner", desc: "Warm, deeply intimate, and aesthetically memorable." },
      { id: "friend", title: "Dear Friend / Family", desc: "Heartfelt, uplifting, and timelessly beautiful." },
      { id: "executive", title: "Client, Boss, or Business Partner", desc: "Refined, prestige aesthetic with executive impact." },
      { id: "myself", title: "Myself / My Residence", desc: "Sensory indulgence and architectural floral beauty." }
    ]
  },
  step3: {
    question: "What vibe defines their aesthetic taste?",
    subtitle: "Matching the architectural vessel & stem silhouette to their style.",
    options: [
      { id: "minimal", title: "Hailey Bieber Minimalist", desc: "Monochromatic ivory calla lilies, alabaster ceramics, sleek lines." },
      { id: "romantic", title: "Modern Romantic Blush", desc: "Fluffy muted blush garden roses, trailing eucalyptus, soft pastel tones." },
      { id: "bold", title: "High-Fashion Editorial", desc: "Dramatic architectural stems, rich terracotta or deep velvet burgundy accents." }
    ]
  }
};

const quizSolutions = {
  "apology": {
    name: "The Soft Reconciliation Sculpture",
    price: 185,
    tag: "Most Sentimental",
    image: "assets/signature_blush.jpg",
    desc: "A soothing palette of muted blush peonies and white calla lilies designed to soften hearts and express genuine remorse beyond words.",
    note: "“I couldn’t find the right words, but I found these. You mean everything to me, and I’m truly sorry.”"
  },
  "romance": {
    name: "Grand Editorial Passion",
    price: 240,
    tag: "High Fashion Pick",
    image: "assets/hero.jpg",
    desc: "Architectural garden roses paired with delicate stems in a travertine ceramic vessel, designed to leave an unforgettable impression.",
    note: "“In a world of noise, you are my favorite quiet place. Thinking of you always.”"
  },
  "gratitude": {
    name: "The Atelier Ivory Monolith",
    price: 195,
    tag: "Prestige Gift",
    image: "assets/lifestyle.jpg",
    desc: "Pure white ranunculus, ivory garden roses, and French lavender mist for an understated statement of high-level appreciation.",
    note: "“With deepest gratitude for your guidance, vision, and grace. Truly unmatched.”"
  },
  "selflove": {
    name: "Sanctuary Bloom Ritual",
    price: 165,
    tag: "Self-Care Favorite",
    image: "assets/unboxing.jpg",
    desc: "Scent-infused seasonal stems designed to elevate your living room, desk, or bedside table with serene elegance.",
    note: "“A daily reminder to pause, breathe, and surround myself with beauty.”"
  }
};

let currentQuizStep = 1;
let userAnswers = {};

function renderQuizStep(step) {
  const container = document.getElementById("quizContent");
  if (!container) return;

  const progress = document.getElementById("quizProgressBar");
  if (progress) {
    progress.style.width = `${(step / 3) * 100}%`;
  }

  if (step <= 3) {
    const data = quizData[`step${step}`];
    container.innerHTML = `
      <h3 class="quiz-step-title">${data.question}</h3>
      <p class="quiz-step-subtitle">${data.subtitle}</p>
      <div class="quiz-options-grid">
        ${data.options.map(opt => `
          <div class="quiz-option-card ${userAnswers[`step${step}`] === opt.id ? 'selected' : ''}" onclick="selectQuizOption(${step}, '${opt.id}')">
            <h4 class="quiz-option-title">${opt.title}</h4>
            <p class="quiz-option-desc">${opt.desc}</p>
          </div>
        `).join('')}
      </div>
      <div class="quiz-nav">
        ${step > 1 ? `<button class="btn-secondary" onclick="prevQuizStep()">← Previous</button>` : `<div></div>`}
        <button class="btn-primary" ${!userAnswers[`step${step}`] ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="nextQuizStep()">
          ${step === 3 ? 'Reveal My Floral Solution →' : 'Continue →'}
        </button>
      </div>
    `;
  } else {
    // Show Solution
    const emotionKey = userAnswers['step1'] || 'romance';
    const solution = quizSolutions[emotionKey] || quizSolutions['romance'];

    container.innerHTML = `
      <div class="quiz-result-card">
        <div class="hero-tag">✨ Your Tailored Solution</div>
        <h3 class="heading-lg">${solution.name}</h3>
        <p style="color:var(--text-secondary); margin-top:-12px;">Curated based on your emotional intention and recipient profile.</p>
        
        <div class="result-box">
          <img src="${solution.image}" alt="${solution.name}">
          <div>
            <div style="font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent-rose); font-weight:600;">${solution.tag}</div>
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin:4px 0;">${solution.name} — $${solution.price}</h4>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">${solution.desc}</p>
          </div>
        </div>

        <div>
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:8px; color:var(--text-secondary);">Suggested Calligraphy Note Solution:</h4>
          <div class="suggested-note">${solution.note}</div>
        </div>

        <div style="display:flex; gap:16px; margin-top:12px; flex-wrap:wrap;">
          <button class="btn-primary" onclick="addQuizSolutionToCart('${solution.name}', ${solution.price}, '${solution.image}', '${solution.note}')">Add to Shopping Bag ($${solution.price})</button>
          <button class="btn-secondary" onclick="resetQuiz()">Take Quiz Again</button>
        </div>
      </div>
    `;
  }
}

function selectQuizOption(step, optionId) {
  userAnswers[`step${step}`] = optionId;
  renderQuizStep(step);
}

function nextQuizStep() {
  if (currentQuizStep < 4 && userAnswers[`step${currentQuizStep}`]) {
    currentQuizStep++;
    renderQuizStep(currentQuizStep);
  }
}

function prevQuizStep() {
  if (currentQuizStep > 1) {
    currentQuizStep--;
    renderQuizStep(currentQuizStep);
  }
}

function resetQuiz() {
  currentQuizStep = 1;
  userAnswers = {};
  renderQuizStep(1);
}

function addQuizSolutionToCart(name, price, image, note) {
  if (window.addToCart) {
    window.addToCart({
      id: 'quiz-' + Date.now(),
      name: name,
      price: price,
      image: image,
      meta: `Includes Custom Calligraphy Note`
    });
    window.openCartDrawer();
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderQuizStep(1);
});
