(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/torneo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TournamentsPage = ()=>{
    _s();
    const [tournaments, setTournaments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Cargar torneos desde localStorage al montar el componente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TournamentsPage.useEffect": ()=>{
            const storedTournaments = localStorage.getItem("tournaments");
            if (storedTournaments) {
                setTournaments(JSON.parse(storedTournaments));
            }
        }
    }["TournamentsPage.useEffect"], []);
    // Guardar los torneos en localStorage
    const saveTournaments = (tournaments)=>{
        localStorage.setItem("tournaments", JSON.stringify(tournaments));
    };
    const handleCreateTournament = (data)=>{
        const newTournaments = [
            ...tournaments,
            data
        ];
        setTournaments(newTournaments);
        saveTournaments(newTournaments); // Guardar en localStorage
    };
};
_s(TournamentsPage, "FZcpO8zl4cj1I0i2hFJEGqdG+J0=");
_c = TournamentsPage;
const __TURBOPACK__default__export__ = TournamentsPage;
var _c;
__turbopack_context__.k.register(_c, "TournamentsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_torneo_page_tsx_c616aaeb._.js.map