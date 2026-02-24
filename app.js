console.log("%c ALPHA-X v8 ACTIVE ", "background: #00FFFF; color: #000; font-weight: bold;");
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
            alpha_play: 'NVDA is currently in a "blue sky" breakout phase. The short-term return is driven by a gamma squeeze in the options market where market makers are forced to hedge as price approaches the $800 strike. We expect a rapid 7-9% move before exhaustion sets in.',
            history: [620, 635, 610, 655, 680, 710, 695, 722],
            volume_history: [120, 145, 110, 180, 210, 250, 230, 280],
            chart_insight: "Notice the volume-backed accumulation base around $630 before the breakout.",
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
        document.body.classList.remove('overflow-hidden'); // Restore scroll
    });
}

function openDetailModal(stock) {
    console.log('Opening modal for:', stock.ticker);
    const modal = document.getElementById('stock-detail-modal');
    if (!modal) {
        console.error('Modal element not found!');
        return;
    }

    document.body.classList.add('overflow-hidden'); // Lock scroll

    document.getElementById('detail-ticker').textContent = stock.ticker;

    // Set Live Price & Signal Logic
    const currentPrice = stock.details.history[stock.details.history.length - 1];
    const detailPriceEl = document.getElementById('detail-live-price');
    const detailSignalEl = document.getElementById('detail-live-signal');

    detailPriceEl.textContent = `$${currentPrice.toFixed(2)}`;

    // Evaluate if "NOW" is a good time (Logic: Based on Entry Zone proximity)
    const entryRange = stock.entry.split(' - ');
    const lowEntry = parseFloat(entryRange[0]);
    const highEntry = parseFloat(entryRange[1]);

    if (currentPrice <= highEntry * 1.02) { // Within 2% of entry zone
        detailSignalEl.textContent = "STRONG BUY NOW";
        detailSignalEl.className = "px-2 py-0.5 rounded text-[10px] font-extrabold bg-neon text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]";
    } else {
        detailSignalEl.textContent = "WATCH / WAIT";
        detailSignalEl.className = "px-2 py-0.5 rounded text-[10px] font-extrabold bg-zinc-800 text-gray-400";
    }

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
            <i data-lucide="check-circle-2" class="w-4 h-4 text-neon mt-1 shrink-0"></i>
            <span>${c}</span>
        `;
        catalystsList.appendChild(li);
    });

    const linksContainer = document.getElementById('detail-links');
    linksContainer.innerHTML = '';
    stock.details.evidence_links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all group';
        a.innerHTML = `
            <span class="text-sm font-medium text-gray-300 group-hover:text-neon">${link.label}</span>
            <i data-lucide="external-link" class="w-4 h-4 text-gray-500 group-hover:text-neon"></i>
        `;
        linksContainer.appendChild(a);
    });

    document.getElementById('chart-insight').textContent = stock.details.chart_insight;

    modal.classList.remove('hidden');
    lucide.createIcons();

    // Render Chart after modal is visible
    setTimeout(() => initChart(stock), 300);
}

function initChart(stock) {
    const ctx = document.getElementById('stock-history-chart').getContext('2d');

    if (globalChart) {
        globalChart.destroy();
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(0, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

    globalChart = new Chart(ctx, {
        data: {
            labels: ['90d', '75d', '60d', '45d', '30d', '15d', '7d', 'NOW'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price Action',
                    data: stock.details.history,
                    borderColor: '#00FFFF',
                    borderWidth: 3,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#00ff9d',
                    pointBorderColor: '#000',
                    pointHoverRadius: 6,
                    pointRadius: 2,
                    yAxisID: 'y'
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: stock.details.volume_history,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)', // Blue-ish transparent bars
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    borderWidth: 1,
                    borderRadius: 4,
                    yAxisID: 'y1',
                    barPercentage: 0.5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#18181b',
                    titleColor: '#71717a',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    displayColors: true
                }
            },
            scales: {
                x: {
                    grid: { display: false, drawBorder: false },
                    ticks: { color: '#52525b', font: { size: 10, family: 'Orbitron' } }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                    ticks: { color: '#00FFFF', font: { size: 10, family: 'Orbitron' } }
                },
                y1: {
                    type: 'linear',
                    display: false, // Don't show the volume scale to keep it clean
                    position: 'right',
                    grid: { display: false },
                    max: Math.max(...stock.details.volume_history) * 3 // Scale volume so it stays at the bottom
                }
            }
        }
    });
}

// --- CORE LOGIC ---
function renderStocks() {
    const list = document.getElementById('stock-list');
    const filterEl = document.getElementById('market-filter');
    list.innerHTML = '';

    // Filter Logic
    let filtered = ALPHA_STOCKS.filter(s => {
        if (currentFilter === 'ALL') return true;
        if (currentFilter === 'Small Cap') return s.cap === 'Small Cap';
        if (currentFilter === 'High Volatility') return s.volatility === 'High Volatility' || s.volatility === 'High';
        if (currentFilter === 'AI-related') return s.strategy === 'AI-related';
        return s.sector === currentFilter;
    });

    // Update Filter Visibility/Style
    if (currentFilter !== 'ALL') {
        filterEl.classList.add('border-neon', 'bg-neon/5');
    } else {
        filterEl.classList.remove('border-neon', 'bg-neon/5');
    }

    // Add Sector Header
    const sectorHeader = document.createElement('div');
    sectorHeader.className = 'flex items-center justify-between mt-2 mb-4 px-2';
    sectorHeader.innerHTML = `
        <div class="flex items-center gap-2.5">
            <div class="w-2 h-2 rounded-full bg-neon shadow-[0_0_10px_#00FFFF] animate-pulse"></div>
            <span class="text-sm font-orbitron font-extrabold text-neon uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                ${currentFilter === 'ALL' ? 'ALL SECTORS' : currentFilter} FEED
            </span>
        </div>
        <span class="text-[9px] font-bold text-zinc-500 tracking-widest">${filtered.length} ASSETS READY</span>
    `;
    list.appendChild(sectorHeader);

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
        card.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Stock click triggered for:', stock.ticker);
            try {
                openDetailModal(stock);
            } catch (err) {
                alert("Modal Error: " + err.message);
            }
        };
        list.appendChild(card);
    });

    lucide.createIcons();
}

function getConfidenceColor(score) {
    if (score >= 90) return 'text-neon text-glow-primary';
    if (score >= 80) return 'text-neon';
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
