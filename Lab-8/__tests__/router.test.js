/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from "@jest/globals";
import { pushToHistory } from "../scripts/router.js";

describe('testing pushToHistory', () => {
    //test history at the beginning
    test('intial state (no push): state should be null, history length should be 1', () => {
        expect(history.state).toBe(null);
        expect(history.length).toBe(1);
    });

    // test current state object is correct
    test('pushToHistory("settings", 0): page should be "settings", length should be 2, hash should be #settings', () => {
        pushToHistory('settings', 0);
        expect(history.state.page).toBe('settings');
        expect(history.length).toBe(2);
        expect(window.location.hash).toBe('#settings');
    });
    
    test('pushToHistory("entry", 4): page should be "entry4", length should be 3, hash should be #entry4', () => {
        pushToHistory('entry', 4);
        expect(history.state.page).toBe('entry4');
        expect(history.length).toBe(3);
        expect(window.location.hash).toBe('#entry4');
    });

    test('pushToHistory("", 0): page should be undefined, length should be 4, hash should be ""', () => {
        pushToHistory('',0);
        expect(history.state.page).toBe(undefined);
        expect(history.length).toBe(4);
        expect(window.location.hash).toBe('');
    });

});