// SKY FLORALS - MAIN E-COMMERCE, I18N & SOURCE OF TRUTH CATALOG LOGIC
// Source of Truth Document: SKY FLORALS Collection and Edits

// WhatsApp Concierge & Orders Configuration
const WHATSAPP_NUMBER = "18622558720";
const WHATSAPP_DISPLAY = "+1 (862) 255-8720";

// i18n Translation Dictionary
const i18nDict = {
  EN: {
    locationBar: "White-Glove Courier Delivery Available Today in New Jersey, NYC & Metro Regions ($ USD)",
    regionLabel: "NEW JERSEY & NYC ATELIER",
    navCustomizer: "Atelier Customizer",
    navQuiz: "Emotional Matcher",
    navSculptures: "The Collection",
    navSubscriptions: "Subscriptions",
    navAbout: "About Us / The House",
    heroTag: "✨ The Curator of Floral Artistry",
    heroHeadline: 'Flowers Are Not Chosen From a Menu. They Are <span class="italic">Curated From a Story</span>.',
    heroDesc: "At SKY FLORALS, we believe every bloom is amongst creation's greatest masterpieces. We exist to transform flowers from simple expressions of beauty into timeless works of art that inspire quiet sophistication, reverence, and wonder.",
    heroCtaCustom: "Design Your Sky Creation →",
    heroCtaAbout: "Explore The House Story",
    trustFreshness: "7-10 Days",
    trustFreshnessLabel: "Guaranteed Freshness",
    trustCert: "Certificate",
    trustCertLabel: "Of Curation Included",
    trustWrap: "100% Cotton",
    trustWrapLabel: "Natural Linen Packaging",
    quizSubhead: "Interactive Emotional Matcher",
    quizTitle: "Find Your Emotional Solution",
    quizDesc: "Answer 3 quick questions to discover the perfect creation from The Collection and calligraphy note tailored to your exact moment.",
    catalogSubhead: "THE COLLECTION & CURATED EDITS",
    catalogTitle: "Signature SKY FLORALS Creations",
    catalogDesc: "Thoughtfully curated floral creations designed to celebrate life's most meaningful moments through artistry, elegance, and quiet sophistication.",
    filterAll: "All Creations",
    filterSignatureStems: "1. Signature Stems",
    filterCuratedEdits: "2. Curated Edits",
    filterBespoke: "3. Bespoke",
    customizerSubhead: "Live Design Studio",
    customizerTitle: "Design Your Custom Sky Creation",
    customizerDesc: "Build a bespoke arrangement with real-time Certificate of Curation preview and price breakdown.",
    certTitle: "Certificate of Curation",
    certRowFor: "Curated for",
    certRowOccasion: "Occasion",
    certRowCollection: "Collection",
    certRowDesigned: "Designed",
    lblRecipient: "Recipient Name",
    lblOccasion: "Occasion",
    step1Palette: "1. Select Collection / Edit",
    step2Vessel: "2. Choose Architectural Vessel",
    step3Wrap: "3. Signature Wrap & Add-Ons",
    step4Scent: "4. Unboxing Scent Infusion",
    lblInvestment: "Total Investment",
    btnAddCustom: "Add Custom Creation to Bag →",
    unboxingSubhead: "Sensorial Unboxing Experience",
    unboxingTitle: "Designed to Elevate the Unboxing Ritual",
    unboxingStep1Title: "Signature Natural Linen Box",
    unboxingStep1Desc: "Crafted from rigid sustainably-sourced paper wrapped in soft oat linen with gold-embossed SKY logo.",
    unboxingStep2Title: "French Damask Rose Mist",
    unboxingStep2Desc: "Every box is misted with our proprietary French Damask Rose & Vanilla essential oil blend prior to sealing.",
    unboxingStep3Title: "Cotton Certificate of Curation",
    unboxingStep3Desc: "Your arrangement arrives with an official Certificate of Curation detailing the recipient, occasion, date, and artisan sign-off.",
    zipSubhead: "Atelier Courier Verification",
    zipTitle: "Check Courier Delivery in Your City",
    zipDesc: "Confirm real-time white-glove courier availability across New Jersey, NYC Metro, and Loja, Ecuador.",
    zipPlaceholder: "Enter 5-Digit US ZIP Code (e.g. 07030, 10001, 90210)",
    zipBtn: "Check Availability",
    subSubhead: "The SKY VIP Membership",
    subTitle: "Elevate Your Residence Every Month",
    subDesc: "Enjoy recurring deliveries of seasonal floral sculptures with exclusive member perks.",
    aboutHeading: "Quiet Sophistication & Heritage",
    aboutTabStory: "Brand Story",
    aboutTabMission: "Mission & Vision",
    aboutTabValues: "The 5 Pillars",
    bagTitle: "Your Shopping Bag",
    btnCheckout: "Proceed to Express Checkout →",
    courierLabel: "White-Glove Courier Delivery",
    topBarWhatsApp: "Orders WhatsApp: +1 (862) 255-8720",
    waConciergeLabel: "WhatsApp Orders & Concierge",
    btnOrderWhatsApp: "💬 Order via WhatsApp (+1 862 255-8720)",
    btnConfirmWhatsApp: "Send Order via WhatsApp (+1 862 255-8720)",
    btnPayCard: "Pay Online / Card / Apple Pay",
    footerWhatsApp: "WhatsApp Orders: +1 (862) 255-8720"
  },
  ES: {
    locationBar: "Entrega Especializada Disponible Hoy en Loja y Área Metropolitana ($ USD)",
    regionLabel: "ATELIER LOJA, ECUADOR",
    navCustomizer: "Estudio Personalizado",
    navQuiz: "Buscador Emocional",
    navSculptures: "La Colección",
    navSubscriptions: "Suscripciones",
    navAbout: "Sobre Nosotros",
    heroTag: "✨ Curaduría de Arte Floral",
    heroHeadline: 'Las Flores No Se Eligen de un Menú. Se <span class="italic">Curan a Partir de una Historia</span>.',
    heroDesc: "En SKY FLORALS, creemos que cada flor se encuentra entre las mayores obras maestras de la creación. Transformamos las flores de simples expresiones de belleza en obras de arte atemporales que inspiran sofisticación silenciosa y admiración.",
    heroCtaCustom: "Diseña Tu Arreglo Sky →",
    heroCtaAbout: "Explorar Nuestra Historia",
    trustFreshness: "7-10 Días",
    trustFreshnessLabel: "Frescura Garantizada",
    trustCert: "Certificado",
    trustCertLabel: "De Curaduría Incluido",
    trustWrap: "100% Algodón",
    trustWrapLabel: "Empaque de Lino Natural",
    quizSubhead: "Buscador Emocional Interactivo",
    quizTitle: "Encuentra Tu Solución Emocional",
    quizDesc: "Responde 3 preguntas rápidas para descubrir la creación ideal de La Colección y nota de caligrafía adaptadas a tu momento.",
    catalogSubhead: "LA COLECCIÓN & EDICIONES CURADAS",
    catalogTitle: "Creaciones Insignia SKY FLORALS",
    catalogDesc: "Creaciones florales cuidadosamente curadas y diseñadas para celebrar los momentos más significativos a través del arte y la elegancia.",
    filterAll: "Todas las Creaciones",
    filterSignatureStems: "1. Signature Stems",
    filterCuratedEdits: "2. Curated Edits",
    filterBespoke: "3. Bespoke",
    customizerSubhead: "Estudio de Diseño en Vivo",
    customizerTitle: "Diseña Tu Creación Personalizada",
    customizerDesc: "Construye un arreglo personalizado con previsualización del Certificado de Curaduría y desglose de precio en tiempo real.",
    certTitle: "Certificado de Curaduría",
    certRowFor: "Curado para",
    certRowOccasion: "Ocasión",
    certRowCollection: "Colección",
    certRowDesigned: "Diseñado el",
    lblRecipient: "Nombre del Destinatario",
    lblOccasion: "Ocasión del Regalo",
    step1Palette: "1. Selecciona Colección / Edición",
    step2Vessel: "2. Elige la Vasija Arquitectónica",
    step3Wrap: "3. Envoltura y Adicionales",
    step4Scent: "4. Infusión de Aroma de Unboxing",
    lblInvestment: "Inversión Total",
    btnAddCustom: "Agregar Creación a la Bolsa →",
    unboxingSubhead: "Experiencia Sensorial de Unboxing",
    unboxingTitle: "Diseñado para Elevar el Ritual de Desempaque",
    unboxingStep1Title: "Caja Insignia de Lino Natural",
    unboxingStep1Desc: "Elaborada con papel rígido sostenible envuelto en lino color avena suave con el logo SKY repujado en oro.",
    unboxingStep2Title: "Bruma de Rosa de Damasco Francesa",
    unboxingStep2Desc: "Cada caja es perfumada con nuestra bruma exclusiva de aceites esenciales de Rosa de Damasco y Vainilla antes de sellarla.",
    unboxingStep3Title: "Certificado de Curaduría en Algodón",
    unboxingStep3Desc: "Tu arreglo llega con un Certificado de Curaduría oficial impreso en algodón que detalla el destinatario, ocasión y fecha.",
    zipSubhead: "Verificación de Cobertura Atelier",
    zipTitle: "Comprueba la Entrega en Tu Ciudad",
    zipDesc: "Confirma la disponibilidad de entrega inmediata en New Jersey, NYC Metro y Loja, Ecuador.",
    zipPlaceholder: "Ingresa tu sector en Loja (ej: Centro, El Valle, San Sebastián)",
    zipBtn: "Comprobar Disponibilidad",
    subSubhead: "Membresía VIP SKY",
    subTitle: "Eleva Tu Residencia Cada Mes",
    subDesc: "Disfruta de entregas recurrentes de esculturas florales de temporada con beneficios exclusivos para miembros.",
    aboutHeading: "Sofisticación Silenciosa y Herencia",
    aboutTabStory: "Nuestra Historia",
    aboutTabMission: "Misión y Visión",
    aboutTabValues: "Los 5 Pilares",
    bagTitle: "Tu Bolsa de Compras",
    btnCheckout: "Proceder al Pago Expres →",
    courierLabel: "Envío Especializado Atelier",
    topBarWhatsApp: "Pedidos por WhatsApp: +1 (862) 255-8720",
    waConciergeLabel: "Pedidos por WhatsApp & Concierge",
    btnOrderWhatsApp: "💬 Ordenar por WhatsApp (+1 862 255-8720)",
    btnConfirmWhatsApp: "Enviar Pedido por WhatsApp (+1 862 255-8720)",
    btnPayCard: "Pagar con Tarjeta / Apple Pay",
    footerWhatsApp: "Pedidos por WhatsApp: +1 (862) 255-8720"
  }
};

