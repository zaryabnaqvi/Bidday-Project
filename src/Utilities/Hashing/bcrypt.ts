import * as bcrypt from 'bcrypt';

export function encodePassword(password:string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password,salt);
}

export function comparePassword(password:string, hash:string) {
    return bcrypt.compareSync(password,hash);;
}
