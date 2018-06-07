import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import RemoteApis from '../src/api/RemoteApis';


describe("RemoteApis", () => {
    it('getData should be be-null', () => {
        let api : any = RemoteApis();
        let res : boolean = api.getData();
        expect(res).not.toBe(null);
    });

});
