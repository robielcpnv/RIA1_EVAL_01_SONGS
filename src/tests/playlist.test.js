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

test('allGetters_NominalCase_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let expectedPlaylistTitle = "MyPlaylist";
    let expectedSongs = [song1];
    let playlist = new Playlist(expectedPlaylistTitle, expectedSongs);

    let expectedPlaylistLength = 45;

    //when
    //getter are called in the same time as the assertion below

    //then
    expect(playlist.title).toEqual(expectedPlaylistTitle);
    expect(playlist.length).toEqual(expectedPlaylistLength);
    expect(playlist.songs.length).toEqual(expectedSongs.length);
})


test('constructor_DuplicateSongDetectedAndAllowed_Success', () => {
    //given
    let artist1 = new Artist("firstname1", "lastname1");
    let artist2 = new Artist("firstname2", "lastname2");
    let artist3 = new Artist("firstname3", "lastname3");
    let artistsSong1 = [artist1, artist2, artist3];
    let song1 = new Song("Title1", 45, artistsSong1);
    let expectedPlaylistTitle = "MyPlaylist";
    let expectedSongs = [song1];
    let playlist = new Playlist(expectedPlaylistTitle, expectedSongs);

    let expectedPlaylistLength = 45;

    //when
    //getter are called in the same time as the assertion below

    //then
    expect(playlist.title).toEqual(expectedPlaylistTitle);
    expect(playlist.length).toEqual(expectedPlaylistLength);
    expect(playlist.songs.length).toEqual(expectedSongs.length);
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
    expect(playlist.length).toEqual(expectedPlaylistLength);
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
    let song3 = new Song("Title2", 100, artistsSong1);
    let playlist = new Playlist("MyPlaylist", [song1]);

    let songsToAdd = [song2, song3];
    let expectedPlaylistLength = 245;

    //when
    playlist.addSongs(songsToAdd);

    //then
    expect(playlist.length).toEqual(expectedPlaylistLength);
})