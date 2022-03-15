/**
 * @file      Playlist.js
 * @brief     This class is designed to manage a playlist.
 * @author    Created by Nicolas.GLASSEY
 * @version   15-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const EmptySongsListException = require("./EmptySongsListException.js");

module.exports = class Playlist {

    //region private attributes
    #title;
    #songs;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a Playlist object (title must be unique)
     * @param songs : Song[] of songs
     */
    constructor(title, songs) {
        throw new Error();
    }

    get title(){
        throw new Error();
    }

    /**
     * @brief This getter returns the Playlist's length in seconds
     *        Sum of all songs length.
     */
    get length(){
        throw new Error();
    }

    /**
     * @brief This getter returns the current Song's list
     * @returns songs
     */
    get songs(){
        throw new Error();
    }

    /**
     * @brief This method adds a list of songs in the current song's list
     * @param songsToAdd : Song[]
     * @returns the list of songs, after including the "songsToAdd" in the current song's list
     */
    addSongs(songsToAdd){
        throw new Error();
    }

    /**
     * @brief This method initializes the playlist with the songs passed in parameter
     *        All songs present in the list before the init are removed first.
     *        To add songs to the current list, please use AddSongs method.
     * @param newListOfSongs : Song[]
     * @exception Throws EmptySongsListException if the newListOfSongs is empty
     */
    initSongs(newListOfSongs){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}