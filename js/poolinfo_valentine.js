//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["155"];
var serv5 = ["002", "008", "059", "060", "062", "065", "075", "076", "097", "099", "113", "119", "144"];
var pickUpServ4 = [];
var serv4 = ["003", "005", "010", "014", "018", "029", "030", "041", "046", "058", "066", "067", "074", "078", "082", "100", "116", "120", "146", "147"];
var pickUpServ3 = [];
var serv3 = ["015", "023", "026", "027", "031", "042", "056", "110", "124", "148"];

var pickUpCft5 = ["421"];
var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188", "263", "400"];
var pickUpCft4 = ["423"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186", "264", "401"];
var pickUpCft3 = ["425"];
var craft3 = ["089", "090", "091", "092", "094", "243", "244", "245", "246", "247", "265", "331", "332", "333", "402", "418", "419", "420"];


var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;

resetUpRate();
resetDropRate();
// populate pools
resetPools();