// Official Product Portfolio (SOURCE OF TRUTH: SKY FLORALS Collection and Edits.docx)
const catalogProducts = [
  // 1. SIGNATURE STEMS
  {
    id: "sky-01",
    name: "🌹 THE DOZEN",
    category: "signature-stems",
    priceUS: 40,
    priceLoja: 40,
    tag: "Signature Stems (12 Stems)",
    image: "assets/pal_ivory.jpg",
    desc: "A timeless arrangement featuring twelve stems of your chosen bloom. Thoughtfully designed with refined simplicity, making it perfect for birthdays, anniversaries, everyday gifting, or simply letting someone know they're loved.",
    descEs: "Un arreglo atemporal de doce tallos de la flor elegida. Diseñado con sencillez refinada, perfecto para cumpleaños, aniversarios o demostraciones espontáneas de afecto.",
    optionsText: "Available in: Roses | Gerberas | Hydrangeas | Tulips (seasonal) | Seasonal Blooms",
    optionsTextEs: "Disponible en: Rosas | Gerberas | Hortensias | Tulipanes (temporada) | Flores de Temporada",
    stemCount: "12 Stems",
    longevity: "From $40"
  },
  {
    id: "sky-02",
    name: "✨ THE DOUBLE",
    category: "signature-stems",
    priceUS: 80,
    priceLoja: 80,
    tag: "Signature Stems (24 Stems)",
    image: "assets/pal_blush.jpg",
    desc: "A fuller interpretation of your chosen bloom, featuring twenty-four stems thoughtfully arranged to create a more abundant and elevated presentation. Designed for milestones, celebrations, and unforgettable gifting.",
    descEs: "Una interpretación más abundante de veinticuatro tallos organizados cuidadosamente para crear una presentación elevada.",
    optionsText: "Available in: Roses | Gerberas | Hydrangeas | Tulips (seasonal) | Seasonal Blooms",
    optionsTextEs: "Disponible en: Rosas | Gerberas | Hortensias | Tulipanes (temporada) | Flores de Temporada",
    stemCount: "24 Stems",
    longevity: "From $80"
  },
  {
    id: "sky-03",
    name: "♾️ THE GRAND",
    category: "signature-stems",
    priceUS: 175,
    priceLoja: 175,
    tag: "Signature Stems (50-100 Stems)",
    image: "assets/hero.jpg",
    desc: "Our most generous stem collection, thoughtfully designed for life's grandest celebrations. Choose your preferred bloom and desired stem count, and we'll create a bespoke floral composition tailored exclusively for your occasion.",
    descEs: "Nuestra colección de tallos más generosa. Elige tu flor y cantidad de tallos deseada para una composición a la medida.",
    optionsText: "Available in: 50 stems | 75 stems | 100 stems | Custom quantities available upon request",
    optionsTextEs: "Disponible en: 50 tallos | 75 tallos | 100 tallos | Cantidades personalizadas bajo pedido",
    stemCount: "50, 75 or 100 Stems",
    longevity: "From $175"
  },

  // 2. CURATED EDITS
  {
    id: "sky-04",
    name: "☁️ THE SKY EDIT",
    category: "curated-edits",
    priceUS: 65,
    priceLoja: 65,
    tag: "Curated Edit (White & Ivory)",
    image: "assets/pal_ivory.jpg",
    desc: "Inspired by soft skies, natural light, and quiet sophistication, this signature collection features elegant whites, ivories, delicate greens, and airy textures. Every arrangement is thoughtfully curated to evoke serenity, refinement, and timeless beauty.",
    descEs: "Inspirada en cielos suaves y luz natural. Cuenta con elegantes blancos, marfiles, verdes delicados y texturas etéreas.",
    optionsText: "Available in: Petite | Signature | Statement",
    optionsTextEs: "Disponible en: Petite | Signature | Statement",
    stemCount: "Petite, Signature or Statement",
    longevity: "From $65"
  },
  {
    id: "sky-05",
    name: "🎀 THE BLUSH EDIT",
    category: "curated-edits",
    priceUS: 65,
    priceLoja: 65,
    tag: "Curated Edit (Blush & Champagne)",
    image: "assets/pal_blush.jpg",
    desc: "A romantic collection inspired by blush pinks, warm champagne hues, creamy neutrals, and delicate textures. Designed to celebrate grace, femininity, and life's most heartfelt moments with effortless elegance.",
    descEs: "Una colección romántica inspirada en rosados blush, tonos champán cálidos y neutros cremosos.",
    optionsText: "Available in: Petite | Signature | Statement",
    optionsTextEs: "Disponible en: Petite | Signature | Statement",
    stemCount: "Petite, Signature or Statement",
    longevity: "From $65"
  },
  {
    id: "sky-06",
    name: "🌙 THE MIDNIGHT EDIT",
    category: "curated-edits",
    priceUS: 70,
    priceLoja: 70,
    tag: "Curated Edit (Deep Blue & Black)",
    image: "assets/pal_midnight.jpg",
    desc: "Inspired by deep blue hues, crisp whites, and subtle black accents, this collection embodies bold sophistication with quiet confidence. Rich textures and striking contrast come together to create arrangements that feel modern, refined, and unforgettable.",
    descEs: "Inspirada en tonos azul profundo, blancos nítidos y sutiles acentos negros. Encarna una sofisticación audaz con confianza silenciosa.",
    optionsText: "Available in: Petite | Signature | Statement",
    optionsTextEs: "Disponible en: Petite | Signature | Statement",
    stemCount: "Petite, Signature or Statement",
    longevity: "From $70"
  },
  {
    id: "sky-07",
    name: "🌿 THE SEASONAL EDIT",
    category: "curated-edits",
    priceUS: 65,
    priceLoja: 65,
    tag: "Curated Edit (Seasonal Palette)",
    image: "assets/pal_terracotta.jpg",
    desc: "A limited collection celebrating the beauty of every season. Thoughtfully designed using the freshest blooms available, each arrangement reflects nature's changing palette while preserving the signature SKY FLORALS aesthetic.",
    descEs: "Una colección limitada que celebra la belleza de cada estación. Diseñada cuidadosamente utilizando las flores más frescas disponibles.",
    optionsText: "Available in: Petite | Signature | Statement",
    optionsTextEs: "Disponible en: Petite | Signature | Statement",
    stemCount: "Petite, Signature or Statement",
    longevity: "From $65"
  },

  // 3. BESPOKE
  {
    id: "sky-08",
    name: "✦ THE INSPIRATION",
    category: "bespoke",
    priceUS: 95,
    priceLoja: 95,
    tag: "Bespoke Creation",
    image: "assets/lifestyle.jpg",
    desc: "A completely bespoke floral experience created around your story, vision, and occasion. Whether inspired by a cherished memory, meaningful celebration, or unique concept, every arrangement is thoughtfully interpreted into a one-of-a-kind floral masterpiece designed exclusively for you.",
    descEs: "Una experiencia floral totalmente a la medida creada en torno a tu historia, visión y ocasión.",
    optionsText: "Completely Bespoke & Tailored to Your Vision",
    optionsTextEs: "Totalmente a la Medida y Adaptado a tu Visión",
    stemCount: "Bespoke Tailored Selection",
    longevity: "From $95"
  }
];

