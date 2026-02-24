// ALPHA-X v4.0 | Private Neural Rebuild
const API_VERSION = '400';

const STOCK_DATABASE = [
    // AI & SEMIS
    { ticker: "NVDA", name: "Nvidia Corp", sector: "AI & Semiconductors", price: 191.55, entry: "188 - 192", target: 215, stop: 182, riskRating: "High", bullets: ["B100 GPU ramp exceeding guidance", "Institutional call volume mapping at 215 peak", "Reclaiming 5-day EMA with 1.4x relative volume"], catalyst: "GTC Conference Hype" },
    { ticker: "SMCI", name: "Super Micro", sector: "AI & Semiconductors", price: 535.20, entry: "525 - 540", target: 620, stop: 495, riskRating: "High", bullets: ["Mean-reversion play after 20% pullback", "Finding support at 20-day MA", "Strategic AI server dominance"], catalyst: "S&P 500 inclusion rumors" },
    { ticker: "AMD", name: "Advanced Micro", sector: "AI & Semiconductors", price: 162.40, entry: "160 - 163", target: 185, stop: 154, riskRating: "Moderate", bullets: ["MI300X market share expansion", "Technical breakout from 3-week base", "Bullish MACD cross on daily"], catalyst: "Enterprise AI adoption" },
    { ticker: "PLTR", name: "Palantir Tech", sector: "AI & Semiconductors", price: 36.80, entry: "35.5 - 37", target: 45, stop: 33.5, riskRating: "Moderate", bullets: ["S&P inclusion catalyst driving flow", "AIP adoption rate accelerating", "Strong relative strength vs SPY"], catalyst: "Government Contract Renewal" },
    { ticker: "AVGO", name: "Broadcom Inc", sector: "AI & Semiconductors", price: 185.20, entry: "182 - 186", target: 210, stop: 178, riskRating: "Low", bullets: ["AI networking chip supply constraint easing", "Hyperscale customer expansion", "Consistent institutional accumulation"], catalyst: "Custom AI Silicon ramp" },

    // NEW SPACE
    { ticker: "RKLB", name: "Rocket Lab USA", sector: "New Space Stocks", price: 22.40, entry: "21.5 - 22.5", target: 28, stop: 19.8, riskRating: "High", bullets: ["Neutron development milestones on track", "Increased launch frequency guidance", "Dark pool activity spike at 20.00 floor"], catalyst: "Launch Schedule Acceleration" },
    { ticker: "LUNR", name: "Intuitive Mach", sector: "New Space Stocks", price: 8.50, entry: "8.2 - 8.7", target: 12, stop: 7.4, riskRating: "High", bullets: ["Lunar landing contract updates expected", "High short squeeze probability", "Volume expansion on consolidation break"], catalyst: "NASA Mission Milestones" },
    { ticker: "PL", name: "Planet Labs", sector: "New Space Stocks", price: 3.20, entry: "3.1 - 3.3", target: 4.5, stop: 2.8, riskRating: "Moderate", bullets: ["Strategic shift to AI-driven data analytics", "Improving EBITDA margins", "Baseline support holding at 100-day MA"], catalyst: "Gov Satellite Data Deal" },
    { ticker: "SPCE", name: "Virgin Galactic", sector: "New Space Stocks", price: 0.85, entry: "0.8 - 0.9", target: 1.5, stop: 0.7, riskRating: "Extreme", bullets: ["Delta class flight testing imminent", "Oversold RSI bounce potential", "Speculative capital rotation into space"], catalyst: "Fleet Expansion Update" },
    { ticker: "SPIR", name: "Spire Global", sector: "New Space Stocks", price: 12.40, entry: "12 - 12.8", target: 18, stop: 10.5, riskRating: "Moderate", bullets: ["Maritime data division growth 40% YoY", "Predictive maintenance contracts increasing", "Bullish technical setup on weekly chart"], catalyst: "AI Data Partnership" },

    // MINING
    { ticker: "ALB", name: "Albemarle Corp", sector: "Mining Stocks", price: 92.40, entry: "90 - 93", target: 115, stop: 84, riskRating: "Moderate", bullets: ["Lithium price bottoming formation", "Direct lithium extraction pilot success", "Institutional 'smart money' accumulation"], catalyst: "EV Supply Chain Recovery" },
    { ticker: "LAC", name: "Lithium Americas", sector: "Mining Stocks", price: 4.80, entry: "4.6 - 4.9", target: 7.2, stop: 4.1, riskRating: "High", bullets: ["Thacker Pass development financing locked", "Strategic partnership rumors", "Technical cup-and-handle pattern weekly"], catalyst: "DOE Loan Disbursement" },
    { ticker: "GOLD", name: "Barrick Gold", sector: "Mining Stocks", price: 18.50, entry: "18.2 - 18.7", target: 23, stop: 17.4, riskRating: "Low", bullets: ["Gold spot price breakout to all-time highs", "Operating cost reduction beating guidance", "Defensive capital flow transition"], catalyst: "Central Bank Accumulation" },
    { ticker: "CCJ", name: "Cameco Corp", sector: "Mining Stocks", price: 54.20, entry: "52 - 55", target: 68, stop: 49, riskRating: "Moderate", bullets: ["Uranium supply deficit widening", "New nuclear power plant approvals global", "Long-term contract pricing rising"], catalyst: "Nuclear Energy Pivot" },
    { ticker: "MP", name: "MP Materials", sector: "Mining Stocks", price: 16.80, entry: "16 - 17.5", target: 24, stop: 14.8, riskRating: "High", bullets: ["Rare earth neodymium price stabilized", "Processing facility ramp at Stage 2", "Strategic value for domestic supply"], catalyst: "Trade Restriction News" },

    // ENERGY
    { ticker: "XOM", name: "Exxon Mobil", sector: "Energy", price: 102.50, entry: "101 - 104", target: 115, stop: 98, riskRating: "Low", bullets: ["Crude oil pivot at $76 barrel", "Free cash flow yields at 8% peak", "Massive share buyback program active"], catalyst: "OPEC+ Supply Extension" },
    { ticker: "VLO", name: "Valero Energy", sector: "Energy", price: 142.40, entry: "140 - 144", target: 165, stop: 134, riskRating: "Moderate", bullets: ["Refining cracks spreading bullishly", "Biofuel division expansion success", "Technical breakout 52-week highs"], catalyst: "Crack Spread Expansion" },
    { ticker: "CHKE", name: "Chesapeake", sector: "Energy", price: 82.10, entry: "80 - 84", target: 95, stop: 76, riskRating: "Moderate", bullets: ["Natural gas storage levels dropping", "Merger synergy savings exceeding target", "Institutional dark pool accumulation"], catalyst: "Cold Snap Forecast" },

    // HEALTHCARE & BIOTECH
    { ticker: "LLY", name: "Eli Lilly", sector: "Healthcare", price: 795.20, entry: "780 - 798", target: 880, stop: 765, riskRating: "Low", bullets: ["GLP-1 Zepbound demand unmatched", "Expanding production manufacturing base", "S&P 500 relative strength outperformer"], catalyst: "Clinical Trial Data Release" },
    { ticker: "CRSP", name: "CRISPR Therapeutics", sector: "Biotechnology", price: 58.40, entry: "56 - 59", target: 82, stop: 52, riskRating: "High", bullets: ["Gene-editing commercial ramp in progress", "Pipeline expansion into autoimmune", "Short interest high, squeeze potential"], catalyst: "FDA Program Approval" },
    { ticker: "VRTX", name: "Vertex Pharma", sector: "Healthcare", price: 442.10, entry: "435 - 445", target: 510, stop: 418, riskRating: "Low", bullets: ["Cystic Fibrosis franchise dominance", "Pain management drug data positive", "Heavy institutional conviction support"], catalyst: "Pipeline Expansion News" },

    // DEFENSE & INDUSTRIALS
    { ticker: "LMT", name: "Lockheed Martin", sector: "Defense", price: 462.80, entry: "458 - 465", target: 515, stop: 442, riskRating: "Low", bullets: ["Global defense budget expansion cycle", "F-35 program delivery ramp", "Shareholder yield via consistent dividends"], catalyst: "Geopolitical Tensions Update" },
    { ticker: "CAT", name: "Caterpillar Inc", sector: "Industrials", price: 342.10, entry: "338 - 345", target: 385, stop: 324, riskRating: "Low", bullets: ["Mining equipment demand structural shift", "Infrastructure project backlog record high", "Margin expansion in energy sector"], catalyst: "Global Infrastructure Cycle" }
];

