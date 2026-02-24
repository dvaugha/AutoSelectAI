// ALPHA-X v4.0.3 | Private Neural Rebuild
const API_VERSION = '403';

const STOCK_DATABASE = [
    // AI & SEMIS
    { ticker: "NVDA", name: "Nvidia Corp", sector: "AI & Semiconductors", price: 191.55, entry: "188 - 192", target: 215, stop: 182, riskRating: "High", bullets: ["B100 GPU ramp exceeding guidance", "Institutional call volume mapping at 215 peak", "Reclaiming 5-day EMA with 1.4x relative volume"], catalyst: "GTC Conference Hype" },
    { ticker: "SMCI", name: "Super Micro", sector: "AI & Semiconductors", price: 535.20, entry: "525 - 540", target: 630, stop: 495, riskRating: "High", bullets: ["Mean-reversion play after 20% pullback", "Finding support at 20-day MA", "Strategic AI server dominance"], catalyst: "S&P 500 inclusion rumors" },
    { ticker: "AMD", name: "Advanced Micro", sector: "AI & Semiconductors", price: 162.40, entry: "160 - 163", target: 188, stop: 154, riskRating: "Moderate", bullets: ["MI300X market share expansion", "Technical breakout from 3-week base", "Bullish MACD cross on daily"], catalyst: "Enterprise AI adoption" },
    { ticker: "PLTR", name: "Palantir Tech", sector: "AI & Semiconductors", price: 36.80, entry: "35.5 - 37", target: 48, stop: 33.5, riskRating: "Moderate", bullets: ["S&P inclusion catalyst driving flow", "AIP adoption rate accelerating", "Strong relative strength vs SPY"], catalyst: "Government Contract Renewal" },
    { ticker: "AVGO", name: "Broadcom Inc", sector: "AI & Semiconductors", price: 185.20, entry: "182 - 186", target: 215, stop: 178, riskRating: "Low", bullets: ["AI networking chip supply constraint easing", "Hyperscale customer expansion", "Consistent institutional accumulation"], catalyst: "Custom AI Silicon ramp" },
    { ticker: "TSM", name: "TSMC", sector: "AI & Semiconductors", price: 172.10, entry: "168 - 173", target: 195, stop: 162, riskRating: "Low", bullets: ["2nm node production visibility", "Apple and Nvidia capacity lock-in", "Geopolitical risk premium easing"], catalyst: "Earnings Beat Guidance" },

    // NEW SPACE
    { ticker: "RKLB", name: "Rocket Lab USA", sector: "New Space Stocks", price: 22.40, entry: "21.5 - 22.5", target: 32, stop: 19.8, riskRating: "High", bullets: ["Neutron development milestones on track", "Increased launch frequency guidance", "Dark pool activity spike at 20.00 floor"], catalyst: "Launch Schedule Acceleration" },
    { ticker: "LUNR", name: "Intuitive Mach", sector: "New Space Stocks", price: 8.50, entry: "8.2 - 8.7", target: 14, stop: 7.4, riskRating: "High", bullets: ["Lunar landing contract updates expected", "High short squeeze probability", "Volume expansion on consolidation break"], catalyst: "NASA Mission Milestones" },
    { ticker: "PL", name: "Planet Labs", sector: "New Space Stocks", price: 3.20, entry: "3.1 - 3.4", target: 5.5, stop: 2.8, riskRating: "Moderate", bullets: ["Strategic shift to AI-driven data analytics", "Improving EBITDA margins", "Baseline support holding at 100-day MA"], catalyst: "Gov Satellite Data Deal" },
    { ticker: "SPCE", name: "Virgin Galactic", sector: "New Space Stocks", price: 0.85, entry: "0.8 - 0.9", target: 1.8, stop: 0.7, riskRating: "Extreme", bullets: ["Delta class flight testing imminent", "Oversold RSI bounce potential", "Speculative capital rotation into space"], catalyst: "Fleet Expansion Update" },
    { ticker: "SPIR", name: "Spire Global", sector: "New Space Stocks", price: 12.40, entry: "12 - 13", target: 18, stop: 10.5, riskRating: "Moderate", bullets: ["Maritime data division growth 40% YoY", "Predictive maintenance contracts increasing", "Bullish technical setup on weekly chart"], catalyst: "AI Data Partnership" },
    { ticker: "ASTS", name: "AST SpaceMobile", sector: "New Space Stocks", price: 28.50, entry: "27 - 29", target: 42, stop: 24.5, riskRating: "High", bullets: ["Commercial satellite array deployment", "Verizon/AT&T partnership scaling", "First-mover advantage in space cellular"], catalyst: "Launch Window Approval" },

    // MINING
    { ticker: "ALB", name: "Albemarle Corp", sector: "Mining Stocks", price: 92.40, entry: "90 - 93", target: 120, stop: 84, riskRating: "Moderate", bullets: ["Lithium price bottoming formation", "Direct lithium extraction pilot success", "Institutional 'smart money' accumulation"], catalyst: "EV Supply Chain Recovery" },
    { ticker: "LAC", name: "Lithium Americas", sector: "Mining Stocks", price: 4.80, entry: "4.6 - 4.9", target: 8.5, stop: 4.1, riskRating: "High", bullets: ["Thacker Pass development financing locked", "Strategic partnership rumors", "Technical cup-and-handle pattern weekly"], catalyst: "DOE Loan Disbursement" },
    { ticker: "GOLD", name: "Barrick Gold", sector: "Mining Stocks", price: 18.50, entry: "18.2 - 18.7", target: 24, stop: 17.4, riskRating: "Low", bullets: ["Gold spot price breakout to all-time highs", "Operating cost reduction beating guidance", "Defensive capital flow transition"], catalyst: "Central Bank Accumulation" },
    { ticker: "CCJ", name: "Cameco Corp", sector: "Mining Stocks", price: 54.20, entry: "52 - 55", target: 72, stop: 49, riskRating: "Moderate", bullets: ["Uranium supply deficit widening", "New nuclear power plant approvals global", "Long-term contract pricing rising"], catalyst: "Nuclear Energy Pivot" },
    { ticker: "MP", name: "MP Materials", sector: "Mining Stocks", price: 16.80, entry: "16 - 17.5", target: 26, stop: 14.8, riskRating: "High", bullets: ["Rare earth neodymium price stabilized", "Processing facility ramp at Stage 2", "Strategic value for domestic supply"], catalyst: "Trade Restriction News" },

    // TECHNOLOGY
    { ticker: "MSFT", name: "Microsoft", sector: "Technology", price: 412.50, entry: "408 - 415", target: 460, stop: 395, riskRating: "Low", bullets: ["Azure AI growth 30%+", "Copilot monetization scaling", "Massive institutional core hold"], catalyst: "Enterprise AI Expansion" },
    { ticker: "META", name: "Meta Platforms", sector: "Technology", price: 504.20, entry: "495 - 508", target: 575, stop: 480, riskRating: "Moderate", bullets: ["Ad revenue re-acceleration via AI", "Llama 3 open source leadership", "Strong free cash flow generation"], catalyst: "Ad Tech Breakthrough" },
    { ticker: "GOOGL", name: "Alphabet Inc", sector: "Technology", price: 168.40, entry: "164 - 170", target: 195, stop: 158, riskRating: "Low", bullets: ["Gemini integration across Google Workspace", "Search dominance remains unchallenged", "Undervalued vs Big Tech peers"], catalyst: "Cloud Profitability" },

    // DEFENSE
    { ticker: "LMT", name: "Lockheed Martin", sector: "Defense", price: 462.80, entry: "458 - 465", target: 520, stop: 442, riskRating: "Low", bullets: ["F-35 deliveries back on track", "Record backlog of international orders", "Safe-haven capital flows during unrest"], catalyst: "Geopolitical Tensions" },
    { ticker: "RTX", name: "Raytheon Tech", sector: "Defense", price: 102.10, entry: "100 - 103", target: 125, stop: 96, riskRating: "Low", bullets: ["Pratt & Whitney engine fixes complete", "Massive missile defense contract tailwinds", "High barrier to entry in defense tech"], catalyst: "Defense Budget Expansion" },
    { ticker: "HWM", name: "Howmet Aero", sector: "Defense", price: 82.40, entry: "80 - 83", target: 105, stop: 76, riskRating: "Moderate", bullets: ["Aerospace supply chain leader", "Propulsion component demand surge", "Perfect technical breakout setup"], catalyst: "Air Travel Recovery" }
];

