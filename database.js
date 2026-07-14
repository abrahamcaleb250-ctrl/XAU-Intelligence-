// =====================================
// XAU Intelligence Database Engine
// =====================================

const Database = {

    version: "1.0.0",

    initialized: false,

    init() {

        if (this.initialized) return;

        this.initialized = true;

        this.load();

        console.log("Database Initialized");

    },

    save() {

        const data = {

            AI,

            savedAt: Date.now()

        };

        localStorage.setItem(

            "XAU_INTELLIGENCE_DATABASE",

            JSON.stringify(data)

        );

    },

    load() {

        const raw = localStorage.getItem(

            "XAU_INTELLIGENCE_DATABASE"

        );

        if (!raw) return;

        try {

            const data = JSON.parse(raw);

            Object.assign(AI, data.AI);

        }

        catch (e) {

            console.log("Database Load Error");

        }

    },

    clear() {

        localStorage.removeItem(

            "XAU_INTELLIGENCE_DATABASE"

        );

    }

};

Database.init();
// =====================================
// Auto Save Engine
// =====================================

setInterval(() => {

    Database.save();

}, 5000);
