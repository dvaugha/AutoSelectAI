console.log("%c ALPHA-X v21 ACTIVE ", "background: #00FFFF; color: #000; font-weight: bold;");
const APP_VERSION = '21';

// --- CONFIG ---
const ALPHA_STOCKS = [
    {
        ticker: 'NVDA',
        name: 'Nvidia Corp',
        sector: 'Tech',
        entry: '188.50 - 192.00',
        target: '214.00',
        stop: '184.50',
        confidence: 94,
        strategy: 'AI-related',
        volatility: 'High',
        cap: 'Large',
        reason: 'Consolidating at split-adjusted highs. 191.55 close confirms a major liquidity floor.',
        details: {
            catalysts: ['Upcoming earnings beat projected', 'GTC conference hype', 'New TPU partnership rumors'],
            technicals: { rsi: 62, macd: 'Bullish Crossover', volume: '1.4x Avg' },
            sentiment: 92,
            alpha_rs: 8.4, // Relative Strength score
            strike_wall: [
                { strike: 195, volume: 45 },
                { strike: 200, volume: 92 },
                { strike: 205, volume: 30 },
                { strike: 210, volume: 65 }
            ],
            alpha_play: 'NVDA is currently in a "blue sky" breakout phase following the recent split. The 191.55 level is a critical psychological anchor. We expect a rapid 12% move as institutional accumulation accelerates.',
            history: [165, 172, 180, 178, 184, 190, 188, 191.55],
            volume_history: [120, 145, 110, 180, 210, 250, 230, 280],
            chart_insight: "Notice the volume-backed accumulation base around $188 before the breakout.",
            evidence_links: [
                { label: "SEC 13F: Institutional Accumulation", url: "https://www.sec.gov/edgar/searchedgar/companysearch.html" },
                { label: "Earnings Forecast Summary", url: "https://www.nasdaq.com/market-activity/stocks/nvda/earnings" },
                { label: "Technical Analysis: Gamma Squeeze Report", url: "https://www.tradingview.com/symbols/NASDAQ-NVDA/" }
            ]
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
            alpha_play: 'Energy is the ultimate "anti-inflation" trade right now. XOM has formed a massive cup-and-handle pattern on the daily chart. A break above $105 triggers a technical target of $112. The reward-to-risk ratio here is 4:1.',
            history: [98, 101, 104, 102, 99, 100, 103, 102],
            volume_history: [45, 52, 60, 48, 42, 55, 58, 50],
            chart_insight: "Holding critical support at $99 (the triple-bottom) confirms a high probability bounce.",
            evidence_links: [
                { label: "OPEC+ Supply Cut Data", url: "https://www.opec.org/opec_web/en/publications/338.htm" },
                { label: "Energy Sector RS Analysis", url: "https://stockcharts.com/freecharts/perf.php?$XLE,XOM" },
                { label: "XOM Dividend Safety Report", url: "https://seekingalpha.com/symbol/XOM/dividends/scorecard" }
            ]
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
            alpha_rs: 6.2,
            strike_wall: [
                { strike: 900, volume: 88 },
                { strike: 950, volume: 42 },
                { strike: 1000, volume: 95 }
            ],
            alpha_play: 'This is a pure volatility expansion play. SMCI is the hardware backbone of the AI era. Short interest is high, and any positive news creates a feedback loop of buying. We are targeting the $1000 psychological level.',
            history: [320, 480, 550, 620, 740, 890, 810, 850],
            volume_history: [210, 340, 420, 380, 510, 680, 590, 620],
            chart_insight: "Extreme vertical momentum. The dip to $810 was a classic 'retest' of the previous peak.",
            evidence_links: [
                { label: "S&P 500 Inclusion Criteria", url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/#overview" },
                { label: "AI Server Demand Projection", url: "https://www.gartner.com/en/newsroom/press-releases" },
                { label: "SMCI Option Flow Dashboard", url: "https://www.barchart.com/stocks/quotes/SMCI/unusual-options-activity" }
            ]
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
            alpha_play: 'VRT is a "picks and shovels" play for AI data centers. While the market focuses on chips, cooling is the bottleneck. VRT has a dominant market share and is currently undervalued compared to its growth rate.',
            history: [45, 48, 52, 50, 56, 61, 63, 64],
            volume_history: [12, 15, 18, 14, 22, 28, 25, 30],
            chart_insight: "Steady institutional accumulation visible in the rising floor over the last 90 days.",
            evidence_links: [
                { label: "Data Center Cooling Market Trends", url: "https://www.bloomberg.com/markets" },
                { label: "VRT Investor Presentation", url: "https://investors.vertiv.com/" },
                { label: "Vertiv Analyst Reports", url: "https://www.marketwatch.com/investing/stock/vrt" }
            ]
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
            alpha_play: 'High risk, high reward. UPST is a sensitive play on interest rates. As the Fed pauses, credit markets loosen. A short squeeze could easily propel this $10 higher in a matter of days.',
            history: [25, 28, 35, 30, 26, 24, 31, 32],
            volume_history: [85, 92, 110, 98, 75, 68, 105, 115],
            chart_insight: "Double-bottom formation confirmed at $24. Short-sellers are now trapped.",
            evidence_links: [
                { label: "Short Interest Tracker", url: "https://www.highshortinterest.com/" },
                { label: "Fed Watch Tool: Rate Probabilities", url: "https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html" },
                { label: "UPST Loan Performance Data", url: "https://ir.upstart.com/" }
            ]
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
            alpha_play: 'Mean reversion play. TSLA has been beaten down, but key support is holding. We are looking for a rotation back into "Magnificent 7" laggards.',
            history: [240, 220, 205, 185, 190, 182, 194, 195],
            volume_history: [310, 280, 250, 210, 190, 180, 240, 260],
            chart_insight: "RSI divergence: Price made a lower low but RSI made a higher high—classic reversal sign.",
            evidence_links: [
                { label: "FSD v12 Release Notes", url: "https://www.tesla.com/blog" },
                { label: "Production vs Delivery Summary", url: "https://ir.tesla.com/" },
                { label: "TSLA Dark Pool Flow Analysis", url: "https://unusualwhales.com/" }
            ]
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
            alpha_play: 'Defensive value play. In a volatile market, capital flows into high-dividend payers. PFE is at a multi-year valuation low with limited downside.',
            history: [32, 30, 29, 28, 27, 26.5, 27, 27.5],
            volume_history: [18, 15, 12, 10, 8, 9, 11, 14],
            chart_insight: "Rounding bottom pattern suggests the multi-year downtrend has finally exhausted.",
            evidence_links: [
                { label: "PFE Pipeline Progress Update", url: "https://www.pfizer.com/science/drug-system-pipeline" },
                { label: "Healthcare Value Rotation Report", url: "https://www.reuters.com/markets" },
                { label: "Dividend Reinvestment Yields", url: "https://www.pfizer.com/investors" }
            ]
        }
    }
];

let currentFilter = 'ALL';
let aggressionLevel = 'mid';
let globalChart = null;

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

    loadingBar.style.transition = 'width 3s linear';
    loadingBar.style.width = '100%';

    setTimeout(() => {
        warningScreen.classList.add('fade-out');
        setTimeout(() => {
            warningScreen.style.display = 'none';
            appContainer.classList.remove('hidden');
            renderStocks();
        }, 500);
    }, 3000);
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

    document.getElementById('nuclear-refresh').addEventListener('click', () => {
        if (confirm("FORCE NUCLEAR REFRESH? This will clear all local cache and unregister services.")) {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(regs => {
                    for (let reg of regs) reg.unregister();
                    window.location.reload(true);
                });
            } else {
                window.location.reload(true);
            }
        }
    });

    document.getElementById('refresh-btn').addEventListener('click', () => {
        const icon = document.querySelector('#refresh-btn *');
        if (icon) icon.classList.add('animate-spin');
        setTimeout(() => {
            if (icon) icon.classList.remove('animate-spin');
            renderStocks();
        }, 1000);
    });

    document.getElementById('close-detail').addEventListener('click', () => {
        const modal = document.getElementById('stock-detail-modal');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
}

function openDetailModal(stock) {
    console.log('Opening modal v21 for:', stock.ticker);
    const modal = document.getElementById('stock-detail-modal');
    const modalCore = document.getElementById('modal-core-v21');
    if (!modal || !modalCore) {
        alert("Sync Error: Refresh to v21 required via Cyan Zap icon.");
        return;
    }

    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    document.body.classList.add('overflow-hidden');

    // Headers
    safeSetText('detail-ticker', stock.ticker);
    const currentPrice = stock.details.history[stock.details.history.length - 1];
    const detailPriceEl = document.getElementById('detail-live-price');
    const detailSignalEl = document.getElementById('detail-live-signal');
    if (detailPriceEl) detailPriceEl.textContent = `$${currentPrice.toFixed(2)}`;

    // Entry Logic for Signal
    const entryRange = stock.entry.split(' - ');
    const highEntry = parseFloat(entryRange[1] || entryRange[0]);
    if (detailSignalEl) {
        if (currentPrice <= highEntry * 1.02) {
            detailSignalEl.textContent = "STRONG BUY NOW";
            detailSignalEl.className = "px-2 py-0.5 rounded text-[10px] font-extrabold bg-neon text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]";
        } else {
            detailSignalEl.textContent = "WATCH / WAIT";
            detailSignalEl.className = "px-2 py-0.5 rounded text-[10px] font-extrabold bg-zinc-800 text-gray-400";
        }
    }

    const rs = stock.details.alpha_rs || 2.5;
    const meterVal = Math.min(100, (rs / 10) * 100);

    // Build the ultra-compact layout directly in JS
    modalCore.innerHTML = `
        <div class="space-y-4">
            <!-- ALPHA PLAY -->
            <section class="border-l border-white/10 pl-3">
                <div class="text-[9px] uppercase font-black text-emerald-400/60 mb-1 tracking-tighter">The Alpha Play</div>
                <p class="text-[11px] text-gray-300 italic leading-tight">"${stock.details.alpha_play}"</p>
            </section>

            <!-- DENSITY DASHBOARD -->
            <div class="grid grid-cols-2 gap-2">
                <div class="bg-zinc-900/50 p-2 rounded-lg border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold mb-1 uppercase">Rel Dom</div>
                    <div class="h-1 w-full bg-zinc-800 rounded-full mb-1"><div class="h-full bg-neon shadow-[0_0_5px_#00FFFF]" style="width: ${meterVal}%"></div></div>
                    <div class="text-[9px] font-orbitron font-bold text-neon">+${rs}% vs SPY</div>
                </div>
                <div class="bg-zinc-900/50 p-2 rounded-lg border border-white/5">
                    <div class="text-[7px] text-zinc-600 font-bold mb-1 uppercase">Sentiment</div>
                    <div class="text-[10px] font-orbitron font-bold text-white">${stock.details.sentiment} PTS</div>
                </div>
            </div>

            <!-- LIQUIDITY FEED -->
            <section>
                <div class="text-[7px] uppercase font-bold text-zinc-500 tracking-widest mb-2 px-1">Institutional Liquidity Levels</div>
                <div id="magnet-bars-v21" class="space-y-1 pl-1"></div>
            </section>

            <!-- STATS ROW -->
            <div class="flex justify-between py-2 border-y border-white/5 px-2">
                <div><div class="text-[7px] text-zinc-500 uppercase font-bold">RSI</div><div class="text-[10px] font-orbitron text-white">${stock.details.technicals.rsi}</div></div>
                <div><div class="text-[7px] text-zinc-500 uppercase font-bold">MACD</div><div class="text-[10px] font-orbitron text-blue-400">${stock.details.technicals.macd}</div></div>
                <div><div class="text-[7px] text-zinc-500 uppercase font-bold">VOL</div><div class="text-[10px] font-orbitron text-white">${stock.details.technicals.volume}</div></div>
            </div>

            <!-- CHART -->
            <section>
                <div class="bg-black/40 rounded-xl border border-white/5 h-40 relative">
                    <canvas id="stock-history-chart"></canvas>
                </div>
            </section>

            <!-- LEVELS -->
            <div class="grid grid-cols-3 gap-2">
                <div class="text-center bg-zinc-900/40 p-2 rounded-lg"><div class="text-[7px] text-zinc-500 uppercase">Entry</div><div class="text-[10px] font-bold text-white">$${stock.entry}</div></div>
                <div class="text-center bg-emerald-400/5 p-2 rounded-lg"><div class="text-[7px] text-emerald-400/40 uppercase">Target</div><div class="text-[10px] font-bold text-emerald-400">$${stock.displayTarget}</div></div>
                <div class="text-center bg-rose-400/5 p-2 rounded-lg"><div class="text-[7px] text-rose-400/40 uppercase">Stop</div><div class="text-[10px] font-bold text-rose-500">$${stock.stop}</div></div>
            </div>

            <!-- TRAY -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                   <div class="text-[7px] text-zinc-600 mb-1 uppercase font-bold">Catalysts</div>
                   <ul id="v21-cats" class="text-[9px] text-gray-500 space-y-0.5"></ul>
                </div>
                <div>
                   <div class="text-[7px] text-zinc-600 mb-1 uppercase font-bold">Evidence</div>
                   <div id="v21-links" class="text-[9px] text-neon space-y-0.5"></div>
                </div>
            </div>
        </div>
    `;

    // Bars
    const magnetContainer = document.getElementById('magnet-bars-v21');
    const strikes = stock.details.strike_wall || [
        { strike: 195, volume: 40 },
        { strike: 200, volume: 80 }
    ];
    strikes.forEach(s => {
        const item = document.createElement('div');
        item.className = 'flex items-center gap-2 overflow-hidden';
        item.innerHTML = `
            <div class="w-10 text-[7px] font-orbitron font-bold text-white shrink-0">$${s.strike}</div>
            <div class="flex-1 h-0.5 bg-white/5 rounded-full"><div class="h-full bg-neon shadow-[0_0_3px_#00FFFF] transition-all duration-1000" style="width: 0%"></div></div>
            <div class="w-6 text-[7px] font-bold text-gray-600 text-right">${s.volume}%</div>
        `;
        magnetContainer.appendChild(item);
        setTimeout(() => {
            const bar = item.querySelector('.bg-neon');
            if (bar) bar.style.width = `${s.volume}%`;
        }, 100);
    });

    const catList = document.getElementById('v21-cats');
    stock.details.catalysts.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `• ${c}`;
        catList.appendChild(li);
    });

    const linkBox = document.getElementById('v21-links');
    stock.details.evidence_links.forEach(l => {
        const a = document.createElement('a');
        a.href = l.url; a.target = "_blank"; a.className = "block truncate";
        a.textContent = `↗ ${l.label}`;
        linkBox.appendChild(a);
    });

    modal.classList.remove('hidden');
    lucide.createIcons();
    setTimeout(() => initChart(stock), 300);
}

