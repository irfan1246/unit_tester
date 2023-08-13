import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe("CalcService", () => {

  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    // shared = new SharedService();
    // calc = new CalcService(shared);
    TestBed.configureTestingModule({
      providers:[CalcService, SharedService]
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });
 it("should multiply two numbers", () => {
  // const shared = new SharedService();
  // const calc = new CalcService(shared);
  const result = calc.multiply(3, 5);
  expect(result).toBe(15);
 });
 it("should multiply two numbers", () => {
  // const shared = new SharedService();
  // const calc = new CalcService(shared);
  const result = calc.add(3, 5);
  expect(result).toBe(8);
 });

//  it("should call the mysharedfunction func", () => {
//   const shared = new SharedService();
//   spyOn(shared, "mySharedFunction");
//   const calc = new CalcService(shared);
//   const result = calc.multiply(3, 5);
//   expect(shared.mySharedFunction).toHaveBeenCalled();
//  });
});