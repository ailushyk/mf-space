import chalk from 'chalk';
import fs from 'fs';

interface Options {
  path: string;
}

interface CustomError extends Error {
  code?: string;
}

/** Print format */
const pfInfo = (message: string): string => {
  return chalk.yellow(message);
};

const pfSuccess = (message: string): string => {
  return chalk.bgYellow.green(message);
};

const pfError = (message: string): string => {
  return chalk.red(message);
};
/** END Print format */

const catchDegitError = (error: CustomError | any, { path }: Options): void => {
  if (error?.code === 'DEST_NOT_EMPTY') {
    console.error(
      pfError(`Destination directory ${path} is not empty, aborting.`)
    );
    console.error(`Use option ${pfInfo('--force')} to override`);
  } else {
    console.error(pfError(error?.message));
  }
};

const createFolder = (path: string): void => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

export { catchDegitError, createFolder, pfInfo, pfSuccess, pfError };
