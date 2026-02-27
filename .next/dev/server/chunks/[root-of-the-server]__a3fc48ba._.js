module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/lib/pb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pocketbase/dist/pocketbase.es.mjs [app-route] (ecmascript)");
;
const pb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pocketbase$2f$dist$2f$pocketbase$2e$es$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]("http://127.0.0.1:8090");
const __TURBOPACK__default__export__ = pb;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/crearTorneo/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const data = await req.json();
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "No autorizado"
            }, {
                status: 401
            });
        }
        const token = authHeader.replace("Bearer ", "");
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.clear();
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.save(token, null);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection("users").authRefresh();
        console.log("Usuario actual:", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.model);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.isValid || !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.model) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Token inválido"
            }, {
                status: 401
            });
        }
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection("tournaments").create({
            name: data.name,
            category: data.category,
            description: data.description,
            rules: data.rules,
            limit: Number(data.limit),
            startDate: data.startDate,
            endDate: data.endDate,
            creator: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].authStore.model.id,
            status: "abierto"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            record
        });
    } catch (err) {
        if (err?.response?.data?.name?.code === "validation_not_unique") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Ya existe un torneo con ese nombre"
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: err?.message || "Error del servidor"
        }, {
            status: err.status || 400
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a3fc48ba._.js.map