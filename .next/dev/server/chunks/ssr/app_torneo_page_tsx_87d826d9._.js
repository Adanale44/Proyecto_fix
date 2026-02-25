module.exports = [
"[project]/app/torneo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const TournamentsPage = ()=>{
    const [tournaments, setTournaments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Cargar torneos desde localStorage al montar el componente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTournaments = localStorage.getItem("tournaments");
        if (storedTournaments) {
            setTournaments(JSON.parse(storedTournaments));
        }
    }, []);
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
const __TURBOPACK__default__export__ = TournamentsPage;
}),
];

//# sourceMappingURL=app_torneo_page_tsx_87d826d9._.js.map