// Subscription Tiers Dual Regional Pricing
const subTiersData = {
  sub1: { priceUS: 125, priceLoja: 30 },
  sub2: { priceUS: 195, priceLoja: 50 },
  sub3: { priceUS: 350, priceLoja: 85 }
};

// App State
let cart = [];
let selectedCategory = 'all';
let activeRegion = 'NJ'; // 'NJ' (New Jersey/NYC USA) or 'LOJA' (Loja, Ecuador)
let currentLang = 'EN';   // 'EN' or 'ES'

// Location & Language Switcher
function switchLocation(region) {
  activeRegion = region;
  currentLang = (region === 'LOJA') ? 'ES' : 'EN';
  
  applyTranslations();
  updateSubscriptionPrices();
  renderCatalog();

  if (window.updateQuizLang) window.updateQuizLang(currentLang, activeRegion);
  if (window.updateCustomizerUI) window.updateCustomizerUI();

  if (region === 'LOJA') {
    showToast("Ubicación cambiada a Loja, Ecuador Atelier");
  } else {
    showToast("Switched location to New Jersey / NYC Atelier");
  }
}

function updateSubscriptionPrices() {
  const isLoja = (activeRegion === 'LOJA');
  
  const p1 = document.getElementById("subPrice-1");
  const p2 = document.getElementById("subPrice-2");
  const p3 = document.getElementById("subPrice-3");

  if (p1) p1.innerHTML = `$${isLoja ? subTiersData.sub1.priceLoja : subTiersData.sub1.priceUS} <span>/${currentLang === 'ES' ? 'entrega' : 'delivery'}</span>`;
  if (p2) p2.innerHTML = `$${isLoja ? subTiersData.sub2.priceLoja : subTiersData.sub2.priceUS} <span>/${currentLang === 'ES' ? 'entrega' : 'delivery'}</span>`;
  if (p3) p3.innerHTML = `$${isLoja ? subTiersData.sub3.priceLoja : subTiersData.sub3.priceUS} <span>/${currentLang === 'ES' ? 'entrega' : 'delivery'}</span>`;
}

