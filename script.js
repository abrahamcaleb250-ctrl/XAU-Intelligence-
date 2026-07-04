// =====================================
// XAU Intelligence AI Brain v3.0
// =====================================

console.log("XAU Intelligence Started");

// =====================================
// XAU Intelligence AI Engine
// =====================================

const AI = {

    // =========================
    // Timeframe Brain
    // =========================
    timeframes: {

        h4: {
            trend: {
                direction: "UNKNOWN",
                strength: 0
            },
            trendChange: {}
        },

        h1: {
            trend: {
                direction: "UNKNOWN",
                strength: 0
            },
            trendChange: {}
        },

        m15: {
            trend: {
                direction: "UNKNOWN",
                strength: 0
            },
            trendChange: {}
        },

        m5: {
            trend: {
                direction: "UNKNOWN",
                strength: 0
            },
            trendChange: {}
        }

    },

    // =========================
    // Market Structure
    // =========================
    structure: {

        trendState: "UNKNOWN",

        trendChanged: false,

        trendChangePoint: null,

        structureStrength: 0,

        lastStructure: null,

        previousTrend: "UNKNOWN",

        bos: {
            detected: false,
            direction: "NONE",
            price: null,
            timeframe: null,
            candle: null,
            time: null
        },

        choch: {
            detected: false,
            direction: "NONE",
            price: null,
            timeframe: null,
            candle: null,
            time: null
        },

        swingHigh: {
            price: null,
            timeframe: null,
            candle: null
        },

        swingLow: {
            price: null,
            timeframe: null,
            candle: null
        }

    },

    // =========================
    // Liquidity Analysis
    // =========================
    liquidity: {

        buySideTaken: false,

        sellSideTaken: false,

        equalHighs: [],

        equalLows: [],

        sweepPrice: null,

        sweepTime: null,

        sweepDirection: "NONE"

    },

    // =========================
    // Entry Zones
    // =========================
    entryZones: {

        fvg: {
            detected: false,
            direction: "NONE",
            top: null,
            bottom: null
        },

        orderBlock: {
            detected: false,
            direction: "NONE",
            price: null
        },

        supply: {
            detected: false,
            top: null,
            bottom: null
        },

        demand: {
            detected: false,
            top: null,
            bottom: null
        }

    },

    // =========================
    // Candlestick Confirmation
    // =========================
    candlesticks: {

        bullishEngulfing: false,

        bearishEngulfing: false,

        pinBar: false,

        insideBar: false,

        confirmation: false,

        pattern: "NONE"

    },

    // =========================
    // Risk Management
    // =========================
    risk: {},

    // =========================
    // Final AI Signal
    // =========================
    signal: {},

    // =========================
    // Trade Management
    // =========================
    trade: {},

    // =========================
    // Browser Notifications
    // =========================
    notifications: {},

    // =========================
    // Trade Journal
    // =========================
    journal: {},

    // =========================
    // Market Data Engine
    // =========================
    marketData: {

        livePrice: 0,

        lastPrice: 0,

        priceHistory: [],

        ticks: [],

        candles: {

            m5: [],

            m15: [],

            h1: [],

            h4: []

        }

    }
    
};
// ---------------------------
// Trend Data (Temporary)
// ---------------------------

const trendData = {
    h4: { bullish: 72, bearish: 28 },
    h1: { bullish: 72, bearish: 28 },
    m15: { bullish: 72, bearish: 28 },
    m5: { bullish: 72, bearish: 28 }
};

// ---------------------------
// Master Bias Calculation
// ---------------------------

function calculateMasterBias() {

    // Weighted Trend Voting
    const bullish =
        (trendData.h4.bullish * 0.40) +
        (trendData.h1.bullish * 0.30) +
        (trendData.m15.bullish * 0.20) +
        (trendData.m5.bullish * 0.10);

    const bearish = 100 - bullish;

    let direction = "NEUTRAL";

    if (bullish >= 60) {
        direction = "BULLISH";
    } else if (bearish >= 60) {
        direction = "BEARISH";
    }

    return {

        bullish: Math.round(bullish),

        bearish: Math.round(bearish),

        direction

    };

}
// ---------------------------
// AI Signal Engine
// ---------------------------

