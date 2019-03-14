const assert = require("assert");
const assertPkgsPrivate = require("../");

describe("assert-pkgs-private", function() {
  it("valid", async function() {
    await assertPkgsPrivate(__dirname+"/valid-tree");
  })

  it("invalid-root", async function() {
    let err;
    try {
      await assertPkgsPrivate(__dirname+"/invalid-root");
    }
    catch (_err) {
      err = _err;
    }

    assert.equal(err, 'Error: Missing {private: true} in file: "test/invalid-root/package.json"');
  })

  it("invalid-tree", async function() {
    let err;
    try {
      await assertPkgsPrivate(__dirname+"/invalid-tree");
    }
    catch (_err) {
      err = _err;
    }

    assert.equal(err, 'Error: Missing {private: true} in file: "test/invalid-tree/foo/package.json"');
  })
})
