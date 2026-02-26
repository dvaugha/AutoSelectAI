const API_VERSION = '408';
const FINNHUB_KEY = localStorage.getItem('ALPHA_X_KEY') || '';
// NOTE: Set this via browser console: localStorage.setItem('ALPHA_X_KEY', 'YOUR_KEY')

const STOCK_DATABASE = [
    // AI & SEMIS
    { ticker: "NVDA", name: "Nvidia Corp", sector: "AI & Semiconductors", price: 189.76, entry: "185 - 192", target: 215, stop: 182, riskRating: "High", bullets: ["B100 GPU ramp exceeding guidance", "Institutional call volume mapping at 215 peak", "Reclaiming 5-day EMA with 1.4x relative volume"], catalyst: "GTC Conference Hype", optionsFlow: "Aggressive $220 Calls Sweep", flowSnippet: "Bullish Delta" },
    { ticker: "SMCI", name: "Super Micro", sector: "AI & Semiconductors", price: 33.58, entry: "31 - 34", target: 45, stop: 29, riskRating: "High", bullets: ["Post-split momentum play", "Finding support at psychological 30 level", "AI server backlog remains at record highs"], catalyst: "Liquidity Injection", optionsFlow: "High-volume $35 Put Selling", flowSnippet: "Support Build" },
    { ticker: "AMD", name: "Advanced Micro", sector: "AI & Semiconductors", price: 205.73, entry: "202 - 208", target: 245, stop: 194, riskRating: "Moderate", bullets: ["MI300X market share expansion", "Technical breakout from 3-week base", "Bullish MACD cross on daily"], catalyst: "Enterprise AI adoption", optionsFlow: "Institutional Accumulation via LEAPS", flowSnippet: "Long Flow" },
    { ticker: "PLTR", name: "Palantir Tech", sector: "AI & Semiconductors", price: 134.19, entry: "130 - 136", target: 165, stop: 122, riskRating: "Moderate", bullets: ["S&P inclusion catalyst driving flow", "AIP adoption rate accelerating", "Strong relative strength vs SPY"], catalyst: "Government Contract Renewal", optionsFlow: "$140 Call Buying Surge", flowSnippet: "Whale Flow" },
    { ticker: "AVGO", name: "Broadcom Inc", sector: "AI & Semiconductors", price: 332.31, entry: "325 - 335", target: 385, stop: 312, riskRating: "Low", bullets: ["AI networking chip supply constraint easing", "Hyperscale customer expansion", "Consistent institutional accumulation"], catalyst: "Custom AI Silicon ramp", optionsFlow: "Dark Pool Block Cross @ $330", flowSnippet: "Institutional" },
    { ticker: "TSM", name: "TSMC", sector: "AI & Semiconductors", price: 387.45, entry: "380 - 392", target: 450, stop: 365, riskRating: "Low", bullets: ["2nm node production visibility", "Apple and Nvidia capacity lock-in", "Geopolitical risk premium easing"], catalyst: "Earnings Beat Guidance", optionsFlow: "Bullish Reversal Flow Detected", flowSnippet: "Trend Shift" },

    // NEW SPACE
    { ticker: "RKLB", name: "Rocket Lab USA", sector: "New Space Stocks", price: 69.97, entry: "66 - 72", target: 105, stop: 62, riskRating: "High", bullets: ["Neutron development milestones ahead of schedule", "Q4 earnings expectations surging", "Dark pool activity spike at 65.00 floor"], catalyst: "Launch Schedule Acceleration", optionsFlow: "Heavy $75 Call Buying", flowSnippet: "Breakout Flow" },
    { ticker: "LUNR", name: "Intuitive Mach", sector: "New Space Stocks", price: 17.61, entry: "16.5 - 18", target: 28, stop: 14.5, riskRating: "High", bullets: ["Lunar landing contract updates expected", "High short squeeze probability", "Volume expansion on consolidation break"], catalyst: "NASA Mission Milestones", optionsFlow: "Unusual $20 Strike Activity", flowSnippet: "Squeeze Alert" },
    { ticker: "PL", name: "Planet Labs", sector: "New Space Stocks", price: 24.63, entry: "23.5 - 25.5", target: 38, stop: 21.8, riskRating: "Moderate", bullets: ["Strategic shift to AI-driven data analytics", "Improving EBITDA margins", "Baseline support holding at 100-day MA"], catalyst: "Gov Satellite Data Deal", optionsFlow: "Quiet Institutional Positioning", flowSnippet: "Smart Money" },
    { ticker: "SPCE", name: "Virgin Galactic", sector: "New Space Stocks", price: 2.43, entry: "2.3 - 2.6", target: 4.8, stop: 1.95, riskRating: "Extreme", bullets: ["Delta class flight testing imminent", "Oversold RSI bounce potential", "Speculative capital rotation into space"], catalyst: "Fleet Expansion Update", optionsFlow: "Speculative Grabbing of OTM Calls", flowSnippet: "Lotto Flow" },
    { ticker: "SPIR", name: "Spire Global", sector: "New Space Stocks", price: 9.04, entry: "8.5 - 9.5", target: 14, stop: 7.8, riskRating: "Moderate", bullets: ["Maritime data division growth 40% YoY", "Predictive maintenance contracts increasing", "Bullish technical setup on weekly chart"], catalyst: "AI Data Partnership", optionsFlow: "Institutional Sell-Side Exhaustion", flowSnippet: "Floor Solid" },
    { ticker: "ASTS", name: "AST SpaceMobile", sector: "New Space Stocks", price: 85.82, entry: "82 - 88", target: 135, stop: 74, riskRating: "High", bullets: ["Commercial satellite array deployment", "Verizon/AT&T partnership scaling", "First-mover advantage in space cellular"], catalyst: "Launch Window Approval", optionsFlow: "$100 Strike Gamma Squeeze Potential", flowSnippet: "Gamma Flow" },

    // MINING
    { ticker: "ALB", name: "Albemarle Corp", sector: "Mining Stocks", price: 187.15, entry: "182 - 190", target: 245, stop: 172, riskRating: "Moderate", bullets: ["Lithium price bottoming formation", "Direct lithium extraction pilot success", "Institutional 'smart money' accumulation"], catalyst: "EV Supply Chain Recovery", optionsFlow: "Cyclical Rotation detected", flowSnippet: "Cycle Shift" },
    { ticker: "LAC", name: "Lithium Americas", sector: "Mining Stocks", price: 5.04, entry: "4.8 - 5.2", target: 9.5, stop: 4.3, riskRating: "High", bullets: ["Thacker Pass development financing locked", "Strategic partnership rumors", "Technical cup-and-handle pattern weekly"], catalyst: "DOE Loan Disbursement", optionsFlow: "Bullish Put-Call Parity", flowSnippet: "Risk-On" },
    { ticker: "GOLD", name: "Barrick Gold", sector: "Mining Stocks", price: 49.90, entry: "48 - 52", target: 75, stop: 44, riskRating: "Low", bullets: ["Gold spot price breakout to all-time highs above $5k", "Operating cost reduction beating guidance", "Defensive capital flow transition"], catalyst: "Central Bank Accumulation", optionsFlow: "Massive Inflow into Bullish Spreads", flowSnippet: "Macro Flow" },
    { ticker: "CCJ", name: "Cameco Corp", sector: "Mining Stocks", price: 116.51, entry: "112 - 120", target: 165, stop: 104, riskRating: "Moderate", bullets: ["Uranium supply deficit widening", "New nuclear power plant approvals global", "Long-term contract pricing rising"], catalyst: "Nuclear Energy Pivot", optionsFlow: "Smart Money Buying Tail-Risk Protection", flowSnippet: "Hedge Flow" },
    { ticker: "MP", name: "MP Materials", sector: "Mining Stocks", price: 58.66, entry: "55 - 62", target: 88, stop: 52, riskRating: "High", bullets: ["Rare earth neodymium price stabilized", "Processing facility ramp at Stage 2", "Strategic value for domestic supply"], catalyst: "Trade Restriction News", optionsFlow: "Aggressive Block Trades Observed", flowSnippet: "Block Flow" },

    // TECHNOLOGY
    { ticker: "MSFT", name: "Microsoft", sector: "Technology", price: 400.66, entry: "395 - 405", target: 460, stop: 382, riskRating: "Low", bullets: ["Azure AI growth 30%+", "Copilot monetization scaling", "Massive institutional core hold"], catalyst: "Enterprise AI Expansion", optionsFlow: "Steady Accumulation via Diagonals", flowSnippet: "Core Build" },
    { ticker: "META", name: "Meta Platforms", sector: "Technology", price: 653.69, entry: "640 - 665", target: 780, stop: 615, riskRating: "Moderate", bullets: ["Ad revenue re-acceleration via AI", "Llama 3 open source leadership", "Strong free cash flow generation"], catalyst: "Ad Tech Breakthrough", optionsFlow: "Bullish Sentiment Intensity High", flowSnippet: "Sentiment+" },
    { ticker: "GOOGL", name: "Alphabet Inc", sector: "Technology", price: 313.03, entry: "305 - 320", target: 385, stop: 292, riskRating: "Low", bullets: ["Gemini integration across Google Workspace", "Search dominance remains unchallenged", "Undervalued vs Big Tech peers"], catalyst: "Cloud Profitability", optionsFlow: "Low IV Opportunity Buying", flowSnippet: "IV Crush Play" },

    // DEFENSE
    { ticker: "LMT", name: "Lockheed Martin", sector: "Defense", price: 647.50, entry: "635 - 655", target: 760, stop: 610, riskRating: "Low", bullets: ["F-35 deliveries back on track", "Record backlog of international orders", "Safe-haven capital flows during unrest"], catalyst: "Geopolitical Tensions", optionsFlow: "Safe-Haven Positioning", flowSnippet: "Defensive" },
    { ticker: "RTX", name: "Raytheon Tech", sector: "Defense", price: 196.13, entry: "190 - 202", target: 255, stop: 182, riskRating: "Low", bullets: ["Pratt & Whitney engine fixes complete", "Massive missile defense contract tailwinds", "High barrier to entry in defense tech"], catalyst: "Defense Budget Expansion", optionsFlow: "Institutional Sided-Flow detected", flowSnippet: "Direct Flow" },
    { ticker: "HWM", name: "Howmet Aero", sector: "Defense", price: 259.54, entry: "252 - 265", target: 320, stop: 242, riskRating: "Moderate", bullets: ["Aerospace supply chain leader", "Propulsion component demand surge", "Perfect technical breakout setup"], catalyst: "Air Travel Recovery", optionsFlow: "Volatility Expansion Expected", flowSnippet: "Vol++" },
    { ticker: "CAT", name: "Caterpillar Inc", sector: "Industrials", price: 743.00, entry: "725 - 755", target: 880, stop: 695, riskRating: "Low", bullets: ["Mining equipment demand structural shift", "Infrastructure project backlog record high", "Margin expansion in energy sector"], catalyst: "Global Infrastructure Cycle", optionsFlow: "Broad Based Institutional Accumulation", flowSnippet: "Heavy Flow" },

    // SPECIFIC PICKS (SMR, OKLO, ARKX)
    { ticker: "SMR", name: "NuScale Power", sector: "Energy", price: 13.40, entry: "12.5 - 14", target: 22, stop: 11.2, riskRating: "High", bullets: ["Leader in Small Modular Reactor (SMR) tech", "Bipartisan support for nuclear energy expansion", "Post-correction accumulation zone"], catalyst: "Government Nuclear Grants", optionsFlow: "Heavy Volume in $15 Calls", flowSnippet: "Gamma Build" },
    { ticker: "OKLO", name: "Oklo Inc", sector: "Energy", price: 68.35, entry: "65 - 72", target: 115, stop: 58, riskRating: "Very High", bullets: ["Sam Altman backed nuclear fission play", "Advanced micro-reactor commercialization", "Massive social sentiment engagement"], catalyst: "SMR Commercial License", optionsFlow: "Institutional Sweep of $80 Striks", flowSnippet: "Strike Sweep" },
    { ticker: "ARKX", name: "ARK Space ETF", sector: "New Space Stocks", price: 31.91, entry: "30 - 33", target: 48, stop: 28, riskRating: "Moderate", bullets: ["Diversified exposure to orbital manufacturing", "Captures global military space spend", "Technical breakout on weekly accumulation"], catalyst: "Space Economy Acceleration", optionsFlow: "ETF Basket Accumulation detected", flowSnippet: "Basket flow" }
];

