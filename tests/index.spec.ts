'use strict';

import 'jest';
import func from '../src';

describe('Test', () => {
    it('is func', () => {
        expect(typeof func).toBe('function');
    });

    it('1 + 2 = 3', () => {
        expect(func(1, 2)).toBe(3);
    });
});
