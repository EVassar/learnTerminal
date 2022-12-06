import boxen from 'boxen';
import chalk from 'chalk';

function write(string){
    process.stdout.write(string);
}


write(boxen(chalk.magentaBright.strikethrough('ooooooooo'), {padding: 1, borderColor: 'magenta', text: 'magenta', textAlignment: 'right'})),
write('\n');
write(boxen(chalk.green.italic('ooooooooo'), {padding: 2, borderColor: 'cyan', textAlignment: 'left'})),
write('\n');
write(boxen(chalk.red.bold('ooooooooo'), {padding: 1, margin:2, width: 100, borderStyle: 'double', title: 'aaaaaaaaaaaaaaaaaaaaaaaa', borderColor: 'red', textAlignment: 'right'})),
write('\n');
write(boxen(chalk.blueBright('ooooooooo'), {padding: 1, height: 12, borderStyle: 'arrow', borderColor: 'yellow', backgroundColor: 'yellow'})),
write('\n');
write(boxen(chalk.red.bgRed.underline('ooooooooo'), {padding: 1,width: 50, height: 20, float: 'center', borderStyle: 'round', textAlignment: 'left', borderColor: 'blue'})),
write('\n');
write(boxen(chalk.bgWhiteBright('ooooooooo'), {padding: 1, float:"right", borderStyle: 'bold', borderColor: 'green'}));