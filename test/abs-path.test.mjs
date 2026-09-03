import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import test from 'node:test';

import { absPath } from '../dist/index.js';

test('absPath resolves to the package root containing the QML module', () => {
	assert.equal(absPath, resolve(import.meta.dirname, '..'));
	assert.ok(existsSync(join(absPath, 'ColorHelpers', 'qmldir')));
});

test('ColorHelpers exports the documented CrosshairRect QML type', () => {
	const qmldir = readFileSync(join(absPath, 'ColorHelpers', 'qmldir'), 'utf8');

	assert.match(qmldir, /^CrosshairRect 1\.0 CrosshairRect\.qml$/mu);
});
