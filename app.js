// --- CONFIG ---
const ALPHA_STOCKS = [
    {
        ticker: 'NVDA',
        name: 'Nvidia Corp',
        sector: 'Tech',
        entry: '722.40 - 725.00',
        target: '795.00',
        stop: '710.00',
        confidence: 94,
        strategy: 'AI-related',
        volatility: 'High',
        cap: 'Large',
        reason: 'Extreme demand for H200 chips. Options activity shows massive bull sweeps.',
        details: {
            catalysts: ['Upcoming earnings beat projected', 'GTC conference hype', 'New TPU partnership rumors'],
            technicals: { rsi: 68, macd: 'Bullish Crossover', volume: '1.4x Avg' },
            sentiment: 92,
            alpha_play: 'NVDA is currently in a "blue sky" breakout phase. The short-term return is driven by a gamma squeeze in the options market where market makers are forced to hedge as price approaches the $800 strike. We expect a rapid 7-9% move before exhaustion sets in.'
        }
    },
    {
        ticker: 'XOM',
        name: 'Exxon Mobil',
        sector: 'Oil & Gas',
        entry: '102.10 - 103.50',
        target: '112.00',
        stop: '99.50',
        confidence: 82,
        strategy: 'Energy',
        volatility: 'Medium',
        cap: 'Large',
        reason: 'Crude oil pivot confirmed at $76. Relative strength vs XLE is leading.',
        details: {
            catalysts: ['OPEC+ supply cuts extension', 'Middle East tensions rising', 'Free cash flow yields at 8%'],
            technicals: { rsi: 54, macd: 'Neutral/Rising', volume: '1.1x Avg' },
            sentiment: 74,
            alpha_play: 'Energy is the ultimate "anti-inflation" trade right now. XOM has formed a massive cup-and-handle pattern on the daily chart. A break above $105 triggers a technical target of $112. The reward-to-risk ratio here is 4:1.'
        }
    },
    {
        ticker: 'SMCI',
        name: 'Super Micro',
        sector: 'Tech',
        entry: '840.00 - 860.00',
        target: '1050.00',
        stop: '815.00',
        confidence: 88,
        strategy: 'AI-related',
        volatility: 'High Volatility',
        cap: 'Mid',
        reason: 'Gamma squeeze potential highly elevated. 5-day EMA crossover confirmed.',
        details: {
            catalysts: ['S&P 500 inclusion rumors', 'Server backlog reaching record highs', 'Short interest squeeze'],
            technicals: { rsi: 82, macd: 'Vertical', volume: '2.5x Avg' },
            sentiment: 98,
            alpha_play: 'This is a pure volatility expansion play. SMCI is the hardware backbone of the AI era. Short interest is high, and any positive news creates a feedback loop of buying. We are targeting the $1000 psychological level.'
        }
    },
    {
        ticker: 'VRT',
        name: 'Vertiv Holdings',
        sector: 'Tech',
        entry: '64.20 - 65.10',
        target: '72.00',
        stop: '62.80',
        confidence: 79,
        strategy: 'AI-related',
        volatility: 'Medium',
        cap: 'Mid',
        reason: 'DC power cooling demand up 40% YoY. Breaking out of a 3-week base.',
        details: {
            catalysts: ['Large data center contract wins', 'Analyst price target upgrades', 'Q1 guidance raised'],
            technicals: { rsi: 62, macd: 'Bullish', volume: '1.2x Avg' },
            sentiment: 81,
            alpha_play: 'VRT is a "picks and shovels" play for AI data centers. While the market focuses on chips, cooling is the bottleneck. VRT has a dominant market share and is currently undervalued compared to its growth rate.'
        }
    },
    {
        ticker: 'UPST',
        name: 'Upstart Holdings',
        sector: 'Financial',
        entry: '32.10 - 33.50',
        target: '41.00',
        stop: '29.50',
        confidence: 71,
        strategy: 'High Volatility',
        volatility: 'High Volatility',
        cap: 'Small Cap',
        reason: 'Short interest at 34%. Recent social sentiment reversal from bearish to bullish.',
        details: {
            catalysts: ['Fed rate cut expectations', 'AI loan processing improvements', 'Massive short covering'],
            technicals: { rsi: 48, macd: 'Bottoming', volume: '0.9x Avg' },
            sentiment: 68,
            alpha_play: 'High risk, high reward. UPST is a sensitive play on interest rates. As the Fed pauses, credit markets loosen. A short squeeze could easily propel this $10 higher in a matter of days.'
        }
    },
    {
        ticker: 'TSLA',
        name: 'Tesla Inc',
        sector: 'EV',
        entry: '194.00 - 196.00',
        target: '215.00',
        stop: '188.00',
        confidence: 76,
        strategy: 'EV',
        volatility: 'High',
        cap: 'Large',
        reason: 'Price action reclaiming 50DMA. RSI oversold bounce confirmed.',
        details: {
            catalysts: ['New FSD version release', 'China sales recovery', 'Sentiment bottoming'],
            technicals: { rsi: 35, macd: 'Divergence', volume: '1.3x Avg' },
            sentiment: 55,
            alpha_play: 'Mean reversion play. TSLA has been beaten down, but key support is holding. We are looking for a rotation back into "Magnificent 7" laggards.'
        }
    },
    {
        ticker: 'PFE',
        name: 'Pfizer Inc',
        sector: 'Biotech',
        entry: '27.40 - 27.80',
        target: '31.00',
        stop: '26.80',
        confidence: 65,
        strategy: 'Biotech',
        volatility: 'Low',
        cap: 'Large',
        reason: 'Dividend yield support at 6%. Value rotation candidate.',
        details: {
            catalysts: ['New cancer drug pipeline', 'Cost-cutting measures', 'Defensive rotation'],
            technicals: { rsi: 41, macd: 'Neutral', volume: '1.0x Avg' },
            sentiment: 48,
            alpha_play: 'Defensive value play. In a volatile market, capital flows into high-dividend payers. PFE is at a multi-year valuation low with limited downside.'
        }
    }
];

