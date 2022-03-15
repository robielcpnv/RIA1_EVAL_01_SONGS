/**
 * @file      Playlist.js
 * @brief     This class is designed to manage a playlist.
 * @author    Created by Nicolas.GLASSEY
 * @version   12-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

module.exports = class Playlist {

    //region private attributes
    #title;
    #songs;
    #allowDuplicate;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a Playlist object (title must be unique)
     * @param songs : Song[] of songs
     * @param allowDuplicate : boolean to add several time the same song
     * @exception throws DuplicateException thrown when allowDuplicate is set to false and duplicate detected
     */
    constructor(title, songs, allowDuplicate = true) {
        this.#title = title;
        this.#songs = songs;
        this.#allowDuplicate = allowDuplicate;
    }

    get title(){
        return this.#title;
    }

    /**
     * @brief This getter returns the Playlist's length in seconds
     *        Sum of all songs length, include duplicate.
     */
    get length(){
        let sum = 0;
        this.#songs.forEach(function(song){
            sum += song.length;
        })
        return sum;
    }

    /**
     * @brief This getter returns the current Song's list
     * @returns songs
     */
    get songs(){
        return this.#songs;
    }

    /**
     * @brief This method adds a list of song in the existing list
     * @param songsToAdd : Song[]
     * @returns the list of song, after adding the new list of songs
     * @exception throws DuplicateException when duplicate are not allowed and detected
     */
    addSongs(songsToAdd){
        if (this.#songs == null){
            this.#songs = songsToAdd;
        }else{
            for (let i = 0 ; i < songsToAdd.length ; i++){
                this.#songs.push(songsToAdd[i]);
            }
        }
    }

    /**
     * @brief This method removes find and remove the songs passed in parameters
     *        If the song was not found, no action.
     *        If the song was found, it will be removed (all duplicates of it).
     * @param songs
     */
    removeSongs(songs){
        throw new Error();
    }

    /**
     * @brief This method initializes the playlist with the songs passed in parameters
     *        All songs present is the list before the init are removed fist.
     *        To add songs to the current list, please use AddSongs method.
     * @params songs
     */
    initPlaylist(songs){
        throw new Error();
    }

    //endregion public methods

    //region private methods

    //endregion private methods
}