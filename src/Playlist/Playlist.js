/**
 * @file      Playlist.js
 * @brief     This class is designed to manage a playlist.
 * @author    Created by Nicolas.GLASSEY
 * @version   12-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const Artist = require("../Artist/Artist.js");
const DuplicateArtistException = require("./DuplicateArtistException.js");
const TooShortLengthException = require("./TooShortLengthException.js");

module.exports = class Playlist {

    //region private attributes
    #title;
    #length;
    #artists;
    //endregion private attributes

    //region public methods
    /**
     * This method constructs a Playlist object
     * @param songs : list of songs
     * @param allowDuplicate : allow to add several time the same song
     * @exception throws DuplicateException thrown when allowDuplicate is set to false and duplicate detected
     */
    constructor(songs, allowDuplicate = true) {
        throw new Error();
    }

    /**
     * This getter returns the Playlist's length
     * Sum of all songs length, include duplicate.
     */
    get length(){
        throw new Error();
    }

    /**
     * This method adds a list of song in the existing list
     * @param songs
     * @returns the list of song, after adding the new list of song
     * @exception throws DuplicateException when duplicate are not allowed and detected
     */
    addSongs(songs){
        throw new Error();
    }

    /**
     * This method removes find and remove the songs passed in parameters
     * If the song was not found, no action.
     * If the song was found, it will be removed (all duplicates of it).
     * @param songs
     */
    removeSongs(songs){
        throw new Error();
    }

    /**
     * This method initializes the playlist with the songs passed in parameters
     * All songs present is the list before the init are removed fist.
     * To add songs to the current list, please use AddSongs method.
     */
    initPlaylist(songs){
        throw new Error();
    }

    //endregion public methods

    //region private methods

    //endregion private methods
}