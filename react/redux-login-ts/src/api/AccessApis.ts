/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

class AccessApi {
    private static _isLogin : boolean = false;
    static login(user: string, password : string) {
        return new Promise((resolve, reject) => {
            console.log("Mocking logging in attempt....");
            setTimeout(() => {
                if( ! AccessApi._isLogin) {
                    console.log("Mocking logging is successful.");
                    resolve(Object.assign([], {isLoggedIn: true, msg: "Login Success"}));
                }
                else {
                    console.log("Mocking logging failed.");
                    reject(Object.assign([], {isLoggedIn: false, msg: "Login Failed"}));

                }

                AccessApi._isLogin = ! AccessApi._isLogin;

            }, 1000);
        });
    }
    static logout(user: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], "Login Success"));
            }, 1000);
        });
    }
}

export default AccessApi;