function initChart(stock) {
    const ctx = document.getElementById('stock-history-chart').getContext('2d');
    if (globalChart) globalChart.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(0, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

    globalChart = new Chart(ctx, {
        data: {
            labels: ['90d', '75d', '60d', '45d', '30d', '15d', '7d', 'NOW'],
            datasets: [
                {
                    type: 'line',
                    data: stock.details.history,
                    borderColor: '#00FFFF',
                    borderWidth: 2,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#52525b', font: { size: 8 } } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#52525b', font: { size: 8 } } }
            }
        }
    });
}

function renderStocks() {
    const list = document.getElementById('stock-list');
    list.innerHTML = '';

    let filtered = ALPHA_STOCKS.filter(s => {
        if (currentFilter === 'ALL') return true;
        if (currentFilter === 'Small Cap') return s.cap === 'Small Cap';
        if (currentFilter === 'High Volatility') return s.volatility === 'High Volatility' || s.volatility === 'High';
        if (currentFilter === 'AI-related') return s.strategy === 'AI-related';
        return s.sector === currentFilter;
    });

    const sectorHeader = document.createElement('div');
    sectorHeader.className = 'flex items-center justify-between mt-2 mb-4 px-2';
    sectorHeader.innerHTML = `
        <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_#00FFFF]"></div>
            <span class="text-[10px] font-orbitron font-extrabold text-neon uppercase tracking-widest">${currentFilter} FEED</span>
        </div>
    `;
    list.appendChild(sectorHeader);

    filtered.forEach((stock, index) => {
        const card = document.createElement('div');
        card.className = 'stock-card fade-in cursor-pointer';
        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <span class="text-xl font-orbitron font-bold text-white">${stock.ticker}</span>
                <span class="text-lg font-orbitron font-bold ${getConfidenceColor(stock.confidence)}">${stock.confidence}%</span>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-3">
                <div class="bg-white/5 p-2 rounded-lg"><div class="label-mini">Entry</div><div class="text-xs text-white">$${stock.entry}</div></div>
                <div class="bg-white/5 p-2 rounded-lg"><div class="label-mini">Target</div><div class="text-xs text-emerald-400">$${stock.target}</div></div>
            </div>
            <div class="text-[10px] text-gray-500 italic truncate italic">"${stock.reason}"</div>
        `;
        card.onclick = () => openDetailModal(stock);
        list.appendChild(card);
    });

    lucide.createIcons();
}

function getConfidenceColor(score) {
    if (score >= 90) return 'text-neon';
    if (score >= 80) return 'text-blue-400';
    return 'text-amber-400';
}

if (localStorage.getItem('alpha_v') !== APP_VERSION) {
    localStorage.setItem('alpha_v', APP_VERSION);
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(regs => {
            for (let reg of regs) reg.unregister();
        });
    }
}
