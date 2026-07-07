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

    // Buy Side Liquidity
    buySideTaken: false,

    // Sell Side Liquidity
    sellSideTaken: false,

    // Equal Highs
    equalHighs: [],

    // Equal Lows
    equalLows: [],

    // Liquidity Sweep
    sweepDetected: false,

    sweepPrice: null,

    sweepTime: null,

    sweepDirection: "NONE",

    sweepStrength: 0,

    // Stop Hunt
    stopHuntDetected: false,

    stopHuntDirection: "NONE",

    stopHuntPrice: null,

    stopHuntTime: null,

    // Premium / Discount
    premiumZone: {

        active: false,

        top: null,

        bottom: null

    },

    discountZone: {

        active: false,

        top: null,

        bottom: null

    },

    // Liquidity History
    history: [],

    // Last Liquidity Event
    lastEvent: {

        type: "NONE",

        direction: "NONE",

        price: null,

        time: null

    }

},

// =========================
// Entry Zones
// =========================
entryZones: {

    // Fair Value Gap
    fvg: {

        detected: false,
        direction: "NONE",
        top: null,
        bottom: null,
        midpoint: null,
        filled: false,
        timeframe: null,
        strength: 0,
        candle: null,
        time: null

    },

    // Inverse Fair Value Gap
    ifvg: {

        detected: false,
        direction: "NONE",
        top: null,
        bottom: null,
        midpoint: null,
        timeframe: null,
        candle: null,
        time: null

    },

    // Order Block
    orderBlock: {

        detected: false,
        direction: "NONE",
        price: null,
        high: null,
        low: null,
        mitigated: false,
        strength: 0,
        timeframe: null,
        candle: null,
        time: null

    },

    // Breaker Block
    breakerBlock: {

        detected: false,
        direction: "NONE",
        top: null,
        bottom: null,
        strength: 0,
        timeframe: null,
        candle: null,
        time: null

    },

    // Supply Zone
    supply: {

        detected: false,
        top: null,
        bottom: null,
        strength: 0,
        touched: false,
        broken: false

    },

    // Demand Zone
    demand: {

        detected: false,
        top: null,
        bottom: null,
        strength: 0,
        touched: false,
        broken: false

    },

    // Support
    support: {

        detected: false,
        price: null,
        touches: 0,
        strength: 0,
        broken: false

    },

    // Resistance
    resistance: {

        detected: false,
        price: null,
        touches: 0,
        strength: 0,
        broken: false

    },

    // Premium Zone
    premium: {

        active: false,
        top: null,
        bottom: null

    },

    // Discount Zone
    discount: {

        active: false,
        top: null,
        bottom: null

    },

    // Entry Quality
    entryReady: false,

    bestEntry: "NONE",

    confluenceScore: 0,

    history: []

},

// =========================
// Candlestick Confirmation
// =========================
candlesticks: {

    // Engulfing
    bullishEngulfing: false,

    bearishEngulfing: false,

    // Pin Bars
    bullishPinBar: false,

    bearishPinBar: false,

    // Hammer Family
    hammer: false,

    invertedHammer: false,

    shootingStar: false,

    hangingMan: false,

    // Star Patterns
    morningStar: false,

    eveningStar: false,

    doji: false,

    // Multi-Candle Patterns
    insideBar: false,

    outsideBar: false,

    threeWhiteSoldiers: false,

    threeBlackCrows: false,

    tweezerTop: false,

    tweezerBottom: false,

    // Rejection
    bullishRejection: false,

    bearishRejection: false,

    // Confirmation
    confirmation: false,

    pattern: "NONE",

    strength: 0,

    direction: "NONE",

    timeframe: null,

    candle: null,

    time: null,

    history: []

},

