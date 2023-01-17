document.getElementById("about-me").style.display = "block";
document.getElementById("about-me").className += " active";
document.getElementsByClassName("tablinks")[0].className += " active";
document.getElementById("back-button").addEventListener("click", function () {
	var tab = document.getElementsByClassName("window")
	tab[0].style.display = "none";
	document.getElementById('window2').style.display = 'block';
});
var term = new window.Terminal({
	cursorBlink: true,
	rows: 45
});
term.open(document.getElementById('terminal'));

function init() {
	var command = "";
	if (term._initialized) {
		return;
	}
	term._initialized = true;
	term.prompt = () => {
		term.write('\r\n~ $ ');
	};
	//   prompt(term);
	term.onData(e => {
		switch (e) {
		case '\u0003': // Ctrl+C
			term.write('^C');
			prompt(term);
			break;
		case '\r': // Enter
			console.log(command)
			runCommand(term, command);
			command = '';
			break;
		case '\u007F': // Backspace (DEL)
			// Do not delete the prompt
			if (term._core.buffer.x > 4) {
				term.write('\b \b');
				if (command.length > 0) {
					command = command.substr(0, command.length - 1);
				}
			}
			break;
		case '\u0009':
			console.log('tabbed', output, ["dd", "ls"]);
			break;
		default:
			if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
				command += e;
				term.write(`${e}`);
			}
		}
	});
}

function clearInput(command) {
	var inputLengh = command.length;
	for (var i = 0; i < inputLengh; i++) {
		term.write('\b \b');
	}
}

function prompt(term) {
	command = '';
	term.write('\r\n~ $ ');
}

function runCommand(term, command) {
	if (command.length > 0) {
		const commandArgs = command.split(" ");
		switch (commandArgs[0]) {
		case 'ls':
			term.write('\r\nList of files in the current directory');
			break;
		case 'pwd':
			term.write('\r\n/current/working/directory');
			break;
		case 'whoami':
			term.write('\r\nuser');
			break;
		case 'help':
			if (commandArgs.length > 1) {
				switch (commandArgs[1]) {
				case 'ls':
					term.write('\r\nThe `ls` command lists all files and directories in the current directory.');
					break;
				case 'pwd':
					term.write('\r\nThe `pwd` command shows the current working directory.');
					break;
				case 'whoami':
					term.write('\r\nThe `whoami` command shows the current user.');
					break;
				default:
					term.write(`\r\nNo help available for command: ${commandArgs[1]}`);
				}
			} else {
				term.write('\r\nList of available commands:');
				term.write('\r\n- ls');
				term.write('\r\n- pwd');
				term.write('\r\n- whoami');
			}
			break;
		default:
			term.write(`\r\n${command}: command not found`);
		}
		term.prompt();
	}
}
init();
setTimeout(function () {
	term.write("Welcome to the Terminal!\r\n");
	term.write("Type 'help' to see a list of available commands.\r\n");
	term.prompt();
	console.log({
		"Terminal Initialized": term._initialized
	});
}, 2000);
