import type { Arguments, CommandBuilder } from 'yargs';

type Options = {
  name: string;
};

export const command: string = 'welcome <name>';
export const desc: string = 'Your own mf space';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('name', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { name, upper } = argv;
  const greeting = `Welcome to the mf space, ${name}!`;
  process.stdout.write(upper ? greeting.toUpperCase() : greeting);
  process.exit(0);
};
