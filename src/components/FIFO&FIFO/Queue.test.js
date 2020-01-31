import Queue from "./Queue";

test("check class LikedList working", () => {
  let m = new Queue();
  m.putIN("subject", 5);
  m.putIN("whatever", 3);
  m.putIN("moreWhatever", 6);
  m.first();
  expect(m.flag.subject).toBe("subject");
  m.takeOut();
  m.first();
  expect(m.flag.subject).toBe("whatever");
});
