//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#910---------------
//F:\Internet\_Websites\saunders automotive\site\saunders-menu.awm
var awmMenuName='saunders-menu';
var awmLibraryBuild=910;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata/saunders-menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+(awmMenuPath+awmLibraryPath).replace(/\/$/,"")+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='border-top.png';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='QNWOZRXAYEXWYOVGGYFQQV';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=[];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,0,'#FFFFFF',n,n,'italic 20px Times New Roman, Times, serif',n,'none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#FFFFFF',n,n,'italic 20px Times New Roman, Times, serif','underline','none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#FFFFFF',n,n,'italic 20px Times New Roman, Times, serif',n,'none','0','#000000','3px 8px 3px 8',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,5,10,10,0,1,0,1,0,1,n,n,100,2,0,100,-50,100,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1,n,n,'',n,0,[]);
it=s0.addItemWithImages(1,2,3,"contact",n,n,"",n,n,n,3,3,3,n,n,n,"contact.htm",n,n,n,"contact.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0,n);
it=s0.addItem(1,2,3,"find us",n,n,"","http://goo.gl/maps/TXfPE",n,n,n,"http://goo.gl/maps/TXfPE","new",0,0,2,0,0,1,n);
it=s0.addItem(1,2,3,"facebook",n,n,"","https://www.facebook.com/pages/Saunders-Automotive-and-Trailer-Center/424625144287545",n,n,n,"https://www.facebook.com/pages/Saunders-Automotive-and-Trailer-Center/424625144287545","new",0,0,2,0,0,2,n);
it=s0.addItem(1,2,3,"home",n,n,"","index.htm",n,n,n,"index.htm",n,0,0,2,0,0,3,n);
s0.pm.buildMenu();
}}