import { dirname } from 'node:path';

/** Absolute package-root path for QML import resolution. */
export const absPath = dirname(import.meta.dirname);

const qmlColorhelpers = { absPath };

export default qmlColorhelpers;
