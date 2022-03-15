const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: null
    },
    token_secret: {
        type: String,
        default: null
    }
});

// before being saved the password is changed using bcrypt to change into a hash for security.  function is used to make use of !this!
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        //takes password, salt(random sequence) and turns into a hash
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

//compares password
userSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }

            resolve(true);
        });
    });
};

mongoose.model('User', userSchema);
