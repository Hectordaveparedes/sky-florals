// SKY FLORALS - INTERACTIVE EMOTIONAL SOLUTION QUIZ WIZARD (SOURCE OF TRUTH)

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
    subtitle: "Matching the architectural creation silhouette to their style.",
    options: [
      { id: "minimal", title: "The Sky Edit (White & Ivory)", desc: "Monochromatic whites, ivories, delicate greens, and airy textures." },
      { id: "romantic", title: "The Blush Edit (Blush & Champagne)", desc: "Blush pinks, warm champagne, creamy neutrals, and delicate textures." },
      { id: "bold", title: "The Midnight Edit (Deep Blue & Black)", desc: "Deep blue hues, crisp whites, and subtle black accents." }
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
      { id: "minimal", title: "The Sky Edit (Blanco & Marfil)", desc: "Blancos monocromáticos, marfiles, verdes delicados y texturas etéreas." },
      { id: "romantic", title: "The Blush Edit (Blush & Champán)", desc: "Rosados blush, tonos champán cálidos y neutros cremosos." },
      { id: "bold", title: "The Midnight Edit (Azul Profundo & Negro)", desc: "Tonos azul profundo, blancos nítidos y sutiles acentos negros." }
    ]
  }
};

const quizSolutions = {
  "apology": {
    name: "🎀 THE BLUSH EDIT",
    nameEs: "🎀 THE BLUSH EDIT",
    price: 65,
    tag: "Most Sentimental",
    image: "assets/pal_blush.jpg",
    desc: "A romantic collection inspired by blush pinks, warm champagne hues, creamy neutrals, and delicate textures.",
    descEs: "Una colección romántica inspirada en rosados blush, tonos champán cálidos y neutros cremosos.",
    note: "“I couldn’t find the right words, but I found these. You mean everything to me, and I’m truly sorry.”",
    noteEs: "“No encontré las palabras exactas, pero encontré esto. Significas todo para mí y lo siento de corazón.”"
  },
  "romance": {
    name: "☁️ THE SKY EDIT",
    nameEs: "☁️ THE SKY EDIT",
    price: 65,
    tag: "Signature Selection",
    image: "assets/pal_ivory.jpg",
    desc: "Inspired by soft skies, natural light, and quiet sophistication, featuring elegant whites and ivories.",
    descEs: "Inspirada en cielos suaves y luz natural. Cuenta con elegantes blancos, marfiles y verdes delicados.",
    note: "“In a world of noise, you are my favorite quiet place. Thinking of you always.”",
    noteEs: "“En un mundo de ruido, tú eres mi lugar favorito de paz. Pensando en ti siempre.”"
  },
  "gratitude": {
    name: "🌙 THE MIDNIGHT EDIT",
    nameEs: "🌙 THE MIDNIGHT EDIT",
    price: 70,
    tag: "Sophisticated Distinction",
    image: "assets/pal_midnight.jpg",
    desc: "Inspired by deep blue hues, crisp whites, and subtle black accents, embodying bold sophistication.",
    descEs: "Inspirada en tonos azul profundo, blancos nítidos y acentos negros. Encarna una sofisticación audaz.",
    note: "“With deepest gratitude for your guidance, vision, and grace. Truly unmatched.”",
    noteEs: "“Con mi más profunda gratitud por tu guía, visión y elegancia. Verdaderamente inigualable.”"
  },
  "selflove": {
    name: "🌹 THE DOZEN",
    nameEs: "🌹 THE DOZEN",
    price: 40,
    tag: "Single Bloom Perfection",
    image: "assets/pal_ivory.jpg",
    desc: "A timeless arrangement featuring twelve stems of your chosen bloom, designed with refined simplicity.",
    descEs: "Un arreglo atemporal de doce tallos de tu flor elegida, diseñado con sencillez refinada.",
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
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin:4px 0;">${lang === 'ES' ? solution.nameEs : solution.name} — From $${solution.price}</h4>
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
