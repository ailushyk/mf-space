import { Command } from 'commander';
import chalk from 'chalk';

export const makeWelcomeCommand = (): Command => {
  const program = new Command();
  program.name('welcome');
  program.description('Your own mf space');

  program.argument('<username>');

  program.action((username) => {
    console.log(`Welcome to the mf space, ${username}!`);
  });
  program.showHelpAfterError(
    chalk.bgWhite('add --help for additional information')
  );

  return program;
};
