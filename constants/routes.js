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
    },
    {
        path: "/v1/api/webpage",
        route: require("../routes/WebPageRoutes")
    },
    {
        path: "/v1/api/banner",
        route: require("../routes/BannerRoutes")
    },
    {
        path: "/v1/api/item-banner",
        route: require("../routes/ItemBannerRoutes")
    },
    {
        path: "/v1/api/public",
        route: require("../routes/PublicWebRoutes")
    },
    {
        path: "/v1/api/menu",
        route: require("../routes/MenuRoutes")
    }
];

module.exports = {
    routes
}