let currentFilter = 'ALL';
let aggressionLevel = 'mid';

// --- INITIALIZATION ---
window.addEventListener('load', () => {
    lucide.createIcons();
    startWarningTimer();
    initEventListeners();

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW Registered', reg))
            .catch(err => console.log('SW Failed', err));
    }
});

function startWarningTimer() {
    const loadingBar = document.getElementById('loading-bar');
    const warningScreen = document.getElementById('warning-screen');
    const appContainer = document.getElementById('app-container');

    loadingBar.style.width = '100%';

    setTimeout(() => {
        warningScreen.classList.add('fade-out');
        setTimeout(() => {
            warningScreen.style.display = 'none';
            appContainer.classList.remove('hidden');
            renderStocks();
        }, 500);
    }, 4000);
}

function initEventListeners() {
    document.getElementById('market-filter').addEventListener('change', (e) => {
        currentFilter = e.target.value;
        renderStocks();
    });

    const modeButtons = document.querySelectorAll('.mode-btn');
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            aggressionLevel = btn.dataset.mode;
            modeButtons.forEach(b => b.classList.remove('active-low', 'active-mid', 'active-high', 'bg-white/10'));
            const activeClass = `active-${btn.dataset.mode}`;
            btn.classList.add(activeClass);
            renderStocks();
        });
    });

    document.getElementById('refresh-btn').addEventListener('click', () => {
        const icon = document.querySelector('#refresh-btn i');
        icon.classList.add('animate-spin');
        setTimeout(() => {
            icon.classList.remove('animate-spin');
            renderStocks();
        }, 1000);
    });

    document.getElementById('close-detail').addEventListener('click', () => {
        const modal = document.getElementById('stock-detail-modal');
        modal.classList.add('hidden');
    });
}

function openDetailModal(stock) {
    console.log('Opening modal for:', stock.ticker);
    const modal = document.getElementById('stock-detail-modal');
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }

    document.getElementById('detail-ticker').textContent = stock.ticker;
    document.getElementById('detail-name').textContent = stock.name;
    document.getElementById('detail-alpha-play').textContent = stock.details.alpha_play;
    document.getElementById('detail-rsi').textContent = stock.details.technicals.rsi;
    document.getElementById('detail-macd').textContent = stock.details.technicals.macd;
    document.getElementById('detail-volume').textContent = stock.details.technicals.volume;
    document.getElementById('detail-sentiment').textContent = `${stock.details.sentiment}%`;
    document.getElementById('detail-entry').textContent = `$${stock.entry}`;
    document.getElementById('detail-target').textContent = `$${stock.displayTarget}`;
    document.getElementById('detail-stop').textContent = `$${stock.stop}`;

    const catalystsList = document.getElementById('detail-catalysts');
    catalystsList.innerHTML = '';
    stock.details.catalysts.forEach(c => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-3 text-sm text-gray-400';
        li.innerHTML = `
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mt-1 shrink-0"></i>
            <span>${c}</span>
        `;
        catalystsList.appendChild(li);
    });

    modal.classList.remove('hidden');
    lucide.createIcons();
}

