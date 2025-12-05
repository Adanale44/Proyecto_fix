import { test, expect } from "@playwright/test";
test.skip("historia1", () => {
test("Dado que me quiero registrar pero dejo el email vacío, el sistema emite 'Falta email'", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Empezar" }).click();
  await page.getByRole("tab", { name: "Registrarse" }).click();
  await page.getByRole("button", { name: "Crear Cuenta" }).click();
  await expect(page.getByText("Falta email")).toBeDefined();
});
});

test.skip("historia2", () => {
test("Dado que me quiero registrar, coloco email pero no contraseña, entonces el sistema emite 'Falta contraseña'", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Empezar" }).click();
  await page.getByRole("tab", { name: "Registrarse" }).click();

  await page.getByRole("textbox", { name: "Correo Electrónico" }).fill("a@gmail.com");
  await page.getByRole("button", { name: "Crear Cuenta" }).click();

  await expect(page.getByText("Falta contraseña")).toBeDefined();
});
});

test.skip("historia3", () => {
test("Dado que me quiero registrar, completo email y contraseña pero no confirmo la contraseña, entonces el sistema emite 'Falta confirmar la contraseña'", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Empezar" }).click();
  await page.getByRole("tab", { name: "Registrarse" }).click();

  await page.getByRole("textbox", { name: "Correo Electrónico" }).fill("a@gmail.com");
  await page.getByRole("textbox", { name: "Contrasena" }).fill("12345678");
  await page.getByRole("button", { name: "Crear Cuenta" }).click();

  await expect(page.getByText("Falta confirmar la contraseña")).toBeDefined();
});
});

test.describe("historia4", () => {
test("Dado que me quiero registrar, completo email y contraseña", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Empezar" }).click();
  await page.getByRole("tab", { name: "Registrarse" }).click();

  await page.getByRole("textbox", { name: "Correo Electrónico" }).fill("a@gmail.com");
  await page.getByRole("textbox", { name: "Contrasena" }).fill("12345678");
  await page.getByRole("textbox", { name: "Verificar Contraseña" }).fill("12345678");
  await page.getByRole("button", { name: "Crear Cuenta" }).click();

  await expect(page.getByText("Falta confirmar la contraseña")).toBeDefined();
});
});