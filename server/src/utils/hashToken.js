import crypto from 'crypto';

export const hashToken = (val) => {
    return crypto
        .createHash('SHA256')
        .update(val)
        .digest('hex')
};