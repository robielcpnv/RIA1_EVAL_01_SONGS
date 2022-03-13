/**
 * @file      song.test.js
 * @brief     This class is designed to test the behaviour of a song.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const Song = require('../Song/Song.js');
const TooShortSongException = require('../Song/TooShortSongException.js');
const DuplicateArtistException = require('../Song/DuplicateArtistException.js');
const Artist = require("../Artist/Artist.js");

test('constructor_TooShortSong_ThrowException', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let expectedArtists = [artist1];
    let actualArtists = null;

    //when
    expect(() => new Song("Title", 9, expectedArtists)).toThrow(TooShortSongException);

    //then
    //Exception is thrown
})

test('artists_NominalCase_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let expectedArtists = [artist1, artist2, artist3];
    let actualArtists = null;

    let song = new Song("Title", 40, expectedArtists);

    //when
    actualArtists = song.artists;

    //then
    for (let i = 0 ; i <= expectedArtists.length ; i++)
    {
             expect(expectedArtists[i]).toEqual(actualArtists[i]);
    }
})

test('artists_DuplicateArtistDetected_ThrowException', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname1", "lastname1");
    let expectedArtists = [artist1, artist2];

    //when
    expect(() => new Song("Title", 9, expectedArtists)).toThrow(DuplicateArtistException);

    //then
    //Exception is thrown
})