let activeFilter = { type: 'all', value: 'all' };

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    updateTime();
    initEventListeners();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js?v=' + API_VERSION);
    }
});

function initLoader() {
    const bar = document.getElementById('loading-bar');
    const screen = document.getElementById('warning-screen');
    const app = document.getElementById('app-container');
    setTimeout(() => { bar.style.width = '100%'; }, 100);
    setTimeout(() => {
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.classList.add('hidden');
            app.classList.remove('hidden');
            app.classList.add('fade-in');
            refreshStocks();
        }, 500);
    }, 3200);
}

function updateTime() {
    const el = document.getElementById('current-time');
    const now = new Date();
    if (el) el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTimeout(updateTime, 1000);
}

function initEventListeners() {
    // Theme buttons
    document.getElementById('filter-space').onclick = () => setActiveFilter('button', 'New Space Stocks', 'filter-space');
    document.getElementById('filter-mining').onclick = () => setActiveFilter('button', 'Mining Stocks', 'filter-mining');

    // Sector dropdown
    const sectorDrop = document.getElementById('sector-dropdown');
    sectorDrop.onchange = (e) => {
        setActiveFilter('dropdown', e.target.value);
    };

    // Refresh button
    document.getElementById('refresh-picks').onclick = refreshStocks;

    // Nuclear Reset hack
    document.getElementById('reset-app').onclick = () => { if (confirm("Clear Cache?")) { localStorage.clear(); window.location.reload(true); } };

    // Overlay closer
    document.getElementById('modal-overlay').onclick = closeModal;
}

