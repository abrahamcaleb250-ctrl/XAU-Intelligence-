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

    // Overall Trend
    currentTrend: "UNKNOWN",

    previousTrend: "UNKNOWN",

    trendState: "SCANNING",

    trendChanged: false,

    trendChangePoint: null,

    structureStrength: 0,

    lastStructure: null,

    lastUpdate: null,

    // ==========================
    // Break Of Structure (BOS)
    // ==========================

    bos: {

        detected: false,

        confirmed: false,

        direction: "NONE",

        price: null,

        timeframe: null,

        candle: null,

        index: null,

        time: null,

        strength: 0

    },

    // ==========================
    // Change Of Character (CHOCH)
    // ==========================

    choch: {

        detected: false,

        confirmed: false,

        direction: "NONE",

        price: null,

        timeframe: null,

        candle: null,

        index: null,

        time: null,

        strength: 0

    },

    // ==========================
    // Swing High
    // ==========================

    swingHigh: {

        detected: false,

        price: null,

        timeframe: null,

        candle: null,

        index: null,

        time: null

    },

    // ==========================
    // Swing Low
    // ==========================

    swingLow: {

        detected: false,

        price: null,

        timeframe: null,

        candle: null,

        index: null,

        time: null

    },

    // ==========================
    // Internal Structure
    // ==========================

    internal: {

        direction: "NONE",

        strength: 0,

        lastBreak: null

    },

    // ==========================
    // External Structure
    // ==========================

    external: {

        direction: "NONE",

        strength: 0,

        lastBreak: null

    },

    // ==========================
    // Structure History
    // ==========================

    history: []

},
// =========================
// Liquidity Analysis
// =========================
liquidity: {

    // Overall Score
    score: 0,

    lastUpdate: null,

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

    // Premium Zone
    premiumZone: {

        active: false,

        top: null,

        bottom: null

    },

    // Discount Zone
    discountZone: {

        active: false,

        top: null,

        bottom: null

    },

    // Current Liquidity State
    currentState: "NONE",

    currentBias: "NONE",

    // Last Liquidity Event
    lastEvent: {

        type: "NONE",

        direction: "NONE",

        price: null,

        time: null,

        strength: 0

    },

    // Runtime
    waitingForSweep: false,

    liquidityGrabConfirmed: false,

    liquidityShift: false,

    // History
    history: []

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
        filled: false,
        timeframe: null,
        strength: 0,
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

    confirmationCount: 0,

    score: 0,

    confidence: 0,

    valid: false,

    reason: "NONE",

    lastUpdate: null,

    history: []

},

