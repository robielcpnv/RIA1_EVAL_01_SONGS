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
    #allowDuplicate;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a Playlist object (title must be unique)
     * @param songs : Song[] of songs
     * @param allowDuplicate : boolean to add several times the same song
     */
    constructor(title, songs) {
        this.#title = title;
        this.#songs = songs;
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
     * @brief This method adds a list of songs in the current song's list
     * @param songsToAdd : Song[]
     * @returns the list of songs, after including the "songsToAdd" in the current song's list
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
     * @brief This method initializes the playlist with the songs passed in parameter
     *        All songs present in the list before the init are removed first.
     *        To add songs to the current list, please use AddSongs method.
     * @param newListOfSongs : Song[]
     * @exception Throws EmptySongsListException if the newListOfSongs is empty
     */
    initSongs(newListOfSongs){
        if(newListOfSongs == null){
            throw new EmptySongsListException();
        }
        this.#songs = newListOfSongs;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}