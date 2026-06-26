// =====================================
// XAU Intelligence AI Brain v2.0
// =====================================

console.log("XAU Intelligence Started");

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

    const bullish =
        (trendData.h4.bullish +
        trendData.h1.bullish +
        trendData.m15.bullish +
        trendData.m5.bullish) / 4;

    const bearish = 100 - bullish;

    let direction = "NEUTRAL";

    if (bullish >= 60) {
        direction = "BULLISH";
    } else if (bearish >= 60) {
        direction = "BEARISH";
    }

    return {
        bullish,
        bearish,
        direction
    };
}

// ---------------------------
// AI Signal Engine
// ---------------------------

function generateSignal(masterBias) {

    if (masterBias.direction === "BULLISH") {
        return {
            signal: "BUY",
            confidence: masterBias.bullish
        };
    }

    if (masterBias.direction === "BEARISH") {
        return {
            signal: "SELL",
            confidence: masterBias.bearish
        };
    }

    return {
        signal: "WAIT",
        confidence: 50
    };
}

const masterBias = calculateMasterBias();
const aiSignal = generateSignal(masterBias);

console.log(masterBias);
console.log(aiSignal);
