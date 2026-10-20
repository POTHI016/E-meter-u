import test from 'node:test';
import assert from 'node:assert/strict';
import { isSectionUnderDevelopment } from '../../frontend/lib/section-availability.js';

test('demo sections show development notices while operational sections remain enabled', () => {
    for (const view of ['view-history', 'view-ranking', 'view-reports', 'view-alerts']) assert.equal(isSectionUnderDevelopment(view), true);
    for (const view of ['view-overview', 'view-live', 'view-settings', 'view-development', undefined]) assert.equal(isSectionUnderDevelopment(view), false);
});
