module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/playwright/test [external] (playwright/test, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("playwright/test");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$playwright$2f$test$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@playwright/test/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/playwright/test [external] (playwright/test, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$playwright$2f$test$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$playwright$2f$test$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["test"].describe("Historia: Hacer público el torneo", ()=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["test"])("Dado que termino de crear el torneo y presiono publicar, el sistema lo hace visible para todos", async ({ page })=>{
        await page.goto("http://localhost:3000/auth");
        await page.getByLabel("Correo Electrónico").fill("a@gmail.com");
        await page.getByLabel("Contraseña").fill("12345678");
        await page.getByRole("button", {
            name: "Iniciar Sesión"
        }).click();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(page).toHaveURL("http://localhost:3000/");
        await page.goto("http://localhost:3000/torneo");
        const nombreUnico = "TorneoTest_" + Date.now();
        await page.locator('input[name="name"]').fill(nombreUnico);
        await page.locator('select[name="category"]').selectOption("Deporte");
        await page.locator('textarea[name="description"]').fill("descripcion test");
        await page.locator('textarea[name="rules"]').fill("reglas test");
        await page.locator('input[name="limit"]').fill("16");
        await page.locator('input[name="startDate"]').fill("2026-03-03T11:26");
        await page.locator('input[name="endDate"]').fill("2026-03-04T11:26");
        await page.getByRole("button", {
            name: "Confirmar creación del torneo"
        }).click();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(page.getByText(/El torneo ha sido creado/i)).toBeVisible();
        await page.goto("http://localhost:3000/profile");
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(page.getByText("Mis Torneos")).toBeVisible();
        const botonPublicar = page.getByRole("button", {
            name: "Publicar Torneo"
        }).first();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(botonPublicar).toBeVisible();
        await botonPublicar.click();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(page.getByText(/El torneo ha sido publicado/i)).toBeVisible();
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$playwright$2f$test__$5b$external$5d$__$28$playwright$2f$test$2c$__esm_import$29$__["expect"])(page.getByText("Publicado: Sí")).toBeVisible();
    });
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/profile/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d431e32a._.js.map