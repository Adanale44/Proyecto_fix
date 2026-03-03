import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test.describe("Historia Crear torneo", () => {
  test("Dado que deseo crear un torneo pero no inicio sesión, entonces el sistema emite 'Falta iniciar sesión'", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/torneo");

    await expect(page.getByText(/Falta iniciar sesión/i)).toBeVisible();

    await expect(page.getByText(/Crear Torneo/i)).not.toBeVisible();
  });

  test("Dado que se me olvida parte del formulario, el sistema emite 'Todos los campos son obligatorios'", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/auth");

    await page.getByLabel("Correo Electrónico").fill("a@gmail.com");
    await page.getByLabel("Contraseña").fill("12345678");
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();

    await expect(page).toHaveURL("http://localhost:3000/");

    await page.goto("http://localhost:3000/torneo");

    await expect(page.getByText("Crear Torneo")).toBeVisible();

    await page.locator('input[name="name"]').fill("Torneo bbbrawl");

    await page
      .getByRole("button", { name: "Confirmar creación del torneo" })
      .click();

    await expect(
      page.getByText(/Todos los campos son obligatorios/i),
    ).toBeVisible();
  });

  test("Dado que creo un torneo con nombre repetido, el sistema emite 'El nombre del torneo está siendo repetido'", async ({ page }) => {
    await page.goto("http://localhost:3000/auth");

    await page.getByLabel("Correo Electrónico").fill("a@gmail.com");
    await page.getByLabel("Contraseña").fill("12345678");
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();

    await expect(page).toHaveURL("http://localhost:3000/");

    await page.goto("http://localhost:3000/torneo");

    await page.locator('input[name="name"]').fill("Torneo brawl"); // ya existente
    await page.locator('select[name="category"]').selectOption("Deporte");
    await page.locator('textarea[name="description"]').fill("descripcion test");
    await page.locator('textarea[name="rules"]').click();
    await page.locator('textarea[name="rules"]').fill("no peliar");
    await page.getByRole("spinbutton").click();
    await page.getByRole("spinbutton").fill("16");
    await page.locator('input[name="startDate"]').click();
    await page.locator('input[name="startDate"]').fill("2026-03-03T11:26");
    await page.locator('input[name="endDate"]').click();
    await page.locator('input[name="endDate"]').fill("2026-04-03T00:27");
    await page
      .getByRole("button", { name: "Confirmar creación del torneo" })
      .click();
    await expect(
      page.getByText(/Ya existe un torneo con ese nombre/i),
    ).toBeVisible();
  });

  test("Dado que completo correctamente el formulario, el sistema emite 'El torneo ha sido creado'", async ({
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
  });
});
