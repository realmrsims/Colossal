const ColossalClient = require("./Colossal");
const config = require("./config.json");
const domain = require("./config.js");


const Colossal = new ColossalClient(config);

const color = require("./data/colors");
Colossal.color = color;

Colossal.domain = domain.domain || `https://colossal.cf`;

const emoji = require("./data/emoji");
Colossal.emoji = emoji;

let client = Colossal
const jointocreate = require("./structures/jointocreate");
jointocreate(client);

Colossal.react = new Map()
Colossal.fetchforguild = new Map()

if(config.dashboard === "true"){
    const Dashboard = require("./dashboard/dashboard");
    Dashboard(client); 
}

        
Colossal.start();









  
