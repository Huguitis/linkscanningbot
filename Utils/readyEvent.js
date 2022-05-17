module.exports = ({
    type: "ready",
    code: `
     $if[$checkContains[$getVar[BanIfMaliciousLink];true;false]!=true;{execute:BanIfMaliciousLinkError};]
     $if[$checkContains[$getVar[DeleteIfMaliciousLink];true;false]!=true;{execute:DeleteIfMaliciousLinkError};]
     $if[$checkContains[$getVar[TimeoutIfMaliciousLink];true;false]!=true;{execute:TimeoutIfMaliciousLinkError};]
     $if[$checkContains[$getVar[IgnoreServerAdmins];true;false]!=true;{execute:IgnoreServerAdminsError};]
     $if[$checkContains[$getVar[CooldownBetweenScans];d;h;m;s;ms]!=true;{execute:CooldownBetweenScansError};]
     $if[$checkContains[$getVar[TimeoutTime];d;h;m;s;ms]!=true;{execute:TimeoutTimeError};]
     $if[$checkContains[$getVar[ServerLanguage];English;Español;Deutch]!=true;{execute:ServerLanguageError};]
     $if[$checkContains[$getVar[ServerLinkScan];true;false]!=true;{execute:ServerLinkScanError};]
     $if[$checkContains[$getVar[RespondToBots];true;false]!=true;{execute:RespondToBotsError};]
     $if[$getVar[ApiKey]==;{execute:ApiKeyError};]
     $if[$getVar[Prefix]==;{execute:PrefixError};]
     $if[$getVar[LoadingEmoji]==;{execute:LoadingEmojiError};]
     $if[$getVar[ErrorEmoji]==;{execute:ErrorEmojiError};]
     $if[$getVar[SuccessEmoji]==;{execute:SuccessEmojiError};]
     $if[$getVar[BotLogs]!=false;{execute:BotLogsChannelError};]
     $if[$checkContains[$getVar[BotLogs];true;false]!=true;{execute:BotLogsError};]


    $wait[1s]

    $channelSendMessage[$getVar[BotLogsChannelID];{newEmbed:{color:GREEN}{footer:Developed by Huguitis#4583 (759796588842450944)}{description:
    
    $getVar[SuccessEmoji] ***__Online.__***

    **__Options:__**
  > Client:** $userTag[$clientID]
  > Client ID:** $clientID
  > Package Version:** $getVar[PackageVersion]
  > Bot Owners:** $getVar[BotOwners]
  > Servers:** $serverCount
  
  > **Success Emoji:** $getVar[SuccessEmoji]
  > **Error Emoji:** $getVar[ErrorEmoji]
  > **Loading Emoji:** $getVar[LoadingEmoji]
  > **Bot Logs:** $getVar[BotLogs]
  > **Bots Logs Channel ID:** $getVar[BotLogsChannelID]
  > **Bot Prefix:** $getVar[Prefix]
  > **Bot Token:** ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
  > **Api Key:** ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
  > **Bot Status:** $getVar[BotStatus]
  > **Status Type:** $getVar[StatusType]
  > **Link Scanning:** $getVar[ServerLinkScan]
  > **Bot Language:** $getVar[ServerLanguage]
  > **Respond To Bots:** $getVar[RespondToBots]
  > **Cooldown Between Scans:** $getVar[CooldownBetweenScans]
  > **Ignore Server Admins:** $getVar[IgnoreServerAdmins]
  > **Delete If Malicious Link:** $getVar[DeleteIfMaliciousLink]
  > **Ban If Malicious Link:** $getVar[BanIfMaliciousLink]
  > **Timeout If Malicious Link:** $getVar[TimeoutIfMaliciousLink]
  > **Timeout Time:** $getVar[TimeoutTime]
  }}
  ]
    $log[
      ╭─━━━━━━━━━━━━━━━━━━━━━━━━━━━━─╮
      Client: $userTag[$clientID]
      Client ID: $clientID
      Package Version: $getVar[PackageVersion]
      Bot Owners: $getVar[BotOwners]
      Servers: $serverCount
  
      Success Emoji: $getVar[SuccessEmoji]
      Error Emoji: $getVar[ErrorEmoji]
      Loading Emoji: $getVar[LoadingEmoji]
      Bot Logs: $getVar[BotLogs]
      Bots Logs Channel ID: $getVar[BotLogsChannelID]
      Bot Prefix: $getVar[Prefix]
      Bot Token: *******************
      Api Key: *********************
      Bot Status: $getVar[BotStatus]
      Status Type: $getVar[StatusType]
      Link Scanning: $getVar[ServerLinkScan]
      Bot Language: $getVar[ServerLanguage]
      Respond To Bots: $getVar[RespondToBots]
      Cooldown Between Scans: $getVar[CooldownBetweenScans]
      Ignore Server Admins: $getVar[IgnoreServerAdmins]
      Delete If Malicious Link: $getVar[DeleteIfMaliciousLink]
      Ban If Malicious Link: $getVar[BanIfMaliciousLink]
      Timeout If Malicious Link: $getVar[TimeoutIfMaliciousLink]
      Timeout Time: $getVar[TimeoutTime]
     ╰─━━━━━━━━━━━━━━━━━━━━━━━━━━━━─╯
     ]

`
  })