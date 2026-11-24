const SEGMENTS = [
  {
    id: 'tech',
    name: 'Tecnologia & Apps',
    icon: '💻',
    desc: 'Softwares, aplicativos, automação ou soluções digitais.',
    primary: '#4f46e5',
    secondary: '#06b6d4',
    badgeBg: 'bg-indigo-600',
    revenueFactor: 0.42,
    costFactor: 0.22,
    allocation: [
      { label: 'Desenvolvimento & MVP', pct: 45 },
      { label: 'Aquisição de usuários / Marketing', pct: 30 },
      { label: 'Infraestrutura, ferramentas & reserva', pct: 25 }
    ]
  },
  {
    id: 'food',
    name: 'Alimentação & Bebidas',
    icon: '🍔',
    desc: 'Cafeterias, delivery, confeitaria, alimentos saudáveis ou food truck.',
    primary: '#ea580c',
    secondary: '#f59e0b',
    badgeBg: 'bg-orange-600',
    revenueFactor: 0.65,
    costFactor: 0.44,
    allocation: [
      { label: 'Insumos, embalagens & estoque inicial', pct: 40 },
      { label: 'Equipamentos & ponto/operação', pct: 35 },
      { label: 'Divulgação local & promoções de estreia', pct: 25 }
    ]
  },
  {
    id: 'fashion',
    name: 'Moda & Estilo',
    icon: '👗',
    desc: 'Roupas, acessórios, brechó curado ou marca autoral.',
    primary: '#db2777',
    secondary: '#a855f7',
    badgeBg: 'bg-pink-600',
    revenueFactor: 0.55,
    costFactor: 0.34,
    allocation: [
      { label: 'Produção ou compra de peças iniciais', pct: 45 },
      { label: 'Identidade visual, fotos & e-commerce', pct: 30 },
      { label: 'Embalagens & marketing de lançamento', pct: 25 }
    ]
  },
  {
    id: 'health',
    name: 'Saúde & Bem-Estar',
    icon: '🌿',
    desc: 'Fitness, nutrição, cuidados pessoais, saúde mental ou autocuidado.',
    primary: '#059669',
    secondary: '#14b8a6',
    badgeBg: 'bg-emerald-600',
    revenueFactor: 0.48,
    costFactor: 0.26,
    allocation: [
      { label: 'Estrutura, licenças ou materiais', pct: 35 },
      { label: 'Captação de clientes & parcerias', pct: 35 },
      { label: 'Reserva operacional & sistema de atendimento', pct: 30 }
    ]
  },
  {
    id: 'edu',
    name: 'Educação & Cursos',
    icon: '📚',
    desc: 'Treinamentos, idiomas, reforço escolar, mentorias ou capacitação.',
    primary: '#2563eb',
    secondary: '#6366f1',
    badgeBg: 'bg-blue-600',
    revenueFactor: 0.50,
    costFactor: 0.24,
    allocation: [
      { label: 'Criação de conteúdo & plataforma', pct: 40 },
      { label: 'Tráfego & geração de leads', pct: 35 },
      { label: 'Suporte, materiais & reserva', pct: 25 }
    ]
  },
  {
    id: 'eco',
    name: 'Sustentabilidade & Impacto',
    icon: '♻️',
    desc: 'Produtos ecológicos, energia limpa, economia circular ou impacto social.',
    primary: '#16a34a',
    secondary: '#84cc16',
    badgeBg: 'bg-green-600',
    revenueFactor: 0.45,
    costFactor: 0.28,
    allocation: [
      { label: 'Cadeia sustentável & matéria-prima', pct: 40 },
      { label: 'Certificações, testes & protótipo', pct: 30 },
      { label: 'Comunicação de impacto & vendas', pct: 30 }
    ]
  },
  {
    id: 'services',
    name: 'Serviços & Consultoria',
    icon: '💼',
    desc: 'Design, marketing, gestão, manutenção, eventos ou soluções B2B.',
    primary: '#0f172a',
    secondary: '#475569',
    badgeBg: 'bg-slate-800',
    revenueFactor: 0.60,
    costFactor: 0.25,
    allocation: [
      { label: 'Prospecção comercial & portfólio', pct: 35 },
      { label: 'Ferramentas de trabalho & software', pct: 30 },
      { label: 'Reserva de caixa & jurídico/formalização', pct: 35 }
    ]
  },
  {
    id: 'ent',
    name: 'Entretenimento & Criativos',
    icon: '🎮',
    desc: 'Games, mídia, cultura, experiências ao vivo, fotografia ou produção.',
    primary: '#7c3aed',
    secondary: '#ec4899',
    badgeBg: 'bg-violet-600',
    revenueFactor: 0.46,
    costFactor: 0.27,
    allocation: [
      { label: 'Produção criativa & equipamentos', pct: 45 },
      { label: 'Comunidade, eventos & divulgação', pct: 35 },
      { label: 'Distribuição & reserva', pct: 20 }
    ]
  }
];