let activeFilterValue = 'all';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Alpha-X v4.0.4 Initializing...");
    initLoader();
    updateTime();
    bindEvents();

    // Automatically trigger real-time sync if key is present
    if (FINNHUB_KEY) {
        fetchLatestPrices();
    }

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

    // Quick Ticker Buttons
    const btnSmr = document.getElementById('btn-smr');
    const btnOklo = document.getElementById('btn-oklo');
    const btnArkx = document.getElementById('btn-arkx');
    const strategyBtn = document.getElementById('strategy-info-btn');

    if (spaceBtn) spaceBtn.addEventListener('click', () => handleFilterClick('New Space Stocks', 'filter-space'));
    if (miningBtn) miningBtn.addEventListener('click', () => handleFilterClick('Mining Stocks', 'filter-mining'));

    if (btnSmr) btnSmr.addEventListener('click', () => openTickerModal('SMR'));
    if (btnOklo) btnOklo.addEventListener('click', () => openTickerModal('OKLO'));
    if (btnArkx) btnArkx.addEventListener('click', () => openTickerModal('ARKX'));
    if (strategyBtn) strategyBtn.addEventListener('click', openStrategyModal);

    if (sectorDrop) {
        sectorDrop.addEventListener('change', (e) => {
            activeFilterValue = e.target.value;
            updateFilterLabel(activeFilterValue);
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            refreshStocks();
        });
    }

    if (refreshBtn) refreshBtn.addEventListener('click', refreshStocks);

    if (resetBtn) resetBtn.addEventListener('click', () => {
        if (confirm("Clear Cache?")) {
            localStorage.clear();
            window.location.reload(true);
        }
    });

    if (overlay) overlay.addEventListener('click', closeModal);
}