// =========================
// Candlestick Confirmation
// =========================
candlesticks: {

    // Engulfing
    bullishEngulfing: false,
    bearishEngulfing: false,

    // Pin Bar
    pinBar: false,
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

    direction: "NONE",

    strength: 0,

    confidence: 0,

    score: 0,

    confirmed: false,

    timeframe: null,

    candle: null,

    time: null,

    lastUpdate: null,

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

// --------------------------------------------------
// Risk Management Engine
// --------------------------------------------------

function calculateRisk() {

    if (!AI.entryZones.entryReady) return AI.risk;

    AI.risk.tradeAllowed = true;
    AI.risk.reason = "NONE";

    // ==========================
    // Entry
    // ==========================

    AI.risk.entryPrice = AI.marketData.livePrice;

    // ==========================
    // Stop Loss
    // ==========================

    if (AI.structure.currentTrend === "BULLISH") {

        AI.risk.stopLoss.price =
            AI.structure.swingLow.price;

    }

    if (AI.structure.currentTrend === "BEARISH") {

        AI.risk.stopLoss.price =
            AI.structure.swingHigh.price;

    }

    // ==========================
    // Risk Distance
    // ==========================

    AI.risk.riskDistance = Math.abs(

        AI.risk.entryPrice -
        AI.risk.stopLoss.price

    );

    AI.risk.stopLoss.pips =
        AI.risk.riskDistance;

    // ==========================
    // Take Profit
    // ==========================

    if (AI.structure.currentTrend === "BULLISH") {

        AI.risk.takeProfit.price =

            AI.risk.entryPrice +

            (

                AI.risk.riskDistance *

                AI.risk.riskRewardRatio

            );

    }

    if (AI.structure.currentTrend === "BEARISH") {

        AI.risk.takeProfit.price =

            AI.risk.entryPrice -

            (

                AI.risk.riskDistance *

                AI.risk.riskRewardRatio

            );

    }

    AI.risk.takeProfit.pips =

        Math.abs(

            AI.risk.takeProfit.price -

            AI.risk.entryPrice

        );

    // ==========================
    // Expected RR
    // ==========================

    AI.risk.expectedRR =
        AI.risk.riskRewardRatio;

    // ==========================
    // Trade Quality
    // ==========================

    AI.risk.tradeQuality =

        AI.entryZones.confluenceScore;

    // ==========================
    // Daily Loss Protection
    // ==========================

    if (

        AI.risk.dailyLossCount >=
        AI.risk.maxDailyLoss

    ) {

        AI.risk.tradeAllowed = false;

        AI.risk.reason =
            "MAX_DAILY_LOSS";

    }

    // ==========================
    // Daily Trade Protection
    // ==========================

    if (

        AI.risk.dailyTradeCount >=
        AI.risk.maxDailyTrades

    ) {

        AI.risk.tradeAllowed = false;

        AI.risk.reason =
            "MAX_DAILY_TRADES";

    }

    // ==========================
    // Consecutive Loss Protection
    // ==========================

    if (

        AI.risk.consecutiveLosses >=

        AI.risk.maxConsecutiveLosses

    ) {

        AI.risk.tradeAllowed = false;

        AI.risk.reason =
            "MAX_CONSECUTIVE_LOSSES";

    }

    // ==========================
    // Drawdown Protection
    // ==========================

    if (

        AI.risk.currentDrawdown >=

        AI.risk.maxDrawdown

    ) {

        AI.risk.tradeAllowed = false;

        AI.risk.reason =
            "MAX_DRAWDOWN";

    }

    AI.risk.lastCalculation =
        Date.now();

    return AI.risk;

}

// --------------------------------------------------
// Risk Runtime Engine
// --------------------------------------------------

function updateRiskRuntime() {

    // ==========================
    // Position Value
    // ==========================

    AI.risk.positionValue =

        AI.risk.accountBalance *

        (AI.risk.riskPercent / 100);

    // ==========================
    // Risk Amount
    // ==========================

    AI.risk.riskAmount =

        AI.risk.positionValue;

    // ==========================
    // Reward Amount
    // ==========================

    AI.risk.rewardAmount =

        AI.risk.positionValue *

        AI.risk.riskRewardRatio;

    // ==========================
    // Dynamic Lot
    // ==========================

    if (AI.risk.dynamicLot) {

        AI.risk.lotSize =

            AI.risk.positionValue /

            Math.max(AI.risk.riskDistance, 1);

    }

    // ==========================
    // Lock Trading
    // ==========================

    AI.risk.tradingLocked =

        !AI.risk.tradeAllowed;

    // ==========================
    // Runtime
    // ==========================

    AI.risk.lastCalculation = Date.now();

    return AI.risk;

}

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

// --------------------------------------------------
// Final AI Decision Engine - Part 1
// --------------------------------------------------

function generateFinalAISignal() {

    AI.signal.generatedTime = Date.now();

    AI.signal.trend = AI.structure.currentTrend;

    AI.signal.marketState = AI.structure.trendState;

    AI.signal.session = AI.sessions.current;

    AI.signal.entryPrice = AI.marketData.livePrice;

    AI.signal.stopLoss = AI.risk.stopLoss.price;

    AI.signal.takeProfit = AI.risk.takeProfit.price;

    AI.signal.riskReward = AI.risk.expectedRR;

    AI.signal.lotSize = AI.risk.lotSize;

    // ==========================
    // Individual Scores
    // ==========================

    AI.signal.structureScore =
        AI.structure.structureStrength;

    AI.signal.liquidityScore =
        AI.liquidity.score;

    AI.signal.entryScore =
        AI.entryZones.confluenceScore;

    AI.signal.candlestickScore =
        AI.candlesticks.strength;

    AI.signal.riskScore =
        AI.risk.tradeQuality;

    // ==========================
    // Confluence Score
    // ==========================

    AI.signal.confluenceScore = Math.round(

        (

            AI.signal.structureScore +

            AI.signal.liquidityScore +

            AI.signal.entryScore +

            AI.signal.candlestickScore +

            AI.signal.riskScore

        ) / 5

    );

    // ==========================
    // Confidence
    // ==========================

    AI.signal.confidence =
        AI.signal.confluenceScore;

    // ==========================
    // Confirmation Counter
    // ==========================

    AI.signal.confirmationCount = 0;

    if (AI.structure.bos.detected)
        AI.signal.confirmationCount++;

    if (AI.breakRetest.confirmed)
        AI.signal.confirmationCount++;

    if (AI.entryZones.entryReady)
        AI.signal.confirmationCount++;

    if (AI.candlesticks.confirmation)
        AI.signal.confirmationCount++;

    if (AI.risk.tradeAllowed)
        AI.signal.confirmationCount++;

    // ==========================
    // AI Confirmation
    // ==========================

    AI.signal.confirmation =

        AI.signal.confirmationCount >= 5;

// ==========================
// Final Decision
// ==========================

    AI.signal.reasons = [];

    AI.signal.warnings = [];

    // Default
    AI.signal.action = "WAIT";

    AI.signal.tradeGrade = "C";

    // ==========================
    // News Filter
    // ==========================

    if (AI.news.tradingBlocked) {

        AI.signal.action = "AVOID";

        AI.signal.warnings.push(
            "High Impact News"
        );

    }

    // ==========================
    // Risk Filter
    // ==========================

    else if (!AI.risk.tradeAllowed) {

        AI.signal.action = "AVOID";

        AI.signal.warnings.push(
            AI.risk.reason
        );

    }

    // ==========================
    // BUY
    // ==========================

    else if (

        AI.structure.currentTrend === "BULLISH" &&

        AI.entryZones.entryReady &&

        AI.candlesticks.direction === "BULLISH" &&

        AI.signal.confirmation

    ) {

        AI.signal.action = "BUY";

        AI.signal.reasons.push(
            "Bullish Trend"
        );

        AI.signal.reasons.push(
            "Entry Confirmed"
        );

        AI.signal.reasons.push(
            "Bullish Candle"
        );

    }

    // ==========================
    // SELL
    // ==========================

    else if (

        AI.structure.currentTrend === "BEARISH" &&

        AI.entryZones.entryReady &&

        AI.candlesticks.direction === "BEARISH" &&

        AI.signal.confirmation

    ) {

        AI.signal.action = "SELL";

        AI.signal.reasons.push(
            "Bearish Trend"
        );

        AI.signal.reasons.push(
            "Entry Confirmed"
        );

        AI.signal.reasons.push(
            "Bearish Candle"
        );

    }

    // ==========================
    // WAIT
    // ==========================

    else {

        AI.signal.action = "WAIT";

        AI.signal.warnings.push(
            "Waiting for Confirmation"
        );

    }

    // ==========================
    // Trade Grade
    // ==========================

    if (AI.signal.confidence >= 95) {

        AI.signal.tradeGrade = "A+";

    }

    else if (AI.signal.confidence >= 90) {

        AI.signal.tradeGrade = "A";

    }

    else if (AI.signal.confidence >= 80) {

        AI.signal.tradeGrade = "B";

    }

    else {

        AI.signal.tradeGrade = "C";

    }

    // ==========================
    // Signal Timing
    // ==========================

    AI.signal.validUntil =

        Date.now() + (5 * 60 * 1000);

    // ==========================
    // Execution
    // ==========================

    AI.signal.executed = false;

    AI.signal.result = "PENDING";

    // ==========================
    // Save History
    // ==========================

    AI.signal.history.push({

        action: AI.signal.action,

        trend: AI.signal.trend,

        confidence: AI.signal.confidence,

        tradeGrade: AI.signal.tradeGrade,

        entryPrice: AI.signal.entryPrice,

        stopLoss: AI.signal.stopLoss,

        takeProfit: AI.signal.takeProfit,

        riskReward: AI.signal.riskReward,

        session: AI.signal.session,

        marketState: AI.signal.marketState,

        reasons: [...AI.signal.reasons],

        warnings: [...AI.signal.warnings],

        generatedTime: AI.signal.generatedTime,

        validUntil: AI.signal.validUntil

    });

    // Limit history
    if (AI.signal.history.length > 500) {

        AI.signal.history.shift();

    }

    return AI.signal;

}

// =====================================
// Generate Final Signal
// =====================================

const masterBias = calculateMasterBias();

const marketStructure = analyzeMarketStructure(masterBias);

const tradeSignal = generateSignal(masterBias);

const finalSignal = generateFinalAISignal();

AI.structure.current = marketStructure;

AI.signal.current = tradeSignal;

AI.signal.final = finalSignal;

console.log("MASTER BIAS", masterBias);

console.log("MARKET STRUCTURE", marketStructure);

console.log("TRADE SIGNAL", tradeSignal);

console.log("FINAL AI SIGNAL", finalSignal);

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

// ---------------------------
// Trade Management Engine
// ---------------------------

function manageTrade() {

    if (!AI.trade.active) return;

    AI.trade.currentPrice = AI.marketData.livePrice;

    // ==========================
    // Current Profit
    // ==========================

    if (AI.trade.direction === "BUY") {

        AI.trade.currentPips =
            AI.trade.currentPrice - AI.trade.entryPrice;

    }

    if (AI.trade.direction === "SELL") {

        AI.trade.currentPips =
            AI.trade.entryPrice - AI.trade.currentPrice;

    }

    AI.trade.currentProfit = AI.trade.currentPips;

    // ==========================
    // Highest Profit
    // ==========================

    if (AI.trade.currentProfit > AI.trade.highestProfit) {

        AI.trade.highestProfit = AI.trade.currentProfit;

    }

    // ==========================
    // Lowest Drawdown
    // ==========================

    if (AI.trade.currentProfit < AI.trade.lowestDrawdown) {

        AI.trade.lowestDrawdown = AI.trade.currentProfit;

    }

    // ==========================
    // Break Even
    // ==========================

    if (

        AI.trade.breakEvenEnabled &&
        !AI.trade.breakEvenTriggered &&
        AI.trade.currentPips >= 20

    ) {

        AI.trade.breakEvenTriggered = true;
        AI.trade.breakEvenPrice = AI.trade.entryPrice;

    }

    // ==========================
    // Trailing Stop
    // ==========================

    if (

        AI.trade.trailingStopEnabled &&
        AI.trade.breakEvenTriggered

    ) {

        if (AI.trade.direction === "BUY") {

            AI.trade.trailingStopPrice =
                AI.trade.currentPrice -
                AI.trade.trailingDistance;

        }

        if (AI.trade.direction === "SELL") {

            AI.trade.trailingStopPrice =
                AI.trade.currentPrice +
                AI.trade.trailingDistance;

        }

    }

    // ==========================
    // Trade Duration
    // ==========================

    AI.trade.tradeDuration =
        Date.now() - AI.trade.entryTime;

}

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

// ---------------------------
// Journal Engine
// ---------------------------

function updateJournal(trade) {

    if (!trade) return;

    const record = {

        id: Date.now(),

        direction: trade.direction,

        entry: trade.entryPrice,

        stopLoss: trade.stopLoss,

        takeProfit: trade.takeProfit,

        exit: trade.exitPrice,

        result: trade.result,

        profit: trade.currentProfit,

        pips: trade.currentPips,

        timeframe: "M5",

        pattern: AI.candlesticks.pattern,

        structure: AI.structure.currentTrend,

        session: AI.sessions.current,

        news: AI.news.currentImpact,

        timestamp: Date.now()

    };

    AI.journal.history.push(record);

    AI.journal.totalTrades = AI.journal.history.length;

    if (trade.result === "WIN") {

        AI.journal.wins++;

    }

    if (trade.result === "LOSS") {

        AI.journal.losses++;

    }

    AI.journal.winRate =
        AI.journal.totalTrades > 0
            ? (AI.journal.wins / AI.journal.totalTrades) * 100
            : 0;

}

// =========================
// Discipline
// =========================
discipline: {

    // Daily Progress
    tradingToday: false,

    journalCompleted: false,

    reviewCompleted: false,

    followedPlan: true,

    // Consistency
    currentStreak: 0,

    bestStreak: 0,

    totalTradingDays: 0,

    missedDays: 0,

    consistencyScore: 100,

    // Calendar
    calendar: [],

    // Reviews
    dailyReview: {

        completed: false,

        notes: "",

        mistakes: [],

        strengths: [],

        rating: 0

    },

    weeklyReview: {

        completed: false,

        notes: "",

        totalTrades: 0,

        wins: 0,

        losses: 0,

        winRate: 0,

        lessons: []

    },

    // Psychology
    psychology: {

        confidence: 100,

        discipline: 100,

        patience: 100,

        emotionalControl: 100,

        revengeTrading: false,

        overTrading: false,

        fear: false,

        greed: false

    },

    // Rule Violations
    violations: {

        total: 0,

        revengeTrading: 0,

        overRisking: 0,

        overTrading: 0,

        earlyExit: 0,

        lateEntry: 0

    },

    // Runtime
    lastTradingDay: null,

    lastReview: null,

    status: "DISCIPLINED",

    history: []

},

// ---------------------------
// Discipline Engine
// ---------------------------

function updateDiscipline() {

    const today = new Date().toDateString();

    // ==========================
    // Trading Day
    // ==========================

    if (

        AI.trade.active ||

        AI.trade.history.length > 0

    ) {

        AI.discipline.tradingToday = true;

    }

    // ==========================
    // Streak
    // ==========================

    if (

        AI.discipline.tradingToday &&
        AI.discipline.journalCompleted

    ) {

        AI.discipline.currentStreak++;

        if (

            AI.discipline.currentStreak >
            AI.discipline.bestStreak

        ) {

            AI.discipline.bestStreak =
                AI.discipline.currentStreak;

        }

    }

    // ==========================
    // Consistency
    // ==========================

    const totalDays =

        AI.discipline.totalTradingDays +
        AI.discipline.missedDays;

    if (totalDays > 0) {

        AI.discipline.consistencyScore =

            Math.round(

                (

                    AI.discipline.totalTradingDays /

                    totalDays

                ) * 100

            );

    }

    // ==========================
    // Status
    // ==========================

    if (

        AI.discipline.consistencyScore >= 90

    ) {

        AI.discipline.status =
            "DISCIPLINED";

    }

    else if (

        AI.discipline.consistencyScore >= 70

    ) {

        AI.discipline.status =
            "IMPROVING";

    }

    else {

        AI.discipline.status =
            "NEEDS_IMPROVEMENT";

    }

    // ==========================
    // Calendar
    // ==========================

    AI.discipline.calendar.push({

        date: today,

        traded: AI.discipline.tradingToday,

        journal: AI.discipline.journalCompleted,

        review: AI.discipline.reviewCompleted

    });

    AI.discipline.lastTradingDay = today;

    return AI.discipline;

}
    
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

    countdown: null,

    marketOpen: false,

    marketClosingSoon: false,

    nextSessionTime: null,

    currentVolatility: "LOW",

    lastUpdate: null,

    history: []

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

    // Current News
    title: "",

    description: "",

    source: "",

    importance: 0,

    affectedPairs: [],

    expected: "",

    previous: "",

    actual: "",

    sentiment: "NEUTRAL",

    marketReaction: "UNKNOWN",

    nextHighImpactEvent: null,

    lastUpdate: null,

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
// =====================================
// Trend Engine
// =====================================

const trendData = {

    h4: {
        bullish: 0,
        bearish: 0,
        direction: "UNKNOWN",
        strength: 0,
        lastUpdate: null
    },

    h1: {
        bullish: 0,
        bearish: 0,
        direction: "UNKNOWN",
        strength: 0,
        lastUpdate: null
    },

    m15: {
        bullish: 0,
        bearish: 0,
        direction: "UNKNOWN",
        strength: 0,
        lastUpdate: null
    },

    m5: {
        bullish: 0,
        bearish: 0,
        direction: "UNKNOWN",
        strength: 0,
        lastUpdate: null
    }

};

// =====================================
// Trend Calculation Engine
// =====================================

function calculateTrend(timeframe) {

    const candles = AI.marketData.candles[timeframe];

    if (!candles || candles.length < 20) return;

    let bullish = 0;
    let bearish = 0;

    const latest = candles[candles.length - 1];

    if (latest.close > latest.open)
        bullish += 25;
    else
        bearish += 25;

    if (AI.structure.currentTrend === "BULLISH")
        bullish += 25;

    if (AI.structure.currentTrend === "BEARISH")
        bearish += 25;

    if (AI.liquidity.buySideTaken)
        bullish += 15;

    if (AI.liquidity.sellSideTaken)
        bearish += 15;

    if (AI.candlesticks.direction === "BULLISH")
        bullish += 20;

    if (AI.candlesticks.direction === "BEARISH")
        bearish += 20;

    bullish = Math.min(100, bullish);
    bearish = Math.min(100, bearish);

    trendData[timeframe].bullish = bullish;
    trendData[timeframe].bearish = bearish;

    trendData[timeframe].direction =
        bullish > bearish ? "BULLISH" :
        bearish > bullish ? "BEARISH" :
        "RANGING";

    trendData[timeframe].strength =
        Math.max(bullish, bearish);

    trendData[timeframe].lastUpdate =
        Date.now();

}

// ---------------------------
// Master Bias Calculation
// ---------------------------

function calculateMasterBias() {

    // Update all timeframe trends
    calculateTrend("h4");
    calculateTrend("h1");
    calculateTrend("m15");
    calculateTrend("m5");

    // Weighted Trend Voting
    const bullish =

        (trendData.h4.bullish * 0.40) +

        (trendData.h1.bullish * 0.30) +

        (trendData.m15.bullish * 0.20) +

        (trendData.m5.bullish * 0.10);

    const bearish =

        (trendData.h4.bearish * 0.40) +

        (trendData.h1.bearish * 0.30) +

        (trendData.m15.bearish * 0.20) +

        (trendData.m5.bearish * 0.10);

    let direction = "RANGING";

    if (bullish >= 60 && bullish > bearish) {

        direction = "BULLISH";

    }

    else if (bearish >= 60 && bearish > bullish) {

        direction = "BEARISH";

    }

    return {

        bullish: Math.round(bullish),

        bearish: Math.round(bearish),

        direction,

        strongestTimeframe:

            trendData.h4.strength >= trendData.h1.strength &&
            trendData.h4.strength >= trendData.m15.strength &&
            trendData.h4.strength >= trendData.m5.strength

                ? "H4"

            : trendData.h1.strength >= trendData.m15.strength &&
              trendData.h1.strength >= trendData.m5.strength

                ? "H1"

            : trendData.m15.strength >= trendData.m5.strength

                ? "M15"

                : "M5",

        timestamp: Date.now()

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

    AI.candlesticks.bullishEngulfing = false;
    AI.candlesticks.bearishEngulfing = false;
    AI.candlesticks.pinBar = false;
    AI.candlesticks.insideBar = false;
    AI.candlesticks.doji = false;
    AI.candlesticks.hammer = false;
    AI.candlesticks.shootingStar = false;
    AI.candlesticks.morningStar = false;
    AI.candlesticks.eveningStar = false;

    AI.candlesticks.pattern = "NONE";
    AI.candlesticks.direction = "NONE";
    AI.candlesticks.confirmation = false;
    AI.candlesticks.strength = 0;

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
    // Pin Bar
    // ==========================

    if (

        (current.high - Math.max(current.open, current.close)) >
        ((current.high - current.low) * 0.60)

    ) {

        AI.candlesticks.pinBar = true;
        AI.candlesticks.pattern = "PIN_BAR";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 85;

    }

    // ==========================
    // Inside Bar
    // ==========================

    if (

        current.high < previous.high &&
        current.low > previous.low

    ) {

        AI.candlesticks.insideBar = true;
        AI.candlesticks.pattern = "INSIDE_BAR";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 80;

    }

    // ==========================
    // Hammer
    // ==========================

    if (

        (Math.min(current.open, current.close) - current.low) >
        ((current.high - current.low) * 0.60)

    ) {

        AI.candlesticks.hammer = true;
        AI.candlesticks.pattern = "HAMMER";
        AI.candlesticks.direction = "BULLISH";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 90;

    }

    // ==========================
    // Shooting Star
    // ==========================

    if (

        (current.high - Math.max(current.open, current.close)) >
        ((current.high - current.low) * 0.60)

    ) {

        AI.candlesticks.shootingStar = true;
        AI.candlesticks.pattern = "SHOOTING_STAR";
        AI.candlesticks.direction = "BEARISH";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 90;

    }

    // ==========================
    // Morning Star
    // ==========================

    const c1 = candles[candles.length - 3];
    const c2 = candles[candles.length - 2];
    const c3 = candles[candles.length - 1];

    if (

        c1.close < c1.open &&
        Math.abs(c2.close - c2.open) < ((c2.high - c2.low) * 0.30) &&
        c3.close > c3.open &&
        c3.close > ((c1.open + c1.close) / 2)

    ) {

        AI.candlesticks.morningStar = true;
        AI.candlesticks.pattern = "MORNING_STAR";
        AI.candlesticks.direction = "BULLISH";
        AI.candlesticks.confirmation = true;
        AI.candlesticks.strength = 95;

    }

    // ==========================
    // Evening Star
    // ==========================

    if (

        c1.close > c1.open &&
        Math.abs(c2.close - c2.open) < ((c2.high - c2.low) * 0.30) &&
        c3.close < c3.open &&
        c3.close < ((c1.open + c1.close) / 2)

    ) {

        AI.candlesticks.eveningStar = true;
        AI.candlesticks.pattern = "EVENING_STAR";
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
// Entry Zone Engine
// ---------------------------

function detectEntryZones() {

    AI.entryZones.entryReady = false;
    AI.entryZones.bestEntry = "NONE";
    AI.entryZones.confluenceScore = 0;

    let score = 0;

    if (AI.entryZones.fvg.detected) score += 10;
    if (AI.entryZones.ifvg.detected) score += 10;
    if (AI.entryZones.orderBlock.detected) score += 15;
    if (AI.entryZones.breakerBlock.detected) score += 15;
    if (AI.entryZones.supply.detected) score += 10;
    if (AI.entryZones.demand.detected) score += 10;
    if (AI.entryZones.support.detected) score += 10;
    if (AI.entryZones.resistance.detected) score += 10;

    if (AI.structure.bos.detected) score += 15;
    if (AI.structure.choch.detected) score += 15;

    if (
        AI.breakRetest.detected &&
        AI.breakRetest.confirmed
    ) score += 20;

    if (AI.candlesticks.confirmation) score += 20;

    if (
        AI.liquidity.buySideTaken ||
        AI.liquidity.sellSideTaken
    ) score += 10;

    if (AI.sessions.sessionStrength >= 80) score += 10;

    if (AI.news.tradingBlocked) score -= 100;

    score = Math.max(0, Math.min(score, 100));

    AI.entryZones.confluenceScore = score;

    if (score >= 70) {

        AI.entryZones.entryReady = true;

        if (AI.structure.currentTrend === "BULLISH") {

            AI.entryZones.bestEntry = "BUY";

        }

        else if (AI.structure.currentTrend === "BEARISH") {

            AI.entryZones.bestEntry = "SELL";

        }

    }

}

// ---------------------------
// AI Signal Engine
// ---------------------------

function generateSignal(masterBias) {

    detectEntryZones();

    detectCandlestickPatterns();

    let marketState = "SCANNING";

    if (AI.news.tradingBlocked) {

        return {

            trend: masterBias.direction,

            signal: "AVOID",

            confidence: 0,

            marketState: "HIGH IMPACT NEWS",

            status: "Trading blocked by News Filter."

        };

    }

    if (AI.entryZones.entryReady) {

        return {

            trend: masterBias.direction,

            signal: AI.entryZones.bestEntry,

            confidence: AI.entryZones.confluenceScore,

            marketState: "ENTRY READY",

            status: "All confirmations aligned."

        };

    }

    if (masterBias.direction === "BULLISH") {

        marketState = "TRENDING BULLISH";

        return {

            trend: "BULLISH",

            signal: "WAIT",

            confidence: masterBias.bullish,

            marketState,

            status: "Waiting for bullish confirmation..."

        };

    }

    if (masterBias.direction === "BEARISH") {

        marketState = "TRENDING BEARISH";

        return {

            trend: "BEARISH",

            signal: "WAIT",

            confidence: masterBias.bearish,

            marketState,

            status: "Waiting for bearish confirmation..."

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

        AI.breakRetest.waitingForRetest = true;

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

        AI.breakRetest.waitingForRetest = true;

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

        AI.breakRetest.waitingForRetest = true;

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

        AI.breakRetest.waitingForRetest = true;

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

    // ==========================
    // CHOCH Trend Shift
    // ==========================

    if (AI.structure.choch.detected) {

        AI.structure.trendChanged = true;
        AI.structure.trendChangePoint = AI.structure.choch.price;
        AI.structure.currentTrend = AI.structure.choch.direction;

    }

    // ==========================
    // Break & Retest Confirmation
    // ==========================

    if (
        AI.breakRetest.detected &&
        AI.breakRetest.confirmed
    ) {

        AI.structure.structureStrength += 15;

    }

    // ==========================
    // Session Strength Filter
    // ==========================

    if (AI.sessions.sessionStrength >= 80) {

        AI.structure.structureStrength += 10;

    } else if (AI.sessions.sessionStrength <= 30) {

        AI.structure.structureStrength -= 10;

    }

    // Keep strength between 0 and 100

    AI.structure.structureStrength = Math.max(
        0,
        Math.min(100, AI.structure.structureStrength)
    );

    // Save previous trend

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

        const price = Number(data.spot_usd_oz);

        // ==========================
        // Update Price Engine
        // ==========================

        PriceEngine.lastPrice = PriceEngine.currentPrice;

        PriceEngine.currentPrice = price;

        PriceEngine.lastUpdate = Date.now();

        // ==========================
        // Update AI Market Data
        // ==========================

        AI.marketData.lastPrice = AI.marketData.livePrice;

        AI.marketData.livePrice = price;

        // ==========================
        // Price History
        // ==========================

        AI.marketData.priceHistory.push({

            price,

            time: Date.now()

        });

        if (AI.marketData.priceHistory.length > 1000) {

            AI.marketData.priceHistory.shift();

        }

        // ==========================
        // Tick Data
        // ==========================

        AI.marketData.ticks.push({

            price,

            time: Date.now()

        });

        if (AI.marketData.ticks.length > 500) {

            AI.marketData.ticks.shift();

        }

        // ==========================
        // Build Candles
        // ==========================

        buildCandles();

        // ==========================
        // Update Current Trade
        // ==========================

        if (AI.trade.active) {

            AI.trade.currentPrice = price;

        }

        console.log("Live Price:", price);

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

    console.log("Starting AI Runtime...");

    fetchLivePrice();

    setInterval(() => {

        // Live Market
        fetchLivePrice();

        // AI Analysis
        detectLiquidity();

        detectTradingSession();

        detectNews();

        detectSwings();

        detectEntryZones();

        detectCandlestickPatterns();

        // AI Brain
        const masterBias = calculateMasterBias();

        analyzeMarketStructure(masterBias);

        generateSignal(masterBias);

        generateFinalAISignal();

        calculateRisk();

        updateRiskRuntime();

        manageTrade();

        updateDiscipline();

        // Refresh Dashboard
        updateDashboard();

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

        high: Math.max(...ticks.map(t => t.price)),

        low: Math.min(...ticks.map(t => t.price)),

        close: lastTick.price,

        volume: ticks.length,

        startTime: firstTick.time,

        endTime: lastTick.time

    };

    // ==========================
    // First Candle
    // ==========================

    if (AI.marketData.candles.m5.length === 0) {

        AI.marketData.candles.m5.push(candle);

        return;

    }

    const current = AI.marketData.candles.m5[
        AI.marketData.candles.m5.length - 1
    ];

    // ==========================
    // New Candle
    // ==========================

    if ((now - current.startTime) >= FIVE_MINUTES) {

        AI.marketData.candles.m5.push(candle);

        if (AI.marketData.candles.m5.length > 500) {

            AI.marketData.candles.m5.shift();

        }

        // AI Updates
        detectSwings();

        detectLiquidity();

        detectEntryZones();

        detectCandlestickPatterns();

    }

    // ==========================
    // Update Current Candle
    // ==========================

    else {

        AI.marketData.candles.m5[
            AI.marketData.candles.m5.length - 1
        ] = candle;

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
