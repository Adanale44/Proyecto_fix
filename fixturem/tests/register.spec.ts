import { test, expect } from "@playwright/test";

test("Registro exitoso: debe redirigir a la página de inicio de sesión", async ({ page }) => {
  // Paso 1: Navegar a la página de registro
  await page.goto("http://localhost:3000/register");

  // Paso 2: Completar los campos del formulario
  //recordatorio:first() devuelve el primer elemento de un conjunto de datos, para que holder no se vuelva loco con las contraseñas con nombre igual
  // y nth() selecciona elementos en función de su posición entre sus hermanos
  await page.getByPlaceholder("email").fill("testuser@example.com");
  await page.getByPlaceholder("Contraseña").first().fill("Password123!");
  await page.getByPlaceholder("Contraseña").nth(1).fill("Password123!");

  // Paso 3: Hacer clic en el botón de registro
  await page.getByRole("button", { name: "Registrarse" }).click();

  // Paso 4: Verificar que la URL sea la esperada (debería redirigir al login)
  await expect(page).toHaveURL("http://localhost:3000/auth");

  // Paso 5: Verificar que haya un mensaje de éxito o algo que indique que se registró correctamente
  // Puedes adaptar esto según tu flujo de UI
  await expect(page.getByText("Iniciar Sesión")).toBeVisible();
});
