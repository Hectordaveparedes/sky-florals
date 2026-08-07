// SKY FLORALS - ATELIER BOUQUET CUSTOMIZER STUDIO
// Source of Truth: SKY FLORALS Collection and Edits.docx

const customizerState = {
  palette: 'sky',
  vessel: 'alabaster',
  ribbon: 'silk-cream',
  fillers: false,
  scent: 'vanilla-rose',
  recipientName: 'Emily Chasi',
  occasion: 'Special Celebration',
  cardText: 'To my favorite person, with all my love.',
  basePrice: 65
};

const palettesData = {
  'sky': {
    name: '☁️ THE SKY EDIT',
    nameEs: '☁️ THE SKY EDIT',
    price: 65,
    image: 'assets/pal_ivory.jpg',
    color: '#FBF9F5',
    desc: 'Whites, ivories, delicate greens, & airy textures'
  },
  'blush': {
    name: '🎀 THE BLUSH EDIT',
    nameEs: '🎀 THE BLUSH EDIT',
    price: 65,
    image: 'assets/pal_blush.jpg',
    color: '#EADCD6',
    desc: 'Blush pinks, warm champagne, & creamy neutrals'
  },
  'midnight': {
    name: '🌙 THE MIDNIGHT EDIT',
    nameEs: '🌙 THE MIDNIGHT EDIT',
    price: 70,
    image: 'assets/pal_midnight.jpg',
    color: '#3D2645',
    desc: 'Deep blues, crisp whites, & subtle black accents'
  },
  'seasonal': {
    name: '🌿 THE SEASONAL EDIT',
    nameEs: '🌿 THE SEASONAL EDIT',
    price: 65,
    image: 'assets/pal_terracotta.jpg',
    color: '#D4A373',
    desc: 'Nature’s changing palette with freshest blooms'
  },
  'inspiration': {
    name: '✦ THE INSPIRATION',
    nameEs: '✦ THE INSPIRATION',
    price: 95,
    image: 'assets/lifestyle.jpg',
    color: '#C2A676',
    desc: 'Completely bespoke creation tailored to your story'
  }
};

const vesselsData = {
  'alabaster': { name: 'Matte Alabaster Ceramic', nameEs: 'Cerámica Alabastro Mate', priceAdd: 0 },
  'crystal': { name: 'Fluted Italian Crystal', nameEs: 'Cristal Italiano Estriado', priceAdd: 15 },
  'travertine': { name: 'Raw Travertine Stone', nameEs: 'Piedra Travertino Natural', priceAdd: 25 }
};

const ribbonsData = {
  'silk-cream': { name: 'Natural Linen (#E8DFD2)', nameEs: 'Lino Natural (#E8DFD2)', priceAdd: 0 },
  'velvet-espresso': { name: 'Espresso Velvet Ribbon', nameEs: 'Cinta de Terciopelo Espresso', priceAdd: 10 },
  'gold-metal': { name: 'Monogram Gold Band', nameEs: 'Banda con Sello de Oro', priceAdd: 15 }
};

const scentsData = {
  'vanilla-rose': { name: 'French Vanilla & Damask Rose Mist', nameEs: 'Bruma Vainilla & Rosa de Damasco', priceAdd: 0 },
  'sandalwood': { name: 'Amber & Smoked Sandalwood Infusion', nameEs: 'Infusión Sándalo Ahumado', priceAdd: 12 },
  'none': { name: 'Unscented / Pure Natural Botanical', nameEs: 'Sin Aroma / Botánico Natural', priceAdd: 0 }
};

