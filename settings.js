module.exports = {
  BotToken: "", // Your Token
  BotPrefix: "!", // For the only existing command: eval
  BotLanguage: "English", // Supporting "Español", "English" and "Deutch"
  BotIntents: "all", // Recomended keeping it to "all"
  BotOwners: "", // Separate them with ";". Example: "759796588842450944;905883534521139210;738824089128665118"
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
  DeleteIfMaliciousLink: true, // Delete the link if malicious?
  BanIfMaliciousLink: false, // Ban the user if malicious?
  CooldownBetweenScans: "10s", // Ignore messages with link during this time
  RespondToBots: false, // Scan links from bots?
  RespondOnEdit: { // Recomended keeping it like this:
        commands: false,
        alwaysExecute: true,
        nonPrefixed: true
  },

  // Advanced
  Sharding: false,
  ShardCount: 2,
  SuppressPackageErrors: true,
}