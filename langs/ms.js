{
	"metadata": {
		"authors": ["Tudi20"],
		"native": "English",
		"english": "English"
	},
	"settingsForm": {
		"settings": "Settings",
		"language": "Language",
		"closeOnExit": "Close when game starts",
		"langCredits": "Translated by {0}.",
		"and": "and",
		"downloadAll": "Download All Languages",
		"downloading": "Downloading...",
		"hidePatchExtension": "Hide extension on patch list"
	},
	"errors": {
		"error": "Error",
		"missing": {
			"thcrap_loader": "thcrap_loader.exe couldn't be found.\nMake sure to put the application next to it!",
			"gamesJs": "games.js couldn't be found.\nMake sure to run thcrap_configure.exe first!",
			"patchStacks": "No config files of patch stacks could be found.\nMake sure to run thcrap_configure.exe first!",
			"jsonParser": "Newtonsoft.Json.dll is missing. Please make sure it has been copied over as well."
		},
		"oops": "Something went wrong...",
		"noneSelected": "No run configuration (patch stack) or game (executable) selected!\nPlease select one!",
		"downloadError": "Couldn't download language files from GitHub. You either:\n- Not Connected to the Internet\n- This program has become so deprecated that the GitHub Repository doesn't exist.\n- In a future where GitHub or the Internet doesn't exist."
	},
	"popup": {
		"hideLauncher": {
			"caption": "Note",
			"text": "The Launcher disappears during configuration..."
		},
		"kbSh": {
			"caption": "Keyboard Shortcuts",
			"text": "Alt + F4: Close Application (default Windows shortcut)\nCtrl + R: Restart Application\nCtrl + O: Open selected Patch Configuration\nF1: Show Keyboard Shortcuts (this window)\nF2: Favorite the selected item in the selected list"
		}
	},
	"shCreate": {
		"file": "Universal THCRAP Launcher",
		"desc": "Shortcut for UTL"
	},
	"mainForm": {
		"utl": "Universal THCRAP Launcher",
		"menuStrip": [
			[
				"App",
				"Create Shortcut on Desktop",
				"Settings...",
				"-",
				"Restart",
				"Exit"
			],
			[
				"THCRAP",
				"Open THCRAP Configuration",
				[
					"Open...",
					"Open Folder",
					"Open Game List",
					"Open Selected Patch Configuration"
				]
			],
			[
				"GitHub",
				"GitHub Page",
				[
					"Feedback",
					"Bug Report",
					"Feature Request",
					"Other"
				]
			],
			[
				"Help",
				"Keyboard Shortcuts"
			]
		],
		"tooltips": {
			"startButton": "Start thcrap with the selected settings",
			"sortAZ": "Sort in alphabetical order",
			"filterFav": "Filter by favourites",
			"filterByType": "Filter by Type",
			"patchLB": "Choose the run configuration (patch stack)",
			"gameLB": "Choose the game (executable)"
		}
	}
}