// =========================
// Risk Management
// =========================
risk: {

    // Risk Settings
    riskPercent: 1,

    maxRiskPercent: 2,

    riskRewardRatio: 3,

    // Account
    accountBalance: 0,

    accountEquity: 0,

    accountFreeMargin: 0,

    // Position Size
    lotSize: 0,

    dynamicLot: true,

    // Stop Loss
    stopLoss: {

        price: null,

        pips: 0,

        dynamic: true

    },

    // Take Profit
    takeProfit: {

        price: null,

        pips: 0,

        dynamic: true

    },

    // Trade Statistics
    totalTrades: 0,

    winningTrades: 0,

    losingTrades: 0,

    winRate: 0,

    // Protection
    maxDailyLoss: 3,

    maxDailyTrades: 5,

    maxConsecutiveLosses: 3,

    dailyLossCount: 0,

    dailyTradeCount: 0,

    consecutiveLosses: 0,

    tradingLocked: false,

    // Drawdown
    currentDrawdown: 0,

    maxDrawdown: 10,

    // Trade Status
    tradeOpen: false,

    currentTrade: null,

    history: []

},

// =========================
// Final AI Signal
// =========================
signal: {

    // Final Decision
    action: "WAIT", // BUY | SELL | WAIT

    confidence: 0,

    tradeGrade: "NONE", // A+, A, B, C

    // Market Context
    trend: "UNKNOWN",

    marketState: "SCANNING",

    timeframe: "M5",

    session: "NONE",

    // Entry
    entryPrice: null,

    entryType: "NONE", // MARKET | LIMIT

    // Risk
    stopLoss: null,

    takeProfit: null,

    riskReward: 0,

    lotSize: 0,

    // AI Scores
    confluenceScore: 0,

    structureScore: 0,

    liquidityScore: 0,

    entryScore: 0,

    candlestickScore: 0,

    riskScore: 0,

    // Confirmation
    confirmation: false,

    confirmationCount: 0,

    // Reasons
    reasons: [],

    warnings: [],

    // Timing
    generatedTime: null,

    validUntil: null,

    // Trade Status
    executed: false,

    result: "PENDING", // WIN | LOSS | BREAKEVEN | PENDING

    history: []

},

// =========================
// Trade Management
// =========================
trade: {

    // Trade Status
    active: false,

    ticket: null,

    direction: "NONE",

    status: "IDLE", // IDLE | OPEN | CLOSED

    // Entry
    entryPrice: null,

    entryTime: null,

    // Stop Loss & Take Profit
    stopLoss: null,

    takeProfit: null,

    // Current Market
    currentPrice: null,

    currentProfit: 0,

    currentPips: 0,

    // Break Even
    breakEvenEnabled: true,

    breakEvenTriggered: false,

    breakEvenPrice: null,

    // Trailing Stop
    trailingStopEnabled: true,

    trailingStopPrice: null,

    trailingDistance: 0,

    // Partial Take Profit
    partialTPEnabled: true,

    partialTP1Hit: false,

    partialTP2Hit: false,

    partialTP3Hit: false,

    // Trade Timing
    tradeDuration: 0,

    maxTradeDuration: 0,

    // Exit
    exitPrice: null,

    exitTime: null,

    exitReason: "NONE",

    result: "PENDING", // WIN | LOSS | BREAKEVEN | PENDING

    // Statistics
    highestProfit: 0,

    lowestDrawdown: 0,

    // History
    history: []

},

// =========================
// Browser Notifications
// =========================
notifications: {

    enabled: true,

    sound: true,

    vibration: true,

    desktop: true,

    mobile: true,

    // =====================
    // Trade Signal Alerts
    // =====================
    tradeSignal: true,

    entryConfirmation: true,

    // =====================
    // Risk Alerts
    // =====================
    riskWarning: true,

    dailyLossWarning: true,

    drawdownWarning: true,

    // =====================
    // Trade Management
    // =====================
    breakEvenAlert: true,

    partialTakeProfitAlert: true,

    trailingStopAlert: true,

    tradeClosedAlert: true,

    // =====================
    // Journal & Discipline
    // =====================
    journalReminder: true,

    disciplineReminder: true,

    dailyReviewReminder: true,

    weeklyReviewReminder: true,

    // =====================
    // News Alerts
    // =====================
    highImpactNewsAlert: true,

    newsCooldownAlert: true,

    // =====================
    // Notification History
    // =====================
    history: []

},

