const crypto = require('crypto');

class PasswordGenerator {
    constructor(options = {}) {
        this.length = options.length || 12;
        this.includeLetters = options.includeLetters !== undefined ? options.includeLetters : true;
        this.includeNumbers = options.includeNumbers !== undefined ? options.includeNumbers : true;
        this.includeSymbols = options.includeSymbols !== undefined ? options.includeSymbols : false;
    }

    generate() {
        let charset = '';
        if (this.includeLetters) charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (this.includeNumbers) charset += '0123456789';
        if (this.includeSymbols) charset += '!@#$%^&*()-_+=<>?';

        let password = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = crypto.randomInt(0, charset.length);
            password += charset[randomIndex];
        }

        return password;
    }
}

module.exports = PasswordGenerator;