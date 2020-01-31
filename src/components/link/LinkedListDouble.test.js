import LinkedListDouble from "./LinkedListDouble";

test("check class LikedList working", () => {
  let m = new LinkedListDouble();
  m.insert("subject", 5);
  m.insert("whatever", 3);
  m.insert("moreWhatever", 6);
  m.insert("whenever", 7);
  m.previous();
  expect(m.flag.subject).toBe("moreWhatever");
  m.first();
  expect(m.flag.subject).toBe("subject");
  m.last();
  expect(m.flag.subject).toBe("whenever");
  m.previous();
  expect(m.flag.subject).toBe("moreWhatever");
  m.next();
  expect(m.flag.subject).toBe("whenever");
  m.first();
  m.delete();
  expect(m.flag.subject).toBe("whatever");
  m.last();
  m.delete();
  expect(m.flag.subject).toBe("moreWhatever");
  m.insert("newSubject", 8);
  m.previous();
  m.delete();
  expect(m.flag.subject).toBe("newSubject");
  m.last();
  m.previous();
  m.insert("manySubject", 9);
  m.next();
  expect(m.flag.subject).toBe("manySubject");
  for (let b of m) {
    console.log(b);
  }

  m.first();
  expect(m.flag.subject).toBe("whatever");
  expect(m.getTotal()).toBe(20);
});