function setActiveFilter(type, value, elementId = null) {
    activeFilter = { type, value };

    // Clear button states
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (elementId) document.getElementById(elementId).classList.add('active');

    // Update label
    const label = document.getElementById('active-filter-label');
    label.textContent = `${value} Feed`;

    refreshStocks();
}

function refreshStocks() {
    const stockFeed = document.getElementById('stock-feed');
    const timestamp = document.getElementById('timestamp');

    // Rotate refresh icon
    const refreshBtn = document.getElementById('refresh-picks');
    const icon = refreshBtn.querySelector('i');
    icon.classList.add('animate-spin');
    setTimeout(() => icon.classList.remove('animate-spin'), 1000);

    // Update timestamp
    const now = new Date();
    timestamp.textContent = `Picks Synced: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    // Filter Logic
    let pool = STOCK_DATABASE;
    if (activeFilter.value !== 'all') {
        pool = STOCK_DATABASE.filter(s => s.sector === activeFilter.value);
    }

    // If pool is too small, mix in some 'All' to ensure 5 cards
    if (pool.length < 5) {
        const remaining = 5 - pool.length;
        const others = STOCK_DATABASE.filter(s => s.sector !== activeFilter.value);
        const extra = others.sort(() => 0.5 - Math.random()).slice(0, remaining);
        pool = [...pool, ...extra];
    }

    // Shuffle and pick 5
    const selected = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
    renderCards(selected);
}

function renderCards(stocks) {
    const feed = document.getElementById('stock-feed');
    feed.innerHTML = '';

    stocks.forEach((stock, idx) => {
        const riskClass = `risk-${stock.riskRating.toLowerCase()}`;
        const upside = (((stock.target - stock.price) / stock.price) * 100).toFixed(1);
        const riskPct = (((stock.price - stock.stop) / stock.price) * 100).toFixed(1);
        const rr = (upside / riskPct).toFixed(2);

        const card = document.createElement('div');
        card.className = 'stock-card fade-in';
        card.style.animationDelay = `${idx * 0.1}s`;

        card.innerHTML = `
            <div class="rank-pill">#${idx + 1}</div>
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-xl font-extrabold tracking-tight">${stock.ticker} <span class="sector-tag ml-2">${stock.sector}</span></h2>
                    <p class="text-[9px] text-zinc-600 font-bold uppercase tracking-widest mt-1">${stock.name}</p>
                </div>
                <div class="text-right">
                    <p class="text-[12px] font-mono font-bold text-white">$${stock.price.toFixed(2)}</p>
                    <p class="text-[7px] text-zinc-600 font-black uppercase mt-1">Live Pivot</p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p class="text-[7px] text-zinc-600 uppercase font-black tracking-tighter mb-1">Buy Range</p>
                    <p class="text-[11px] font-bold text-white">${stock.entry}</p>
                </div>
                <div class="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p class="text-[7px] text-zinc-600 uppercase font-black tracking-tighter mb-1">Target</p>
                    <p class="text-[11px] font-bold text-accent">$${stock.target.toFixed(2)}</p>
                </div>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/5">
                <div class="flex items-center gap-2">
                    <span class="text-[8px] font-black uppercase ${riskClass}">${stock.riskRating} RISK</span>
                    <span class="rr-badge text-white/40">R:R ${rr}</span>
                </div>
                <div class="text-right">
                    <span class="text-[8px] font-black text-accent uppercase">+${upside}% Pot.</span>
                </div>
            </div>
        `;

        card.onclick = () => openModal(stock, upside, riskPct, rr);
        feed.appendChild(card);
    });
    lucide.createIcons();
}

function openModal(stock, upside, riskPct, rr) {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    const riskClass = `risk-${stock.riskRating.toLowerCase()}`;

    container.innerHTML = `
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-3xl font-extrabold tracking-tighter italic">${stock.ticker}</h2>
                <div class="sector-tag mt-2 inline-block">${stock.sector}</div>
            </div>
            <div class="text-right">
                <div class="text-xs font-bold text-white mb-1">SPOT PRICE</div>
                <div class="text-xl font-mono font-bold text-accent">$${stock.price.toFixed(2)}</div>
            </div>
        </div>

        <div class="space-y-6">
            <!-- AI Rationale -->
            <section class="p-4 bg-white/2 rounded-2xl border border-white/5">
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="brain-circuit" class="w-4 h-4 text-accent"></i>
                    <h3 class="text-[10px] uppercase font-black tracking-widest text-accent">Neural Rationale</h3>
                </div>
                <ul class="text-[11px] text-gray-400 space-y-2 leading-relaxed">
                    ${stock.bullets.map(b => `<li class="flex items-start gap-2"><div class="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0"></div><span>${b}</span></li>`).join('')}
                </ul>
            </section>

            <!-- Catalyst Ticker -->
            <section class="p-4 bg-accent/5 rounded-2xl border border-accent/20">
                <div class="text-[8px] uppercase font-black text-accent/60 mb-1">Primary Catalyst</div>
                <div class="text-xs font-bold text-white tracking-tight">${stock.catalyst}</div>
            </section>

            <!-- Risk/Reward Dashboard -->
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold uppercase mb-2">Upside Potential</div>
                    <div class="text-xl font-bold text-accent">+${upside}%</div>
                    <div class="text-[8px] text-zinc-500 mt-1">To $${stock.target.toFixed(2)}</div>
                </div>
                <div class="bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold uppercase mb-2">Max Risk to Stop</div>
                    <div class="text-xl font-bold text-rose-500">-${riskPct}%</div>
                    <div class="text-[8px] text-zinc-500 mt-1">Exit at $${stock.stop.toFixed(2)}</div>
                </div>
            </div>

            <!-- Trade Metrics -->
            <div class="divide-y divide-white/5 border-y border-white/5">
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase">Risk Rating</span>
                    <span class="text-xs font-bold uppercase ${riskClass}">${stock.riskRating}</span>
                </div>
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase">Risk/Reward Alpha</span>
                    <span class="text-xs font-bold text-white">${rr}x Unit</span>
                </div>
            </div>

            <button onclick="closeModal()" class="w-full py-4 bg-accent text-black rounded-2xl text-[10px] font-black uppercase tracking-widest mt-4 shadow-[0_0_20px_var(--accent-glow)]">
                Close Signal Feed
            </button>
        </div>
    `;

    overlay.classList.add('active');
    lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
}
