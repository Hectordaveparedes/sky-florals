// SKY FLORALS - MAIN E-COMMERCE, I18N & REGIONAL PRICING APP LOGIC

// i18n Translation Dictionary (EN for New Jersey USA / ES for Loja Ecuador)
const i18nDict = {
  EN: {
    locationBar: "White-Glove Courier Delivery Available Today in New Jersey, NYC & Metro Regions ($ USD)",
    regionLabel: "NEW JERSEY & NYC ATELIER",
    navCustomizer: "Atelier Customizer",
    navQuiz: "Emotional Matcher",
    navSculptures: "Sculptures",
    navSubscriptions: "Subscriptions",
    navAbout: "About Us / The House",
    heroTag: "✨ The Curator of Floral Artistry",
    heroHeadline: 'Flowers Are Not Chosen From a Menu. They Are <span class="italic">Curated From a Story</span>.',
    heroDesc: "At SKY FLORALS, we believe every bloom is amongst creation's greatest masterpieces. We exist to transform flowers from simple expressions of beauty into timeless works of art that inspire quiet sophistication, reverence, and wonder.",
    heroCtaCustom: "Design Your Sky Bouquet →",
    heroCtaAbout: "Explore The House Story",
    trustFreshness: "7-10 Days",
    trustFreshnessLabel: "Guaranteed Freshness",
    trustCert: "Certificate",
    trustCertLabel: "Of Curation Included",
    trustWrap: "100% Cotton",
    trustWrapLabel: "Natural Linen Packaging",
    quizSubhead: "Interactive Emotional Matcher",
    quizTitle: "Find Your Emotional Solution",
    quizDesc: "Answer 3 quick questions to discover the perfect floral arrangement and calligraphy note tailored to your exact moment.",
    catalogSubhead: "Curated Floral Sculptures",
    catalogTitle: "Signature SKY Collection",
    catalogDesc: "Hand-selected stems arranged by master florists for white-glove courier delivery.",
    filterAll: "All Sculptures",
    filterMinimalist: "Minimalist Chic",
    filterGrand: "Grand Declarations",
    filterRituals: "Monthly Rituals",
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
    step1Palette: "1. Select Stem Palette",
    step2Vessel: "2. Choose Architectural Vessel",
    step3Wrap: "3. Signature Wrap & Accent",
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
    courierLabel: "White-Glove Courier Delivery"
  },
  ES: {
    locationBar: "Entrega Especializada Disponible Hoy en Loja y Área Metropolitana ($ USD)",
    regionLabel: "ATELIER LOJA, ECUADOR",
    navCustomizer: "Estudio Personalizado",
    navQuiz: "Buscador Emocional",
    navSculptures: "Esculturas",
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
    quizDesc: "Responde 3 preguntas rápidas para descubrir el arreglo floral y nota de caligrafía perfectos adaptados a tu momento exacto.",
    catalogSubhead: "Esculturas Florales Curadas",
    catalogTitle: "Colección Insignia SKY",
    catalogDesc: "Tallos seleccionados a mano y arreglados por maestros floristas para entrega especializada.",
    filterAll: "Todas las Esculturas",
    filterMinimalist: "Minimalista Chic",
    filterGrand: "Grandes Declaraciones",
    filterRituals: "Rituales Mensuales",
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
    step1Palette: "1. Selecciona la Paleta de Flores",
    step2Vessel: "2. Elige la Vasija Arquitectónica",
    step3Wrap: "3. Envoltura e Insignia",
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
    courierLabel: "Envío Especializado Atelier"
  }
};

