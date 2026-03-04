import { test, expect } from "@playwright/test";

test.describe("Historia: Hacer público el torneo", () => {
  test("Dado que termino de crear el torneo y presiono publicar, el sistema lo hace visible para todos", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/auth");

    await page.getByLabel("Correo Electrónico").fill("a@gmail.com");
    await page.getByLabel("Contraseña").fill("12345678");

    await page.getByRole("button", { name: "Iniciar Sesión" }).click();

    await expect(page).toHaveURL("http://localhost:3000/");
    await page.goto("http://localhost:3000/torneo");

    const nombreUnico = "TorneoTest_" + Date.now();

    await page.locator('input[name="name"]').fill(nombreUnico);
    await page.locator('select[name="category"]').selectOption("Deporte");
    await page.locator('textarea[name="description"]').fill("descripcion test");
    await page.locator('textarea[name="rules"]').fill("reglas test");
    await page.locator('input[name="limit"]').fill("16");
    await page.locator('input[name="startDate"]').fill("2026-03-03T11:26");
    await page.locator('input[name="endDate"]').fill("2026-03-04T11:26");

    await page
      .getByRole("button", { name: "Confirmar creación del torneo" })
      .click();

    await expect(page.getByText(/El torneo ha sido creado/i)).toBeVisible();
    await page.goto("http://localhost:3000/profile");
    const botonPublicar = page
      .getByRole("button", { name: "Publicar Torneo" })
      .first();

    await expect(botonPublicar).toBeVisible();
    await botonPublicar.click();
    await expect(page.getByText(/El torneo ha sido publicado/i)).toBeVisible();
    await expect(page).toHaveURL("http://localhost:3000/torneos");

  });
});
