const expect = require('chai').expect;
const getVillamosMw = require('../../../../middleware/villamos/getVillamosMw');

describe('getVillamos middleware ', function () {
    it('should set res.locals.villamos with a villamos object from db', function(done) {
        const mw = getVillamosMw({
            VillamosModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({_id: '11'});
                    return Promise.resolve('mockvillamos');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                villamosid: '11'
            }
        }, 
        resMock, 
        (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({villamos: 'mockvillamos'});
            done();
        })
    });

    it('should call next with error in case of problem with db', function(done) {
        const mw = getVillamosMw({
            VillamosModel: {
                findOne: (p1) => {
                    expect(p1).to.be.eql({_id: '11'});
                    return Promise.reject('adatbazishiba');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
            params: {
                villamosid: '11'
            }
        }, 
        resMock, 
        (err) => {
            expect(err).to.be.eql('adatbazishiba');
            done();
        })
    });
});