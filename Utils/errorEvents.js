module.exports = [{
    type: "awaited",
    name: "BotLogsError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "BotLogs"**]
  
    $log[---> Error! There is a problem in following value: "BotLogs"]`
}, {
    type: "awaited",
    name: "BotLogsChannelIDError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "BotLogsChannelID", the channel id is not valid.**]
  
    $log[**---> Error! There is a problem in following value: "BotLogsChannelID", the channel id is not valid.**]`
}, {
    type: "awaited",
    name: "BotLogsChannelError",
    code: `
    

    $if[$getVar[BotLogsChannelID]==;{execute:BotLogsChannelIDError};]`
}, {
    type: "awaited",
    name: "SuccessEmojiError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "SuccessEmoji"**]
  
    $log[---> Error! There is a problem in following value: "SuccessEmoji"]`
}, {
    type: "awaited",
    name: "ErrorEmojiError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "ErrorEmoji"**]
  
    $log[---> Error! There is a problem in following value: "ErrorEmoji"]`
}, {
    type: "awaited",
    name: "LoadingEmojiError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "LoadingEmoji"**]
  
    $log[---> Error! There is a problem in following value: "LoadingEmoji"]`
}, {
    type: "awaited",
    name: "PrefixError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "Prefix"**]
  
    $log[---> Error! There is a problem in following value: "Prefix"]`
}, {
    type: "awaited",
    name: "ApiKeyError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "ApiKey"**]
  
    $log[---> Error! There is a problem in following value: "ApiKey"]`
}, {
    type: "awaited",
    name: "StatusTypeError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "StatusType"**]
  
    $log[---> Error! There is a problem in following value: "StatusType"]`
}, {
    type: "awaited",
    name: "RespondToBotsError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "RespondToBots"**]
  
    $log[---> Error! There is a problem in following value: "RespondToBots"]`
}, {
    type: "awaited",
    name: "ServerLinkScanError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "ServerLinkScan"**]
  
    $log[---> Error! There is a problem in following value: "ServerLinkScan"]`
}, {
    type: "awaited",
    name: "ServerLanguageError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "ServerLanguage"**]
  
    $log[---> Error! There is a problem in following value: "ServerLanguage"]`
}, {
    type: "awaited",
    name: "CooldownBetweenScansError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "CooldownBetweenScans"**]
  
    $log[---> Error! There is a problem in following value: "CooldownBetweenScans"]`
}, {
    type: "awaited",
    name: "BanIfMaliciousLinkError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "BanIfMaliciousLink"**]
  
    $log[---> Error! There is a problem in following value: "BanIfMaliciousLink"]`
}, {
    type: "awaited",
    name: "IgnoreServerAdminsError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "IgnoreServerAdmins"**]
  
    $log[---> Error! There is a problem in following value: "IgnoreServerAdmins"]`
}, {
    type: "awaited",
    name: "DeleteIfMaliciousLinkError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "DeleteIfMaliciousLink"**]
  
    $log[---> Error! There is a problem in following value: "DeleteIfMaliciousLink"]`
}, {
    type: "awaited",
    name: "TimeoutTimeError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "TimeoutTime"**]
  
    $log[---> Error! There is a problem in following value: "TimeoutTime"]`
}, {
    type: "awaited",
    name: "TimeoutIfMaliciousLinkError",
    code: `
    

    $channelSendMessage[$getVar[BotLogsChannelID];**---> Error! There is a problem in following value: "TimeoutIfMaliciousLink"**]
  
    $log[---> Error! There is a problem in following value: "TimeoutIfMaliciousLink"]`
}]