#!/usr/bin/env node
import { Command } from 'commander';
import { makeWelcomeCommand } from './commands/welcome';

const program = new Command();
program.name('mf-space');
program.addCommand(makeWelcomeCommand());

program.action(() => {
  program.help();
});
program.parse(process.argv);
