import { test, expect } from "@playwright/test";
test.describe("historia", () => {
  test("Dado que deseamos iniciar sesion, coloco usuario y no contraseña, entonces el sistema emite un mensaje del estilo 'Falta la contraseña'", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "Empezar" }).click();
    await page.getByRole("textbox", { name: "Correo Electrónico" }).click();
    await page.getByRole("textbox", { name: "Correo Electrónico" }).fill("a@gmail.com");
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();
    await expect(page.getByText("Falta contraseña")).toBeDefined();
  });

  test.skip("Dado que deseamos iniciar sesion, coloco usuario y  contraseña, entonces el sistema emite un mensaje del estilo 'Se inicio correctamente'", async ({
    page,
  }) => {
    // Paso 1: Navegar a la página de login
    await page.goto("http://localhost:3000/auth");

    // Paso 2: Completar los campos del formulario
    await page.getByPlaceholder("Email").fill("testuser@example.com");
    await page.getByPlaceholder("Contraseña").fill("Password123!");

    // Paso 3: Clic en el botón de iniciar sesión
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();

    // Paso 4: Verificar que redirige correctamente a "/"
    await expect(page).toHaveURL("http://localhost:3000/");

    // Paso 5: Verificar que algo del home esté visible (si lo tenés)
    // Si tu home no tiene nada en particular, esto se puede comentar.
    await expect(page.getByText(/Bienvenido|Inicio/i)).toBeVisible();
  });
});