// --- CORE LOGIC ---
function renderStocks() {
    const list = document.getElementById('stock-list');
    list.innerHTML = '';

    // Filter Logic
    let filtered = ALPHA_STOCKS.filter(s => {
        if (currentFilter === 'ALL') return true;
        if (currentFilter === 'Small Cap') return s.cap === 'Small Cap';
        if (currentFilter === 'High Volatility') return s.volatility === 'High Volatility' || s.volatility === 'High';
        if (currentFilter === 'AI-related') return s.strategy === 'AI-related';
        return s.sector === currentFilter;
    });

    // Rank based on expected return * probability (Simulated)
    filtered.forEach(s => {
        // Mock dynamic scoring based on aggression
        let multiplier = aggressionLevel === 'high' ? 1.4 : (aggressionLevel === 'low' ? 0.85 : 1.0);
        s.displayTarget = (parseFloat(s.target) * multiplier).toFixed(2);
        s.displayConfidence = Math.min(98, Math.round(s.confidence * (1 / multiplier))); // Higher risk = lower confidence
    });

    filtered.sort((a, b) => b.displayConfidence - a.displayConfidence);

    // Limit to Top 5
    const top5 = filtered.slice(0, 5);

    top5.forEach((stock, index) => {
        const card = document.createElement('div');
        card.className = 'stock-card fade-in cursor-pointer';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="rank-badge">#${index + 1}</div>
            <div class="flex justify-between items-start mb-4">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="text-2xl font-orbitron font-bold text-white">${stock.ticker}</span>
                        <span class="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-400 font-bold tracking-widest uppercase">${stock.sector}</span>
                    </div>
                    <div class="text-gray-400 text-xs mt-1 font-medium">${stock.name}</div>
                </div>
                <div class="text-right">
                    <div class="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mb-1">AI Conviction</div>
                    <div class="text-xl font-orbitron font-bold ${getConfidenceColor(stock.displayConfidence)}">${stock.displayConfidence}%</div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="bg-white/5 p-3 rounded-xl border border-white/5 transition-all hover:bg-white/10">
                    <div class="label-mini mb-1">Entry Zone</div>
                    <div class="text-sm font-bold text-white">$${stock.entry}</div>
                </div>
                <div class="bg-white/5 p-3 rounded-xl border border-white/5 transition-all hover:bg-white/10">
                    <div class="label-mini mb-1">Target (5-7d)</div>
                    <div class="text-sm font-bold text-emerald-400">$${stock.displayTarget}</div>
                </div>
            </div>

            <div class="flex items-center justify-between gap-4 mb-4">
                <div class="flex-1">
                    <div class="label-mini mb-1">Risk Limit (Stop)</div>
                    <div class="text-xs font-bold text-rose-500">$${stock.stop}</div>
                </div>
                <div class="w-32 h-10">
                    <svg viewBox="0 0 100 40" class="w-full h-full overflow-visible">
                        <path class="sparkline-path" d="${generateSparkline()}" fill="none" stroke="${stock.displayConfidence > 80 ? '#10b981' : '#3b82f6'}" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            <div class="pt-4 border-t border-white/5">
                <div class="flex items-center gap-1 mb-2 text-white/40">
                    <i data-lucide="brain-circuit" class="w-3 h-3 text-emerald-400"></i>
                    <span class="label-mini text-emerald-400/80">Quant Analysis</span>
                </div>
                <p class="text-[11px] leading-relaxed text-gray-400 italic">"${stock.reason}"</p>
            </div>
        `;
        card.addEventListener('click', () => openDetailModal(stock));
        list.appendChild(card);
    });

    lucide.createIcons();
}

function getConfidenceColor(score) {
    if (score >= 90) return 'text-emerald-400 text-glow-emerald';
    if (score >= 80) return 'text-emerald-500';
    if (score >= 70) return 'text-blue-400';
    return 'text-amber-400';
}

function generateSparkline() {
    let d = "M0,30";
    for (let i = 1; i <= 10; i++) {
        const x = i * 10;
        const y = 10 + Math.random() * 25;
        d += ` L${x},${y}`;
    }
    return d;
}
