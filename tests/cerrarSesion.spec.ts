import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test.describe("Historia - Login", () => {

test("Dado que el usuario inició sesión, cuando presiona 'Cerrar Sesión', entonces el sistema cierra la sesión y muestra el mensaje correspondiente", async ({ page }) => {

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
  await page.goto("http://localhost:3000/profile");

  await page
    .getByRole("button", { name: "Cerrar Sesión" })
    .click();

    
await expect(
    page.getByText(/Sesión cerrada correctamente/i)
).toBeVisible();
    
await expect(page).toHaveURL("http://localhost:3000/auth");
});

});