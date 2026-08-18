import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {

  test("un profesor debe tener un nombre y legajo", () => {
    const profesor = new Profesor("María", 5678);

    expect(profesor.nombre).toBe("María");
    expect(profesor.legajo).toBe(5678);
  });
 
});