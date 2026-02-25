import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test.describe("Historia - Login", () => {

  test("Dado que deseamos iniciar sesion, coloco usuario y no contraseña, entonces el sistema emite un mensaje del estilo 'Falta la contraseña'", async ({ page }) => {

    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Empezar" }).click();

    await page
      .getByLabel("Correo Electrónico")
      .fill("a@gmail.com");

    await page
      .getByRole("button", { name: "Iniciar Sesión" })
      .click();

    await expect(
      page.getByText("Falta contraseña")
    ).toBeVisible();

  });


  test("Dado que deseamos iniciar sesion, coloco usuario y contraseña, entonces el sistema emite un mensaje del estilo 'Se inicio correctamente'", async ({ page }) => {

    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Empezar" }).click();

    await page
      .getByLabel("Correo Electrónico")
      .fill("a@gmail.com");

    await page
      .getByLabel("Contraseña")
      .fill("12345678");

    await page
      .getByRole("button", { name: "Iniciar Sesión" })
      .click();

    await expect(page).toHaveURL("http://localhost:3000/");

    await expect(
      page.getByText(/Bienvenido|Inicio/i)
    ).toBeVisible();

  });

});