/**
 * @file      playlist.test.js
 * @brief     This class is designed to test the behaviour of a Playlist.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

const Playlist = require('../Playlist/Playlist.js');
const DuplicateSongException = require('../Playlist/DuplicateSongException.js');
const Artist = require("../Artist/Artist.js");
const Song = require("../Song/Song.js");

test('constructor_DuplicateSongDetectedAndAllowed_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let expectedPlaylistLength = 145;

    //when
    expect(() => new Playlist("MyPlaylist", [song1, song1], true)).toThrow(DuplicateSongException);

    //then
    //Exception is thrown
})

test('constructor_DuplicateSongDetectedButNotAllowed_ThrowException', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let expectedPlaylistLength = 145;

    //when
    expect(() => new Playlist("MyPlaylist", [song1, song1])).toThrow(DuplicateSongException);

    //then
    //Exception is thrown
})

test('length_NominalCase_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let artist4 = new Artist("firstname1", "lastname1");
    let artistsSong2 = [artist1, artist2, artist4];
    let song2 = new Song("Title2", 100, artistsSong2);
    let playlist = new Playlist("MyPlaylist", [song1, song2]);
    let expectedPlaylistLength = 145;

    //when
    //getter are called in the same time as the assertion below

    //then
    expect(expectedPlaylistLength).toEqual(playlist.length);
})

test('addSongs_NominalCase_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let artist4 = new Artist("firstname1", "lastname1");
    let artistsSong2 = [artist1, artist2, artist4];
    let song2 = new Song("Title2", 100, artistsSong2);
    let playlist = new Playlist("MyPlaylist", [song1, song2]);

    let songToAdd = new Song("TitleToAdd", 60,artistsSong1);
    let expectedPlaylistLength = 205;

    //when
    playlist.addSongs([songToAdd]);

    //then
    expect(expectedPlaylistLength).toEqual(playlist.length);
})

test('addSongs_DuplicateDetectedAndAllowed_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let artist4 = new Artist("firstname1", "lastname1");
    let artistsSong2 = [artist1, artist2, artist4];
    let song2 = new Song("Title2", 100, artistsSong2);
    let playlist = new Playlist("MyPlaylist", [song1, song2], true);
    let expectedPlaylistLength = 145;

    let songToAdd = new Song("Title1", 60,artistsSong1);

    //when
    playlist.addSongs([songToAdd]);

    //then
    expect(expectedPlaylistLength).toEqual(playlist.length);
})

test('addSongs_DuplicateDetectedNotAllowed_ThrowException', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let artist4 = new Artist("firstname1", "lastname1");
    let artistsSong2 = [artist1, artist2, artist4];
    let song2 = new Song("Title2", 100, artistsSong2);
    let playlist = new Playlist("MyPlaylist", [song1, song2]);
    let expectedPlaylistLength = 145;

    let songToAdd = new Song("Title1", 60,artistsSong1);

    //when
    playlist.addSongs([songToAdd]);

    //then
    expect(expectedPlaylistLength).toEqual(playlist.length);
})