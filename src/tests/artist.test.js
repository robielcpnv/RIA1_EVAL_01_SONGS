/**
 * @file      artist.test.js
 * @brief     This class is designed to test the behaviour of an artist.
 * @author    Created by Nicolas.GLASSEY
 * @version   15-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const Artist =  require('../Artist/Artist.js');
const DateOfBirthException = require('../Artist/DateOfBirthException.js');

test('toString_NominalCaseWithoutDateOfBirth_Success', () => {
    //given
    let expectedFirstname = "Firstname";
    let expectedLastname = "Lastname";
    let artist = new Artist(expectedFirstname, expectedLastname);
    let expectedToString = expectedFirstname + " " + expectedLastname;

    //when
    //getters are called directly in assertion below

    //then
    expect(artist.toString()).toEqual(expectedToString);
})

test('toString_NominalCaseWithDateOfBirth_Success', () => {
    //given
    let expectedFirstname = "Firstname";
    let expectedLastname = "Lastname";
    let expectedDateOfBirth = Date(1955, 11, 23);
    let artist = new Artist(expectedFirstname, expectedLastname, expectedDateOfBirth);
    let expectedToString = expectedFirstname + " " + expectedLastname + " " + expectedDateOfBirth.toString();

    //when
    //getters are called directly in assertion below

    //then
    expect(artist.toString(true)).toEqual(expectedToString);
})

test('toString_DateOfBirthNotProvided_ThrowException', () => {
    //given
    let expectedFirstname = "Firstname";
    let expectedLastname = "Lastname";
    let artist = new Artist(expectedFirstname, expectedLastname);
    let expectedToString = expectedFirstname + expectedLastname;

    //when
    expect(() => artist.toString(true)).toThrow(DateOfBirthException);

    //then
    //Exception is thrown
})