const AUDIENCES = [
  { id: 'jovens', label: 'Jovens e universitários', icon: '🎓' },
  { id: 'familias', label: 'Famílias e casa', icon: '🏡' },
  { id: 'profissionais', label: 'Profissionais liberais', icon: '💼' },
  { id: 'empresas', label: 'Pequenas e médias empresas (B2B)', icon: '🏢' },
  { id: 'publico-local', label: 'Moradores do bairro / cidade', icon: '📍' },
  { id: 'nicho-digital', label: 'Consumidores digitais / nicho', icon: '📱' }
];

const CHANNELS = [
  { id: 'instagram', label: 'Instagram & TikTok (Reels/Vídeos)', icon: '📸' },
  { id: 'indicacao', label: 'Boca a boca e indicações', icon: '🤝' },
  { id: 'whatsapp', label: 'WhatsApp & comunidades', icon: '💬' },
  { id: 'parcerias', label: 'Parcerias locais e influenciadores', icon: '🌟' },
  { id: 'trafego', label: 'Anúncios pagos (Meta / Google)', icon: '🎯' },
  { id: 'presencial', label: 'Feiras, eventos e ponto físico', icon: '🎪' }
];

const NAME_SUGGESTIONS = [
  { name: 'NexoLab', slogan: 'Conectando ideias simples a grandes resultados' },
  { name: 'Raiz Viva', slogan: 'Qualidade autêntica que faz parte do seu dia' },
  { name: 'Pulso Urbano', slogan: 'Agilidade e estilo no ritmo da cidade' },
  { name: 'Vértice', slogan: 'Onde boas escolhas encontram o futuro' },
  { name: 'Aurora Criativa', slogan: 'Soluções criativas para começar bem' },
  { name: 'Impulso 360', slogan: 'Crescimento prático passo a passo' }
];

const STORAGE_KEY = 'empreenda_5min_empresas_v1';
const TOTAL_STEPS = 5;
const DEFAULT_SEGMENT_ID = 'tech';
const DEFAULT_CAPITAL = 5000;

let currentStep = 1;
// guarda o timer do toast sem poluir `window`
let toastTimer = null;
// impede que "editar respostas" + "gerar" dupliquem o registro no histórico
let lastSavedSignature = null;

const state = {
  name: '',
  slogan: '',
  founder: '',
  segmentId: DEFAULT_SEGMENT_ID,
  audiences: ['jovens'],
  audienceDetail: '',
  capital: DEFAULT_CAPITAL,
  channels: ['instagram', 'indicacao']
};

// ---------------------------------------------------------------- utilidades

function getSegment() {
  return SEGMENTS.find((s) => s.id === state.segmentId) || SEGMENTS[0];
}

function formatBRL(value) {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getInitials(name) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '??';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2200);
}

function copyText(text, msg = 'Copiado!') {
  // `?.` só protegia o writeText; o `.then` ainda estourava em navegadores sem clipboard
  if (!navigator.clipboard) {
    showToast('Não foi possível copiar automaticamente.');
    return;
  }
  navigator.clipboard
    .writeText(text)
    .then(() => showToast(msg))
    .catch(() => showToast('Não foi possível copiar automaticamente.'));
}

// ---------------------------------------------------------------- wizard

