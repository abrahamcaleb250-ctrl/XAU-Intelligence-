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
