// =====================================
// XAU Intelligence AI Brain v3.0
// =====================================

console.log("XAU Intelligence Started");

// =====================================
// XAU Intelligence AI Engine
// =====================================

const AI = {

    // Timeframe Brain
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

},

},

    // Market Structure
    // Market Structure
structure: {

    bos: {
        detected: false,
        direction: "NONE"
    },

    choch: {
        detected: false,
        direction: "NONE"
    },

    trendState: "UNKNOWN",

    lastStructure: null

},

    // Liquidity Analysis
    liquidity: {},

    // Entry Zones
    entryZones: {},

    // Candlestick Confirmation
    candlesticks: {},

    // Risk Management
    risk: {},

    // Final AI Signal
    signal: {},

    // Trade Management
    trade: {},

    // Browser Notifications
    notifications: {},

    // Trade Journal
    journal: {}

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

function analyzeMarketStructure(masterBias) {

    AI.structure.trendState = masterBias.direction;

    AI.structure.bos

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