function openTickerModal(ticker) {
    const stock = STOCK_DATABASE.find(s => s.ticker === ticker);
    if (stock) {
        const upside = (((stock.target - stock.price) / stock.price) * 100).toFixed(1);
        const riskPct = (((stock.price - stock.stop) / stock.price) * 100).toFixed(1);
        const rr = (upside / riskPct).toFixed(2);
        openModal(stock, upside, riskPct, rr);
    }
}

function openStrategyModal() {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    container.innerHTML = `
        <div class="flex items-center gap-4 mb-8">
            <button onclick="closeModal()" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
                <i data-lucide="chevron-left" class="w-5 h-5 text-zinc-400"></i>
            </button>
            <div>
                <h2 class="text-2xl font-black italic text-accent">STRATEGY</h2>
                <p class="text-[10px] text-zinc-500 uppercase">Alpha-X Quant Logic</p>
            </div>
        </div>
        <div class="space-y-6 text-gray-300 text-sm leading-relaxed">
            <section class="p-4 bg-white/5 rounded-2xl border border-white/5">
                <h4 class="text-accent font-bold mb-2">Why these stocks?</h4>
                <p>Selections are based on a 4-layer screening process:</p>
                <ul class="mt-2 space-y-2 list-disc pl-4 text-xs">
                    <li><span class="text-white font-bold">Relative Volume Expansion:</span> Searching for stocks trading 150%+ above their 10-day average.</li>
                    <li><span class="text-white font-bold">Institutional Flow:</span> Tracking dark pool prints and unusual options activity.</li>
                    <li><span class="text-white font-bold">Sector Momentum:</span> Identifying rotating capital into themes like Nuclear or Space.</li>
                    <li><span class="text-white font-bold">Technical Breakouts:</span> Focusing on VCP patterns and flat base breakouts.</li>
                </ul>
            </section>
            <button onclick="closeModal()" class="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-zinc-500">Return to Feed</button>
        </div>
    `;
    overlay.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
}