let activeFilterValue = 'all';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Alpha-X v4.0.2 Initializing...");
    initLoader();
    updateTime();

    // Critical: Move listener attachment to after app is ready, 
    // but we'll pre-bind them to handle fast interactions
    bindEvents();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js?v=' + API_VERSION);
    }
});

function initLoader() {
    const bar = document.getElementById('loading-bar');
    const screen = document.getElementById('warning-screen');
    const app = document.getElementById('app-container');

    if (bar) setTimeout(() => { bar.style.width = '100%'; }, 100);

    setTimeout(() => {
        if (screen) screen.classList.add('fade-out');
        setTimeout(() => {
            if (screen) screen.classList.add('hidden');
            if (app) app.classList.remove('hidden');
            if (app) app.classList.add('fade-in');
            refreshStocks();
        }, 500);
    }, 3200);
}

function updateTime() {
    const el = document.getElementById('current-time');
    if (el) {
        const now = new Date();
        el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    setTimeout(updateTime, 1000);
}

function bindEvents() {
    const spaceBtn = document.getElementById('filter-space');
    const miningBtn = document.getElementById('filter-mining');
    const sectorDrop = document.getElementById('sector-dropdown');
    const refreshBtn = document.getElementById('refresh-picks');
    const resetBtn = document.getElementById('reset-app');
    const overlay = document.getElementById('modal-overlay');

    if (spaceBtn) spaceBtn.addEventListener('click', () => handleFilterClick('New Space Stocks', 'filter-space'));
    if (miningBtn) miningBtn.addEventListener('click', () => handleFilterClick('Mining Stocks', 'filter-mining'));

    if (sectorDrop) {
        sectorDrop.addEventListener('change', (e) => {
            activeFilterValue = e.target.value;
            updateFilterLabel(activeFilterValue);
            // Clear space/mining button highlights
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            refreshStocks();
        });
    }

    if (refreshBtn) refreshBtn.addEventListener('click', refreshStocks);

    if (resetBtn) resetBtn.addEventListener('click', () => {
        if (confirm("Factory Reset Application Cache?")) {
            localStorage.clear();
            window.location.reload(true);
        }
    });

    if (overlay) overlay.addEventListener('click', closeModal);
}

function handleFilterClick(sectorName, btnId) {
    activeFilterValue = sectorName;

    // UI Feedback
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(btnId).classList.add('active');

    // Sync dropdown if possible
    const select = document.getElementById('sector-dropdown');
    if (select) {
        // Find option with matching value
        const exists = Array.from(select.options).some(o => o.value === sectorName);
        if (exists) select.value = sectorName;
        else select.value = 'all'; // Fallback
    }

    updateFilterLabel(sectorName);
    refreshStocks();
}

function updateFilterLabel(val) {
    const label = document.getElementById('active-filter-label');
    if (label) {
        label.textContent = val === 'all' ? 'All Sectors Feed' : `${val} Feed`;
    }
}

function refreshStocks() {
    const stockFeed = document.getElementById('stock-feed');
    const timestamp = document.getElementById('timestamp');
    const refreshBtn = document.getElementById('refresh-picks');

    // Animation
    if (refreshBtn) {
        const icon = refreshBtn.querySelector('svg, .lucide');
        if (icon) icon.classList.add('animate-spin');
        // We'll remove it after cards are rendered
    }

    // Timestamp
    if (timestamp) {
        const now = new Date();
        timestamp.textContent = `Picks Synced: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }

    // Filter Database
    let pool = STOCK_DATABASE;
    if (activeFilterValue !== 'all') {
        pool = STOCK_DATABASE.filter(s => s.sector === activeFilterValue);
    }

    // If pool is small, backfill with randoms but prioritize the sector
    if (pool.length < 5) {
        const others = STOCK_DATABASE.filter(s => s.sector !== activeFilterValue);
        const extra = others.sort(() => 0.5 - Math.random()).slice(0, 5 - pool.length);
        pool = [...pool, ...extra];
    }

    // Shuffle and pick top 5
    const selected = pool.sort(() => 0.5 - Math.random()).slice(0, 5);

    // Small delay to make the refresh feel "computational"
    setTimeout(() => {
        renderCards(selected);
        if (refreshBtn) {
            const icon = refreshBtn.querySelector('svg, .lucide');
            if (icon) icon.classList.remove('animate-spin');
        }
    }, 400);
}

function renderCards(stocks) {
    const feed = document.getElementById('stock-feed');
    if (!feed) return;

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
                    <h2 class="text-xl font-extrabold tracking-tight">${stock.ticker} <span class="sector-tag ml-1">${stock.sector}</span></h2>
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
                    <span class="rr-badge text-white/40">R:R ${rr}x</span>
                </div>
                <div class="text-right">
                    <span class="text-[8px] font-black text-accent uppercase">+${upside}% Pot.</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openModal(stock, upside, riskPct, rr));
        feed.appendChild(card);
    });

    // Refresh Lucide Icons for new cards
    if (window.lucide) window.lucide.createIcons();
}

function openModal(stock, upside, riskPct, rr) {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    if (!overlay || !container) return;

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
            <section class="p-4 bg-white/2 rounded-2xl border border-white/5">
                <div class="flex items-center gap-2 mb-3">
                    <i data-lucide="brain-circuit" class="w-4 h-4 text-accent"></i>
                    <h3 class="text-[10px] uppercase font-black tracking-widest text-accent">Neural Rationale</h3>
                </div>
                <ul class="text-[11px] text-gray-400 space-y-2 leading-relaxed">
                    ${stock.bullets.map(b => `<li class="flex items-start gap-2"><div class="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0"></div><span>${b}</span></li>`).join('')}
                </ul>
            </section>

            <section class="p-4 bg-accent/5 rounded-2xl border border-accent/20">
                <div class="text-[8px] uppercase font-black text-accent/60 mb-1">Primary Catalyst</div>
                <div class="text-xs font-bold text-white tracking-tight">${stock.catalyst}</div>
            </section>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold uppercase mb-2">3-5D Potential</div>
                    <div class="text-xl font-bold text-accent">+${upside}%</div>
                    <div class="text-[8px] text-zinc-500 mt-1">To $${stock.target.toFixed(2)}</div>
                </div>
                <div class="bg-black/40 p-4 rounded-2xl border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold uppercase mb-2">Max Risk</div>
                    <div class="text-xl font-bold text-rose-500">-${riskPct}%</div>
                    <div class="text-[8px] text-zinc-500 mt-1">Exit at $${stock.stop.toFixed(2)}</div>
                </div>
            </div>

            <div class="divide-y divide-white/5 border-y border-white/5">
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase">Risk Rating</span>
                    <span class="text-xs font-bold uppercase ${riskClass}">${stock.riskRating}</span>
                </div>
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase">Reward Ratio</span>
                    <span class="text-xs font-bold text-white">${rr}x Unit</span>
                </div>
            </div>

            <button id="close-modal-btn" class="w-full py-4 bg-accent text-black rounded-2xl text-[10px] font-black uppercase tracking-widest mt-4 shadow-[0_0_20px_var(--accent-glow)]">
                Close Intelligence Feed
            </button>
        </div>
    `;

    overlay.classList.add('active');

    // Re-bind close button specifically
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
}
