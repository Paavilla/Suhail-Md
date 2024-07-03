8const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKSU9nNHV4V2pac0JvM3A2WXlaNnF6bzd3RHFpRjZ2ZnhpLzRLcmtQMzRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0Ui1JZnpQcFRJMkRZeDZaX3B1eThRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZiOWE1NTI4LTg2YzEtNGZhMS05NTA3LTJjOTk4YjgxNzJlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAyMzAsXG4gICAgICAxMzcsXG4gICAgICA0MixcbiAgICAgIDE0NixcbiAgICAgIDE2MixcbiAgICAgIDE0MixcbiAgICAgIDM5LFxuICAgICAgMzcsXG4gICAgICAxNTEsXG4gICAgICA2MSxcbiAgICAgIDEzOSxcbiAgICAgIDgxLFxuICAgICAgMjQ1LFxuICAgICAgOTksXG4gICAgICA3NixcbiAgICAgIDI2LFxuICAgICAgMTcwLFxuICAgICAgNzIsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA1OSxcbiAgICAgIDE2NCxcbiAgICAgIDIxNSxcbiAgICAgIDE5NixcbiAgICAgIDExNyxcbiAgICAgIDE4LFxuICAgICAgMTI0LFxuICAgICAgMTc1LFxuICAgICAgMTQsXG4gICAgICA3NyxcbiAgICAgIDIxNCxcbiAgICAgIDE3MSxcbiAgICAgIDYwLFxuICAgICAgMTg3LFxuICAgICAgMTQxLFxuICAgICAgMjIwLFxuICAgICAgMjEyLFxuICAgICAgMTMzLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpBNkhUU0hQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NDMzMDMzNTc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQYWEgVmlsbGFcIixcbiAgICBcImxpZFwiOiBcIjIyMjY0MjU0ODI3NzM1OToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbW9oUElCRUpiZWxMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlM2MWVzUllHS0FaVE5VOVBEb3dHU1NHcXAyWERCeDBYcTBaMFJiUG9zMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ2VhRkVsQ0ZuNU80L0VJK0k4QTBWbFQzekRRZFNycEsvTVhqV2lOVEVjNGtpNkRvVHhGbDBBWjZJcUFtYlgzd3JRTS90V2RMdDk4OU03NkJZc2UwQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkI5SGlQVmw5S0ZnWHlENVRvdHJrclVIOFV2bmhGb2xTU1RGc2FvRXRubncvTDVydWZ5ajVUWEF3Ym1CMm9hWmtJWVpJYTlNS3VSUFg0MmY0RWltQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQzMzAzMzU3OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDAwNDM3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
