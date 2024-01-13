import { SimpleCipher } from ".";

describe("Random key generation", () => {
    it("generates keys at random", () => {
        expect(new SimpleCipher().key).not.toEqual(new SimpleCipher().key); // Error
    });
});
describe("Random key cipher", () => {
    const simpleCipher = new SimpleCipher();
    it("has a key made of letters", () => {
        expect(simpleCipher.key).toMatch(/^[a-z]+$/); // Error
    });
    it("has a key that is at least 100 characters long", () => {
        expect(simpleCipher.key.length).toBeGreaterThanOrEqual(100); // Error
    });
    it("can encode", () => {
        expect(simpleCipher.encode("aaaaaaaaaa")).toEqual(
            simpleCipher.key.substring(0, 10)
        );
    });
    it("can decode", () => {
        expect(simpleCipher.decode(simpleCipher.key.substring(0, 10))).toEqual(
            "aaaaaaaaaa"
        );
    });
    it("is reversible", () => {
        const plaintext = "abcdefghij";
        expect(simpleCipher.decode(simpleCipher.encode(plaintext))).toEqual(
            plaintext
        );
    });
});
describe("Substitution cipher", () => {
    const key = "abcdefghij";
    const simpleCipher = new SimpleCipher(key);
    it("keeps the submitted key", () => {
        expect(simpleCipher.key).toEqual(key);
    });
    it("can encode", () => {
        expect(simpleCipher.encode("aaaaaaaaaa")).toEqual("abcdefghij");
    });
    it("can decode", () => {
        expect(simpleCipher.decode("abcdefghij")).toEqual("aaaaaaaaaa");
    });
    it("is reversible", () => {
        expect(simpleCipher.decode(simpleCipher.encode("abcdefghij"))).toEqual(
            "abcdefghij"
        );
    });
    it(": double shift encode", () => {
        expect(
            new SimpleCipher("iamapandabear").encode("iamapandabear")
        ).toEqual("qayaeaagaciai");
    });
    it("can wrap on encode", () => {
        expect(simpleCipher.encode("zzzzzzzzzz")).toEqual("zabcdefghi");
    });
    it("can wrap on decode", () => {
        expect(simpleCipher.decode("zabcdefghi")).toEqual("zzzzzzzzzz");
    });
    it('can encode messages longer than the key"', () => {
        expect(new SimpleCipher("abc").encode("iamapandabear")).toEqual(
            "iboaqcnecbfcr"
        );
    });
    it("can decode messages longer than the key", () => {
        expect(new SimpleCipher("abc").decode("iboaqcnecbfcr")).toEqual(
            "iamapandabear"
        );
    });
});
