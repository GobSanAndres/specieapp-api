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
    },
    {
        path: "/v1/api/species",
        route: require("../routes/SpeciesRoutes")
    },
    {
        path: "/v1/api/fishing-art",
        route: require("../routes/FishingArtRoutes")
    },
    {
        path: "/v1/api/fishing-method",
        route: require("../routes/FishingMethodRoutes")
    },
    {
        path: "/v1/api/propulsion-method",
        route: require("../routes/PropulsionMethodRoutes")
    },
    {
        path: "/v1/api/fishing-area",
        route: require("../routes/FishingAreaRoutes")
    },
    {
        path: "/v1/api/boat",
        route: require("../routes/BoatRoutes")
    },
    {
        path: "/v1/api/measurement",
        route: require("../routes/MeasurementRoutes")
    },
    {
        path: "/v1/api/activitie",
        route: require("../routes/ActivitiesRoutes")
    }
];

module.exports = {
    routes
}