function handleFilterClick(sectorName, btnId) {
    activeFilterValue = sectorName;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(btnId).classList.add('active');
    const select = document.getElementById('sector-dropdown');
    if (select) {
        const exists = Array.from(select.options).some(o => o.value === sectorName);
        if (exists) select.value = sectorName;
        else select.value = 'all';
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
    if (refreshBtn) {
        const icon = refreshBtn.querySelector('svg, .lucide');
        if (icon) icon.classList.add('animate-spin');
    }
    if (timestamp) {
        const now = new Date();
        timestamp.textContent = `Picks Synced: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    let pool = STOCK_DATABASE;
    if (activeFilterValue !== 'all') {
        pool = STOCK_DATABASE.filter(s => s.sector === activeFilterValue);
    }
    if (pool.length < 5) {
        const others = STOCK_DATABASE.filter(s => s.sector !== activeFilterValue);
        const extra = others.sort(() => 0.5 - Math.random()).slice(0, 5 - pool.length);
        pool = [...pool, ...extra];
    }
    const selected = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
    setTimeout(() => {
        renderCards(selected);
        if (refreshBtn) {
            const icon = refreshBtn.querySelector('svg, .lucide');
            if (icon) icon.classList.remove('animate-spin');
        }
    }, 400);
}

async function fetchLatestPrices() {
    if (!FINNHUB_KEY) return;

    const timestamp = document.getElementById('timestamp');
    if (timestamp) timestamp.textContent = "Syncing Real-Time Alpha...";

    const promises = STOCK_DATABASE.map(async (stock) => {
        try {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stock.ticker}&token=${FINNHUB_KEY}`);
            const data = await response.json();
            if (data.c && data.c > 0) {
                stock.price = data.c;
            }
        } catch (e) {
            console.error(`Sync failed for ${stock.ticker}`);
        }
    });

    await Promise.all(promises);
    refreshStocks();
    console.log("Real-time Intelligence Sync Complete.");
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
                <div class="flex items-center gap-3">
                    <span class="text-[8px] font-black text-accent uppercase">+${upside}% Pot.</span>
                    <div class="flow-badge">
                        <i data-lucide="activity" class="w-2 h-2"></i>
                        ${stock.flowSnippet}
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(stock, upside, riskPct, rr));
        feed.appendChild(card);
    });
    if (window.lucide) window.lucide.createIcons();
}

