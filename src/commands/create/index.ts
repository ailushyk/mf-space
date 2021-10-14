import { Command } from 'commander';
import { makeSpaceCommand } from './space';

export const makeCreateCommand = () => {
  const program = new Command();
  program.name('create');
  program.addCommand(makeSpaceCommand());
  return program;
};