// =========================
// Trade Journal
// =========================
journal: {

    // Trade Records
    trades: [],

    // Daily Journal
    daily: {

        date: null,

        tradesTaken: 0,

        wins: 0,

        losses: 0,

        profit: 0,

        notes: "",

        lesson: "",

        screenshots: []

    },

    // Weekly Journal
    weekly: {

        week: null,

        tradesTaken: 0,

        wins: 0,

        losses: 0,

        profit: 0,

        notes: "",

        lesson: ""

    },

    // Monthly Journal
    monthly: {

        month: null,

        tradesTaken: 0,

        wins: 0,

        losses: 0,

        profit: 0,

        notes: "",

        lesson: ""

    },

    // Discipline Checklist
    discipline: {

        followedPlan: false,

        waitedForConfirmation: false,

        respectedRisk: false,

        noRevengeTrade: false,

        noFOMO: false,

        journalCompleted: false,

        psychologyGood: false

    },

    // Discipline Streak
    streak: {

        current: 0,

        best: 0,

        lastCheckIn: null

    },

    // Performance
    performance: {

        winRate: 0,

        profitFactor: 0,

        averageRR: 0,

        averageWin: 0,

        averageLoss: 0

    },

    // Psychology
    psychology: {

        emotion: "CALM",

        confidence: 0,

        stress: 0,

        mistakes: []

    },

    // Goals
    goals: {

        daily: "",

        weekly: "",

        monthly: ""

    },

    // AI Review
    aiReview: {

        completed: false,

        score: 0,

        feedback: "",

        improvement: ""

    }

},
    
// =========================
// Trading Sessions
// =========================
sessions: {

    current: "NONE",

    previous: "NONE",

    next: "NONE",

    // Asian Session
    asian: {

        active: false,

        open: "00:00",

        close: "09:00",

        volatility: "LOW"

    },

    // London Session
    london: {

        active: false,

        open: "08:00",

        close: "17:00",

        volatility: "HIGH"

    },

    // New York Session
    newYork: {

        active: false,

        open: "13:00",

        close: "22:00",

        volatility: "HIGH"

    },

    // London / New York Overlap
    overlap: {

        active: false,

        open: "13:00",

        close: "17:00",

        volatility: "VERY_HIGH"

    },

    tradingAllowed: true,

    preferredSession: "LONDON_NEWYORK",

    avoidLowLiquidity: true,

    sessionStrength: 0,

    serverTime: null,

    countdown: null

},

// =========================
// News Engine
// =========================
news: {

    enabled: true,

    highImpact: false,

    mediumImpact: false,

    lowImpact: false,

    event: "",

    currency: "USD",

    impact: "NONE",

    eventTime: null,

    countdown: null,

    tradingBlocked: false,

    cooldownMinutes: 15,

    cooldownActive: false,

    lastNewsTime: null,

    history: []

},

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
// Entry Zone Detection Engine
// ---------------------------

function detectEntryZones() {

    const candles = AI.marketData.candles.m5;

    if (candles.length < 5) return;

    const current = candles[candles.length - 1];
    const previous = candles[candles.length - 2];
    const third = candles[candles.length - 3];

    // ==========================
    // Fair Value Gap (FVG)
    // ==========================

    if (third.high < current.low) {

        AI.entryZones.fvg.detected = true;
        AI.entryZones.fvg.direction = "BULLISH";
        AI.entryZones.fvg.top = current.low;
        AI.entryZones.fvg.bottom = third.high;
        AI.entryZones.fvg.midpoint =
            (current.low + third.high) / 2;
        AI.entryZones.fvg.time = current.endTime;
        AI.entryZones.fvg.candle = current;

    }

    if (third.low > current.high) {

        AI.entryZones.fvg.detected = true;
        AI.entryZones.fvg.direction = "BEARISH";
        AI.entryZones.fvg.top = third.low;
        AI.entryZones.fvg.bottom = current.high;
        AI.entryZones.fvg.midpoint =
            (third.low + current.high) / 2;
        AI.entryZones.fvg.time = current.endTime;
        AI.entryZones.fvg.candle = current;

    }

    // ==========================
    // Order Block
    // ==========================

    if (AI.structure.bos.detected) {

        AI.entryZones.orderBlock.detected = true;
        AI.entryZones.orderBlock.direction =
            AI.structure.bos.direction;
        AI.entryZones.orderBlock.price = previous.close;
        AI.entryZones.orderBlock.high = previous.high;
        AI.entryZones.orderBlock.low = previous.low;
        AI.entryZones.orderBlock.candle = previous;
        AI.entryZones.orderBlock.time = previous.endTime;

    }

    // ==========================
    // Support
    // ==========================

    if (AI.structure.swingLow.detected) {

        AI.entryZones.support.detected = true;
        AI.entryZones.support.price =
            AI.structure.swingLow.price;

    }

    // ==========================
    // Resistance
    // ==========================

    if (AI.structure.swingHigh.detected) {

        AI.entryZones.resistance.detected = true;
        AI.entryZones.resistance.price =
            AI.structure.swingHigh.price;

    }

}

