import { Command } from 'commander';
import degit from 'degit';
import { spaceTemplates } from './spaceTemplates';
import { catchDegitError, createFolder, pfError, pfSuccess } from '../utils';

const defaultDegitOptions = {
  cache: true,
  force: false,
  verbose: false,
};

const createAppsFolder = (dest: string): void => {
  createFolder(`${dest}/apps`);
};

const createPackagesFolder = (dest: string): void => {
  createFolder(`${dest}/packages`);
};

const makeSpaceCommand = () => {
  const program = new Command();
  program.name('space');
  program.argument('<dest>', 'Space destination');
  program.option(
    '-f, --force',
    'Force overwrite the destination directory',
    false
  );
  const options = program.opts();
  program.action(async (dest) => {
    const path = `./${dest}`;
    const emitter = degit(spaceTemplates.space, {
      ...defaultDegitOptions,
      force: options.force,
    });
    try {
      await emitter.clone(path);
      createAppsFolder(path);
      createPackagesFolder(path);

      console.log(pfSuccess(`Done! Your space created in ${dest}`));
    } catch (error: any) {
      catchDegitError(error, { path });
    }
  });
  program.showHelpAfterError(
    pfError('You have to choose a destination of your space')
  );
  return program;
};

export { makeSpaceCommand };
