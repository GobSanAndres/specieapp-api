const routes = [
    {
        path: "/v1/api/questionary",
        route: require("../routes/QuestionaryRoutes")
    },
    {
        path: "/v1/api/user",
        route: require("../routes/UserRoutes")
    },
    {
        path: "/v1/api/auth",
        route: require("../routes/AuthRoutes")
    },
    {
        path: "/v1/api/rol",
        route: require("../routes/RolRoutes")
    },
    {
        path: "/v1/api/website",
        route: require("../routes/WebSitesRoutes")
    }
];

module.exports = {
    routes
}