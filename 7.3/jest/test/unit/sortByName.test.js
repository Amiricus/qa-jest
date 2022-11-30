const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("New tests", () => {
  it("New test", () => {
    expect(
      sorting.sortByName([
        "null",
        "null",
        "null",
    ])
    ).toEqual([
      "null",
      "null",
      "null",  
    ]);
  });
});
