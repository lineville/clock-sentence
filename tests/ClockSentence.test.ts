import { clockSentence } from "./../src/ClockSentence";
import { expect, assert } from "chai";

describe("Clock Sentence", function() {
  it("2:01 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 1);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about 2 in the afternoon")
  });

  it("2:03 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 3);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about five past 2 in the afternoon")
  });

  it("2:08 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 8);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about ten past 2 in the afternoon")
  });

  it("2:13 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 13);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about a quarter past 2 in the afternoon")
  });

  it("2:18 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 18);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about ten till 2 thirty in the afternoon")
  });

  it("2:23 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 23);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about five till 2 thirty in the afternoon")
  });

  it("2:31 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 31);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about 2 thirty in the afternoon")
  });

  it("2:34 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 34);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about five past 2 thirty in the afternoon")
  });

  it("2:38 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 38);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about ten past 2 thirty in the afternoon")
  });

  it("2:43 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 43);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about a quarter till 3 in the afternoon")
  });

  it("2:48 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 48);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about ten till 3 in the afternoon")
  });

  it("2:54 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 54);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about five till 3 in the afternoon")
  });

  it("2:58 in the afternoon", function() {
    let date = new Date();
    date.setHours(14, 58);
    let result: string = clockSentence(date)
    expect(result).to.equal("It's about 3 in the afternoon")
  });

  it("now", function() {
    let result: string = clockSentence()
    expect(result.length).to.be.greaterThan(0);
  });
});
