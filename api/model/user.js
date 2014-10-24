var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    crypto = require('crypto');

//TODO: Validator, Checker

var UserSchema = new Schema({
    id      : ObjectId,

    username: {
        type: String,
        index: { unique: true, sparse: true},
        required: true, lowercase: true, trim:true
    },
    email   : {
        type: String,
        index: { unique: true, sparse: true},
        required: true, lowercase: true, trim:true
    },
    salt: {
        type: String,
        select: false,
        required: true,
    },
    password:{
        type: String,
        select: false
    },
    hashed_password:{
        type: String, 
        required: true,
    },
    salt: {
        type: String, 
        required: true,
    },

    activity: {
        make_page : [{type: Schema.ObjectId, ref: 'Page'}],
        reply     : [{type: Number}],
    },
    active  : {type: Boolean, default: true}
    regDate : Date
});

/*
 * Vritual : Password encode
 * ------------------------------------*/
UserSchema.virtual('password')
    .set(function(password){
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function(){ return this._password;});

/*
 * Validation
 * ------------------------------------*/
UserSchema.path('username').validate(function(username){
    return username.indexOf(' ')==-1;
}, 'Invalid username');

UserSchema.path('account.email').validate(function(email){
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text);
}, 'Invalid email');

UserSchema.path('account.password').validation(function(password){
    return password.indexOf(' ')==-1;
}, 'Invalid Password');


/*
 * Methods
 * * ------------------------------------*/
UserSchema.methods('authenticate', function(plainText){
    return this.encryptPassword(plainText) === this.pashed_password;
});
UserSchema.methods('makeSalt', function(){
    return Math.round((new Date().valueOf() * Math.random())) + '';
});
UserSchema.methods('encryptPassword', function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
});
UserSchema.methods('generateToken', function(){
    return crypto.createHash('md5').update(this.username + Date().toString()).digest("hex");
});

User = mongoose.model('user', userSchema);


/*
 * Pre
 * * ------------------------------------*/
function validatePresenceOf(value) {
      return value && value.length;
}

UserSchema.pre('save', function(){
    this.token = this.generateToken();
    if (!validatePresenceOf(this.password || this.hashed_password)){
        next(new Error('invalid password'));   
    } else {
        next();
    }
});

module.exports = User;
