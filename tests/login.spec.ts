import { test, expect } from "@playwright/test";

test.describe("historia", () => {

  test("Dado que deseamos iniciar sesion, coloco usuario y no contraseña, entonces el sistema emite un mensaje del estilo 'Falta la contraseña'", async ({
    page,
  }) => {

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

  test("Dado que deseamos iniciar sesion, coloco usuario y contraseña, entonces el sistema emite un mensaje del estilo 'Se inicio correctamente'", async ({
    page,
  }) => {

    await page.goto("http://localhost:3000/");

    await page.getByPlaceholder("tu-correo@etecuba.edu.ar").fill("a@example.com");

    await page
      .getByRole("textbox", { name: "Contraseña" })
      .fill("Password123!");

    await page
      .getByRole("button", { name: "Iniciar Sesión" })
      .click();

    await page.goto("http://localhost:3000/");

    await expect(
      page.getByText(/Bienvenido|Inicio/i)
    ).toBeVisible();

  });

});