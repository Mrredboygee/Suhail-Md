const fs = require('fs-extra')
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
8098037352




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_17_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUZVptM09iVG5yT3YrS0d1T0ErVFhpVlFaRExkbmFyVlh4QlFaNmZwVW5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBVzBDUUNGTlR0ZU1WUHlJY0ZJUzN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmMTkyMTUyLTJkNTAtNDc2NS05YjA4LTFhYjE4ODUwYWZkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA2NSxcbiAgICAgIDEyOCxcbiAgICAgIDEzMixcbiAgICAgIDIwNyxcbiAgICAgIDQ5LFxuICAgICAgMTM1LFxuICAgICAgNjgsXG4gICAgICAxMjgsXG4gICAgICA4OSxcbiAgICAgIDI0OSxcbiAgICAgIDIzNixcbiAgICAgIDEzMixcbiAgICAgIDE3NyxcbiAgICAgIDE1OCxcbiAgICAgIDkxLFxuICAgICAgMjYsXG4gICAgICAxNzcsXG4gICAgICAyLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDY5LFxuICAgICAgNzksXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgMTAxLFxuICAgICAgMjI5LFxuICAgICAgMTAsXG4gICAgICAxNixcbiAgICAgIDI1NSxcbiAgICAgIDk1LFxuICAgICAgMjExLFxuICAgICAgNyxcbiAgICAgIDEwMixcbiAgICAgIDI0LFxuICAgICAgNTcsXG4gICAgICAxODQsXG4gICAgICAxNDIsXG4gICAgICA4OCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdZOTJYMkc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODA5ODAzNzM1MjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2eTNGRVE3Y1dndFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1UHJPRk5nL1ppRXd0S1REZ1JRSzVIMWlMZTF2T2FoM3gxS2lPdjRpclZwMjlwTVBHWTl3T3JKcGY1NGRrdzFoeEhQRDdtQ0FBWnhoNWVjT3F2YURDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwU25OVG4yeWF4UEtUM2J6NXdaRk96NEpjdEx3RzRyUzZPTys5WDZvVzFPY3hMcnBoWmJhRnFoOEcyMURBaDQ3RE9Wck1va0RSQnVjdW9TMUF0U0dEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyOTUwMjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWaC5qc29uIjogIntcImtleURhdGFcIjpcImVGeVljKzdVeXRNa0pNajZSSW5SNkpCSUNSemRpdUhZWFFXWnRGM2c4c2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMzgzMDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 

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