function updateCustomizerUI() {
  const isEs = (window.getCurrentLang && window.getCurrentLang() === 'ES');

  // Update Preview Image smoothly
  const previewImg = document.getElementById("customizerPreviewImg");
  if (previewImg) {
    const palData = palettesData[customizerState.palette];
    previewImg.style.opacity = '0.3';
    setTimeout(() => {
      previewImg.src = palData.image;
      previewImg.style.opacity = '1';
    }, 150);
  }

  // Update Live Certificate of Curation Text
  const certRecipient = document.getElementById("certRecipient");
  const certOccasion = document.getElementById("certOccasion");
  const certCollection = document.getElementById("certCollection");
  const certDate = document.getElementById("certDate");

  if (certRecipient) certRecipient.innerText = customizerState.recipientName || (isEs ? "Estimado Destinatario" : "Valued Recipient");
  if (certOccasion) certOccasion.innerText = customizerState.occasion || (isEs ? "Celebración Especial" : "Meaningful Moment");
  if (certCollection) certCollection.innerText = isEs ? palettesData[customizerState.palette].nameEs : palettesData[customizerState.palette].name;
  if (certDate) {
    const locale = isEs ? 'es-EC' : 'en-US';
    const today = new Date().toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
    certDate.innerText = today;
  }

  // Calculate Price
  const basePrice = palettesData[customizerState.palette].price;
  const vesPrice = vesselsData[customizerState.vessel].priceAdd;
  const ribPrice = ribbonsData[customizerState.ribbon].priceAdd;
  const scePrice = scentsData[customizerState.scent].priceAdd;
  const fillerPrice = customizerState.fillers ? 10 : 0;
  
  const totalPrice = basePrice + vesPrice + ribPrice + scePrice + fillerPrice;
  
  const priceDisplay = document.getElementById("customizerPriceDisplay");
  if (priceDisplay) {
    priceDisplay.innerText = `$${totalPrice} USD`;
  }

  // Update Active Buttons
  updatePillSelection("palettePills", customizerState.palette);
  updatePillSelection("vesselPills", customizerState.vessel);
  updatePillSelection("ribbonPills", customizerState.ribbon);
  updatePillSelection("scentPills", customizerState.scent);

  const fillerBtn = document.getElementById("fillerBtn");
  if (fillerBtn) {
    if (customizerState.fillers) fillerBtn.classList.add("active");
    else fillerBtn.classList.remove("active");
  }
}

function updatePillSelection(containerId, activeVal) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const buttons = container.querySelectorAll(".pill-btn");
  buttons.forEach(btn => {
    if (btn.dataset.value === activeVal) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function setPalette(val) {
  customizerState.palette = val;
  updateCustomizerUI();
}

function setVessel(val) {
  customizerState.vessel = val;
  updateCustomizerUI();
}

function setRibbon(val) {
  customizerState.ribbon = val;
  updateCustomizerUI();
}

function setScent(val) {
  customizerState.scent = val;
  updateCustomizerUI();
}

function toggleFillers() {
  customizerState.fillers = !customizerState.fillers;
  updateCustomizerUI();
}

function onRecipientInput(val) {
  customizerState.recipientName = val;
  updateCustomizerUI();
}

function onOccasionInput(val) {
  customizerState.occasion = val;
  updateCustomizerUI();
}

function addCustomArrangementToCart() {
  const isEs = (window.getCurrentLang && window.getCurrentLang() === 'ES');

  const palData = palettesData[customizerState.palette];
  const vesData = vesselsData[customizerState.vessel];
  const ribData = ribbonsData[customizerState.ribbon];
  const sceData = scentsData[customizerState.scent];

  const basePrice = palData.price;
  const vesPrice = vesData.priceAdd;
  const ribPrice = ribData.priceAdd;
  const scePrice = sceData.priceAdd;
  const fillerPrice = customizerState.fillers ? 10 : 0;
  const totalPrice = basePrice + vesPrice + ribPrice + scePrice + fillerPrice;

  const palName = isEs ? palData.nameEs : palData.name;

  if (window.addToCart) {
    window.addToCart({
      id: 'custom-' + Date.now(),
      name: `${palName} (Custom Curation)`,
      price: totalPrice,
      image: palData.image,
      meta: `${isEs ? 'Curado para' : 'Curated for'}: ${customizerState.recipientName || 'Guest'} | Certificate of Curation`
    });
    window.openCartDrawer();
  }
}

window.updateCustomizerUI = updateCustomizerUI;
window.toggleFillers = toggleFillers;

// Bind customizer events on load
document.addEventListener("DOMContentLoaded", () => {
  const recipientInput = document.getElementById("recipientInput");
  const occasionInput = document.getElementById("occasionInput");

  if (recipientInput) {
    recipientInput.value = customizerState.recipientName;
    recipientInput.addEventListener("input", (e) => onRecipientInput(e.target.value));
  }
  if (occasionInput) {
    occasionInput.value = customizerState.occasion;
    occasionInput.addEventListener("input", (e) => onOccasionInput(e.target.value));
  }
  updateCustomizerUI();
});
