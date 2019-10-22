describe("Strings", () => {
    it("Should join two strings with a space.", () => {
        // TODO: write 2 function with different way for join string
        function combine1(a, b) {
            return a + ' ' + b;
        }

        function combine2(a, b) {
            return a.concat(' ', b);
        }
        expect(combine1("hello", "world")).toBe("hello world");
        expect(combine2("hello", "world")).toBe("hello world");
    });

    it("Should get string length", () => {
        function getLength(str) {
            return str.length;
        }
        expect(getLength("")).toBe(0);
        expect(getLength("word")).toBe(4);
    });

    it("Should create greeting message from template", () => {
        function greeting(name) {
            return "Hello, " + name + "!";
        }
        expect(greeting("Ivan")).toBe("Hello, Ivan!");
    });

    it("Should strip leading and trailing spaces from a string", () => {
        function strip(str) {
            return str.trim();
        }
        expect(strip(' aaaa bbb   ')).toBe("aaaa bbb");
    });

    it("Replace all word occurence in the sentences", () => {
        function replaceStr(str, oneStr, anotherStr) {
            var re = new RegExp(oneStr, "gi");
            var newstr = str.replace(re, anotherStr);
            return newstr;
        }
        expect(replaceStr('aaa bbb ccc aaa  bb', 'aaa', 'eeeee')).toBe("eeeee bbb ccc eeeee  bb");
    });

    it("Should validate string length", () => {
        function validateLength(str, a, b) {
            return (a <= str.length && str.length <= b);
        }
        expect(validateLength('abcde', 1, 5)).toBe(true);
        expect(validateLength('a', 1, 5)).toBe(true);
        expect(validateLength('ab', 1, 5)).toBe(true);
        expect(validateLength('', 1, 5)).toBe(false);
        expect(validateLength('abcdef', 1, 5)).toBe(false);
    });

    it("Should do case insensitive strings comparison", () => {
        function compare(str1, str2) {
            return (str1.toUpperCase() == str2.toUpperCase());
        }
        expect(compare('aBc', 'ABC')).toBe(true);
        expect(compare('abc', 'abc')).toBe(true);
    });

    it("Should trim string according symbols limit", () => {
        function trim(str, lim) {
            return str.substring(0, lim);
        }
        expect(trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
        expect(trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum ");
        expect(trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
        expect(trim('Lorem ipsum dolor sit amet', 100)).toBe(
            "Lorem ipsum dolor sit amet"
        );
    });
});