var WshShell = new ActiveXObject("WScript.Shell");
var currentTime = new Date();
currentTime.setMinutes(currentTime.getMinutes() + 1); // Schedule the task to run 1 minute from now

// Format time for schtasks (HH:mm)
var startTime = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours() + ":" + 
                (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

// Create a scheduled task command string
var command = 'schtasks /create /tn "OpenNotepad" /tr "notepad.exe" /sc once /st ' + startTime;

// Execute the command
WshShell.Run(command, 0, false);

WScript.Echo("Scheduled task to open Notepad has been created to run at " + startTime);
