/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

export class LoginResponseData {
    isLoggedIn : boolean;
    msg : string;
    //status : number;  // HTTP status code eg. 200

    constructor(isLoggedIn : boolean, msg : string) {
        this.isLoggedIn = isLoggedIn;
        this.msg = msg;
    }
}

interface IAccessApi {
    login(user: string, password: string): Promise<LoginResponseData>;
    logout(user: string): Promise<String>;
}

export default IAccessApi;
