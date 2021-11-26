const { response, request } = require("express");

const PubcliWeb = require("../models/WebPageModel");
const Site = require("../models/WebSiteModel");

const Banner = require("../models/BannerModel");
const ItemBanner = require("../models/ItemBannerModel");

const { getPricipalRegister } = require("../utils/transversalService");

const getSitesWeb = (req = request, res = response) => {
    getPricipalRegister(Site, PubcliWeb, req, res, "idSite");
}

module.exports = {
    getSitesWeb
}








