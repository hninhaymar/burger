var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
      orm.selectALL("burgers", function(res) {
        cb(res);
      });
    },
    insert : function(cols,vals,cb) {
        orm.insertOne("burgers",cols, vals, function(res) {
            cb(res);
        });
    },
    update : function(id,devoured,cb){
        orm.updateOne("burgers","devour",devoured, "id",id,function(res) {
            cb(res);
        });
    }
};

 module.exports = burgers;