function generateSignal(masterBias) {

    let marketState = "SCANNING";

    if (masterBias.direction === "BULLISH") {

        marketState = "TRENDING BULLISH";

        return {
            trend: "BULLISH",
            signal: "WAIT",
            confidence: masterBias.bullish,
            marketState: marketState,
            status: "Waiting for setup..."
        };

    }

    if (masterBias.direction === "BEARISH") {

        marketState = "TRENDING BEARISH";

        return {
            trend: "BEARISH",
            signal: "WAIT",
            confidence: masterBias.bearish,
            marketState: marketState,
            status: "Waiting for setup..."
        };

    }

    return {
        trend: "RANGING",
        signal: "WAIT",
        confidence: 50,
        marketState: "RANGING",
        status: "Monitoring market..."
    };

}

// ---------------------------
// Market Structure Engine
// ---------------------------

function analyzeMarketStructure(masterBias) {

    AI.structure.trendState = masterBias.direction;

    return AI.structure;

}

const masterBias = calculateMasterBias();

const marketStructure = analyzeMarketStructure(masterBias);

const aiSignal = generateSignal(masterBias);

AI.structure.current = marketStructure;
AI.signal.current = aiSignal;

console.log(masterBias);
console.log(marketStructure);
console.log(aiSignal);
console.log(AI);
// =====================================
// Live Price Engine
// =====================================

const PriceEngine = {

    running: false,

    interval: 5000,

    source: "XAUS",

    currentPrice: 0,

    lastPrice: 0,

    lastUpdate: null

};

// =====================================
// Fetch Live XAU Price
// =====================================

async function fetchLivePrice() {

    try {

        const res = await fetch("https://xaus.com/api/v1/spot");

        const data = await res.json();

        PriceEngine.lastPrice = PriceEngine.currentPrice;

        PriceEngine.currentPrice = data.spot_usd_oz;

        PriceEngine.lastUpdate = new Date();

        AI.marketData.livePrice = data.spot_usd_oz;

        AI.marketData.lastPrice = PriceEngine.lastPrice;

        AI.marketData.priceHistory.push({

    price: data.spot_usd_oz,

    time: Date.now()

});

AI.marketData.ticks.push({

    price: data.spot_usd_oz,

    time: Date.now()

});

        console.log("Live Price:", data.spot_usd_oz);

    }

    catch (error) {

        console.log("Price Engine Error:", error);

    }

}

// =====================================
// Start Price Engine
// =====================================

function startPriceEngine() {

    PriceEngine.running = true;

    fetchLivePrice();

    setInterval(fetchLivePrice, PriceEngine.interval);

    console.log("Price Engine Started");

}

startPriceEngine();
// =====================================
// Candle Builder Engine
// =====================================

function buildCandles() {

    if (AI.marketData.ticks.length === 0) return;

    // Candle Engine will be built here

}

// =====================================
// Timeframe Buttons
// =====================================

const buttonContainer = document.getElementById("timeframe-buttons");

if (buttonContainer) {

    const timeframes = ["4H", "1H", "15M", "5M"];

    timeframes.forEach((timeframe, index) => {

        const button = document.createElement("button");

        button.innerText = timeframe;

        button.className = "timeframe-btn";

        if (index === 0) {
            button.classList.add("active-timeframe");
        }

        button.addEventListener("click", function () {

            document.querySelectorAll(".timeframe-btn").forEach(btn => {
                btn.classList.remove("active-timeframe");
            });

            button.classList.add("active-timeframe");

        });

        buttonContainer.appendChild(button);

    });

}

// =====================================
// Update AI Signal Panel
// =====================================

const signalType = document.getElementById("signal-type");
const signalConfidence = document.getElementById("signal-confidence");
const marketBias = document.getElementById("market-bias");
const signalStatus = document.getElementById("signal-status");

if (signalType && signalConfidence && marketBias && signalStatus) {

    signalType.innerText = aiSignal.signal;
    signalConfidence.innerText = aiSignal.confidence + "%";
    marketBias.innerText = aiSignal.trend;
    signalStatus.innerText = aiSignal.status;

}
