/**
 * @file      artist.test.js
 * @brief     This class is designed to test the behaviour of an artist.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const Artist =  require('../Artist/Artist.js');
const AgeException = require('AgeException.js');

test('toString_NominalCaseWithoutDateOfBirth_Success', () => {
    //given
    let expectedFirstname = "Ludovico";
    let expectedLastname = "Einaudi";
    let artist = new Artist(expectedFirstname, expectedLastname);
    let expectedToString = expectedFirstname + expectedLastname;

    //when
    //we call the getters directly in assertion below

    //then
    expect(expectedToString).toEqual(artist.toString());
})

test('toString_NominalCaseWithDateOfBirth_Success', () => {
    //given
    let expectedFirstname = "Ludovico";
    let expectedLastname = "Einaudi";
    let expectedDateOfBirth = Date(1955, 11, 23);
    let artist = new Artist(expectedFirstname, expectedLastname, expectedDateOfBirth);
    let expectedToString = expectedFirstname + expectedLastname + expectedDateOfBirth.toString();

    //when
    //we call the getters directly in assertion below

    //then
    expect(expectedToString).toEqual(artist.toString());
})