// ---------------------------
// Candlestick Detection Engine
// ---------------------------

function detectCandlestickPatterns() {

    const candles = AI.marketData.candles.m5;

    if (candles.length < 3) return;

    const current = candles[candles.length - 1];
    const previous = candles[candles.length - 2];

    // Reset
    AI.candlesticks.pattern = "NONE";
    AI.candlesticks.confirmation = false;
    AI.candlesticks.strength = 0;
    AI.candlesticks.direction = "NONE";

    // ==========================
    // Bullish Engulfing
    // ==========================

    if (

        previous.close < previous.open &&
        current.close > current.open &&
        current.open < previous.close &&
        current.close > previous.open

    ) {

        AI.candlesticks.bullishEngulfing = true;
        AI.candlesticks.pattern = "BULLISH_ENGULFING";
        AI.candlesticks.direction = "BULLISH";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 95;

    }

    // ==========================
    // Bearish Engulfing
    // ==========================

    if (

        previous.close > previous.open &&
        current.close < current.open &&
        current.open > previous.close &&
        current.close < previous.open

    ) {

        AI.candlesticks.bearishEngulfing = true;
        AI.candlesticks.pattern = "BEARISH_ENGULFING";
        AI.candlesticks.direction = "BEARISH";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 95;

    }

    // ==========================
    // Doji
    // ==========================

    if (

        Math.abs(current.open - current.close) <=
        ((current.high - current.low) * 0.10)

    ) {

        AI.candlesticks.doji = true;
        AI.candlesticks.pattern = "DOJI";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 60;

    }

    AI.candlesticks.time = current.endTime;
    AI.candlesticks.candle = current;
    AI.candlesticks.timeframe = "M5";

}

// ---------------------------
// AI Signal Engine
// ---------------------------

