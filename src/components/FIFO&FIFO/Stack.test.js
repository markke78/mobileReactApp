import Stack from "./Stack";

test("check class LikedList working", () => {
  let m = new Stack();
  m.putIN("subject", 5);
  m.putIN("whatever", 3);
  m.putIN("moreWhatever", 6);
  expect(m.flag.subject).toBe("moreWhatever");
  m.takeOut();
  expect(m.flag.subject).toBe("whatever");
});
