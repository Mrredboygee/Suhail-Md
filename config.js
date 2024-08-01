const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_39_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZYUm9NTkRMdFRGanV1UjM1V09meEVkc3JCd3lxTmhIVmk3bUVnNkhVbUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1mODA2NWtJUURxcHo0dVJwbzYtemdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU4MzZkOTQtM2FkOC00Yjk3LWI3NDQtYmI1NjJhZjU4Njk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDI1MCxcbiAgICAgIDE0NixcbiAgICAgIDM2LFxuICAgICAgMjcsXG4gICAgICA3NCxcbiAgICAgIDE0NSxcbiAgICAgIDU5LFxuICAgICAgMTY2LFxuICAgICAgMTcwLFxuICAgICAgODQsXG4gICAgICAxODcsXG4gICAgICA0MixcbiAgICAgIDI0NixcbiAgICAgIDgsXG4gICAgICAxMDAsXG4gICAgICAxNzIsXG4gICAgICAxNzMsXG4gICAgICA0OCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjE2LFxuICAgICAgNDgsXG4gICAgICA1NCxcbiAgICAgIDE1MixcbiAgICAgIDYzLFxuICAgICAgMzYsXG4gICAgICAxMzMsXG4gICAgICA0MSxcbiAgICAgIDEwNSxcbiAgICAgIDEzLFxuICAgICAgOTMsXG4gICAgICA0MSxcbiAgICAgIDM1LFxuICAgICAgMTM3LFxuICAgICAgMTA4LFxuICAgICAgMzAsXG4gICAgICAyMixcbiAgICAgIDY5LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdHQkI0WVBWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODA5ODAzNzM1MjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDeTNGRVEzSWFzdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKeUc1RkJUVzhFWlFtcFdtK1FLbFpndWlLdEJrcGcvYVpDS2xIcjBvR1IvUDJNcUdSTzFNYjBwa2lkVFNEdExSK1N0UTlOYlFaVW9aMnhRZG16TmxBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3MUhud21UYjF5SC9DUE5mNnlRcC9UODhRc25GVTg0VTg2TXJmcytCM0VneUNFempRWlBlb0RNYm8wam05QUFLK1VtbXlGS3lWbjRlc1RvdWFJdGZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0ODM1NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWaC5qc29uIjogIntcImtleURhdGFcIjpcImVGeVljKzdVeXRNa0pNajZSSW5SNkpCSUNSemRpdUhZWFFXWnRGM2c4c2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMzgzMDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐑𝐄𝐃_𝐁𝐨𝐲",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
