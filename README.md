# Link Scanning Discord Bot
1. Create a file named index.js with this content:
```js
const linkscanning = require('linkscanningbot');
```
2. Create a file named settings.js with this content:
```js
module.exports = {
  BotToken: "", // Your Token
  BotPrefix: "!", // For the only existing command: eval
  BotLanguage: "English", // Supporting "Español", "English" and "Deutch"
  BotIntents: "all", // Recomended keeping it to "all"
  BotOwners: "759796588842450944", // Separate them with ";". Example: "759796588842450944;905883534521139210"
  ApiKey: "", // Get one: https://ipqualityscore.com
  
  BotLogs: false, // Send logs to a discord channel?
  BotLogsChannelID: "", // Discord Logs Channel ID, only if the option "BotLogs" is enabled.
  BotStatus: "your server!", // Bot Status
  StatusType: "WATCHING", // WATCHING, PLAYING, LISTENING...

  SuccessEmoji: ":white_check_mark:", // Good Emoji
  ErrorEmoji: ":x:", // Bad Emoji
  LoadingEmoji: ":satellite:", // Loading Emoji

  LinkScanning: true, // Enable/Disable the link scanning
  IgnoreServerAdmins: true, // Ingore Users with perms?
  DeleteIfMaliciousLink: true, // Delete the link message if malicious?
  BanIfMaliciousLink: false, // Ban the user if malicious?
  TimeoutIfMaliciousLink: true, // Mute the user if malicious?
  TimeoutTime: "10m", // Mute time
  CooldownBetweenScans: "10s", // Ignore links during this time between scans.
  RespondToBots: false, // Scan links from bots?
  RespondOnEdit: { // Recomended keeping it like this:
        commands: false,
        alwaysExecute: true,
        nonPrefixed: true
  },

  // Advanced
  Sharding: false,
  ShardCount: 2,
  SuppressPackageErrors: true
}
```
3. Activate all the bot intents in discord developer portal.
4. Install the package, setup and start your bot!