function openModal(stock, upside, riskPct, rr) {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    if (!overlay || !container) return;
    const riskClass = `risk-${stock.riskRating.toLowerCase()}`;
    container.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <button onclick="closeModal()" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
                <i data-lucide="chevron-left" class="w-5 h-5 text-zinc-400"></i>
            </button>
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-3xl font-extrabold tracking-tighter italic">${stock.ticker}</h2>
                        <div class="sector-tag mt-1 inline-block">${stock.sector}</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[8px] font-bold text-zinc-500 mb-1">SPOT PRICE</div>
                        <div class="text-xl font-mono font-bold text-accent">$${stock.price.toFixed(2)}</div>
                    </div>
                </div>
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
                    <span class="text-xs text-zinc-500 font-bold uppercase">Strike Logic</span>
                    <span class="text-xs font-bold text-accent italic underline underline-offset-4 decoration-accent/30">${stock.optionsFlow}</span>
                </div>
            </div>

            <!-- Position Intelligence Calculator -->
            <section class="p-5 bg-white/2 rounded-3xl border border-white/10 mt-4">
                <div class="flex items-center gap-2 mb-4">
                    <i data-lucide="calculator" class="w-4 h-4 text-zinc-500"></i>
                    <h3 class="text-[9px] uppercase font-black tracking-widest text-zinc-500">Position Intelligence</h3>
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="calc-label text-zinc-600">Account Size ($)</label>
                        <input type="number" id="calc-balance" class="calc-input" value="${localStorage.getItem('ALPHA_X_BALANCE') || 10000}" 
                            oninput="updatePositionCalc(${stock.price}, ${stock.stop})">
                    </div>
                    <div>
                        <label class="calc-label text-zinc-600">Risk per Trade (%)</label>
                        <input type="number" id="calc-risk" class="calc-input" value="${localStorage.getItem('ALPHA_X_RISK') || 2}" 
                            oninput="updatePositionCalc(${stock.price}, ${stock.stop})">
                    </div>
                </div>
                <div class="allocation-pill flex items-center justify-between">
                    <div>
                        <div class="text-[7px] text-zinc-500 uppercase font-black mb-1">Recommended Size</div>
                        <div id="calc-shares" class="text-lg font-black text-white">-- Shares</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[7px] text-zinc-500 uppercase font-black mb-1">Total Allocation</div>
                        <div id="calc-total" class="text-lg font-black text-accent">$0.00</div>
                    </div>
                </div>
            </section>

            <button id="close-modal-btn" class="w-full py-4 bg-accent text-black rounded-2xl text-[10px] font-black uppercase tracking-widest mt-4 shadow-[0_0_20px_var(--accent-glow)]">
                Return To Main Feed
            </button>
        </div>
    `;
    overlay.classList.add('active');
    updatePositionCalc(stock.price, stock.stop);
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
}

function updatePositionCalc(price, stop) {
    const balance = parseFloat(document.getElementById('calc-balance').value) || 0;
    const riskPct = parseFloat(document.getElementById('calc-risk').value) || 0;

    // Save preferences
    localStorage.setItem('ALPHA_X_BALANCE', balance);
    localStorage.setItem('ALPHA_X_RISK', riskPct);

    const riskAmount = balance * (riskPct / 100);
    const riskPerShare = price - stop;

    if (riskPerShare <= 0) {
        document.getElementById('calc-shares').textContent = "ERROR";
        document.getElementById('calc-total').textContent = "$0.00";
        return;
    }

    const shares = Math.floor(riskAmount / riskPerShare);
    const totalCost = shares * price;

    document.getElementById('calc-shares').textContent = `${shares.toLocaleString()} Shares`;
    document.getElementById('calc-total').textContent = `$${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
