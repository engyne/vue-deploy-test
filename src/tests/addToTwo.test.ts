import addToTwo from './addToTwo';
import { test, expect } from 'vitest';


test('adds 2 to the passed in value', () => {
    expect(addToTwo(2)).toBe(3);
})