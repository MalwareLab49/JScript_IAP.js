var TaskScheduler = GetObject("winmgmts:\\\\.\\root\\cimv2:Win32_ScheduledJob");

var command = "wscript.exe \"C:\\path\\to\\your\\ShowMessage.js\"";
var startTime = new Date();
startTime.setSeconds(startTime.getSeconds() + 10);  // Schedule to start 10 seconds after creation
var startTimeFormatted = startTime.toISOString().slice(0, -5) + "+000";

var job = {
    Command: command,
    StartTime: startTimeFormatted
};

TaskScheduler.Create(job, function(err, result) {
    if (err !== null) {
        WScript.Echo("Error creating scheduled task: " + err.description);
    } else {
        WScript.Echo("Scheduled task created with ID: " + result);
    }
});
