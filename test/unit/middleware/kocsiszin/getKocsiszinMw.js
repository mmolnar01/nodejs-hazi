const expect = require('chai').expect;
//const expect = import('chai').expect;
const getKocsiszinMw = require('../../../../middleware/kocsiszin/getKocsiszinMw');
const sinon = require('sinon');
const Kocsiszin = require('../../../../models/kocsiszin');

describe('getKocsiszin middleware ', function () {
    it('should return a kocsiszin', function(done) {
        const mw = getKocsiszinMw({
            KocsiszinModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({_id: '10'});
                    return Promise.resolve('mockkocsiszin');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                kocsiszinid: '10'
            }
        }, 
        resMock, 
        () => {
            console.log(resMock.locals.kocsiszin);
            expect(resMock.locals).to.be.eql({kocsiszin: 'mockkocsiszin'});
            done();
        })
    });
});

/*describe('getKocsiszin middleware', function() {
    it('should return a kocsiszin', async function() {
        // Create a mock KocsiszinModel
        const KocsiszinModel = {
            findOne: sinon.stub().resolves('mokkocsiszin') // Mock findOne to return a resolved promise
        };

        // Create a mock objectrepository
        const objectrepository = {
            KocsiszinModel: KocsiszinModel
        };

        // Create the middleware
        const mw = getKocsiszinMw(objectrepository);

        // Mock request and response objects
        const req = {
            params: {
                kocsiszinid: '10'
            }
        };

        const res = {
            locals: {}
        };

        // Run the middleware and test the outcome
        await new Promise((resolve, reject) => {
            mw({
                params: {
                    kocsiszinid: '10'
                }
            }, {
                locals: {}
            }, (err) => {
                try {
                    expect(err).to.be.undefined;
                    expect(res.locals.kocsiszin).to.equal('mokkocsiszin');
                    expect(res.locals.kocsiszin.kocsiszinid).to.equal('10');
                    //expect(res.locals.kocsiszin.kocsiszinid).to.be.eql({_id: '10'});
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
});*/

/*describe('getKocsiszin middleware', function() {
    it('should return a kocsiszin', async function() {
        // Create a mock KocsiszinModel
        const KocsiszinModel = {
            findOne: (query) => {
                return new Promise((resolve, reject) => {
                    if (query._id === '10') {
                        //expect(query._id).to.be.eql({_id: '10'});
                        resolve('mokkocsiszin'); // Mock response
                        //resolve({ kocsiszinid: query._id, name: 'mokkocsiszin' });
                    } else {
                        reject(new Error('Kocsiszin not found'));
                    }
                });
            }
        };


        // Create a mock objectrepository
        const objectrepository = {
            KocsiszinModel: KocsiszinModel
        };

        // Create the middleware
        const mw = getKocsiszinMw(objectrepository);

        // Mock request and response objects
        const req = {
            params: {
                kocsiszinid: '10'
            }
        };

        const res = {
            locals: {}
        };

        // Run the middleware and test the outcome
        await new Promise((resolve, reject) => {
            mw(req, res, (err) => {
                try {
                    expect(err).to.be.undefined;
                    //expect(res.locals.kocsiszin).to.equal('mokkocsiszin');
                    expect(res.locals.kocsiszin.kocsiszinid).to.be.eql({_id: '10'});
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
    });
});*/