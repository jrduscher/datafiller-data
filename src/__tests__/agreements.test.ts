import { processAgreements } from "../agreements";

test("processAggreements should filter empty items", () => {
  const input = [
    {
      cid: "empty groups",
      groups: []
    },
    {
      cid: "empty selection",
      groups: [
        {
          id: "selection",
          selection: []
        }
      ]
    },
    {
      cid: "cid",
      groups: [
        {
          id: "selection",
          selection: ["article1"]
        }
      ]
    }
  ];

  expect(processAgreements(input)).toEqual([
    {
      cid: "cid",
      groups: [
        {
          id: "selection",
          selection: ["article1"]
        }
      ]
    }
  ]);
});
