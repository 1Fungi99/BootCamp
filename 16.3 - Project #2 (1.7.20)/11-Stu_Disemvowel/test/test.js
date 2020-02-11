var expect = require("chai").expect;
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove any traces of vowels", function() {
    expect(disemvowel("asdasd")).to.equal("sdsd");
  });

  it("should throw when anything but letters are present", function() {
    expect(disemvowel("O'Mally is going to the store")).to.equal(
      "'Mlly s gng t th str"
    );
  });
});