// Products Catalog Data with Dual Regional Pricing (US vs Loja Ecuador)
const catalogProducts = [
  {
    id: "sky-01",
    name: "The Hailey Monochrome",
    category: "minimalist",
    priceUS: 165,
    priceLoja: 45,
    tag: "Bestseller",
    image: "assets/pal_blush.jpg",
    desc: "A sculptured monochrome study in blush peonies and garden roses wrapped in natural linen.",
    descEs: "Un estudio escultórico monocromático en peonías rosadas y rosas de jardín envueltas en lino natural.",
    stemCount: "18 Premium Stems",
    longevity: "7-10 Days Fresh Guarantee"
  },
  {
    id: "sky-02",
    name: "Grand Ivory Monolith",
    category: "grand",
    priceUS: 265,
    priceLoja: 75,
    tag: "Signature",
    image: "assets/pal_ivory.jpg",
    desc: "32 long-stemmed white calla lilies and garden roses in a textured alabaster stone vase.",
    descEs: "32 calas blancas de tallo largo y rosas de jardín en un florero de piedra alabastro texturizado.",
    stemCount: "32 Grand Stems",
    longevity: "8-12 Days Fresh Guarantee"
  },
  {
    id: "sky-03",
    name: "Sanctuary Ranunculus",
    category: "minimalist",
    priceUS: 145,
    priceLoja: 38,
    tag: "Hailey Favorite",
    image: "assets/lifestyle.jpg",
    desc: "Crisp white ranunculus paired with silver eucalyptus. Subdued, serene, and effortlessly stylish.",
    descEs: "Ranúnculos blancos crujientes combinados con eucalipto plateado. Sereno y elegante.",
    stemCount: "15 Stems",
    longevity: "7 Days Fresh Guarantee"
  },
  {
    id: "sky-04",
    name: "Unboxing Ritual Box",
    category: "rituals",
    priceUS: 195,
    priceLoja: 55,
    tag: "Luxury Gift Set",
    image: "assets/unboxing.jpg",
    desc: "Includes our signature floral sculpture, magnetic oat linen box, Cotton Certificate of Curation, and French Rose spray.",
    descEs: "Incluye escultura floral insignia, caja magnética de lino avena, Certificado de Curaduría en algodón y spray de rosas.",
    stemCount: "22 Curated Stems",
    longevity: "10 Days Fresh Guarantee"
  },
  {
    id: "sky-05",
    name: "Sunset Terracotta & Gold",
    category: "grand",
    priceUS: 215,
    priceLoja: 65,
    tag: "New Season",
    image: "assets/pal_terracotta.jpg",
    desc: "Warm peach tones, terracotta garden roses, and wild oats in a raw travertine stone vessel.",
    descEs: "Cálidos tonos melocotón, rosas de jardín terracota y avena silvestre en vasija de piedra travertino.",
    stemCount: "24 Stems",
    longevity: "8-10 Days Fresh Guarantee"
  },
  {
    id: "sky-06",
    name: "Midnight Velvet Drama",
    category: "rituals",
    priceUS: 235,
    priceLoja: 68,
    tag: "Haute Couture",
    image: "assets/pal_midnight.jpg",
    desc: "Deep burgundy calla lilies and dark scabiosa in a matte black ceramic vase.",
    descEs: "Calas borgoña profundas y escabiosas oscuras en un florero de cerámica negra mate.",
    stemCount: "20 Stems",
    longevity: "8 Days Fresh Guarantee"
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

// Location & Language & Regional Price Switcher
function switchLocation(region) {
  activeRegion = region;
  currentLang = (region === 'LOJA') ? 'ES' : 'EN';
  
  applyTranslations();
  updateSubscriptionPrices();
  renderCatalog();

  if (window.updateQuizLang) window.updateQuizLang(currentLang, activeRegion);
  if (window.updateCustomizerUI) window.updateCustomizerUI();

  if (region === 'LOJA') {
    showToast("Ubicación cambiada a Loja, Ecuador Atelier (Precios Adaptados al Mercado de Ecuador)");
  } else {
    showToast("Switched location to New Jersey / NYC Atelier (US Market Pricing)");
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
  const price = (activeRegion === 'LOJA') ? (item.priceLoja || item.price) : (item.priceUS || item.price);
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
        ? `<div class="cart-empty">Tu bolsa de compras está vacía.<br><span style="font-size:0.85rem; color:var(--text-light);">Explora nuestras esculturas curadas para comenzar.</span></div>`
        : `<div class="cart-empty">Your shopping bag is empty.<br><span style="font-size:0.85rem; color:var(--text-light);">Explore our curated sculptures to begin.</span></div>`;
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
    const currentPrice = (activeRegion === 'LOJA') ? p.priceLoja : p.priceUS;
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
            <span>${p.stemCount}</span> • <span>${p.longevity}</span>
          </div>
          <div class="product-meta">
            <div class="product-price">$${currentPrice} USD</div>
            <button class="btn-primary" style="padding:10px 20px; font-size:0.78rem;" onclick="addToCart({id: '${p.id}', name: '${p.name}', priceUS: ${p.priceUS}, priceLoja: ${p.priceLoja}, image: '${p.image}'})">
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
    showToast(currentLang === 'ES' ? "¡Tu bolsa está vacía! Agrega un arreglo primero." : "Your shopping bag is empty! Add an arrangement first.");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

function submitCheckout(e) {
  e.preventDefault();
  const modalContent = document.getElementById("modalCardContent");
  if (modalContent) {
    modalContent.innerHTML = `
      <div style="font-size:3rem; margin-bottom:16px;">🌿</div>
      <div class="hero-tag" style="margin:0 auto 16px;">${currentLang === 'ES' ? 'Pedido Confirmado' : 'Order Confirmed'}</div>
      <h3 class="heading-lg" style="margin-bottom:12px;">${currentLang === 'ES' ? 'Gracias por Elegir SKY FLORALS' : 'Thank You for Choosing SKY FLORALS'}</h3>
      <p style="color:var(--text-secondary); line-height:1.6; font-size:0.95rem;">
        ${currentLang === 'ES' ? 'Tu orden' : 'Your order'} <strong>#SKY-${Math.floor(100000 + Math.random() * 900000)}</strong> ${currentLang === 'ES' ? 'ha sido recibida por nuestros maestros floristas.' : 'has been received by our master floral artisans.'}
      </p>
      <div style="background:var(--bg-primary); border-radius:var(--radius-md); padding:20px; margin:24px 0; text-align:left; font-size:0.85rem; color:var(--text-primary); border:1px solid var(--border-light);">
        <div><strong>${currentLang === 'ES' ? 'Ubicación:' : 'Delivery Region:'}</strong> ${activeRegion === 'LOJA' ? 'Entrega Especializada en Loja, Ecuador ($3 USD Envio)' : 'New Jersey / NYC White-Glove Courier ($15 USD Shipping)'}</div>
        <div style="margin-top:6px;"><strong>${currentLang === 'ES' ? 'Experiencia:' : 'Recipient Experience:'}</strong> ${currentLang === 'ES' ? 'Caja de Lino Natural con Certificado de Curaduría en Algodón' : 'Natural Linen Unboxing Box with Cotton Certificate of Curation'}</div>
      </div>
      <button class="btn-primary" onclick="finishCheckoutOrder()">${currentLang === 'ES' ? 'Volver al Atelier' : 'Return to Atelier'}</button>
    `;
  }
  cart = [];
  updateCartUI();
}

function finishCheckoutOrder() {
  closeCheckoutModal();
  setTimeout(() => location.reload(), 500);
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
window.submitCheckout = submitCheckout;
window.finishCheckoutOrder = finishCheckoutOrder;
window.switchLocation = switchLocation;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.switchAboutTab = switchAboutTab;
window.getCurrentLang = () => currentLang;
window.getActiveRegion = () => activeRegion;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
});
