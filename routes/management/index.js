const member = require("./r_member")

module.exports = (app) => {

    app.get("/member", member.getAllMember);
    app.get("/member/:id", member.getMemberByID);
    app.post("/member/add", member.addMember);
    app.put("/member/update/:id", member.updateMember);
    app.delete("/member/remove/:id", member.deleteMember);


}

