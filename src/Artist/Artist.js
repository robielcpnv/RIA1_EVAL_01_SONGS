/**
 * @file      Artist.js
 * @brief     This class is designed to manage an artist.
 * @author    Created by Nicolas.GLASSEY
 * @version   12-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

const AgeException = require('src/Artist/DateOfBirthException.js');

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
        throw new Error();
    }

    /**
     * @brief This method returns artist string
     * @param withAge : include age in the string if set to true
     * @returns "Firstname Lastname {Age}"
     * @exception throws DateOfBirthException Date Of Birth was not provided
     */
    toString(withDateOfBirth = false){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}

