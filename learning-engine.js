// =====================================
// XAU Intelligence AI Learning Engine
// =====================================

const LearningEngine = {

    totalTrades: 0,

    winningTrades: 0,

    losingTrades: 0,

    winRate: 0,

    lossRate: 0,

    bestSetup: null,

    worstSetup: null,

    confidenceBonus: 0,

    history: [],

    learn(trade) {

        this.totalTrades++;

        if (trade.result === "WIN") {

            this.winningTrades++;

        } else {

            this.losingTrades++;

        }

        this.winRate = Math.round(
            (this.winningTrades / this.totalTrades) * 100
        );

        this.lossRate = 100 - this.winRate;

        this.history.push(trade);

        if (this.history.length > 1000) {

            this.history.shift();

        }

        this.updateConfidence();

        if (typeof Database !== "undefined") {

            Database.save();

        }

    },

    updateConfidence() {

        if (this.winRate >= 80) {

            this.confidenceBonus = 15;

        } else if (this.winRate >= 70) {

            this.confidenceBonus = 10;

        } else if (this.winRate >= 60) {

            this.confidenceBonus = 5;

        } else {

            this.confidenceBonus = 0;

        }

    }

};

console.log("Learning Engine Loaded");
LearningEngine.totalTrades = 0;
LearningEngine.winningTrades = 0;
LearningEngine.losingTrades = 0;
LearningEngine.winRate = 0;
LearningEngine.confidenceBonus = 0;

LearningEngine.learn = function(trade){

this.totalTrades++;

if(trade.result==="WIN"){

this.winningTrades++;

}else{

this.losingTrades++;

}

this.winRate = Math.round((this.winningTrades/this.totalTrades)*100);

this.confidenceBonus = Math.round(this.winRate*0.30);

localStorage.setItem("LearningEngine",JSON.stringify(this));

};

const saved=localStorage.getItem("LearningEngine");

if(saved){

Object.assign(LearningEngine,JSON.parse(saved));

}
// ===============================
// Consistency Tracker
// ===============================

LearningEngine.currentStreak = 0;
LearningEngine.longestStreak = 0;
LearningEngine.tradingDays = 0;
LearningEngine.missedDays = 0;
LearningEngine.completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
LearningEngine.markToday = function () {

const today = new Date().toDateString();

if (this.completedDays.includes(today)) {

return;

}

this.completedDays.push(today);

this.tradingDays++;

this.currentStreak++;

if (this.currentStreak > this.longestStreak) {

this.longestStreak = this.currentStreak;

}

localStorage.setItem("LearningEngine", JSON.stringify(this));
localStorage.setItem("completedDays", JSON.stringify(this.completedDays));

};

LearningEngine.getConsistency = function () {

if (this.tradingDays + this.missedDays === 0) return 0;

return Math.round(

(this.tradingDays /

(this.tradingDays + this.missedDays)) * 100

);

};