function generateSignal(masterBias) {

    detectEntryZones();

    detectCandlestickPatterns();

    let marketState = "SCANNING";

    if (masterBias.direction === "BULLISH") {

        marketState = "TRENDING BULLISH";

        return {

            trend: "BULLISH",

            signal: "WAIT",

            confidence: masterBias.bullish,

            marketState,

            status: "Waiting for setup..."

        };

    }

    if (masterBias.direction === "BEARISH") {

        marketState = "TRENDING BEARISH";

        return {

            trend: "BEARISH",

            signal: "WAIT",

            confidence: masterBias.bearish,

            marketState,

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
    // Break & Retest Detection
    // ==========================

    if (AI.structure.bos.detected) {

        if (

            AI.structure.bos.direction === "BULLISH" &&
            Math.abs(lastPrice - AI.structure.bos.price) <= 1

        ) {

            AI.breakRetest.detected = true;
            AI.breakRetest.direction = "BULLISH";
            AI.breakRetest.level = AI.structure.bos.price;
            AI.breakRetest.retested = true;
            AI.breakRetest.confirmed = true;
            AI.breakRetest.time = Date.now();
            AI.breakRetest.strength = 90;

        }

        if (

            AI.structure.bos.direction === "BEARISH" &&
            Math.abs(lastPrice - AI.structure.bos.price) <= 1

        ) {

            AI.breakRetest.detected = true;
            AI.breakRetest.direction = "BEARISH";
            AI.breakRetest.level = AI.structure.bos.price;
            AI.breakRetest.retested = true;
            AI.breakRetest.confirmed = true;
            AI.breakRetest.time = Date.now();
            AI.breakRetest.strength = 90;

        }

    }
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
// Liquidity Detection Engine
// =====================================

function detectLiquidity() {

    const candles = AI.marketData.candles.m5;

    if (candles.length < 10) return;

    const latest = candles[candles.length - 1];

    // -------------------------
    // Equal High Detection
    // -------------------------

    for (let i = candles.length - 10; i < candles.length - 1; i++) {

        if (Math.abs(candles[i].high - latest.high) <= 0.20) {

            AI.liquidity.equalHighs.push({

                price: latest.high,

                time: latest.endTime

            });

        }

    }

    // -------------------------
    // Equal Low Detection
    // -------------------------

    for (let i = candles.length - 10; i < candles.length - 1; i++) {

        if (Math.abs(candles[i].low - latest.low) <= 0.20) {

            AI.liquidity.equalLows.push({

                price: latest.low,

                time: latest.endTime

            });

        }

    }

    // -------------------------
    // Buy-side Sweep
    // -------------------------

    if (

        AI.structure.swingHigh.detected &&
        latest.high > AI.structure.swingHigh.price

    ) {

        AI.liquidity.buySideTaken = true;
        AI.liquidity.sweepDetected = true;
        AI.liquidity.sweepDirection = "BUY";
        AI.liquidity.sweepPrice = latest.high;
        AI.liquidity.sweepTime = latest.endTime;

    }

    // -------------------------
    // Sell-side Sweep
    // -------------------------

    if (

        AI.structure.swingLow.detected &&
        latest.low < AI.structure.swingLow.price

    ) {

        AI.liquidity.sellSideTaken = true;
        AI.liquidity.sweepDetected = true;
        AI.liquidity.sweepDirection = "SELL";
        AI.liquidity.sweepPrice = latest.low;
        AI.liquidity.sweepTime = latest.endTime;

    }

}

// =====================================
// Trading Session Engine
// =====================================

function detectTradingSession() {

    const now = new Date();

    const hour = now.getUTCHours();

    AI.sessions.serverTime = now.toISOString();

    AI.sessions.asian.active = false;
    AI.sessions.london.active = false;
    AI.sessions.newYork.active = false;
    AI.sessions.overlap.active = false;

    if (hour >= 0 && hour < 8) {

        AI.sessions.current = "ASIAN";
        AI.sessions.asian.active = true;
        AI.sessions.sessionStrength = 30;

    }

    else if (hour >= 8 && hour < 13) {

        AI.sessions.current = "LONDON";
        AI.sessions.london.active = true;
        AI.sessions.sessionStrength = 80;

    }

    else if (hour >= 13 && hour < 17) {

        AI.sessions.current = "LONDON_NEWYORK";
        AI.sessions.overlap.active = true;
        AI.sessions.sessionStrength = 100;

    }

    else if (hour >= 17 && hour < 22) {

        AI.sessions.current = "NEW_YORK";
        AI.sessions.newYork.active = true;
        AI.sessions.sessionStrength = 75;

    }

    else {

        AI.sessions.current = "CLOSED";
        AI.sessions.sessionStrength = 10;

    }

}
// =====================================
// News Detection Engine
// =====================================

async function detectNews() {

    try {

        // Placeholder for future live News API

        AI.news.highImpact = false;

        AI.news.mediumImpact = false;

        AI.news.lowImpact = false;

        AI.news.tradingBlocked = false;

        AI.news.cooldownActive = false;

    }

    catch (error) {

        console.log("News Engine Error:", error);

    }

}

// =====================================
// Start Price Engine
// =====================================

function startPriceEngine() {

    if (PriceEngine.running) return;

    PriceEngine.running = true;

    fetchLivePrice();

    setInterval(() => {

        fetchLivePrice();

        detectLiquidity();

        detectTradingSession();

        detectNews();

    }, PriceEngine.interval);

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
