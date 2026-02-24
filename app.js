// ALPHA-X v3.0 | Private Neural Rebuild
const API_VERSION = '300';

const ALPHA_STOCKS = [
    {
        ticker: "NVDA",
        name: "Nvidia Corp",
        rank: 1,
        conviction: 96,
        timeframe: "3-5 Days",
        entry: "188.50 - 192.00",
        target: "215.00",
        stop: "184.00",
        signal: "IMMEDIATE BUY",
        logic: "Institutional call volume mapping at 215 level is peaking. Price is reclaiming the 5-day EMA with 1.4x relative volume. Clear path to $215 within 4 trading days.",
        risk: "High - Split volatility remains elevated.",
        metrics: { rsi: "62 (Rising)", sentiment: "Extreme Bullish", liquidity: "High" },
        history: [180, 185, 182, 188, 191, 189, 192]
    },
    {
        ticker: "COIN",
        name: "Coinbase Global",
        rank: 2,
        conviction: 92,
        timeframe: "2-4 Days",
        entry: "194.00 - 198.00",
        target: "235.00",
        stop: "188.50",
        signal: "BUY ON DIP",
        logic: "BTC dominance breakout is forcing a massive short-squeeze in COIN. Dark pool activity confirms accumulation below 200. Gamma magnet at 240 is pulling price.",
        risk: "Extreme - Correlated to Crypto Volatility.",
        metrics: { rsi: "68 (Breakout)", sentiment: "Aggressive", liquidity: "Medium" },
        history: [170, 175, 185, 182, 190, 195, 198]
    },
    {
        ticker: "VRT",
        name: "Vertiv Holdings",
        rank: 3,
        conviction: 89,
        timeframe: "3-5 Days",
        entry: "88.00 - 90.50",
        target: "105.00",
        stop: "85.20",
        signal: "STRONG BUY",
        logic: "DC Power cooling demand is the hidden AI winner. Breaking out of a 4-week base. Institutional accumulation is visible on weekly charts.",
        risk: "Moderate - Infrastructure sector laggard.",
        metrics: { rsi: "59 (Neutral)", sentiment: "Steady", liquidity: "High" },
        history: [82, 84, 86, 88, 87, 89, 90]
    },
    {
        ticker: "SMCI",
        name: "Super Micro",
        rank: 4,
        conviction: 85,
        timeframe: "3-5 Days",
        entry: "525.00 - 540.00",
        target: "620.00",
        stop: "495.00",
        signal: "SPECULATIVE BUY",
        logic: "Mean-reversion play after 20% pullback. Finding support at the 20-day moving average. Low-risk entry zone for a rapid relief rally to 600+.",
        risk: "Very High - Extreme Price Swings.",
        metrics: { rsi: "42 (Oversold)", sentiment: "Fearful (Pivot)", liquidity: "Lower" },
        history: [650, 600, 580, 560, 540, 530, 535]
    },
    {
        ticker: "LLY",
        name: "Eli Lilly",
        rank: 5,
        conviction: 82,
        timeframe: "5 Days",
        entry: "780.00 - 795.00",
        target: "850.00",
        stop: "765.00",
        signal: "STABLE BUY",
        logic: "Defensive growth leader. GLP-1 momentum remains consistent. Breaking out of consolidation into new highs. Safe-haven capital flow is visible.",
        risk: "Low - High Conviction Institutional Hold.",
        metrics: { rsi: "54 (Stable)", sentiment: "Bullish", liquidity: "Ultra High" },
        history: [760, 770, 775, 782, 788, 792, 795]
    }
];

let activeModal = null;

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    updateTime();
    initGlobalEvents();
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
            renderFeed();
        }, 500);
    }, 3200);
}

function updateTime() {
    const el = document.getElementById('current-time');
    const now = new Date();
    if (el) el.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTimeout(updateTime, 1000);
}

function initGlobalEvents() {
    document.getElementById('reset-app').onclick = () => {
        if (confirm("Factory Reset Cache?")) {
            localStorage.clear();
            window.location.reload(true);
        }
    };

    document.getElementById('modal-overlay').onclick = closeModal;
}

