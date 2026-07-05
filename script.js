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

    const lastPrice = AI.marketData.livePrice;

    // ==========================
    // Bullish BOS
    // ==========================

    if (
        AI.structure.swingHigh.detected &&
        lastPrice > AI.structure.swingHigh.price
    ) {

        AI.structure.bos.detected = true;
        AI.structure.bos.direction = "BULLISH";
        AI.structure.bos.price = lastPrice;
        AI.structure.bos.timeframe = "M5";
        AI.structure.bos.time = Date.now();
        AI.structure.bos.candle = AI.structure.swingHigh.candle;
        AI.structure.bos.index = AI.structure.swingHigh.index;
        AI.structure.bos.strength = 100;

    }

    // ==========================
    // Bearish BOS
    // ==========================

    if (
        AI.structure.swingLow.detected &&
        lastPrice < AI.structure.swingLow.price
    ) {

        AI.structure.bos.detected = true;
        AI.structure.bos.direction = "BEARISH";
        AI.structure.bos.price = lastPrice;
        AI.structure.bos.timeframe = "M5";
        AI.structure.bos.time = Date.now();
        AI.structure.bos.candle = AI.structure.swingLow.candle;
        AI.structure.bos.index = AI.structure.swingLow.index;
        AI.structure.bos.strength = 100;

    }

    // ==========================
    // Bullish CHOCH
    // ==========================

    if (
        AI.structure.previousTrend === "BEARISH" &&
        AI.structure.swingHigh.detected &&
        lastPrice > AI.structure.swingHigh.price
    ) {

        AI.structure.choch.detected = true;
        AI.structure.choch.direction = "BULLISH";
        AI.structure.choch.price = lastPrice;
        AI.structure.choch.timeframe = "M5";
        AI.structure.choch.time = Date.now();
        AI.structure.choch.candle = AI.structure.swingHigh.candle;
        AI.structure.choch.index = AI.structure.swingHigh.index;
        AI.structure.choch.confirmed = true;

    }

    // ==========================
    // Bearish CHOCH
    // ==========================

    if (
        AI.structure.previousTrend === "BULLISH" &&
        AI.structure.swingLow.detected &&
        lastPrice < AI.structure.swingLow.price
    ) {

        AI.structure.choch.detected = true;
        AI.structure.choch.direction = "BEARISH";
        AI.structure.choch.price = lastPrice;
        AI.structure.choch.timeframe = "M5";
        AI.structure.choch.time = Date.now();
        AI.structure.choch.candle = AI.structure.swingLow.candle;
        AI.structure.choch.index = AI.structure.swingLow.index;
        AI.structure.choch.confirmed = true;

    }

    // ==========================
    // Trend Engine
    // ==========================

    if (
        AI.structure.bos.detected &&
        AI.structure.bos.direction === "BULLISH"
    ) {

        AI.structure.currentTrend = "BULLISH";
        AI.structure.structureStrength = AI.structure.bos.strength;

    }

    if (
        AI.structure.bos.detected &&
        AI.structure.bos.direction === "BEARISH"
    ) {

        AI.structure.currentTrend = "BEARISH";
        AI.structure.structureStrength = AI.structure.bos.strength;

    }

    if (
        AI.structure.choch.detected
    ) {

        AI.structure.trendChanged = true;
        AI.structure.trendChangePoint = AI.structure.choch.price;
        AI.structure.currentTrend = AI.structure.choch.direction;

    }

    AI.structure.previousTrend = AI.structure.currentTrend;

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

        // Keep only the latest 500 ticks
        if (AI.marketData.ticks.length > 500) {

            AI.marketData.ticks.shift();

        }

        buildCandles();

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

    if (PriceEngine.running) return;

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

    const ticks = AI.marketData.ticks;

    const firstTick = ticks[0];

    const lastTick = ticks[ticks.length - 1];

    const now = Date.now();

    const FIVE_MINUTES = 5 * 60 * 1000;

    const candle = {

        open: firstTick.price,

        high: Math.max(...ticks.map(tick => tick.price)),

        low: Math.min(...ticks.map(tick => tick.price)),

        close: lastTick.price,

        startTime: firstTick.time,

        endTime: lastTick.time

    };

    // Create first candle
    if (AI.marketData.candles.m5.length === 0) {

        AI.marketData.candles.m5.push(candle);

        return;

    }

    const current = AI.marketData.candles.m5[AI.marketData.candles.m5.length - 1];

    // If 5 minutes have passed, start a new candle
    if ((now - current.startTime) >= FIVE_MINUTES) {

        AI.marketData.candles.m5.push(candle);

        // Keep only the latest 500 candles
        if (AI.marketData.candles.m5.length > 500) {

            AI.marketData.candles.m5.shift();

        }

        detectSwings();

    } else {

        // Update current candle
        AI.marketData.candles.m5[AI.marketData.candles.m5.length - 1] = candle;

    }

}

// =====================================
// Swing Detection Engine
// =====================================

function detectSwings() {

    const candles = AI.marketData.candles.m5;

    if (candles.length < 5) return;

    const i = candles.length - 3;

    const left = candles[i - 1];
    const current = candles[i];
    const right = candles[i + 1];

    // Swing High
    if (
        current.high > left.high &&
        current.high > right.high
    ) {

        AI.structure.swingHigh.detected = true;
        AI.structure.swingHigh.price = current.high;
        AI.structure.swingHigh.candle = current;
        AI.structure.swingHigh.time = current.endTime;
        AI.structure.swingHigh.index = i;
        AI.structure.swingHigh.timeframe = "M5";

    }

    // Swing Low
    if (
        current.low < left.low &&
        current.low < right.low
    ) {

        AI.structure.swingLow.detected = true;
        AI.structure.swingLow.price = current.low;
        AI.structure.swingLow.candle = current;
        AI.structure.swingLow.time = current.endTime;
        AI.structure.swingLow.index = i;
        AI.structure.swingLow.timeframe = "M5";

    }

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