function renderSegments() {
  const container = document.getElementById('segments-grid');
  container.innerHTML = SEGMENTS.map((seg) => {
    const active = seg.id === state.segmentId;
    return `
      <button
        type="button"
        onclick="selectSegment('${seg.id}')"
        aria-pressed="${active}"
        class="text-left p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3 ${
          active
            ? 'border-slate-900 bg-slate-50 shadow-xs'
            : 'border-slate-200 hover:border-slate-300 bg-white'
        }"
      >
        <span class="text-2xl leading-none mt-0.5">${seg.icon}</span>
        <div>
          <div class="font-bold text-slate-900 text-sm">${escapeHtml(seg.name)}</div>
          <div class="text-xs text-slate-500 mt-0.5 leading-relaxed">${escapeHtml(seg.desc)}</div>
        </div>
      </button>
    `;
  }).join('');
}

function renderAudiences() {
  const container = document.getElementById('audiences-grid');
  container.innerHTML = AUDIENCES.map((aud) => {
    const active = state.audiences.includes(aud.id);
    return `
      <button
        type="button"
        onclick="toggleAudience('${aud.id}')"
        aria-pressed="${active}"
        class="text-left p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-center gap-3 ${
          active
            ? 'border-slate-900 bg-slate-50 font-bold text-slate-900'
            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium'
        }"
      >
        <span class="text-xl">${aud.icon}</span>
        <span class="text-sm">${escapeHtml(aud.label)}</span>
      </button>
    `;
  }).join('');
}

function renderChannels() {
  const container = document.getElementById('channels-grid');
  container.innerHTML = CHANNELS.map((ch) => {
    const active = state.channels.includes(ch.id);
    return `
      <button
        type="button"
        onclick="toggleChannel('${ch.id}')"
        aria-pressed="${active}"
        class="text-left p-3.5 rounded-2xl border-2 transition cursor-pointer flex items-center gap-3 ${
          active
            ? 'border-slate-900 bg-slate-50 font-bold text-slate-900'
            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium'
        }"
      >
        <span class="text-xl">${ch.icon}</span>
        <span class="text-sm">${escapeHtml(ch.label)}</span>
      </button>
    `;
  }).join('');
}

function applyAccentColor(hex) {
  const ids = ['header-badge', 'progress-bar', 'next-btn', 'start-btn'];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.backgroundColor = hex;
  });
  const range = document.getElementById('capital-range');
  if (range) range.style.accentColor = hex;
}

function init() {
  renderSegments();
  renderAudiences();
  renderChannels();
  updateFairCounter();
}

function startWizard() {
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('wizard-section').classList.remove('hidden');
  goToStep(1);
}

function resetWizard() {
  state.name = '';
  state.slogan = '';
  state.founder = '';
  state.segmentId = DEFAULT_SEGMENT_ID;
  state.audiences = ['jovens'];
  state.audienceDetail = '';
  state.capital = DEFAULT_CAPITAL;
  state.channels = ['instagram', 'indicacao'];

  document.getElementById('company-name').value = '';
  document.getElementById('company-slogan').value = '';
  document.getElementById('founder-name').value = '';
  document.getElementById('audience-detail').value = '';
  setCapitalPreset(DEFAULT_CAPITAL);
  renderSegments();
  renderAudiences();
  renderChannels();

  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('wizard-section').classList.add('hidden');
  document.getElementById('hero-section').classList.remove('hidden');
  // antes era um hex fixo, que só funcionava por coincidência com o segmento padrão
  applyAccentColor(getSegment().primary);
}

function editAnswers() {
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('wizard-section').classList.remove('hidden');
  goToStep(1);
}

function goToStep(step) {
  currentStep = step;
  document.querySelectorAll('.step-panel').forEach((el, idx) => {
    el.classList.toggle('hidden', idx + 1 !== step);
  });

  const pct = Math.round((step / TOTAL_STEPS) * 100);
  document.getElementById('step-indicator').textContent = `ETAPA ${step} DE ${TOTAL_STEPS}`;
  document.getElementById('step-percent').textContent = `${pct}%`;
  document.getElementById('progress-bar').style.width = `${pct}%`;

  document.getElementById('prev-btn').classList.toggle('invisible', step === 1);
  document.getElementById('next-btn').textContent =
    step === TOTAL_STEPS ? 'Gerar minha empresa 🚀' : 'Próxima pergunta →';
}