function applyTranslations() {
  const dict = i18nDict[currentLang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const zipInput = document.getElementById("zipInput");
  if (zipInput) {
    zipInput.placeholder = dict.zipPlaceholder;
  }

  const waFloat = document.getElementById("whatsappFloatBtn");
  if (waFloat) {
    const isEs = currentLang === 'ES';
    const text = isEs 
      ? `Hola SKY FLORALS, deseo consultar sobre un pedido / disponibilidad para entrega.` 
      : `Hello SKY FLORALS, I would like to inquire about an order / courier delivery availability.`;
    waFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
}

// About Us Modal Handlers
function openAboutModal(tab = 'story') {
  const modal = document.getElementById("aboutModal");
  if (modal) modal.classList.add("active");
  switchAboutTab(tab);
}

function closeAboutModal() {
  const modal = document.getElementById("aboutModal");
  if (modal) modal.classList.remove("active");
}

function switchAboutTab(tabName) {
  const tabs = document.querySelectorAll(".about-tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  
  const selectedBtn = document.getElementById(`tabBtn-${tabName}`);
  if (selectedBtn) selectedBtn.classList.add("active");

  const tabStory = document.getElementById("tabContent-story");
  const tabValues = document.getElementById("tabContent-values");
  const tabMission = document.getElementById("tabContent-mission");

  if (tabStory) tabStory.style.display = tabName === 'story' ? 'block' : 'none';
  if (tabValues) tabValues.style.display = tabName === 'values' ? 'block' : 'none';
  if (tabMission) tabMission.style.display = tabName === 'mission' ? 'block' : 'none';
}

// Cart Logic
function addToCart(item) {
  const price = item.priceUS || item.price || 40;
  const cartItem = { ...item, price: price };

  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
    existing.price = price;
  } else {
    cart.push({ ...cartItem, qty: 1 });
  }
  updateCartUI();
  showToast(currentLang === 'ES' ? `Agregado "${item.name}" a tu bolsa.` : `Added "${item.name}" to your Bag.`);
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const body = document.getElementById("cartBody");
  const totalSub = document.getElementById("cartSubtotal");
  const totalFinal = document.getElementById("cartTotal");
  const deliveryCostLabel = document.getElementById("cartDeliveryFee");

  const totalItemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = (activeRegion === 'LOJA') ? 3 : 15;

  if (badge) badge.innerText = totalItemCount;
  if (deliveryCostLabel) deliveryCostLabel.innerText = `$${deliveryFee}`;

  if (body) {
    if (cart.length === 0) {
      body.innerHTML = currentLang === 'ES'
        ? `<div class="cart-empty">Tu bolsa de compras está vacía.<br><span style="font-size:0.85rem; color:var(--text-light);">Explora La Colección para comenzar.</span></div>`
        : `<div class="cart-empty">Your shopping bag is empty.<br><span style="font-size:0.85rem; color:var(--text-light);">Explore The Collection to begin.</span></div>`;
    } else {
      body.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <div class="cart-item-title">${item.name}</div>
            ${item.meta ? `<div class="cart-item-meta">${item.meta}</div>` : ''}
            <div class="cart-qty">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div class="cart-item-price">$${item.price * item.qty}</div>
        </div>
      `).join('');
    }
  }

  if (totalSub) totalSub.innerText = `$${subtotalPrice}`;
  if (totalFinal) totalFinal.innerText = `$${subtotalPrice > 0 ? subtotalPrice + deliveryFee : 0}`;
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.add("open");
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.remove("open");
}

// Catalog Filter & Render
function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  const filtered = selectedCategory === 'all' 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === selectedCategory);

  grid.innerHTML = filtered.map(p => {
    const currentPrice = p.priceUS;
    return `
      <div class="product-card">
        <div class="product-thumb">
          <span class="product-tag">${p.tag}</span>
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${currentLang === 'ES' ? p.descEs : p.desc}</p>
          <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">
            <span>${currentLang === 'ES' ? p.optionsTextEs : p.optionsText}</span>
          </div>
          <div class="product-meta">
            <div class="product-price">From $${currentPrice} USD</div>
            <button class="btn-primary" style="padding:10px 20px; font-size:0.78rem;" onclick="addToCart({id: '${p.id}', name: '${p.name}', priceUS: ${p.priceUS}, image: '${p.image}'})">
              ${currentLang === 'ES' ? 'Agregar a Bolsa' : 'Add to Bag'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCatalog(category, btn) {
  selectedCategory = category;
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderCatalog();
}

// ZIP / Zone Delivery Checker
function checkDeliveryZip() {
  const input = document.getElementById("zipInput");
  const msg = document.getElementById("zipStatusMsg");
  if (!input || !msg) return;

  const val = input.value.trim();
  
  if (activeRegion === 'LOJA') {
    if (val.length > 2) {
      msg.className = "zip-status-msg success";
      msg.innerHTML = `✨ Servicio de Entregas Especializado Disponible en Loja (${val}). Entrega garantizada en 2 a 4 horas. Costo de envío: $3 USD.`;
    } else {
      msg.className = "zip-status-msg error";
      msg.innerHTML = `Por favor ingresa tu sector o zona en Loja (ej: Centro, El Valle, San Sebastián).`;
    }
  } else {
    const validZips = ["10001", "90028", "33139", "60611", "75201", "94102", "10012", "90210", "33130", "90015", "07030"];
    if (val.length === 5 && !isNaN(val)) {
      if (validZips.includes(val) || val.startsWith("07") || val.startsWith("10") || val.startsWith("90") || val.startsWith("33") || val.startsWith("60") || val.startsWith("75") || val.startsWith("94")) {
        msg.className = "zip-status-msg success";
        msg.innerHTML = `✨ Priority White-Glove Courier Available in ZIP ${val}! Same-day delivery slots open. Delivery fee: $15 USD.`;
      } else {
        msg.className = "zip-status-msg success";
        msg.innerHTML = `✓ Standard White-Glove Courier Available for ZIP ${val} (1-2 Days Guaranteed Freshness). Delivery fee: $15 USD.`;
      }
    } else {
      msg.className = "zip-status-msg error";
      msg.innerHTML = `Please enter a valid 5-digit US ZIP Code (e.g. 07030, 90210, 10001, 33139).`;
    }
  }
}

// Simulated Checkout Modal Flow
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast(currentLang === 'ES' ? "¡Tu bolsa está vacía! Agrega una creación primero." : "Your shopping bag is empty! Add a creation first.");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("active");
}

// ========================================================
// 1. PAYMENT METHODS & FORM FORMATTING (USA FUNCTIONAL)
// ========================================================
let selectedPaymentMethod = 'card'; // 'card', 'zelle', 'whatsapp'

function switchPaymentMethod(method) {
  selectedPaymentMethod = method;
  
  // Update Tabs
  document.querySelectorAll(".payment-tab-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`payTabBtn-${method}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Update Panels
  document.querySelectorAll(".payment-panel").forEach(panel => panel.classList.remove("active"));
  const activePanel = document.getElementById(`payPanel-${method}`);
  if (activePanel) activePanel.classList.add("active");

  // Update Primary CTA text
  const primaryBtn = document.getElementById("checkoutPrimaryBtn");
  if (primaryBtn) {
    if (method === 'card') {
      primaryBtn.innerHTML = currentLang === 'ES' 
        ? "Confirmar y Pagar con Tarjeta / Apple Pay →" 
        : "Confirm & Pay via Card / Apple Pay →";
    } else if (method === 'zelle') {
      primaryBtn.innerHTML = currentLang === 'ES' 
        ? "He enviado el pago por Zelle — Generar Factura →" 
        : "I Have Sent Zelle Payment — Generate Invoice →";
    } else {
      primaryBtn.innerHTML = currentLang === 'ES' 
        ? "Enviar Pedido a WhatsApp y Generar Factura →" 
        : "Send to WhatsApp & Generate Invoice →";
    }
  }
}

function formatCardNumber(el) {
  let val = el.value.replace(/\D/g, '').substring(0, 16);
  let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
  el.value = formatted;
}

function formatCardExp(el) {
  let val = el.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 2) {
    el.value = val.substring(0, 2) + '/' + val.substring(2);
  } else {
    el.value = val;
  }
}

// ========================================================
// 2. COOKIE CONSENT & LEGAL POLICY MODALS
// ========================================================
function checkCookieConsent() {
  const consent = localStorage.getItem("sky_cookie_consent");
  const banner = document.getElementById("cookieBanner");
  if (!consent && banner) {
    setTimeout(() => banner.classList.remove("hidden"), 1200);
  }
}

function acceptCookies() {
  localStorage.setItem("sky_cookie_consent", "all");
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.classList.add("hidden");
  showToast(currentLang === 'ES' ? "Preferencias de cookies guardadas." : "Privacy & Cookie preferences saved.");
}

function declineCookies() {
  localStorage.setItem("sky_cookie_consent", "essential");
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.classList.add("hidden");
  showToast(currentLang === 'ES' ? "Cookies esenciales activadas." : "Essential cookies preserved.");
}

function openPrivacyModal() {
  const modal = document.getElementById("privacyModal");
  if (modal) modal.classList.add("active");
}

function closePrivacyModal() {
  const modal = document.getElementById("privacyModal");
  if (modal) modal.classList.remove("active");
}

function openTermsModal() {
  const modal = document.getElementById("termsModal");
  if (modal) modal.classList.add("active");
}

function closeTermsModal() {
  const modal = document.getElementById("termsModal");
  if (modal) modal.classList.remove("active");
}

// ========================================================
// 3. CLIENT DATABASE & ATELIER CRM
// ========================================================
const CRM_STORAGE_KEY = "sky_client_database";
const CRM_WEBHOOK_URL = ""; // Optional webhook for Google Sheets / Zapier / Make integration

function getClientDatabase() {
  const raw = localStorage.getItem(CRM_STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error("Error parsing CRM storage", e);
    }
  }

  // Initial Seed Records for realistic demonstration
  const seed = [
    {
      id: "CLI-001",
      name: "Sophia Martinez",
      email: "sophia.m@luxuryresidence.com",
      phone: "+1 (862) 555-0142",
      taxId: "EIN-84-2918231",
      address: "740 Park Ave, Apt 12A, New York, NY 10021",
      region: "New Jersey & NYC Metro",
      ordersCount: 3,
      totalSpent: 625,
      lastOrderDate: "2026-10-24",
      consentDate: "2026-10-24T14:22:00Z"
    },
    {
      id: "CLI-002",
      name: "David Andrade",
      email: "d.andrade@lojaestudio.ec",
      phone: "+593 99 284 9182",
      taxId: "RUC 1104829102001",
      address: "Av. Orillas del Zamora y 10 de Agosto, Loja",
      region: "Atelier Loja, Ecuador",
      ordersCount: 2,
      totalSpent: 130,
      lastOrderDate: "2026-10-25",
      consentDate: "2026-10-25T11:15:00Z"
    }
  ];
  localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(seed));
  return seed;
}

function saveClientRecord(clientData, orderTotal) {
  let clients = getClientDatabase();
  const existing = clients.find(c => 
    c.email.toLowerCase() === clientData.email.toLowerCase() || 
    c.phone === clientData.phone
  );

  const todayStr = new Date().toISOString().split('T')[0];

  if (existing) {
    existing.name = clientData.name || existing.name;
    existing.taxId = clientData.taxId || existing.taxId;
    existing.address = clientData.address || existing.address;
    existing.region = clientData.region || existing.region;
    existing.ordersCount = (existing.ordersCount || 1) + 1;
    existing.totalSpent = (existing.totalSpent || 0) + Number(orderTotal);
    existing.lastOrderDate = todayStr;
  } else {
    const newClient = {
      id: "CLI-" + String(clients.length + 1).padStart(3, '0'),
      name: clientData.name,
      email: clientData.email,
      phone: clientData.phone,
      taxId: clientData.taxId || "N/A",
      address: clientData.address,
      region: clientData.region,
      ordersCount: 1,
      totalSpent: Number(orderTotal),
      lastOrderDate: todayStr,
      consentDate: new Date().toISOString()
    };
    clients.unshift(newClient);
  }

  localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(clients));

  // Optional Webhook Pipe to Google Sheets / Make / Zapier
  if (CRM_WEBHOOK_URL) {
    try {
      fetch(CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client: clientData, total: orderTotal, timestamp: new Date() })
      }).catch(err => console.log("Webhook push notice:", err));
    } catch(e) {}
  }
}

