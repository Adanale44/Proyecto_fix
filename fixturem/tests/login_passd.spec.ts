import { test, expect } from "@playwright/test";

test("No debe permitir iniciar sesión con contraseña incorrecta", async ({ page }) => {
  await page.goto("http://localhost:3000/auth");

  await page.getByPlaceholder("Email").fill("testuser@example.com");
  await page.getByPlaceholder("Contraseña").fill("Incorrecta123");

  await page.getByRole("button", { name: "Iniciar Sesión" }).click();

  // Como mostramos un alert(), Playwright lo captura así:
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toMatch(/incorrecta/i);
    await dialog.dismiss();
  });
});
