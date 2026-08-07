// SKY FLORALS - INTERACTIVE EMOTIONAL SOLUTION QUIZ WIZARD (BILINGUAL EN / ES)

const quizDataEN = {
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

const quizDataES = {
  step1: {
    question: "¿Qué emoción deseas expresar hoy?",
    subtitle: "Selecciona el sentimiento principal que deseas que tu arreglo transmita.",
    options: [
      { id: "apology", title: "Disculpa Sincera y Reconciliación", desc: "Cuando las palabras se quedan cortas y buscas una redención elegante y profunda." },
      { id: "romance", title: "Romance Profundo y Devoción", desc: "Una declaración de afecto de alta costura que deja una impresión inolvidable." },
      { id: "gratitude", title: "Gratitud y Sofisticación", desc: "Para honrar a un mentor, cliente o amigo con elegancia distintiva." },
      { id: "selflove", title: "Amor Propio y Santuario en Casa", desc: "Un ritual estético para consentir tu propio espacio personal." }
    ]
  },
  step2: {
    question: "¿Quién recibirá este momento especial?",
    subtitle: "Adaptamos la paleta de flores y la tarjeta según el destinatario.",
    options: [
      { id: "partner", title: "Mi Pareja / Amor", desc: "Cálido, profundamente íntimo y estéticamente memorable." },
      { id: "friend", title: "Amigo Cercano / Familia", desc: "Sincero, reconfortante y atemporalmente hermoso." },
      { id: "executive", title: "Cliente, Jefe o Socio", desc: "Estética refinada de prestigio con impacto ejecutivo." },
      { id: "myself", title: "Para Mí / Mi Residencia", desc: "Indulgenia sensorial y belleza floral arquitectónica." }
    ]
  },
  step3: {
    question: "¿Qué estilo define sus gustos estéticos?",
    subtitle: "Conectamos la vasija y la silueta del diseño con su estilo personal.",
    options: [
      { id: "minimal", title: "Minimalista Blanco & Alabastro", desc: "Calas blancas monocromáticas, cerámica alabastro y líneas limpias." },
      { id: "romantic", title: "Romántico Rosado & Peonías", desc: "Rosas de jardín rosadas, eucalipto y tonos pasteles suaves." },
      { id: "bold", title: "Editorial Terracota o Borgoña", desc: "Tallos arquitectónicos dramáticos con acentos terracota u oscuros." }
    ]
  }
};

const quizSolutions = {
  "apology": {
    name: "The Soft Reconciliation Sculpture",
    nameEs: "Escultura de Reconciliación Suave",
    price: 185,
    tag: "Most Sentimental",
    image: "assets/pal_blush.jpg",
    desc: "A soothing palette of muted blush peonies and white calla lilies designed to soften hearts.",
    descEs: "Una paleta suave de peonías rosadas y calas blancas diseñada para transmitir disculpas sinceras.",
    note: "“I couldn’t find the right words, but I found these. You mean everything to me, and I’m truly sorry.”",
    noteEs: "“No encontré las palabras exactas, pero encontré esto. Significas todo para mí y lo siento de corazón.”"
  },
  "romance": {
    name: "Grand Editorial Passion",
    nameEs: "Gran Pasión Editorial",
    price: 240,
    tag: "High Fashion Pick",
    image: "assets/pal_ivory.jpg",
    desc: "Architectural garden roses paired with delicate stems in a travertine ceramic vessel.",
    descEs: "Rosas de jardín arquitectónicas en vasija de travertino, diseñadas para una impresión inolvidable.",
    note: "“In a world of noise, you are my favorite quiet place. Thinking of you always.”",
    noteEs: "“En un mundo de ruido, tú eres mi lugar favorito de paz. Pensando en ti siempre.”"
  },
  "gratitude": {
    name: "The Atelier Ivory Monolith",
    nameEs: "Monolito de Marfil Atelier",
    price: 195,
    tag: "Prestige Gift",
    image: "assets/lifestyle.jpg",
    desc: "Pure white ranunculus, ivory garden roses, and French lavender mist for understated appreciation.",
    descEs: "Ranúnculos blancos puros y rosas de marfil para una declaración sobria de aprecio supremo.",
    note: "“With deepest gratitude for your guidance, vision, and grace. Truly unmatched.”",
    noteEs: "“Con mi más profunda gratitud por tu guía, visión y elegancia. Verdaderamente inigualable.”"
  },
  "selflove": {
    name: "Sanctuary Bloom Ritual",
    nameEs: "Ritual Florecer en el Santuario",
    price: 165,
    tag: "Self-Care Favorite",
    image: "assets/unboxing.jpg",
    desc: "Scent-infused seasonal stems designed to elevate your living room or bedside table.",
    descEs: "Tallos de temporada perfumados diseñados para elevar tu espacio o velador.",
    note: "“A daily reminder to pause, breathe, and surround myself with beauty.”",
    noteEs: "“Un recordatorio diario para pausar, respirar y rodearme de belleza.”"
  }
};

let currentQuizStep = 1;
let userAnswers = {};

function renderQuizStep(step) {
  const container = document.getElementById("quizContent");
  if (!container) return;

  const lang = (window.getCurrentLang && window.getCurrentLang() === 'ES') ? 'ES' : 'EN';
  const quizData = (lang === 'ES') ? quizDataES : quizDataEN;

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
        ${step > 1 ? `<button class="btn-secondary" onclick="prevQuizStep()">${lang === 'ES' ? '← Anterior' : '← Previous'}</button>` : `<div></div>`}
        <button class="btn-primary" ${!userAnswers[`step${step}`] ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="nextQuizStep()">
          ${step === 3 ? (lang === 'ES' ? 'Ver Mi Solución Floral →' : 'Reveal My Floral Solution →') : (lang === 'ES' ? 'Continuar →' : 'Continue →')}
        </button>
      </div>
    `;
  } else {
    // Show Solution
    const emotionKey = userAnswers['step1'] || 'romance';
    const solution = quizSolutions[emotionKey] || quizSolutions['romance'];

    container.innerHTML = `
      <div class="quiz-result-card">
        <div class="hero-tag">✨ ${lang === 'ES' ? 'Tu Solución Personalizada' : 'Your Tailored Solution'}</div>
        <h3 class="heading-lg">${lang === 'ES' ? solution.nameEs : solution.name}</h3>
        <p style="color:var(--text-secondary); margin-top:-12px;">${lang === 'ES' ? 'Curado según tu intención emocional y perfil del destinatario.' : 'Curated based on your emotional intention and recipient profile.'}</p>
        
        <div class="result-box">
          <img src="${solution.image}" alt="${solution.name}">
          <div>
            <div style="font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent-gold); font-weight:600;">${solution.tag}</div>
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin:4px 0;">${lang === 'ES' ? solution.nameEs : solution.name} — $${solution.price}</h4>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">${lang === 'ES' ? solution.descEs : solution.desc}</p>
          </div>
        </div>

        <div>
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:8px; color:var(--text-secondary);">${lang === 'ES' ? 'Propuesta de Nota en Caligrafía:' : 'Suggested Calligraphy Note Solution:'}</h4>
          <div class="suggested-note">${lang === 'ES' ? solution.noteEs : solution.note}</div>
        </div>

        <div style="display:flex; gap:16px; margin-top:12px; flex-wrap:wrap;">
          <button class="btn-primary" onclick="addQuizSolutionToCart('${lang === 'ES' ? solution.nameEs : solution.name}', ${solution.price}, '${solution.image}', '${lang === 'ES' ? solution.noteEs : solution.note}')">
            ${lang === 'ES' ? `Agregar a Bolsa ($${solution.price})` : `Add to Shopping Bag ($${solution.price})`}
          </button>
          <button class="btn-secondary" onclick="resetQuiz()">${lang === 'ES' ? 'Reiniciar Quiz' : 'Take Quiz Again'}</button>
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
      meta: `Includes Custom Calligraphy Note & Certificate`
    });
    window.openCartDrawer();
  }
}

window.updateQuizLang = function() {
  renderQuizStep(currentQuizStep);
};

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderQuizStep(1);
});
