#!/usr/bin/env node
import { Command } from 'commander';
import { makeWelcomeCommand } from './commands/welcome';
import { makeCreateCommand } from './commands/create';

const program = new Command();
program.name('mf-space');
program.addCommand(makeWelcomeCommand());
program.addCommand(makeCreateCommand());

program.action(() => {
  program.help();
});
program.parse(process.argv);
