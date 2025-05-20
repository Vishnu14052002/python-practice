var expect = function(val) {
    return {
        toBe(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal"); 
            }
        }
    };
};

// expect(5)

expect(5).toBe(5);