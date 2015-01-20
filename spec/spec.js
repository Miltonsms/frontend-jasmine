describe("First jasmine project", function() {
  it("should say hello jasmine", function() {

    expect(helloWorld()).toBe("hello world");
  });
   it("it shoul write jasmine", function() {

    expect(title).toBe("practicar de jasmine");
    expect(title).not.toBe(" ");

  });
    it("it shoul include in the  jasmine", function() {

    expect(title).toMatch(/jasmine/i);
  });
    it("verificacion de suma", function() {
    expect(suma(2,2)).toBe(4);
    expect(suma(3,6)).toBe(9);
    expect(suma(-50,1000)).toBe(950);
    expect(suma("50","400")).toBe(450);
     expect(suma("this is a string",50)).toBe(null);

      });

});

