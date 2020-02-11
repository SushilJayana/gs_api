const member = require("./r_member")
const package = require("./r_package")
const packageType = require("./r_package_type")

module.exports = (app) => {

    app.get("/api/gs/member", member.getAllMember);
    app.get("/api/gs/member/:id", member.getMemberByID);
    app.post("/api/gs/member/add", member.addMember);
    app.put("/api/gs/member/update/:id", member.updateMember);
    app.delete("/api/gs/member/remove/:id", member.deleteMember);

    app.get("/api/gs/package", package.getAllPackage);
    app.get("/api/gs/package/:id", package.getPackageById);
    app.post("/api/gs/package/add", package.addPackage);

    app.get("/api/gs/package_type", packageType.getAllPackageType);
    app.get("/api/gs/package_type/:id", packageType.getPackageTypeById);
    app.post("/api/gs/package_type/add", packageType.addPackageType);

}