function nextStep() {
  if (currentStep === 1) {
    const nameInput = document.getElementById('company-name').value.trim();
    const errEl = document.getElementById('step1-error');
    if (!nameInput) {
      errEl.classList.remove('hidden');
      document.getElementById('company-name').focus();
      return;
    }
    errEl.classList.add('hidden');
    state.name = nameInput;
    state.slogan = document.getElementById('company-slogan').value.trim();
    state.founder = document.getElementById('founder-name').value.trim();
  }

  if (currentStep === 3) {
    state.audienceDetail = document.getElementById('audience-detail').value.trim();
    if (state.audiences.length === 0) {
      state.audiences = ['publico-local'];
      renderAudiences();
    }
  }

  if (currentStep === TOTAL_STEPS) {
    if (state.channels.length === 0) {
      state.channels = ['instagram'];
      renderChannels();
    }
    buildResult();
    return;
  }

  goToStep(currentStep + 1);
}

function prevStep() {
  if (currentStep > 1) goToStep(currentStep - 1);
}

function selectSegment(id) {
  state.segmentId = id;
  applyAccentColor(getSegment().primary);
  renderSegments();
}

function toggleAudience(id) {
  state.audiences = state.audiences.includes(id)
    ? state.audiences.filter((item) => item !== id)
    : [...state.audiences, id];
  renderAudiences();
}

function toggleChannel(id) {
  state.channels = state.channels.includes(id)
    ? state.channels.filter((item) => item !== id)
    : [...state.channels, id];
  renderChannels();
}

function updateCapitalFromRange(val) {
  state.capital = Number(val);
  document.getElementById('capital-display').textContent = formatBRL(state.capital);
}

function setCapitalPreset(val) {
  state.capital = val;
  const range = document.getElementById('capital-range');
  // clampa no intervalo do input: 15000 (demo) ficaria travado em max
  if (range) {
    const min = Number(range.min || 500);
    const max = Number(range.max || 50000);
    const clamped = Math.min(Math.max(Number(val) || min, min), max);
    range.value = clamped;
    state.capital = clamped;
  }
  document.getElementById('capital-display').textContent = formatBRL(state.capital);
}

function suggestNameAndSlogan() {
  const pick = NAME_SUGGESTIONS[Math.floor(Math.random() * NAME_SUGGESTIONS.length)];
  document.getElementById('company-name').value = pick.name;
  if (!document.getElementById('company-slogan').value.trim()) {
    document.getElementById('company-slogan').value = pick.slogan;
  }
  document.getElementById('step1-error').classList.add('hidden');
}

// ---------------------------------------------------------------- resultado

function buildSvgLogo(name, primary, secondary) {
  const initials = getInitials(name);
  const uid = `logoGrad-${Math.random().toString(36).slice(2, 8)}`; // id único por render
  return `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="[w3.org](http://www.w3.org/2000/svg)" role="img" aria-label="Logo de ${escapeHtml(name)}">
      <defs>
        <linearGradient id="${uid}" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="100%" stop-color="${secondary}" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#${uid})" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
      <circle cx="52" cy="12" r="5" fill="rgba(255,255,255,0.3)" />
      <text x="32" y="39" text-anchor="middle" fill="#ffffff" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="22" letter-spacing="-0.5">${escapeHtml(initials)}</text>
    </svg>
  `;
}

