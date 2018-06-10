/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

import { LoginResponseData } from  "./IAccessApis";
import IAccessApi from "./IAccessApis";

class AccessApisMock implements IAccessApi {
    private static _isLogin : boolean = false;
    login(user: string, password: string): Promise<LoginResponseData> {
        return new Promise((resolve, reject) => {
            console.log("Mocking logging in attempt....");
            setTimeout(() => {
                if( ! AccessApisMock._isLogin) {
                    console.log("Mocking logging is successful.");
                    resolve(new LoginResponseData(true, "Login Success"));
                }
                else {
                    console.log("Mocking logging failed.");
                    resolve(new LoginResponseData(false, "Login Failed"));
                }

                AccessApisMock._isLogin = ! AccessApisMock._isLogin;

            }, 1000);
        });
    }

    logout(user: string): Promise<String> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], "Logout Success"));
            }, 1000);
        });
    }
}

export default AccessApisMock;