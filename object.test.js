const PUT_ANSWER_HERE = Symbol();

describe('Objects', () => {
    it('Should get the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.', () => {
        //1st variant  
        function get(obj, path) {
            var keys = path.split('.');

            for (let i = 0; i < keys.length; i++) {
                obj = obj[keys[i]];
            }
            return obj;
        }

        //2nd variand (recursion)
        function get2(obj, path) {
            var keys = path.split('.');

            var retObject;

            function getByArray(initialObj, keysArray) {
                for (let i = 0; i < keysArray.length; i++) {
                    if (keysArray[i] in initialObj) {
                        retObject = initialObj[keysArray[i]];
                        if (i + 1 < keysArray.length) {
                            getByArray(retObject, keysArray.slice(i + 1, keysArray.length));
                        }
                    }
                }
            };

            getByArray(obj, keys);

            return retObject;
        }

        expect(get({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
        expect(get({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({ c: 1, d: 2 });
        expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);

        expect(get2({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
        expect(get2({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({ c: 1, d: 2 });
        expect(get2({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);

    });

    it('Creates an object composed of the picked object properties.', () => {
        function pick(obj, props) {
            var retObject = {};
            // if(props.length == 1) {
            //   return {
            //     [props[0]]:obj[props[0]]
            //   };
            // }
            for (let i = 0; i < props.length; i++) {
                if (props[i] in obj) {
                    retObject[props[i]] = obj[props[i]];
                }
            }
            return retObject;
        }
        const object = { a: 1, b: '2', c: 3 };

        expect(pick(object, ['a'])).toStrictEqual({ a: 1 });
        expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
        expect(pick(object, ['c'])).toStrictEqual({ c: 3 });
    });

    it('Should clone object', () => {
        const person1 = {
            firstName: 'Ivan',
            secondName: 'Ivanov'
        };

        function clone(obj) {
            var objClone = {};
            for (let key in obj) {
                objClone[key] = obj[key];
            }
            return objClone;
        }

        const person2 = clone(person1);
        person2.firstName += ' Jr.';

        expect(person1.firstName).toBe('Ivan');
        expect(person2.firstName).toBe('Ivan Jr.');
        expect(person2.secondName).toBe('Ivanov');
    });

    it('Performs a shallow comparison between two values to determine if they are equivalent.', () => {
        const obj1_ = { a: 1, b: 2 };
        const obj2_ = { a: 1, b: 2 };
        const obj3_ = { a: 1, b: 4 };

        function compare(obj1, obj2) {
            for (var key in obj1) {
                if (!(key in obj2) || obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            for (var key in obj2) {
                if (!(key in obj1) || obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true;
        }

        expect(compare(obj1_, obj2_)).toBe(true);
        expect(compare(obj1_, obj3_)).toBe(false);
    });

    it('Performs a deep comparison between two values to determine if they are equivalent.', () => {
        const obj1 = { a: 1, b: { a: 2 } };
        const obj2 = { a: 1, b: { a: 2 } };

        function compare(a, b) {
            for (var key in a) {
                if (!(key in b)) {
                    console.log("1");
                    return false;
                } else {
                    if (typeof a[key] == 'object') {
                        console.log("2");
                        if (!compare(a[key], b[key])) {
                            console.log("3");
                            return false;
                        }
                    } else {
                        if (a[key] != b[key]) {
                            console.log("4");
                            return false;
                        }
                    }
                }
            }
            for (var key in b) {
                if (!(key in a)) {
                    return false;
                } else {
                    if (typeof b[key] == 'object') {
                        console.log("2");
                        if (!compare(b[key], a[key])) {
                            console.log("3");
                            return false;
                        }
                    } else {
                        if (b[key] != a[key]) {
                            console.log("4");
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        expect(compare(obj1, obj2)).toBe(true);
    });

    it('Fix me', () => {
        function hasAccess(role) {
            if (role.type == 'admin') {
                return true;
            } else {
                return false;
            }
        }

        expect(hasAccess({ type: 'admin' })).toBe(true);
        expect(hasAccess({ type: 'anonymous' })).toBe(false);
    });
});