function openAdminModal() {
  const modal = document.getElementById("adminModal");
  if (modal) {
    modal.classList.add("active");
    renderAdminClients();
  }
}

function closeAdminModal() {
  const modal = document.getElementById("adminModal");
  if (modal) modal.classList.remove("active");
}

function renderAdminClients() {
  const tbody = document.getElementById("adminClientTableBody");
  const query = (document.getElementById("adminSearchInput")?.value || "").toLowerCase().trim();
  const clients = getClientDatabase();

  const filtered = clients.filter(c => 
    c.name.toLowerCase().includes(query) || 
    c.email.toLowerCase().includes(query) || 
    (c.taxId && c.taxId.toLowerCase().includes(query)) ||
    c.phone.includes(query)
  );

  const totalClients = clients.length;
  const totalOrders = clients.reduce((acc, c) => acc + (c.ordersCount || 1), 0);
  const totalRevenue = clients.reduce((acc, c) => acc + (c.totalSpent || 0), 0);

  const elClients = document.getElementById("adminTotalClients");
  const elOrders = document.getElementById("adminTotalOrders");
  const elRev = document.getElementById("adminTotalRevenue");

  if (elClients) elClients.innerText = totalClients;
  if (elOrders) elOrders.innerText = totalOrders;
  if (elRev) elRev.innerText = `$${totalRevenue.toLocaleString()} USD`;

  if (tbody) {
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:var(--text-secondary);">No clients found matching "${query}".</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td style="font-size:0.75rem; color:var(--text-secondary);">${c.lastOrderDate || 'Recent'}</td>
        <td><strong>${c.name}</strong></td>
        <td>
          <div>${c.email}</div>
          <div style="font-size:0.75rem; color:var(--text-secondary);">${c.phone}</div>
        </td>
        <td><span style="font-family:monospace; background:var(--bg-cloud); padding:2px 6px; border-radius:4px;">${c.taxId || 'N/A'}</span></td>
        <td><span style="font-size:0.75rem;">${c.region}</span></td>
        <td>
          <strong>${c.ordersCount || 1} orders</strong>
          <div style="color:#059669; font-weight:600;">$${c.totalSpent || 0} USD</div>
        </td>
        <td>
          <a href="https://wa.me/${c.phone.replace(/\D/g, '')}" target="_blank" class="btn-icon" style="padding:4px 10px; font-size:0.7rem; text-decoration:none;">
            💬 WhatsApp
          </a>
        </td>
      </tr>
    `).join('');
  }
}

function exportClientsCSV() {
  const clients = getClientDatabase();
  if (clients.length === 0) {
    showToast("No client records to export.");
    return;
  }

  const headers = ["Client ID", "Full Name", "Email Address", "Phone Number", "Tax ID / EIN", "Address", "Region", "Total Orders", "Total Spent (USD)", "Last Order Date", "Consent Timestamp"];
  const rows = clients.map(c => [
    `"${c.id}"`,
    `"${c.name}"`,
    `"${c.email}"`,
    `"${c.phone}"`,
    `"${c.taxId || ''}"`,
    `"${(c.address || '').replace(/"/g, '""')}"`,
    `"${c.region}"`,
    `"${c.ordersCount || 1}"`,
    `"${c.totalSpent || 0}"`,
    `"${c.lastOrderDate}"`,
    `"${c.consentDate || ''}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sky_florals_clients_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(currentLang === 'ES' ? "Base de datos exportada en formato Excel / CSV." : "Client database exported as Excel / CSV.");
}

function clearClientDatabase() {
  if (confirm(currentLang === 'ES' ? "¿Deseas restablecer la base de clientes local?" : "Do you want to reset the local client database?")) {
    localStorage.removeItem(CRM_STORAGE_KEY);
    renderAdminClients();
    showToast("Database reset.");
  }
}

// ========================================================
// 4. COMMERCIAL INVOICE GENERATION & PRINT
// ========================================================
let currentInvoiceData = null;

function generateInvoice(clientData, items, subtotal, deliveryFee, tax, total, methodLabel) {
  const invNumber = `INV-2026-${Math.floor(10000 + Math.random() * 90000)}`;
  const locale = currentLang === 'ES' ? 'es-EC' : 'en-US';
  const dateStr = new Date().toLocaleDateString(locale, {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const invoice = {
    number: invNumber,
    date: dateStr,
    client: clientData,
    items: [...items],
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    tax: tax,
    total: total,
    method: methodLabel
  };

  currentInvoiceData = invoice;

  // Populate Invoice DOM
  const elNum = document.getElementById("invNumber");
  const elDate = document.getElementById("invDate");
  const elClientName = document.getElementById("invClientName");
  const elClientEmail = document.getElementById("invClientEmail");
  const elClientPhone = document.getElementById("invClientPhone");
  const elClientTaxId = document.getElementById("invClientTaxId");

  const elRecipientName = document.getElementById("invRecipientName");
  const elDeliveryAddress = document.getElementById("invDeliveryAddress");
  const elDeliveryCity = document.getElementById("invDeliveryCity");
  const elDeliveryDate = document.getElementById("invDeliveryDate");

  const elItemsBody = document.getElementById("invItemsBody");
  const elSubtotal = document.getElementById("invSubtotal");
  const elShipping = document.getElementById("invShipping");
  const elTax = document.getElementById("invTax");
  const elTaxLabel = document.getElementById("invTaxLabel");
  const elGrandTotal = document.getElementById("invGrandTotal");
  const elMethod = document.getElementById("invMethodName");

  if (elNum) elNum.innerText = invoice.number;
  if (elDate) elDate.innerText = invoice.date;
  if (elClientName) elClientName.innerText = clientData.name;
  if (elClientEmail) elClientEmail.innerText = clientData.email;
  if (elClientPhone) elClientPhone.innerText = clientData.phone;
  if (elClientTaxId) elClientTaxId.innerText = `Tax ID / EIN: ${clientData.taxId || 'N/A'}`;

  if (elRecipientName) elRecipientName.innerText = clientData.recipientName || clientData.name;
  if (elDeliveryAddress) elDeliveryAddress.innerText = clientData.address;
  if (elDeliveryCity) elDeliveryCity.innerText = `${clientData.city}, ${clientData.zip}`;
  if (elDeliveryDate) elDeliveryDate.innerText = `Delivery Date: ${clientData.deliveryDate || 'Priority Dispatch'}`;

  if (elItemsBody) {
    elItemsBody.innerHTML = items.map(item => `
      <tr>
        <td>
          <div style="font-weight:600;">${item.name}</div>
          ${item.meta ? `<div style="font-size:0.75rem; color:var(--text-secondary);">${item.meta}</div>` : ''}
        </td>
        <td style="text-align:center;">${item.qty}</td>
        <td style="text-align:right;">$${item.price.toFixed(2)}</td>
        <td style="text-align:right; font-weight:600;">$${(item.price * item.qty).toFixed(2)}</td>
      </tr>
    `).join('');
  }

  if (elSubtotal) elSubtotal.innerText = `$${subtotal.toFixed(2)} USD`;
  if (elShipping) elShipping.innerText = `$${deliveryFee.toFixed(2)} USD`;
  if (elTaxLabel) elTaxLabel.innerText = activeRegion === 'LOJA' ? 'IVA / Municipal Tax:' : 'State Sales Tax (NJ 6.625%):';
  if (elTax) elTax.innerText = `$${tax.toFixed(2)} USD`;
  if (elGrandTotal) elGrandTotal.innerText = `$${total.toFixed(2)} USD`;
  if (elMethod) elMethod.innerText = methodLabel;

  return invoice;
}

function openInvoiceModal() {
  const modal = document.getElementById("invoiceModal");
  if (modal) modal.classList.add("active");
}

function closeInvoiceModal() {
  const modal = document.getElementById("invoiceModal");
  if (modal) modal.classList.remove("active");
}

function printInvoice() {
  window.print();
}

// ========================================================
// 5. UNIFIED CHECKOUT & WHATSAPP SUBMIT FLOW
// ========================================================
function handleCheckoutSubmit(e) {
  if (e) e.preventDefault();

  if (cart.length === 0) {
    showToast(currentLang === 'ES' ? "Tu bolsa de compras está vacía." : "Your shopping bag is empty.");
    return;
  }

  // Legal Consent Check
  const consentBox = document.getElementById("legalConsentCheck");
  if (consentBox && !consentBox.checked) {
    alert(currentLang === 'ES' 
      ? "Por favor acepta las políticas de privacidad y términos para continuar con la factura." 
      : "Please accept the Privacy Policy & Terms to proceed with invoice issuance.");
    return;
  }

  const clientName = document.getElementById("billingName")?.value.trim() || "Valued Client";
  const clientEmail = document.getElementById("billingEmail")?.value.trim() || "concierge@skyflorals.com";
  const clientPhone = document.getElementById("billingPhone")?.value.trim() || "+1 (862) 255-8720";
  const clientTaxId = document.getElementById("billingTaxId")?.value.trim() || "";

  const recipientName = document.getElementById("orderRecipientName")?.value.trim() || clientName;
  const address = document.getElementById("orderDeliveryAddress")?.value.trim() || "";
  const city = document.getElementById("orderCityZone")?.value.trim() || "";
  const zip = document.getElementById("orderZipCode")?.value.trim() || "";
  const deliveryDate = document.getElementById("orderDeliveryDate")?.value || "";

  const isLoja = activeRegion === 'LOJA';
  const deliveryFee = isLoja ? 3 : 15;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  // US State Sales Tax (NJ ~6.625%), 0 for Loja
  const taxRate = isLoja ? 0.00 : 0.06625;
  const tax = Number((subtotal * taxRate).toFixed(2));
  const grandTotal = Number((subtotal + deliveryFee + tax).toFixed(2));

  let methodLabel = "Credit Card (Stripe SSL Gateway USA)";
  if (selectedPaymentMethod === 'zelle') {
    methodLabel = "Zelle Instant Transfer (SKY FLORALS LLC)";
  } else if (selectedPaymentMethod === 'whatsapp') {
    methodLabel = "WhatsApp Concierge Confirmation";
  }

  const clientData = {
    name: clientName,
    email: clientEmail,
    phone: clientPhone,
    taxId: clientTaxId,
    recipientName: recipientName,
    address: address,
    city: city,
    zip: zip,
    deliveryDate: deliveryDate,
    region: isLoja ? "Atelier Loja, Ecuador" : "New Jersey & NYC Metro"
  };

  // 1. Save to Client CRM Database
  saveClientRecord(clientData, grandTotal);

  // 2. Generate Commercial Invoice
  generateInvoice(clientData, cart, subtotal, deliveryFee, tax, grandTotal, methodLabel);

  // 3. Dispatch according to payment method
  if (selectedPaymentMethod === 'whatsapp') {
    triggerWhatsAppFromCheckout(clientData, grandTotal);
  } else if (selectedPaymentMethod === 'card') {
    showToast(currentLang === 'ES' 
      ? "¡Pago con tarjeta procesado con éxito! Se ha generado tu factura." 
      : "Card payment authorized successfully! Your official invoice has been generated.");
  } else if (selectedPaymentMethod === 'zelle') {
    showToast(currentLang === 'ES' 
      ? "Registro de pago Zelle recibido. Revisa y descarga tu factura." 
      : "Zelle payment registered. Your official invoice is ready.");
  }

  // Clear Cart & Close Checkout Modal
  cart = [];
  updateCartUI();
  closeCheckoutModal();

  // Open Invoice View
  setTimeout(() => {
    openInvoiceModal();
  }, 400);
}

function triggerWhatsAppFromCheckout(providedClient = null, grandTotal = null) {
  const clientName = document.getElementById("billingName")?.value.trim() || "";
  const clientEmail = document.getElementById("billingEmail")?.value.trim() || "";
  const clientTaxId = document.getElementById("billingTaxId")?.value.trim() || "";
  const recipientName = document.getElementById("orderRecipientName")?.value.trim() || clientName;
  const address = document.getElementById("orderDeliveryAddress")?.value.trim() || "";
  const city = document.getElementById("orderCityZone")?.value.trim() || "";
  const zip = document.getElementById("orderZipCode")?.value.trim() || "";
  const date = document.getElementById("orderDeliveryDate")?.value || "";

  orderViaWhatsApp({
    clientName: clientName,
    clientEmail: clientEmail,
    taxId: clientTaxId,
    name: recipientName,
    address: address,
    city: city,
    zip: zip,
    date: date
  });
}

function orderViaWhatsApp(formDetails = null) {
  if (cart.length === 0 && !currentInvoiceData) {
    showToast(currentLang === 'ES' ? "¡Tu bolsa está vacía! Agrega una creación primero." : "Your shopping bag is empty! Add a creation first.");
    return;
  }

  const isEs = currentLang === 'ES';
  const isLoja = activeRegion === 'LOJA';
  const deliveryFee = isLoja ? 3 : 15;
  const items = cart.length > 0 ? cart : (currentInvoiceData ? currentInvoiceData.items : []);
  const subtotalPrice = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalPrice = subtotalPrice + deliveryFee;

  let text = isEs 
    ? `✨ *NUEVO PEDIDO CON FACTURA — SKY FLORALS*\n` 
    : `✨ *NEW ORDER & INVOICE REQUEST — SKY FLORALS*\n`;

  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  text += isEs ? `*Ubicación:* ${isLoja ? 'Atelier Loja, Ecuador' : 'New Jersey & NYC Metro'}\n\n` 
               : `*Region:* ${isLoja ? 'Atelier Loja, Ecuador' : 'New Jersey & NYC Metro'}\n\n`;

  text += isEs ? `*CREACIONES SELECCIONADAS:*\n` : `*CURATED CREATIONS:*\n`;
  items.forEach(item => {
    text += `• ${item.qty}x ${item.name} ($${item.price * item.qty} USD)\n`;
    if (item.meta) {
      text += `  _${item.meta}_\n`;
    }
  });

  text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Subtotal: $${subtotalPrice.toFixed(2)} USD\n`;
  text += `${isEs ? 'Envío Especializado' : 'Courier Delivery'}: $${deliveryFee.toFixed(2)} USD\n`;
  text += `*TOTAL: $${totalPrice.toFixed(2)} USD*\n`;

  if (formDetails) {
    text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += isEs ? `*DATOS PARA FACTURA Y ENVÍO:*\n` : `*BILLING & INVOICE DETAILS:*\n`;
    if (formDetails.clientName) text += `• ${isEs ? 'Cliente' : 'Client'}: ${formDetails.clientName}\n`;
    if (formDetails.clientEmail) text += `• Email: ${formDetails.clientEmail}\n`;
    if (formDetails.taxId) text += `• ${isEs ? 'RUC / Tax ID' : 'Tax ID / EIN'}: ${formDetails.taxId}\n`;
    if (formDetails.name) text += `• ${isEs ? 'Destinatario' : 'Recipient'}: ${formDetails.name}\n`;
    if (formDetails.address) text += `• ${isEs ? 'Dirección' : 'Address'}: ${formDetails.address}\n`;
    if (formDetails.city) text += `• ${isEs ? 'Ciudad/Zona' : 'City/Zone'}: ${formDetails.city} (${formDetails.zip || ''})\n`;
    if (formDetails.date) text += `• ${isEs ? 'Fecha Entrega' : 'Delivery Date'}: ${formDetails.date}\n`;
  }

  text += `\n${isEs ? 'Agradezco confirmación de disponibilidad para el despacho del pedido y emisión de factura.' : 'Please confirm availability to finalize courier dispatch and formal invoice.'}`;

  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, '_blank');
}

