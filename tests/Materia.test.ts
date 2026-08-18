import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {

  test("una materia debe tener un nombre, anio, carrera", () => {
    const materia = new Materia ("Paradigmas2", 2, "Ingenieria en sistemas");

    expect(materia.nombre).toBe("Paradigmas2");
    expect(materia.anio).toBe(2);
    expect(materia.carrera).toBe("Ingenieria en sistemas");
  });
});
