/**
 * @file      Song.js
 * @brief     This class is designed to manage a song.
 * @author    Created by Nicolas.GLASSEY
 * @version   15-MAR-2022 - original (dedicated to RIA1 EVAL)
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
     * @param title : string
     * @param length : number in seconds
     * @param artists : Artist[] artist-s who (co-)created the song
     * @exception Throws TooShortLengthException if the song's length do not reach 10 seconds.
     */
    constructor(title, length, artists) {
        if (length < 10){
            throw new TooShortSongException();
        }
        this.#title = title;
        this.#length = length;
        this.#artists = artists;
    }

    /**
     * @brief This getter returns the song's title
     * @returns {*}
     */
    get title(){
        return this.#title;
    }

    /**
     * @brief This getter returns the list of artists
     * @returns {*}
     */
    get artists(){
        return this.#artists;
    }

    /**
     * @brief This getter returns the song's length in seconds
     * @returns {*}
     */
    get length(){
        return this.#length;
    }

    /**
     * @brief This setter updates the song's length value
     * @param value : number in seconds
     * @exception Throws TooShortLengthException if the song's length do not reach 10 seconds.
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



