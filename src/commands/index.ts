import { Command } from 'commander';
import { makeWelcomeCommand } from './welcome';
import { makeCreateCommand } from './create';

const program = new Command();
program.name('mf-space');
program.addCommand(makeWelcomeCommand());
program.addCommand(makeCreateCommand());

program.action(() => {
  program.help();
});
program.parse(process.argv);
