/*------------------------------------------------------------------------------
 * Classification:      UNCLASSIFIED
 * Organization:        SPAWAR Systems Center
 *                      53560 Hull St, San Diego, California 92152-5001, U.S.A
 *                      Property of the U.S. Government
 *
 * Description:
 *----------------------------------------------------------------------------*/

class AccessApi {
    static login(user: string, password : string) {
        return new Promise((resolve, reject) => {
            console.log('Mocking logging in attempt....');
            setTimeout(() => {
                console.log('Mocking logging is successful.');
                resolve(Object.assign([], 'Login Success'));
            }, 2000);
        });
    }
    static logout(user: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], 'Login Success'));
            }, 1000);
        });
    }
}

export default AccessApi;




