var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var connection = require("../config/connection.js");

var burgers = connection.define("burgers",{
    burger_name: {
        type: Sequelize.STRING
    },
    devour: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
  });

burgers.sync();

/*var burgers = {
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
}; */

 module.exports = burgers;