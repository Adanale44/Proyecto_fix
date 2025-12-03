import { test, expect } from "@playwright/test";

test("No debe permitir registrar un email repetido", async ({ page }) => {
  await page.goto("http://localhost:3000/register");

  // Rellenar con el email que está en USERS del mock
  await page.getByTestId("email").fill("testuser@example.com");
  await page.getByTestId("password").fill("Password123!");
  await page.getByTestId("password-confirm").fill("Password123!");

  // Preparar captura de dialog (alert)
  const dialogPromise = page.waitForEvent("dialog");

  // Esperar que el botón esté visible y clickeable
  await expect(page.getByTestId("register-submit")).toBeVisible();
  await page.getByTestId("register-submit").click();

  // Verificar el alert
  const dialog = await dialogPromise;
  expect(dialog.message()).toMatch(/registrado/i);
  await dialog.dismiss();

  // Asegurar que seguimos en la misma página (no redirigió)
  await expect(page).toHaveURL("http://localhost:3000/register");
});
