  test("Dado que termino de crear el torneo y presiono publicar, el sistema emite 'El torneo ha sido publicado'", async ({
    page,
  }) => {
    // Login
    await page.goto("http://localhost:3000/auth");

    await page.getByLabel("Correo Electrónico").fill("a@gmail.com");
    await page.getByLabel("Contraseña").fill("12345678");
    await page.getByRole("button", { name: "Iniciar Sesión" }).click();

    await expect(page).toHaveURL("http://localhost:3000/");

    // Crear torneo
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

    // Ir al perfil
    await page.goto("http://localhost:3000/profile");

    await expect(page.getByText(nombreUnico)).toBeVisible();

    const torneoCard = page.locator("div.border", {
      has: page.getByText(nombreUnico),
    });

    const publishButton = torneoCard.getByRole("button", {
      name: "Publicar Torneo",
    });

    // Esperar que el botón esté realmente listo
    await expect(publishButton).toBeVisible({ timeout: 10000 });

    // Click UNA sola vez
    await publishButton.click();

    // Validar mensaje
    await expect(page.getByText("El torneo ha sido publicado")).toBeVisible({
      timeout: 10000,
    });
  });