function buildResult() {
  const seg = getSegment();
  const selectedAudiences = AUDIENCES.filter((a) => state.audiences.includes(a.id));
  const selectedChannels = CHANNELS.filter((c) => state.channels.includes(c.id));

  document.getElementById('wizard-section').classList.add('hidden');
  document.getElementById('hero-section').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');

  document.getElementById('brand-banner').style.background =
    `linear-gradient(135deg, ${seg.primary} 0%, ${seg.secondary} 100%)`;

  document.getElementById('svg-logo-container').innerHTML =
    buildSvgLogo(state.name, seg.primary, seg.secondary);
  document.getElementById('res-segment-icon').textContent = seg.icon;
  document.getElementById('res-segment-name').textContent = seg.name;
  document.getElementById('res-company-name').textContent = state.name;
  document.getElementById('res-company-slogan').textContent =
    state.slogan ? `"${state.slogan}"` : `"${seg.name} com foco em quem importa"`;
  document.getElementById('res-founder').textContent = state.founder || 'Empreendedor(a) da Feira';
  document.getElementById('res-date').textContent = new Date().toLocaleDateString('pt-BR');

  const audienceNames = selectedAudiences.map((a) => a.label.toLowerCase()).join(' e ');
  document.getElementById('res-value-prop').textContent =
    `A ${state.name} atua em ${seg.name} para atender ${audienceNames}, combinando proposta prática, foco no cliente e divulgação via ${selectedChannels
      .map((c) => c.label.split(' (')[0])
      .join(', ')}.`;

  document.getElementById('res-palette').innerHTML = [seg.primary, seg.secondary, '#0f172a']
    .map(
      (hex) => `
      <button
        type="button"
        onclick="copyText('${hex}')"
        title="Clique para copiar ${hex}"
        class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:border-slate-400 cursor-pointer"
      >
        <span class="w-3.5 h-3.5 rounded-full inline-block border border-black/10" style="background:${hex}"></span>
        ${hex}
      </button>
    `
    )
    .join('');

  document.getElementById('res-audiences').innerHTML = selectedAudiences
    .map(
      (a) =>
        `<span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">${a.icon} ${escapeHtml(
          a.label
        )}</span>`
    )
    .join('');

  document.getElementById('res-audience-detail').textContent = state.audienceDetail
    ? `Perfil adicional: ${state.audienceDetail}`
    : '';

  document.getElementById('res-channels').innerHTML = selectedChannels
    .map(
      (c) =>
        `<span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">${c.icon} ${escapeHtml(
          c.label
        )}</span>`
    )
    .join('');

  const firstChannel = selectedChannels[0]?.label || 'seu principal canal';
  const steps = [
    `Validar a oferta da <strong>${escapeHtml(state.name)}</strong> conversando com pelo menos 10 pessoas do público escolhido.`,
    `Montar uma primeira versão enxuta (MVP ou lote inicial) com foco no orçamento de <strong>${formatBRL(
      state.capital
    )}</strong>.`,
    `Publicar os primeiros conteúdos e ofertas em <strong>${escapeHtml(
      firstChannel
    )}</strong> para conquistar os primeiros clientes.`
  ];
  document.getElementById('res-next-steps').innerHTML = steps.map((s) => `<li>${s}</li>`).join('');

  const channelBoost = 1 + Math.min(selectedChannels.length, 4) * 0.05;
  const estRevenue = Math.round(state.capital * seg.revenueFactor * channelBoost);
  const estCost = Math.round(state.capital * seg.costFactor);
  const netMonthly = Math.max(estRevenue - estCost, Math.round(state.capital * 0.08));
  const paybackMonths = Math.max(1, Math.ceil(state.capital / netMonthly));

  document.getElementById('fin-capital').textContent = formatBRL(state.capital);
  document.getElementById('fin-revenue').textContent = formatBRL(estRevenue);
  document.getElementById('fin-cost').textContent = formatBRL(estCost);
  document.getElementById('fin-payback').textContent =
    `~${paybackMonths} ${paybackMonths === 1 ? 'mês' : 'meses'}`;

  document.getElementById('fin-allocation').innerHTML = seg.allocation
    .map((item) => {
      const amount = Math.round((state.capital * item.pct) / 100);
      return `
        <div>
          <div class="flex justify-between font-semibold text-slate-700 mb-1">
            <span>${escapeHtml(item.label)} (${item.pct}%)</span>
            <span>${formatBRL(amount)}</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full rounded-full" style="width:${item.pct}%; background:${seg.primary}"></div>
          </div>
        </div>
      `;
    })
    .join('');

  // evita duplicar o registro se o usuário voltar, editar e gerar de novo sem mudar nada
  const signature = JSON.stringify([
    state.name,
    state.slogan,
    state.founder,
    state.segmentId,
    state.audiences,
    state.audienceDetail,
    state.capital,
    state.channels
  ]);
  if (signature !== lastSavedSignature) {
    lastSavedSignature = signature;
    saveToHistory({
      id: Date.now(),
      name: state.name,
      slogan: state.slogan,
      segment: seg.name,
      icon: seg.icon,
      capital: state.capital,
      estRevenue,
      createdAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fillRandomDemo() {
  const demos = [
    {
      name: 'Sabor & Rota',
      slogan: 'Lanches artesanais rápidos para quem não para',
      founder: 'Lucas Almeida',
      segmentId: 'food',
      audiences: ['jovens', 'publico-local'],
      audienceDetail: 'Estudantes e trabalhadores no horário de almoço',
      capital: 8000,
      channels: ['instagram', 'whatsapp', 'presencial']
    },
    {
      name: 'EcoLar',
      slogan: 'Produtos de limpeza naturais sem plástico descartável',
      founder: 'Camila Rocha',
      segmentId: 'eco',
      audiences: ['familias', 'nicho-digital'],
      audienceDetail: 'Pessoas que buscam reduzir o lixo doméstico',
      capital: 12000,
      channels: ['instagram', 'parcerias', 'indicacao']
    },
    {
      name: 'AgendaFácil',
      slogan: 'Gestão simples para profissionais independentes',
      founder: 'Rafael Souza',
      segmentId: 'tech',
      audiences: ['profissionais', 'empresas'],
      audienceDetail: 'Estúdios, clínicas e consultores autônomos',
      capital: 15000,
      channels: ['trafego', 'indicacao', 'whatsapp']
    }
  ];

  const d = demos[Math.floor(Math.random() * demos.length)];
  // copia só as chaves conhecidas do state, para não injetar lixo
  Object.keys(state).forEach((key) => {
    if (key in d) state[key] = d[key];
  });
  state.audiences = [...d.audiences];
  state.channels = [...d.channels];

  document.getElementById('company-name').value = d.name;
  document.getElementById('company-slogan').value = d.slogan;
  document.getElementById('founder-name').value = d.founder;
  document.getElementById('audience-detail').value = d.audienceDetail;
  setCapitalPreset(d.capital);
  applyAccentColor(getSegment().primary);
  renderSegments();
  renderAudiences();
  renderChannels();

  buildResult();
}

// ---------------------------------------------------------------- histórico

function getHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function saveToHistory(entry) {
  const list = getHistory();
  list.unshift(entry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 30)));
  } catch {
    showToast('Não foi possível salvar o histórico.');
  }
  updateFairCounter();
}

function updateFairCounter() {
  const count = getHistory().length;
  const el = document.getElementById('fair-counter');
  if (el) el.textContent = `${count} ${count === 1 ? 'criada' : 'criadas'}`;
}

function toggleHistoryModal() {
  const modal = document.getElementById('history-modal');
  if (modal.classList.contains('hidden')) {
    renderHistoryList();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function renderHistoryList() {
  const list = getHistory();
  const container = document.getElementById('history-list');
  if (list.length === 0) {
    container.innerHTML =
      '<p class="text-slate-400 text-center py-8">Nenhuma empresa registrada ainda nesta sessão.</p>';
    return;
  }
  container.innerHTML = list
    .map(
      (item) => `
      <div class="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 flex items-center justify-between gap-3">
        <div>
          <div class="font-bold text-slate-900">${escapeHtml(item.icon)} ${escapeHtml(item.name)}</div>
          <div class="text-xs text-slate-500">${escapeHtml(item.segment)} · Capital: ${formatBRL(item.capital)}</div>
        </div>
        <span class="text-[11px] font-semibold text-slate-400">${escapeHtml(item.createdAt)}</span>
      </div>
    `
    )
    .join('');
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
  lastSavedSignature = null;
  updateFairCounter();
  renderHistoryList();
  showToast('Histórico limpo.');
}

function copySummaryText() {
  const seg = getSegment();
  const text = [
    `EMPRESA: ${state.name}`,
    state.slogan ? `SLOGAN: "${state.slogan}"` : null,
    `SEGMENTO: ${seg.name}`,
    `CAPITAL INICIAL: ${formatBRL(state.capital)}`,
    `CANAIS: ${state.channels
      .map((id) => CHANNELS.find((c) => c.id === id)?.label || id)
      .join(', ')}`
  ]
    .filter(Boolean)
    .join('\n');
  copyText(text, 'Resumo da empresa copiado!');
}

init();