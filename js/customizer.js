// SKY FLORALS - ATELIER BOUQUET CUSTOMIZER STUDIO (DYNAMIC REGIONAL PRICING EN / ES)

const customizerState = {
  palette: 'ivory',
  vessel: 'alabaster',
  ribbon: 'silk-cream',
  scent: 'vanilla-rose',
  recipientName: 'Emily Chasi',
  occasion: 'Special Celebration',
  cardText: 'To my favorite person, with all my love.',
  basePriceUS: 175,
  basePriceLoja: 48
};

const palettesData = {
  'ivory': {
    name: 'Ivory & Alabaster Stems',
    nameEs: 'Tallo Blanco & Alabastro',
    priceAddUS: 0,
    priceAddLoja: 0,
    image: 'assets/pal_ivory.jpg',
    color: '#FBF9F5',
    desc: 'White ranunculus, ivory garden roses, & calla lilies'
  },
  'blush': {
    name: 'Rhode Muted Peony Blush',
    nameEs: 'Peonía Rosada & Rosas',
    priceAddUS: 25,
    priceAddLoja: 8,
    image: 'assets/pal_blush.jpg',
    color: '#EADCD6',
    desc: 'Soft pink garden roses, blush peonies, & silver dollar eucalyptus'
  },
  'terracotta': {
    name: 'Sunset Terracotta & Gold',
    nameEs: 'Terracota Atardecer & Oro',
    priceAddUS: 30,
    priceAddLoja: 10,
    image: 'assets/pal_terracotta.jpg',
    color: '#D4A373',
    desc: 'Warm terracotta garden roses, honey ranunculus, & wild oats'
  },
  'midnight': {
    name: 'Midnight Velvet Drama',
    nameEs: 'Velvet Oscuro Drama',
    priceAddUS: 40,
    priceAddLoja: 14,
    image: 'assets/pal_midnight.jpg',
    color: '#3D2645',
    desc: 'Deep burgundy calla lilies, dark scabiosa, & metallic accents'
  }
};

const vesselsData = {
  'alabaster': { name: 'Matte Alabaster Ceramic', nameEs: 'Cerámica Alabastro Mate', priceAddUS: 0, priceAddLoja: 0 },
  'crystal': { name: 'Fluted Italian Crystal', nameEs: 'Cristal Italiano Estriado', priceAddUS: 20, priceAddLoja: 6 },
  'travertine': { name: 'Raw Travertine Stone', nameEs: 'Piedra Travertino Natural', priceAddUS: 35, priceAddLoja: 10 }
};

const ribbonsData = {
  'silk-cream': { name: 'Natural Linen (#E8DFD2)', nameEs: 'Lino Natural (#E8DFD2)', priceAddUS: 0, priceAddLoja: 0 },
  'velvet-espresso': { name: 'Espresso Velvet Ribbon', nameEs: 'Cinta de Terciopelo Espresso', priceAddUS: 10, priceAddLoja: 3 },
  'gold-metal': { name: 'Monogram Gold Embossed Band', nameEs: 'Banda con Sello de Oro', priceAddUS: 15, priceAddLoja: 4 }
};

const scentsData = {
  'vanilla-rose': { name: 'French Vanilla & Damask Rose Mist', nameEs: 'Bruma Vainilla & Rosa de Damasco', priceAddUS: 0, priceAddLoja: 0 },
  'sandalwood': { name: 'Amber & Smoked Sandalwood Infusion', nameEs: 'Infusión Sándalo Ahumado', priceAddUS: 12, priceAddLoja: 4 },
  'none': { name: 'Unscented / Pure Natural Botanical', nameEs: 'Sin Aroma / Botánico Natural', priceAddUS: 0, priceAddLoja: 0 }
};

function updateCustomizerUI() {
  const isLoja = (window.getActiveRegion && window.getActiveRegion() === 'LOJA');
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

  // Calculate Price based on Region (US vs Loja)
  const palPrice = isLoja ? palettesData[customizerState.palette].priceAddLoja : palettesData[customizerState.palette].priceAddUS;
  const vesPrice = isLoja ? vesselsData[customizerState.vessel].priceAddLoja : vesselsData[customizerState.vessel].priceAddUS;
  const ribPrice = isLoja ? ribbonsData[customizerState.ribbon].priceAddLoja : ribbonsData[customizerState.ribbon].priceAddUS;
  const scePrice = isLoja ? scentsData[customizerState.scent].priceAddLoja : scentsData[customizerState.scent].priceAddUS;
  
  const basePrice = isLoja ? customizerState.basePriceLoja : customizerState.basePriceUS;
  const totalPrice = basePrice + palPrice + vesPrice + ribPrice + scePrice;
  
  const priceDisplay = document.getElementById("customizerPriceDisplay");
  if (priceDisplay) {
    priceDisplay.innerText = `$${totalPrice} USD`;
  }

  // Update Active Buttons
  updatePillSelection("palettePills", customizerState.palette);
  updatePillSelection("vesselPills", customizerState.vessel);
  updatePillSelection("ribbonPills", customizerState.ribbon);
  updatePillSelection("scentPills", customizerState.scent);
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

function onRecipientInput(val) {
  customizerState.recipientName = val;
  updateCustomizerUI();
}

function onOccasionInput(val) {
  customizerState.occasion = val;
  updateCustomizerUI();
}

function addCustomArrangementToCart() {
  const isLoja = (window.getActiveRegion && window.getActiveRegion() === 'LOJA');
  const isEs = (window.getCurrentLang && window.getCurrentLang() === 'ES');

  const palData = palettesData[customizerState.palette];
  const vesData = vesselsData[customizerState.vessel];
  const ribData = ribbonsData[customizerState.ribbon];
  const sceData = scentsData[customizerState.scent];

  const palPrice = isLoja ? palData.priceAddLoja : palData.priceAddUS;
  const vesPrice = isLoja ? vesData.priceAddLoja : vesData.priceAddUS;
  const ribPrice = isLoja ? ribData.priceAddLoja : ribData.priceAddUS;
  const scePrice = isLoja ? sceData.priceAddLoja : sceData.priceAddUS;
  
  const basePrice = isLoja ? customizerState.basePriceLoja : customizerState.basePriceUS;
  const totalPrice = basePrice + palPrice + vesPrice + ribPrice + scePrice;

  const palName = isEs ? palData.nameEs : palData.name;

  if (window.addToCart) {
    window.addToCart({
      id: 'custom-' + Date.now(),
      name: isEs ? `Creación Personalizada (${palName})` : `Atelier Custom Creation (${palName})`,
      priceUS: totalPrice,
      priceLoja: totalPrice,
      price: totalPrice,
      image: palData.image,
      meta: `${isEs ? 'Curado para' : 'Curated for'}: ${customizerState.recipientName || 'Guest'} | Certificate of Curation`
    });
    window.openCartDrawer();
  }
}

window.updateCustomizerUI = updateCustomizerUI;

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
