import RC=require("types-ui");
import teams=require("./teams")
RC.register(teams);
var bnd=RC.render(document.getElementById("example"),teams.types.Team,{name:"Pavel",lastName:"Petrochenko"},{})
