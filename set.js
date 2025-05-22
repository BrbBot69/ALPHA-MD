const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA71VWY/iOBj8L34FDbkPpJY2J5B0IFwNYbUPJnESQy7sQAgj/vsqdPdMa3d2pldabZ4c2/lc9bmq8hUUJabIRS0YfgUVwRdYo25YtxUCQ6Cf4xgR0AcRrCEYgkb3lWJLrCmVrkl5dBlZEFnxRIyTc2o8eVHph+VmRpTemD6Bex9U532Gw58UhPtnZY/Di1t4smdbwr5oZUNttlCXSOlhvZUTMzaOnHUQnsC9qwgxwUViVSnKEYGZi1ofYvI5+JLrBu4Ntpm3CBA/wMdxkbl6tM3HeLuxXpxan2SZEU7mG+Zz8Bkp2E2iayAWwtZlzgYbGbnlJM3AOdWmc7mNZn7G7F7K2n6DT3FSoGgSoaLGdfv5vk/sKjd4W04Z65Jt6uglmZX6eVo8ay/rWUCKgRtbt2qQbcrPAR/vVybSttJF3xdTlI5mTmJF19VuPh7teG4/Raoq4fzFjHXmI3CfvGvl+G/63tOuuysNeOW0NqTRle0tELPy5xufjXeieHIvA3c3VQsutq3PwU8VmzoZDznbx7KjLljYRoLVpAvsWQdNk5KoR5dsyJV2+R0+rM/kZyjDbTXOYlRUcGbjbepvSOT1dlx6fc4l345nTrJxUlNWj430/Gwep/ktyJVny7dnMtfO/Bb5VK6MC0dWVK2ILEyj1UuqPT0YHVE7icCQvfcBQQmmNYE1LovHnML0AYwuSxQSVD/aC24TJBnVRZkko2t8k2k2Stn1cjkYF2fLjbjxwDnACz0JmXN8An1QkTJElKJojGldktZDlMIEUTD8/XFTHWmC8rJGDo7AEHCywiocz3GS+hv90qSwprCqvhSoBn0QkzL3EBjW5Iz64LFf1C2NNy1FFBWOtTXTZHRJYCVLU3hZNg2uY5i/nrnCOaI1zCswZGVBVnlO5tl7/z+BwQsizzCyrsuWyoqcYfMSo0sSx7CarIq8+D/B0GxG1nlN4g1WZzSONzWDNUWbUWydsTiD/wUM6f5HHxToWr+aqZMAz/ZBjAmt18W5ykoYvTvtfRGGYXku6mVbhEY3QAQMP0yjusZFQjti5wKSMMUXZHQ8wDCGGUXfVIcIit65vCWpUUadGVheEBfGxgAd9q7QX1szZPm/d6eA3WbQlkkC+iB7fMPKgqiyjMpKsshzSvddt3D/BrerHqEa4oyCITA8JOULZn5yW7WZB4G21DRX0zpZv9N79+6rN9IA+1qD97wWXQ91fszdShb2s2aZ3ZLevrkKpaqKUq3kXPOjImAIcuzMVz1TGVTmlN+ygX09XCsrVddoMthPnNtKsIN8fh4d596zdSTUmcFwNU/Zq6vG4yUDUVzNttQbCbcZ9A7eyhxkyOyM3gcRuuAQfTxsLx3mxiiGq7EtLUxujD0znB5s83TcHdfBesqf2uesqg4ind5kb7Zd4csiXxzEq1vJSpP0nDFD4Ml6qaaDlRfsGoiLXZq8psoj1bK3vwl+8zt+vMYYPcL57YZ+dZGvuDu5Mff+hxJvaf8PiakHm8mh8Sa52ozDQN5VDj6h3uhGrSoU/FzxkOvHCJHYqSm4d7qvMljHJcnBENB8D0EfkPLciXdSxOVPTjK09cR4y9IM0lr7bogfeIyTX3f5pKzGkKZgCPzNUdQ7cbdaVS1rWL/bC2jd482P4P4nt2rMKw4JAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝕬𝖛𝖊.𝕭",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "27767494368",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by ☚⍢⃝☚',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://chat.whatsapp.com/HddBE8GNXhfJ6jivPj8Hsx",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || '☚⍢⃝☚',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Johannesburg", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
