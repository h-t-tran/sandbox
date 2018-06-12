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

class AccessApis implements IAccessApi {

    login(user: string, password: string): Promise<LoginResponseData> {
        console.log("Making ajax call to login");

        let promiseResolve : any = null;
        let promiseReject : any = null;
        let promise = new Promise<LoginResponseData>((resolve, reject) => {
            promiseResolve = resolve;
            promiseReject = reject;
        });

        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: user, password: password})
        }).then( rsp => {
            if(rsp.status === 200) {
                promiseResolve(new LoginResponseData(true, "Login Success"));
            }
            else {
                promiseReject(new LoginResponseData(false, "Login failed"));
            }
        }).catch( err => {
            promiseReject(new LoginResponseData(false, "Login failed.  Server rejected"));
        });
        return promise;
    }

    logout(user: string): Promise<String> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], "Logout Success"));
            }, 1000);
        });
    }
}

export default AccessApis;

// class AccessApi {
//     private static _isLogin : boolean = false;
//     static login(user: string, password : string) {
//         return new Promise((resolve, reject) => {
//             console.log("Mocking logging in attempt....");
//             setTimeout(() => {
//                 if( ! AccessApi._isLogin) {
//                     console.log("Mocking logging is successful.");
//                     resolve(Object.assign([], {isLoggedIn: true, msg: "Login Success"}));
//                 }
//                 else {
//                     console.log("Mocking logging failed.");
//                     reject(Object.assign([], {isLoggedIn: false, msg: "Login Failed"}));
//
//                 }
//
//                 AccessApi._isLogin = ! AccessApi._isLogin;
//
//             }, 1000);
//         });
//     }
//     static logout(user: string) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(Object.assign([], "Login Success"));
//             }, 1000);
//         });
//     }
// }
//export default AccessApi;




