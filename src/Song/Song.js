/**
 * @file      Song.js
 * @brief     This class is designed to manage a song.
 * @author    Created by Nicolas.GLASSEY
 * @version   12-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

"use strict";

const TooShortSongException = require("./TooShortSongException.js");

module.exports = class Song {

    //region private attributes
    #title;
    #length;
    #artists;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a Song Object (title must be unique)
     * @param title
     * @param length : number of seconds
     * @param artists : Artist[] artist-s who (co-)created the song
     * @exception Throws TooShortLengthException if the song length do not reach 10 seconds.
     * @exception Throws DuplicateArtistException if the list contains more than one time the same artist
     */
    constructor(title, length, artists) {
        if (length < 10){
            throw new TooShortSongException();
        }
        this.#title = title;
        this.#length = length;
        this.#artists = artists;
    }

    get title(){
        return this.#title;
    }

    /**
     * @brief This getter returns the list of artists
     * @returns the list of artists or, if the list is empty, returns null.
     */
    get artists(){
        return this.#artists;
    }

    /**
     * @brief This getter returns the song's length
     * @returns song's length in seconds
     */
    get length(){
        return this.#length;
    }

    /**
     * @brief This setter update the song's length value
     * @param value : number in seconds
     * @exception Throws TooShortLengthException if the song length do not reach 10 seconds.
     */
    set length(value){
        if (value < 10){
            throw new TooShortSongException();
        }
        this.#length = value;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



