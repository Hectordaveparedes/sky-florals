// SKY FLORALS - ATELIER BOUQUET CUSTOMIZER STUDIO

const customizerState = {
  palette: 'ivory',
  vessel: 'alabaster',
  ribbon: 'silk-cream',
  scent: 'vanilla-rose',
  recipientName: 'Emily Chasi',
  occasion: 'Special Celebration',
  cardText: 'To my favorite person, with all my love.',
  basePrice: 175
};

const palettesData = {
  'ivory': {
    name: 'Ivory & Alabaster Stems',
    priceAdd: 0,
    image: 'assets/hero.jpg',
    color: '#FBF9F5',
    desc: 'White ranunculus, ivory garden roses, & calla lilies'
  },
  'blush': {
    name: 'Rhode Muted Peony Blush',
    priceAdd: 25,
    image: 'assets/signature_blush.jpg',
    color: '#EADCD6',
    desc: 'Soft pink garden roses, blush peonies, & silver dollar eucalyptus'
  },
  'terracotta': {
    name: 'Sunset Terracotta & Gold',
    priceAdd: 30,
    image: 'assets/lifestyle.jpg',
    color: '#D4A373',
    desc: 'Warm terracotta garden roses, honey ranunculus, & wild oats'
  },
  'midnight': {
    name: 'Midnight Velvet Drama',
    priceAdd: 40,
    image: 'assets/unboxing.jpg',
    color: '#3D2645',
    desc: 'Deep burgundy calla lilies, dark scabiosa, & metallic accents'
  }
};

const vesselsData = {
  'alabaster': { name: 'Matte Alabaster Ceramic', priceAdd: 0 },
  'crystal': { name: 'Fluted Italian Crystal', priceAdd: 20 },
  'travertine': { name: 'Raw Travertine Stone', priceAdd: 35 }
};

const ribbonsData = {
  'silk-cream': { name: 'Raw Silk Cream Organza', priceAdd: 0 },
  'velvet-espresso': { name: 'Espresso Velvet Ribbon', priceAdd: 10 },
  'gold-metal': { name: 'Monogram Gold Embossed Band', priceAdd: 15 }
};

const scentsData = {
  'vanilla-rose': { name: 'French Vanilla & Damask Rose Mist', priceAdd: 0 },
  'sandalwood': { name: 'Amber & Smoked Sandalwood Infusion', priceAdd: 12 },
  'none': { name: 'Unscented / Pure Natural Botanical', priceAdd: 0 }
};

function updateCustomizerUI() {
  // Update Preview Image
  const previewImg = document.getElementById("customizerPreviewImg");
  if (previewImg) {
    const palData = palettesData[customizerState.palette];
    previewImg.style.opacity = '0.4';
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

  if (certRecipient) certRecipient.innerText = customizerState.recipientName || "Valued Recipient";
  if (certOccasion) certOccasion.innerText = customizerState.occasion || "Meaningful Moment";
  if (certCollection) certCollection.innerText = palettesData[customizerState.palette].name;
  if (certDate) {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    certDate.innerText = today;
  }

  // Calculate Price
  const palPrice = palettesData[customizerState.palette].priceAdd;
  const vesPrice = vesselsData[customizerState.vessel].priceAdd;
  const ribPrice = ribbonsData[customizerState.ribbon].priceAdd;
  const scePrice = scentsData[customizerState.scent].priceAdd;
  
  const totalPrice = customizerState.basePrice + palPrice + vesPrice + ribPrice + scePrice;
  
  const priceDisplay = document.getElementById("customizerPriceDisplay");
  if (priceDisplay) {
    priceDisplay.innerText = `$${totalPrice}`;
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
  const palData = palettesData[customizerState.palette];
  const vesData = vesselsData[customizerState.vessel];
  const ribData = ribbonsData[customizerState.ribbon];
  const sceData = scentsData[customizerState.scent];

  const palPrice = palData.priceAdd;
  const vesPrice = vesData.priceAdd;
  const ribPrice = ribData.priceAdd;
  const scePrice = sceData.priceAdd;
  const totalPrice = customizerState.basePrice + palPrice + vesPrice + ribPrice + scePrice;

  if (window.addToCart) {
    window.addToCart({
      id: 'custom-' + Date.now(),
      name: `Atelier Custom Arrangement (${palData.name})`,
      price: totalPrice,
      image: palData.image,
      meta: `Curated for: ${customizerState.recipientName || 'Valued Guest'} | Includes Certificate of Curation`
    });
    window.openCartDrawer();
  }
}

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