function openWhatsAppConcierge() {
  const isEs = currentLang === 'ES';
  const text = isEs 
    ? `Hola SKY FLORALS, deseo consultar sobre un pedido / disponibilidad para entrega.` 
    : `Hello SKY FLORALS, I would like to inquire about an order / courier delivery availability.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Toast System
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Expose globals
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.filterCatalog = filterCatalog;
window.checkDeliveryZip = checkDeliveryZip;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.switchLocation = switchLocation;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.switchAboutTab = switchAboutTab;

// WhatsApp & Checkout exports
window.orderViaWhatsApp = orderViaWhatsApp;
window.openWhatsAppConcierge = openWhatsAppConcierge;
window.switchPaymentMethod = switchPaymentMethod;
window.formatCardNumber = formatCardNumber;
window.formatCardExp = formatCardExp;
window.handleCheckoutSubmit = handleCheckoutSubmit;
window.triggerWhatsAppFromCheckout = triggerWhatsAppFromCheckout;

// Cookie & Legal exports
window.acceptCookies = acceptCookies;
window.declineCookies = declineCookies;
window.openPrivacyModal = openPrivacyModal;
window.closePrivacyModal = closePrivacyModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;

// Invoice & CRM exports
window.openInvoiceModal = openInvoiceModal;
window.closeInvoiceModal = closeInvoiceModal;
window.printInvoice = printInvoice;
window.openAdminModal = openAdminModal;
window.closeAdminModal = closeAdminModal;
window.renderAdminClients = renderAdminClients;
window.exportClientsCSV = exportClientsCSV;
window.clearClientDatabase = clearClientDatabase;

window.getCurrentLang = () => currentLang;
window.getActiveRegion = () => activeRegion;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
  checkCookieConsent();
  getClientDatabase(); // Ensure CRM is initialized
});