function renderFeed() {
    const feed = document.getElementById('stock-feed');
    feed.innerHTML = '';

    ALPHA_STOCKS.forEach((stock, idx) => {
        const card = document.createElement('div');
        card.className = 'stock-card fade-in';
        card.style.animationDelay = `${idx * 0.1}s`;

        card.innerHTML = `
            <div class="rank-pill">#${stock.rank}</div>
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-2xl font-extrabold tracking-tight">${stock.ticker}</h2>
                    <p class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">${stock.name}</p>
                </div>
                <div class="text-right">
                    <p class="text-[9px] uppercase text-zinc-600 font-bold">Conviction</p>
                    <p class="text-lg font-mono font-bold text-accent">${stock.conviction}%</p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p class="text-[8px] text-zinc-500 uppercase font-black tracking-tighter mb-1">Entry Range</p>
                    <p class="text-xs font-bold text-white">${stock.entry}</p>
                </div>
                <div class="bg-black/40 p-3 rounded-xl border border-white/5">
                    <p class="text-[8px] text-zinc-500 uppercase font-black tracking-tighter mb-1">3-5D Target</p>
                    <p class="text-xs font-bold text-accent">$${stock.target}</p>
                </div>
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-white/5">
                <div class="flex items-center gap-2">
                    <i data-lucide="shield-check" class="w-3 h-3 text-accent"></i>
                    <span class="text-[9px] font-black uppercase text-accent tracking-widest">${stock.signal}</span>
                </div>
                <p class="text-[10px] text-zinc-500 font-medium">Risk: ${stock.risk.split(' - ')[0]}</p>
            </div>
        `;

        card.onclick = () => openModal(stock);
        feed.appendChild(card);
    });
    lucide.createIcons();
}

function openModal(stock) {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');

    container.innerHTML = `
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-extrabold tracking-tighter">${stock.ticker}</h2>
            <div class="${stock.signal.includes('BUY') ? 'buy-badge' : 'wait-badge'}">
                ${stock.signal} NOW
            </div>
        </div>

        <div class="space-y-6">
            <!-- Quantum Logic Section -->
            <section class="p-4 bg-accent/5 rounded-2xl border border-accent/10">
                <div class="flex items-center gap-2 mb-2">
                    <i data-lucide="cpu" class="w-4 h-4 text-accent"></i>
                    <h3 class="text-[10px] uppercase font-black tracking-widest text-accent">Trade Intelligence</h3>
                </div>
                <p class="text-sm text-gray-300 leading-relaxed italic">"${stock.logic}"</p>
            </section>

            <!-- Trade Execution Summary -->
            <div class="grid grid-cols-3 gap-3">
                <div class="text-center p-3 bg-white/5 rounded-xl">
                    <p class="text-[7px] text-zinc-500 uppercase font-bold mb-1">Timeframe</p>
                    <p class="text-[11px] font-bold text-white">${stock.timeframe}</p>
                </div>
                <div class="text-center p-3 bg-white/5 rounded-xl border border-accent/10">
                    <p class="text-[7px] text-accent font-bold mb-1 uppercase">Target</p>
                    <p class="text-[11px] font-bold text-accent">$${stock.target}</p>
                </div>
                <div class="text-center p-3 bg-white/5 rounded-xl border border-rose-500/10">
                    <p class="text-[7px] text-rose-500 font-bold mb-1 uppercase">Stop Loss</p>
                    <p class="text-[11px] font-bold text-rose-500">$${stock.stop}</p>
                </div>
            </div>

            <!-- Stats Table -->
            <div class="divide-y divide-white/5 border-y border-white/5">
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase tracking-tight">Relative Strength (RSI)</span>
                    <span class="text-xs font-mono font-bold text-white">${stock.metrics.rsi}</span>
                </div>
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase tracking-tight">Social Pulse</span>
                    <span class="text-xs font-mono font-bold text-accent">${stock.metrics.sentiment}</span>
                </div>
                <div class="flex justify-between py-3">
                    <span class="text-xs text-zinc-500 font-bold uppercase tracking-tight">Liquidity Flow</span>
                    <span class="text-xs font-mono font-bold text-white">${stock.metrics.liquidity}</span>
                </div>
            </div>

            <!-- Risk Warning -->
            <div class="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <div class="flex items-center gap-2 mb-2">
                    <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-500"></i>
                    <h3 class="text-[10px] uppercase font-black tracking-widest text-rose-500">Risk Profile</h3>
                </div>
                <p class="text-[11px] text-rose-200/60 leading-tight">${stock.risk}</p>
            </div>

            <button onclick="closeModal()" class="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-4">
                Close Signal
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
