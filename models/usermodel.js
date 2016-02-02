/**
 * @author Robert Dumitrescu
 */

var userData = require("../data/users.json");

/**
 * Here we import the bcrypt module into the project
 * @require bcrypt
 */

var User = function (userData) {
    this.userData = userData;
};

Object.defineProperties(User.prototype, {

    /**
     * Getters for object properties
     **/

    user_name: {
        get: function () {
            return this.userData.user_name
        },
        enumerable: true
    },
    user_email: {
        get: function () {
            return this.userData.user_email
        },
        enumerable: true
    },
    user_username: {
        get: function () {
            return this.userData.user_username
        },
        enumerable: true
    },
    user_password: {
        get: function () {
            return this.userData.user_password
        },
        enumerable: true
    },
    user_position: {
        get: function () {
            return this.userData.user_position
        },
        enumerable: true
    },
    user_curiculum: {
        get: function () {
            return this.userData.user_curiculum
        },
        enumerable: true
    },
    user_is_staff: {
        get: function () {
            return this.userData.user_is_staff
        },
        enumerable: true
    },
    user_description: {
        get: function () {
            return this.userData.user_description
        },
        enumerable: true
    },
    user_profile_image: {
        get: function () {
            return this.userData.user_profile_image
        },
        enumerable: true
    },
    user_role: {
        get: function () {
            return this.userData.user_role
        },
        enumerable: true
    },
    user_time: {
        get: function () {
            return this.userData.user_time
        },
        enumerable: true
    },
    user_modified_time: {
        get: function () {
            return this.userData.user_modified_time
        },
        enumerable: true
    },


    getAllUsers: {
        /**
         * @description Retrieve data from data/json
         * @param callback
         */
        value: function (callback) {

                    callback(userData);

        }
    },

    deleteUserById: {

        /**
         * @description query_object format:  {_id: '4d512b45cc9374271b00000f'}
         * @description If we need to handle the mongo collection delete we must instantiate the new mongodb.ObjectID()
         * @description The actual method is removed due persistance issues
         * @param {Object} query_object
         * @param {function} callback
         * */

        value: function (query_object, callback) {
            var result = "The collection item was deleted";
            callback(result);

        }
    }

});


module.exports = User;