const Cube = require('../src/app.js').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Function', function() {
it ('1. The side lenght of the Cube', function(done){
    let c1 = new Cube(2);
    expect(c1.getSideLength()).to.equal(2);
    done();
})

it('2. The surface area of the Cube', function(done) {
    let c2 = new Cube(5);
    // expect(c2.getSurfaceArea()).to.equal(150);
    expect(c2.getSurfaceArea()).to.equal(50);
    done();
    });
    
    it('3. The volume of the Cube', function(done) {
    let c3 = new Cube(7);
    // expect(c3.getVolume()).to.equal(343);
    expect(c3.getVolume()).to.equal(100);
    done();
    });

});