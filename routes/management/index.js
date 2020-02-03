const member = require("./r_member")
const package = require("./r_package")
const packageType = require("./r_package_type")

module.exports = (app) => {

    app.get("/member", member.getAllMember);
    app.get("/member/:id", member.getMemberByID);
    app.post("/member/add", member.addMember);
    app.put("/member/update/:id", member.updateMember);
    app.delete("/member/remove/:id", member.deleteMember);

    app.get("/package", package.getAllPackage);
    app.get("/package/:id", package.getPackageById);
    app.post("/package/add", package.addPackage);

    app.get("/package_type", packageType.getAllPackageType);
    app.get("/package_type/:id", packageType.getPackageTypeById);
    app.post("/package_type/add", packageType.addPackageType);

}

