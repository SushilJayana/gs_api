const member = require("./r_member")
const package = require("./r_package")
const verify = require("../jwt_token/jwt/verifyToken")

module.exports = (app) => {

    app.get(process.env.API_URL_PREFIX + "/member", member.getAllMember);
    app.get(process.env.API_URL_PREFIX + "/member/:id", member.getMemberByID);
    app.post(process.env.API_URL_PREFIX + "/member/add", member.addMember);
    app.put(process.env.API_URL_PREFIX + "/member/update/:id", member.updateMember);
    app.delete(process.env.API_URL_PREFIX + "/member/remove/:id", member.deleteMember);

    app.get(process.env.API_URL_PREFIX + "/package", package.getAllPackage);
    app.get(process.env.API_URL_PREFIX + "/package/:id", package.getPackageById);
    app.post(process.env.API_URL_PREFIX + "/package/add", package.addPackage);
}

