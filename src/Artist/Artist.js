/**
 * @file      Artist.js
 * @brief     This class is designed to manage an artist.
 * @author    Created by Nicolas.GLASSEY
 * @version   15-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

const DateOfBirthException = require('./DateOfBirthException.js');

module.exports = class Artist{

    //region private attributes
    #firstname;
    #lastname;
    #dateOfBirth;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs an Artist object (combination of firstname and lastname must be unique)
     * @param firstname
     * @param lastname
     * @param dateOfBirth
     */
    constructor (firstname, lastname, dateOfBirth = null) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#dateOfBirth = dateOfBirth;
    }

    /**
     * @brief This method returns artist string
     * @param withAge : boolean must add the dateOfBirth if true
     * @returns "Firstname Lastname {Age}"
     * @exception throws DateOfBirthException if DateOfBirth was not provided
     */
    toString(withDateOfBirth = false){
            return`${this.#firstname} ${this.#lastname}`;

    }
    //endregion public methods

    //region private methods
    //endregion private methods
}

