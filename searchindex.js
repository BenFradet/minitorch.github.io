Search.setIndex({docnames:["backpropagate","broadcasting","chainrule","contributing","convolution","cuda","derivative","dropout","index","install","matrixmult","mlprimer","module0","module1","module2","module3","module4","modules","parallel","pooling","property_testing","scalar","setup","softmax","tensor","tensordata","tensorops","training","visualization"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["backpropagate.rst","broadcasting.rst","chainrule.rst","contributing.rst","convolution.rst","cuda.rst","derivative.rst","dropout.rst","index.rst","install.rst","matrixmult.rst","mlprimer.rst","module0.rst","module1.rst","module2.rst","module3.rst","module4.rst","modules.rst","parallel.rst","pooling.rst","property_testing.rst","scalar.rst","setup.rst","softmax.rst","tensor.rst","tensordata.rst","tensorops.rst","training.rst","visualization.rst"],objects:{"minitorch.FunctionBase":{chain_rule:[13,1,1,""]},"minitorch.Module":{_modules:[17,2,1,""],_parameters:[17,2,1,""],eval:[12,1,1,""],named_parameters:[12,1,1,""],parameters:[12,1,1,""],train:[12,1,1,""],training:[17,2,1,""]},"minitorch.Scalar":{__add__:[13,1,1,""],__gt__:[13,1,1,""],__lt__:[13,1,1,""],__neg__:[13,1,1,""],__sub__:[13,1,1,""],data:[21,2,1,""],exp:[13,1,1,""],log:[13,1,1,""],relu:[13,1,1,""],sigmoid:[13,1,1,""]},"minitorch.TensorData":{permute:[14,1,1,""]},"minitorch.TensorFunctions.EQ":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.Exp":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.LT":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.Log":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.Mul":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.Permute":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.ReLU":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.TensorFunctions.Sigmoid":{backward:[14,1,1,""],forward:[14,1,1,""]},"minitorch.Variable":{derivative:[21,2,1,""],grad:[21,2,1,""],history:[21,2,1,""],name:[21,2,1,""]},"minitorch.cuda_ops":{tensor_map:[15,1,1,""],tensor_matrix_multiply:[15,1,1,""],tensor_reduce:[15,1,1,""],tensor_zip:[15,1,1,""]},"minitorch.fast_ops":{tensor_map:[15,1,1,""],tensor_matrix_multiply:[15,1,1,""],tensor_reduce:[15,1,1,""],tensor_zip:[15,1,1,""]},"minitorch.operators":{add:[12,1,1,""],addLists:[12,1,1,""],eq:[12,1,1,""],id:[12,1,1,""],inv:[12,1,1,""],inv_back:[12,1,1,""],log_back:[12,1,1,""],lt:[12,1,1,""],map:[18,3,0,"-"],max:[12,1,1,""],mul:[12,1,1,""],neg:[12,1,1,""],negList:[12,1,1,""],prod:[12,1,1,""],reduce:[12,1,1,""],relu:[12,1,1,""],relu_back:[12,1,1,""],sigmoid:[12,1,1,""],sum:[12,1,1,""],zipWith:[12,1,1,""]},"minitorch.scalar":{central_difference:[13,1,1,""]},"minitorch.scalar.EQ":{forward:[13,1,1,""]},"minitorch.scalar.Exp":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.Inv":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.LT":{forward:[13,1,1,""]},"minitorch.scalar.Mul":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.Neg":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.ReLU":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.ScalarFunction":{backward:[13,1,1,""],forward:[13,1,1,""]},"minitorch.scalar.Sigmoid":{backward:[13,1,1,""],forward:[13,1,1,""]},minitorch:{FunctionBase:[21,0,1,""],Module:[17,0,1,""],Parameter:[17,0,1,""],Scalar:[21,0,1,""],ScalarFunction:[21,0,1,""],Variable:[21,0,1,""],avgpool2d:[16,1,1,""],backpropagate:[13,1,1,""],broadcast_index:[14,1,1,""],dropout:[16,1,1,""],index_to_position:[14,1,1,""],logsoftmax:[16,1,1,""],max:[16,1,1,""],maxpool2d:[16,1,1,""],shape_broadcast:[14,1,1,""],softmax:[16,1,1,""],tensor_conv1d:[16,1,1,""],tensor_conv2d:[16,1,1,""],tensor_map:[14,1,1,""],tensor_reduce:[14,1,1,""],tensor_zip:[14,1,1,""],tile:[16,1,1,""],to_index:[14,1,1,""],topological_sort:[13,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:function","2":"py:attribute","3":"py:module"},terms:{"098":11,"0_1":11,"0_2":11,"100":[11,15],"10000":20,"10x":15,"1_1":11,"1_2":11,"8501":28,"abstract":17,"break":26,"case":[1,4,11,14,19,20,23,26],"catch":20,"class":[2,9,11,12,13,14,17,21,23],"final":[0,1,4,8,11,13,15,16,25,26,28],"float":[12,13,14,15,16,20,21],"function":[0,2,3,4,5,6,10,11,13,14,15,16,17,18,20,23,24,25,26,28],"import":[1,4,5,9,10,15,16,17,18,19,20,25],"int":[3,13,14,15,16],"long":[2,15,19],"new":[0,2,4,9,11,12,13,14,15,16,18,21,24,25,26],"return":[0,2,3,5,6,11,12,13,14,15,16,17,18,21,23,26],"short":18,"static":21,"super":[17,20,25],"switch":18,"true":[5,14,18],"try":[1,11,16],"while":[0,4,6,20,21,23,28],And:[1,10,11,26],But:[11,20,25],Doing:11,For:[0,1,2,5,6,9,10,11,12,14,15,16,17,18,19,20,21,23,24,25,26],Going:4,IDE:3,Its:[6,13],Not:11,One:[4,11],PTS:13,Such:12,That:20,The:[0,1,2,3,4,5,6,8,9,11,13,14,15,16,17,18,19,21,23,24,25,26,28],Then:[3,8,13,15,25],There:[0,9,10,11,16,17,18,21,28],These:[1,3,10,11,12,15,19,24,26],Use:12,With:15,__add__:13,__gt__:13,__init__:17,__lt__:13,__neg__:13,__sub__:13,_map:18,_modul:17,_paramet:17,a_shap:[14,15],a_storag:[14,15],a_strid:[14,15],abil:21,abilov:8,abl:[3,4,6,11,13,14,15,16,21],about:[1,4,6,8,9,10,17,18,21,23,24,25,26],abov:[0,1,2,4,5,6,11,12,14,15,18,19,21,23,25,26],absolut:[4,11],access:[5,15,17,21,25],account:1,accumul:[0,10],accumulate_deriv:[0,13],accuraci:15,achiev:21,across:4,act:[11,21],activ:[9,13,14,15,16,23],actual:[1,18,20,24],acycl:0,adapt:16,add:[0,1,2,10,12,13,14,15,16,19,20,23,25],added:[1,12,15],adding:[0,1],addit:[2,3,4,11,14,15,25],addition:[16,17,21],addlist:12,address:17,addtimes2:2,advantag:[15,16,18],after:[0,15],again:[1,2,4,10,15,18],aggreg:[0,24],ago:5,agre:17,ahead:12,aim:[11,15],alertl:4,algorithm:13,alia:21,align:[1,26],all:[0,1,3,4,5,6,9,10,11,12,13,14,15,16,17,18,21,23,24,26],allow:[1,4,5,10,11,17,18,19,21,24,25],almost:[11,23,24],alon:18,along:[4,12,19,26],alreadi:[15,24],also:[1,2,3,4,5,9,11,12,13,14,15,18,20,21,23,26,28],alter:[11,13,14],altern:[4,6,10,11,20],alwai:[1,20,21,25],amount:[2,5,25],anaconda:9,analog:4,analysi:28,analyt:15,ancestor:[0,12],anchor:[4,16],ani:[1,3,6,11,12,13,15,17,23,24,25],anim:11,annoi:[0,1,3,10,21],anomoli:4,anoth:[1,4,5,10,11,19,20,23,24,25,26],anton:8,anyth:[2,15,25,26],anywher:4,apart:11,api:8,apli:23,app:[12,13,28],appear:[11,21],appli:[0,1,2,4,6,10,11,12,13,14,15,16,18,19,21,24,26],applic:[0,4],approach:[1,2,4,6,10,11,15,18,20,21,26],appropri:23,approx:6,approxim:[6,13],arbitraci:6,arbitrari:[0,6,13,25],arbitrarili:25,area:11,arg:[3,6,12,13,15,17,18,23],argmax:23,argument:[0,2,6,11,12,13,15,16,21,23,24],around:[14,18,21],arrai:[5,14,15,16,24,25],arrow:[0,10],ask:[1,12,14,15],aspect:[11,13,15,17,20,25],assert:[15,17,20],assign:[1,3,9,11,12,13,14,15,16,17,20,24],associ:[5,15],assum:[0,1,4,5,6,9,11,15,19,23,25,26],astropi:9,attach:16,attempt:12,attribut:21,augment:21,auto:[13,23],autodiff:[14,21,24],autodifferenti:[13,14,21,24,25],automat:[1,2,3,10,11],avail:[5,6,8,12,13,14,15,16],averag:16,avgpool2d:16,avoid:19,awai:17,awar:25,axes:11,axi:26,b_shape:[14,15],b_storag:[14,15],b_stride:[14,15],back:[2,4,11,14,18,21],backend:[14,15],backprop_step:0,backpropag:24,backward:[0,1,4,10,13,14,16,21,24],bad:11,badli:11,base:[1,4,11,14,16,19,23,24],basi:[12,15,17],basic:[11,12,13,14,15,16,18],batch:16,becaus:[1,4,21],becom:[1,11,17,25],been:[5,20],befor:[0,2,12,14,20],begin:[0,2,4,6,10,11,13,14,15,16,17,23],behav:[5,21,24],behavior:[0,20],behind:2,being:[21,26],below:[0,2,4,11,15,17,19,23,25,26],benefit:[6,17,19,20,28],best:[6,11,15,28],better:[11,15,20],between:[11,18,21,23,26],beyond:0,bias:11,big:[15,17],big_index:14,big_shap:14,bigger:[14,15,23,25],billion:11,bin:9,binari:[11,23,24,26],bit:[0,2,4,5,10,11,16,18,21,23,25,26],black:[3,6,21],blank:15,block:[5,20],blockdim:5,blockidx:5,blockspergrid:5,blue:[11,25],board:28,bool:[16,17],both:[1,4,6,15,16,21,24,25,26],bottom:[0,4,11,13,16,25],boundari:11,box:[2,6,21,24],breadth:20,bring:24,broadcast:[10,15],broadcast_index:14,browser:28,bug:[3,15,20,21],build:[8,11,12,13,14,15,16,20],built:[13,14,15,18,24],calcul:[2,4,12,23,24],calculu:[6,10,11,24],call:[0,1,2,5,6,10,13,15,16,17,18,19,20,21,24,25],can:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,28],cannot:[0,5,14,18,21,24],capabl:15,capit:2,captit:21,captur:[4,17],care:[1,2,5,11,15,18],carefulli:[13,14,15],cds:15,cell:[4,26],central:[6,15,28],central_differ:[6,13],certain:19,certainli:20,chain:[0,21,24],chain_rul:13,challeng:[0,11],chang:[1,5,11,12,18,21,23,24,25,26],channel:[4,16],check:[0,3,4,6,9,12,20,28],child:17,choic:[0,23],choos:9,chunk:5,classficiaiton:23,classic:16,classif:[4,11,12,16,19,23],classifi:[11,12,19],clean:3,cleaner:25,clearli:[11,20],clever:[15,20],click:3,clone:[5,9,13,14,15,16],close:[11,21],cnn:16,code:[1,2,3,5,8,9,10,11,12,13,14,15,16,17,18,20,21,23,24,25,28],codebas:[3,15,18,20],codewis:4,colab:[5,15],collect:[12,13,17,21],color:[11,12],column:25,com:[3,8,9,12,13,14,15,16,28],combin:[10,12,15],come:[0,1,2,5,11,24],comfort:12,command:[5,9,15,28],commit:3,common:[10,17,19,23],commonli:[5,10,11],compar:15,comparison:23,compil:18,complet:[0,6,11,12,13,14,15,16],complex:[12,13,16,17,26],complic:[1,4,11,24],compon:17,comput:[0,2,4,5,6,8,10,11,12,13,15,16,21,23,24],concenptu:4,concept:[8,12,25],conda:9,condit:15,config:13,confus:25,connect:23,consequ:0,consid:[0,2,10,11,17,18,24,25],consist:24,constant:[0,1,5,13,16,19,21],construct:[0,15,24,26],consult:[2,12,13],contain:[12,13,17],content:[8,21],context:[2,12,13,15,16],contigu:[19,25],continu:[13,15,16],contrast:25,contribut:[8,12,13,15,16,22],contributor:3,control:11,conv1d:16,conv2d:16,convei:3,conveni:[1,11,25],convent:0,convert:[14,18,21],convolut:19,coordin:11,copi:[1,15,25],core:[12,14,18,25],cornel:8,correct:[0,6,10,11,12,13,14,18,19,20,26,28],correctli:15,correspond:[0,6,11,13,14,15,21,25],cos:6,cost:11,could:[0,1,4,6,15,17,18,21,26,28],count:25,counterpart:24,coupl:11,cours:[8,9],cover:[4,11,13,19,20],coverag:20,cpu:[5,15],creat:[0,1,5,9,10,12,13,14,15,16,17,18,19,21,26],creation:21,critic:[3,4,5,11,16,17,19,20,21,25,28],ctx:[2,13,14,21],cube:25,cubic:5,cuda:[14,16],cuda_conv:16,cuda_op:15,current:[0,3,11,15,17],curri:14,curv:[11,23],custom:10,cutoff:11,cycl:0,d_call:2,d_exp:6,d_f:6,d_out:[2,13],d_output:13,d_relu:6,d_sigmoid:6,d_sin:6,d_times_5:6,data:[11,12,16,17,21,25,28],dataset:[12,13,14,15],deal:26,debug:[3,13,14,15,20,28],decid:[11,16],decis:[11,19],decor:[15,20],decreas:25,dedic:11,deep:[5,8,15,16,17],def:[2,3,5,6,11,14,17,18,20,21],defin:[0,11,17,23],definit:[2,6,18],delet:11,demand:11,demonstr:11,denot:6,depend:[2,9,18],depth:0,derit:2,deriv:[0,2,4,11,21,23,24],descend:[12,17],descent:11,describ:[0,11,12,21],descript:[3,6],design:[8,12,17],detail:[3,4,11,13,14,18,25],detect:4,determin:[5,11,17],devast:20,develop:[6,8,11,14,18,20,28],devic:[5,15],diagnost:15,diagram:[4,10,16,21],dict:17,dictionari:[0,17],did:[11,14],differ:[1,2,4,5,6,11,21,23,24,25,26,28],differenti:[2,13,23],difficult:[11,18],digit:16,dii:8,dim:[16,25,26],dimens:[1,14,15,16,19,24,25,26],dimension:[14,23,25],dimes:19,direct:[0,9,11],direction:0,directli:[2,4,5,10,15,17,19,20,21,24,25,28],directori:[3,9,16,28],disagre:17,disconnect:11,discuss:[1,2,6,11,21,26],distanc:11,distinguish:21,distribut:9,distringuish:2,divid:11,divis:19,doc:[3,9,15,21],docstr:3,docstyl:3,document:[0,12,15],doe:[0,1,2,14,15,16,17,18,19,21,24],doesn:[1,18,20],doing:[3,6,11,13,26],domain:19,domain_calcul:16,don:[1,2,11,26],done:[1,10,15,17,18,21],dot:[4,17],down:[11,26],download:16,draw:21,drop:16,dure:[13,14],each:[0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,28],ealier:11,earlier:[5,18,23],easi:[0,1,3,8,11,12,17,20,25],easier:[2,3,17,20,23],easili:[1,11,24,25],edg:4,edit:9,editor:3,effect:[11,20],effici:[1,4,5,10,11,16,18,20,25,26],either:[5,9,10,23],element:[12,14,18,19,23,24,25,26,28],elimin:[10,26],els:[11,12],empti:1,emul:21,encount:20,end:[0,1,2,6,10,11,16,23],engin:[8,20],enjoi:8,enough:[2,23],ensur:[0,1,12,14,16,18],entir:[4,16,26],enumer:[12,14,26],env:28,enviro:9,environ:[5,9,13,14,15,16],epoch:[14,15],epsilon:[6,13],eqnarrai:[0,2,6,10,11],equal:[12,15,24],equat:11,equival:[1,4,11],error:[3,9,11],etc:[19,20],eval:[12,17],evalu:17,even:[1,3,5,11,15,28],eventu:0,ever:[0,21,24],everi:[0,1,2,4,14,20,23],everyon:17,everyth:[6,9,15,17,24],everywher:23,exactli:[1,5,14,15,17,21],exagger:5,exampl:[2,4,5,6,9,11,12,13,17,18,19,20,21,25,26],example_googl:3,excel:4,except:24,exercis:[0,15],exist:15,exp:[0,6,13,14,23,26],exp_trick_for_log:16,expans:24,expect:[3,20],experi:[3,12,15],explain:11,explan:11,explicitli:2,explict:18,explor:[11,28],exploratori:28,exponenti:23,expos:21,express:[1,13,14],extend:25,extens:[4,5],extern:25,extra:[1,9,19],extract:17,f_prime:2,face:[14,25],fact:[10,15,18,24],fail:[1,3,11,20],fals:16,familiar:[12,13,14,15,16],fanci:25,fantast:20,far:[1,4,11,15,16,23,25],fast:[4,10,15,18,25],fast_conv:16,fast_op:15,faster:[14,15,18],featur:[4,16],feed:4,feel:[13,26],few:12,field:11,figur:28,file:[3,12,13,14,15,16],fill:[14,15,18],filter:13,find:[4,5,6,10,11,12,13,14,15,16,17,24,25],fine:20,finish:15,finite_differ:13,first:[0,1,2,3,4,6,8,9,10,11,12,13,14,15,16,17,18,20,21,23,25],fit:3,fix:[3,5,19,23],flake8:3,flatten:17,flexibl:[11,21],flow:4,fn_map:[14,15],fn_zip:[14,15],focu:[11,21],focus:[11,12,15,25],follow:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,23,24,25,26,28],forget:13,fork:9,form:[3,4,5,6,11,12,17,19,23],format:3,formula:2,forth:[18,25],forward:[0,2,4,10,13,14,16,21,24],found:19,foundat:[12,14],frac:[6,12,16,23],framework:[11,16,20,24],free:[5,6,13],frist:1,from:[0,2,4,6,8,9,10,11,12,13,14,15,16,17,18,20,21,23,24,25,26,28],fuction:18,full:[3,13,15,18,21,26],fulli:[5,11,14,16],functionbas:[13,21],fundament:[15,18,26],funni:15,further:[9,18],furthermor:[15,18],fuse:15,fusion:[4,5,10],futur:12,g_x:[2,24],g_y:[2,24],gain:[11,28],gao:8,gave:15,gener:[6,11,14,18,19,20,21,23,25],geometr:25,get:[0,2,4,6,8,9,11,12,15,16,17,18,19,21,24,25,26],git:[3,5,9,13,14,15,16],github:[3,8,9,12,13,14,15,16,28],github_path:5,give:[0,1,2,3,4,11,17,20,23,25],given:[0,4,6,10,11,14,15,16,20,23,24],glanc:23,global:[5,9,21],goal:[11,26],goe:[4,11,19,23,28],going:[16,18],good:[11,12,18],goodi:28,googl:[3,5,15],gpu:15,grad:[10,21,24],grad_:[10,24],grad_input:4,grad_output:[4,14],gradient:[4,10,11,16,19,23,24],graph:[0,13,14,15,25,28],great:[6,11,18,23],greater:[11,12,23],green:11,grid:[4,5],ground:20,group:[3,14,17,21,26],guard:5,guid:[1,4,9,11,12,13,14,15,16,22],guidelin:[13,15,16],h_1:11,h_2:11,hacki:21,had:[4,24],hand:12,handi:[1,2,11],handl:[0,4,14,16],handwritten:11,hang:5,happen:[11,18],hard:[2,5,15,16,20,21],harder:[4,16],hardwar:[5,15],has:[0,1,2,3,4,5,10,11,12,15,16,18,20,21,23,25,28],have:[0,1,2,3,4,5,6,9,10,11,13,14,15,16,17,18,19,20,21,23,24,25,26],height:[4,16],help:[3,9,10,12,14,15,18,20,28],helper:5,here:[0,1,2,3,5,6,10,11,12,14,15,17,18,21,23,25,26],hidden:[4,13,15,16],hide:3,high:[1,6,11,12,14],higher:[6,9,12,14,15,18,19,24,25,26],highest:23,highli:9,highlight:3,histori:[0,16,21],hold:[13,17,20,24,25],holder:17,home:3,hood:[17,18,21],hopelessli:20,hot:23,hour:20,hover:4,how:[0,2,3,4,5,9,10,11,12,13,14,17,18,20,21,23,24,25,26],howev:[0,1,2,3,5,10,15,16,18,21,23,24,25],html:[3,9,15],http:[3,8,9,11,12,13,14,15,16,18,20,28],huge:15,hundr:17,hypothesi:[12,20],idea:[19,20,21,24],ideal:[6,11,18,19],ident:[4,10,13,14,18],ignor:[9,16,21,23,24],illustr:0,imag:[4,12,13,19,28],imagin:[4,6,20],immedi:6,impact:[1,9,23],implement:[0,2,4,6,8,10,11,12,13,14,15,16,18,19,21,24,25,26],impli:[1,4,26],implicitli:[1,26],importantli:1,imposs:20,imprecis:21,improv:[10,18],imshow:16,in_channel:[4,16],in_shap:[14,15],in_storag:[14,15],in_strid:[14,15],includ:[2,12,15,17,21,28],incorrect:[3,11],increas:25,increment:8,index1:25,index2:25,index3:25,index:[3,5,8,10,25],index_to_posit:14,indexingerror:14,indic:[6,10,11,17,26],individu:[2,11,18,19,24,26],industri:16,ineffici:[0,1,14,20],inform:[2,5,6,13,17,19,21],infrastructur:[11,12,16,17,18],initi:[0,17],input:[0,1,2,4,6,10,11,12,13,16,18,19,20,21,23,25,26],input_shap:16,input_strid:16,insid:1,instal:[5,13,14,15,16,22],instanc:[0,5,11,13,18,19,20,25,26],instanti:21,instead:[1,4,12,15,18,20,21,23,25],instroduc:21,instruct:[5,9,15],integ:20,interact:18,intercept:11,interest:[0,1,2,5,12,17,20],interfac:13,intermedi:[0,1,10,28],intern:[8,11,13,16,17,18,21,25],interpret:1,intract:5,introduc:[1,12,14,21],introduct:11,introductori:12,intuit:[1,11,23,26,28],intuitivi:4,inv:[12,13],inv_back:12,invers:14,is_const:13,issu:[0,1,3,10,21,23],iter:18,its:[0,2,3,4,5,6,11,12,13,16,17,21,23,24,25],itself:[0,2,3,15,18,25],jit:[5,15],just:[0,1,2,4,5,6,10,11,17,20,21,23,24,25,26,28],k_height:16,k_width:16,keep:[0,3,25],kei:[0,4,6,13,15,17,20,23,24,26],kept:[15,25],kernel:[4,15,16],kernel_height:16,kernel_width:16,knob:11,know:[1,5,6,10,11,18,24,26],knowledg:9,known:[3,5,6,11,18,21,23],label:[11,16],lack:0,lagrang:6,lai:3,land:11,languag:15,larg:[11,15,16,23],larger:[10,14,19],last:[0,9,14,15],later:[11,19],latest:[3,15],launch:[5,15],launcher:5,layer:[4,15,19],lazi:26,ldot:[12,13,24],lead:[11,15],leaf:[0,13],learn:[4,5,6,8,11,15,16,17,19,20,21,24],least:15,leav:13,led:21,left:[0,1,2,4,11,15,16,25],len:18,lenet:16,length:[4,5,19,25],leq:23,less:[5,12],let:[0,1,6,9,10,11,17,18,20,21,24,25,26],letter:2,level:[1,12,14,18,19],librari:[5,8,9,11,14,16,18,20,21,25,26,28],life:17,like:[0,1,2,5,10,11,14,15,16,18,19,20,21,23,25,26],lim_:6,limit:2,line:[6,9,11,15],linear:[4,11,12,13,14],linear_equ:11,linearli:11,link:3,lint:3,linter:3,list:[0,3,12,13,14,16,18,20,28],liter:21,literatur:19,littl:[5,11,21],llvmlite:9,load_train:16,local:[2,3,4,5,11,13,19],localhost:28,lockstep:5,log:[0,3,12,13,14,16,23,26],log_back:12,logsoftmax:[16,23],logsumexp:16,longer:24,look:[0,10,11,17,18,20,21,25,26,28],loop:[0,14,15,18,19,26],loss:[16,23],lot:[5,10,24,28],low:[11,14,18],low_level:15,lower:11,ls1:12,ls2:12,luckili:[5,10,18],mac:16,machin:[6,8,11,17,20,24],machineri:24,magic:28,magnitud:10,mai:[0,2,10,11,12,13,14,15,16,23],main:[4,5,11,13,15,17,21,24,28],maintain:28,major:[4,18],make:[0,1,3,4,5,9,10,11,12,13,14,15,17,18,19,20,21,23,25,26],make_graph:21,make_linear:11,make_model:11,maker:[14,15,16],manag:[17,25],mani:[1,2,3,4,5,11,14,15,18,20,23],manipul:[5,12,17,19,21,25],manner:11,manual:2,map2:[12,14,15],map:[5,12,14,15,18,24,25,26],map_:[12,18],mark:[12,13,14,15,16],master:3,math:[1,4,6,18,24],mathemat:[2,5,11,12,13,18,20,21,26],mathmat:2,matmul:[10,15],matplotlib:16,matric:[4,24],matrix1:1,matrix:[1,4,25],matrix_multipli:15,matter:[15,20,25],max:[12,16,19,23],maxpool2d:16,mean:[0,6,10,11,17,18,19,24,26],meant:20,mechan:5,member:17,memori:[1,5,10,13],mention:[5,25],menu:5,method:[2,6,11,13,14,15,20,21],middl:[11,20],might:[2,4,5,11,12,15,16,19,20],million:17,mimic:3,mini:[4,13],minim:[8,11],minist:16,minitorch:[0,2,3,4,6,8,9,10,11,12,13,14,15,16,17,20,21,23,25],minor:21,minut:3,mismatch:1,miss:[14,15],mistach:1,mix:18,mkdir:9,mndata:16,mnist:16,mnist_get_data:16,mode:[12,17],model1:11,model2:11,model:[4,5,6,12,13,14,15,16,17,20,23,28],modern:11,modifi:[13,25],modul:[5,6,8,9,10,11,13,14,15,16,19,21,23,24,26,28],module1:17,module2:17,module3:17,module4:17,more:[1,2,3,4,5,10,11,12,13,14,15,17,21,25,26,28],most:[0,3,5,11,13,15,16,20,24],motiv:[6,11],move:[11,13,14,15,16,18,24,25],much:[11,15,18,24,25,26],mul:[2,6,12,13,14,21,24,26],multi:25,multidimension:[14,24],multipl:[1,2,4,11],multipli:[2,4,10,15,21],multivari:24,must:[0,17,18,21,24],my_func:5,mymodul:17,naiv:[15,20],name:[2,3,4,12,14,17,19,21,24,25],named_paramet:[12,17],napoleon:3,natur:[23,25],nearli:[4,11],neat:[4,18,21],necessari:[0,11,20],need:[0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,19,21,23,24,25,26,28],neg:[11,12,13,18,23,26],neg_map:18,negat:12,neglist:12,neighbor:[4,19],neighborhood:5,neither:25,network:[4,12,13,14,17,19],neural:[4,12,13,16,17,19],neural_network:12,never:[1,21],new_height:16,new_width:16,newli:21,next:[0,20,24,25,26,28],nice:[3,5,20,23,28],njit:[15,18],nlp:[4,19],node:[0,12,13],nois:16,non:[0,13,17,18,23,25],none:[0,2,14,15,17,18,21],normal:21,notabl:25,notat:[1,2,6,11,12,13,17,21,24,25],note:[0,1,2,4,5,11,12,18,25,26],notebook:5,noth:[15,16,17,28],notori:20,now:[1,2,4,5,11,13,14,15,16,17,21,24,25,26],nowadai:11,numba:[5,10,15,16],number:[1,11,13,14,20,21,25,28],numer:[6,11,18,21,23],numpi:[14,16],nvidia:5,nyu:15,obei:12,object:[13,14,15,17,21,24],observ:[13,14,28],off:[1,2,14],often:[11,17,28],okai:14,onc:[0,5,9,10,11,14,19,21],one:[0,1,2,4,6,11,12,13,15,17,18,19,21,23,24,25,26],ongo:10,onli:[0,1,4,9,11,12,13,15,17,19,21,23,24,25,26],onlin:9,open:[3,9,28],oper:[0,1,4,5,6,13,16,17,18,19,20,21,23,24,25],opposit:4,optim:[2,3,10,15],option:10,order:[0,4,6,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26],order_funct:[12,18],ordin:14,org:[3,9,11,12,13,15,16,18,20],organ:[3,12,17,28],orient:20,origin:[0,3,4,11,19,26],other:[3,4,5,6,11,13,15,17,18,19,23,24,25,26],othermodul:17,otherwis:11,ouput:4,our:[0,1,2,3,4,10,11,15,16,18,19,21,23,25,26,28],out2:21,out:[0,2,3,4,5,10,11,13,14,15,16,17,18,21,24,25,28],out_channel:[4,16],out_index:14,out_shap:[14,15,16],out_siz:[14,15,16],out_strid:[14,15,16],outer:18,output:[0,1,2,4,10,13,15,16,18,21,23,26,28],outsid:[5,12],over:[4,10,11,12,14,15,16,17,18,19,23,25,26],overhead:[14,18],overlai:11,overrid:13,overridden:13,own:[5,9],packag:9,pad:[16,19],page:8,pair:[12,13,16,20,24,25,26],paradigm:17,paralel:18,parallel:[5,26],parallel_test:15,param:[11,18],paramet:[0,4,12,13,14,15,16,17],parameter1:17,parameter:11,part:[2,3,4,5,10,19],particular:[3,10,15,16],particularli:[1,10,14,20],pass:[0,1,2,3,10,12,13,14,15,16,17,18,21],past:[8,10,21],path:[17,21],pattern:4,peek:12,per:[14,15],perform:[12,16],perhap:1,permut:[4,14,25],perspect:2,perturb:23,pick:[20,23],pip:[5,9,13,14,15,16],pipelin:4,place:[12,24,28],plai:24,playground:12,pleas:[9,12,13],plot:[11,28],plot_funct:[2,6],plt:16,point:[0,11,12,25],popular:[17,20],port:28,posit:[1,4,5,11,14,16,23,24,25,26],possibl:[4,5,11,21,23],postion:25,power:25,practic:[0,4,12,19,23],practition:20,prang:[15,18],pratic:23,precis:21,predefin:20,predict:11,prefer:25,preliminari:13,pretend:1,pretti:21,prevent:4,previou:[4,13,14,15,16,19,21,23,25],previous:14,primarili:4,primer:8,print:[3,4,12],printout:16,probabl:[6,15,16],problem:[2,4,10,11,14,23,28],proce:[0,8],procedur:[11,19,21,26],process:[0,1,2,3,4,11,13,20,21,26],prod:12,produc:[0,4,10,11,12,14,15,16,18,19,21],product:[4,11,12,24],program:[6,12,15,17],programm:11,progress:[3,28],project:[3,8,12,13,14,15,16,20],promis:21,prone:21,propag:[0,4,13,17],properti:[6,11,12,16,19,25],proprietari:5,protocol:1,prove:[6,15,28],provid:[2,5,6,12,15,17,20,21,25],proxi:21,pseudocod:0,psf:3,pull:[0,3,11,13,14,15,16],pure:[1,8],push:3,put:11,pydata:15,pyplot:16,pytest:[3,5,9],python3:9,python:[2,3,5,6,8,9,10,13,14,15,16,17,18,20,21],pytorch:[0,15],question:1,queue:0,quick:20,quickcheck:20,quickli:20,quit:[0,11,13,25],rais:14,rand:4,random:[16,20],randomli:[0,11,20],randoom:16,rang:[11,18,20],rate:[13,15,16],raw:18,reach:0,read:[2,4,8,12,13,14,15,16,18,21,25],readi:14,readm:[12,13,14,15,16],readthedoc:[3,20],real:[3,15,16],realli:[5,15,20,25],reason:4,reassur:20,recal:[1,6,23],receiv:19,recogn:4,recognit:[4,16,19],recommand:9,recommend:[0,3,4,5,9,11,12,16],record:[14,15,21],rectangl:4,rectifi:11,rectifier_:12,recurs:17,red:[0,11],reduc:[4,10,11,12,14,15,18,19,24,26],reduce_dim:[14,15],reduce_s:15,reduce_shap:15,reduct:[12,14,15,16,19,23,24],refer:[2,6,11,15,17,25],reformat:3,refresh:13,region:[4,11,17,19],regular:21,reimplement:[21,26],rel:5,reli:[14,23],relu:[4,6,11,12,13,14,23],relu_back:12,rememb:[11,13,14,15,16,21],remov:[13,14,19,25],reorder:25,repeat:[11,14],replac:21,replic:1,repo:[9,12,13,14,15,16],report:[14,15,16],repres:[0,5,21,26],represent:[4,6,19],request:[3,5],requir:[1,2,3,5,8,9,10,11,12,13,14,15,16,18,21,23,24],requires_grad:14,research:17,reshap:[11,16],resourc:8,respect:[2,11,13,21],rest:9,restrict:5,result:[0,1,4,13,14,15,18,19,23,26],reus:[10,13],revers:[0,4,10,16],review:[2,11,13,14,15],rich:11,right:[0,4,8,11,13,16,25],rightarrow:6,rightmost:0,rigid:21,robot:5,rotat:11,roughli:[4,11],row:25,rtype:18,rule:[0,1,6,14,24],run:[2,3,5,8,9,12,13,14,15,16,18,20,28],run_fast_tensor:15,run_mnist_multiclass:16,run_scalar:[13,14],run_tensor:[14,15],run_torch:12,rush:8,s_1:25,s_2:25,sai:[11,19,20,21,25],same:[0,1,4,5,14,15,16,18,20,25,26],sampl:11,sandbox:[12,13,28],sasha:8,save:[2,4,10,13,14],save_for_backward:[2,10],saved_valu:2,saw:[14,23],scalar:[1,14,16,24,25,26],scalarfunct:[0,2,13,14,21,24],scale:[4,5,16],scari:24,school:6,scope:[0,12],score:[11,23],script:[13,14,15,16],search:[0,8],second:[1,2,9,14,15,19,20,21,25],section:[0,2,11,15],see:[3,6,9,10,11,12,13,14,16,17,18,20,21,23,24,28],seem:[11,20,23],seen:[2,6,15,18],segment:[4,11],select:[20,23],self:[12,13,14,17],semi:11,send:[24,28],sens:[4,6,14],sentenc:[4,19],separ:[4,11,25],seper:4,sequenc:[2,4,19],sequenti:[0,19],seri:[0,3,12],server:[3,5,12],set:[3,4,5,6,9,11,12,16,18,20,28],sete:9,setup:[5,8,11,12,14,15,16,17],sever:[0,3,5,9,12],shape1:14,shape2:14,shape:[1,4,5,11,14,15,16,17,19,24,26],shape_broadcast:14,share:[5,17],shorter:20,should:[0,2,3,9,11,12,13,14,15,16,17,21,23,24],shouldn:18,show:[0,2,3,6,11,13,15,16],show_express:14,shown:[4,9,11,25],side:[1,4,6,11,17],sigmoid:[6,11,12,13,14],sigmoid_funct:12,signal:23,silli:20,similar:[2,4,5,11,12,14,17,24,26],similarli:21,simpl:[2,4,6,8,11,12,13,18,21,25,26],simpler:4,simplest:[1,11,17],simpli:[10,19,24,26],simplic:[11,17,24],simplifi:15,simultan:[4,5,6,14],sin:6,sinc:[0,11,16,18,20,21,25],singl:[3,5,10,11,12,14,19,21,23,26],size:[1,5,10,12,14,15,16,19,25,26],skeleton:14,skip:[10,12,15,16],slide:4,slightli:5,slope:[6,11],slow:[6,14,15,18,20,26],small:[5,6,11,13,18,19,23],smaller:[14,19],smooth:[11,23],sneak:12,snippet:20,soft:23,softer:23,softwar:[16,20],solv:14,some:[0,1,5,6,11,12,14,15,16,20,24,25,28],someth:[11,13,18],sometim:2,somewhat:[20,24],sort:4,sound:[4,20],sourc:[3,9],space:11,span:17,speak:23,special:[5,10,15,17,20,25,26],specif:[2,3,11,14,17,20],specifi:[11,26],speech:[4,19],speed:[10,15,18,20],speedup:15,spend:10,sphinxcontrib:3,spi:17,split:[11,12,15],spy:17,squar:[2,5,25],squint:26,srush_nlp:8,stabil:12,stabl:3,stack:17,stage:[4,11],stai:10,stand:11,standard:[1,3,4,9,15,21,25],start:[0,2,6,8,9,12,13,14,18,20,26,28],starter:[12,13,14,15,16],startup:18,state:[5,16,28],statement:3,staticmethod:[2,21],step:[0,4,9,10,11,18,21,23,25],stick:[4,24],still:[2,19,21],storag:[2,14,15,16,17,25],store:[0,5,11,12,14,17,21,25],straight:11,straightforward:[5,21],strang:11,strategi:20,streamlim:28,streamlit:[12,13,14,28],stride:[1,14,15,16,19],string:[20,21],strive:15,strong:11,structur:[3,5,12,17,18,26],stuck:28,student_assignment1_url:13,student_assignment2_url:14,student_assignment3_url:15,student_assignment4_url:16,student_assignment_nam:[9,13,14,15,16],student_assignment_url:9,studi:13,style:[1,11,12,19,26],sub:[17,21,26],sub_modul:17,subclass:[14,17,21],subject:12,submodul:17,subscript:6,subset:4,subtl:10,success:13,suggest:[9,12],suit:3,suitabl:15,sum:[0,10,12,15,16,19,24,26],sum_i:[16,23],summari:23,supervis:11,support:[11,14],suppos:[20,24],sure:[0,1,9,12,13,14,15,16],surprisingli:21,svg:21,symbol:[6,21],syntax:21,system:[4,8,9,11,12,13,14,16,17,20,28],take:[1,2,3,4,5,11,12,15,16,18,24],talk:5,tangent:6,tangibl:21,task0_0:3,task0_1:12,task0_2:12,task1_1:13,task1_2:13,task1_3:13,task1_4:13,task2_1:14,task2_2:14,task2_3:14,task3_1:15,task3_2:15,task3_3:15,task3_4:15,task4_1:16,task4_2:16,task4_3:16,task4_4:16,task:[1,3,11],tasks0_3:12,tasks0_4:12,teach:8,tech:8,technic:24,techniqu:[4,13,18],technolog:12,tell:[0,2,5,6,9,10,11,21,26],templat:9,tensor1:[1,24],tensor2:1,tensor:[1,4,10,15,16,19,21,23,26],tensor_a:26,tensor_b:26,tensor_conv1d:16,tensor_conv2d:16,tensor_data:14,tensor_funct:[14,15],tensor_map:[14,15],tensor_matrix_multipli:15,tensor_op:[14,15],tensor_reduc:[14,15],tensor_zip:[14,15],tensordata:[14,25],tensorflow:12,tensorfunct:[14,24],term:[13,14,17],termin:9,terminolog:[5,12,24],ternsor:26,test3_3:5,test:[5,6,8,13,14,15,16,17,28],test_add:20,test_add_bas:20,test_add_na:20,test_nn:16,test_oper:[3,12],test_sum:3,text:[0,11,23],textbf:23,textbook:11,than:[2,5,10,11,12,14,15,16,23,26],thei:[0,6,11,12,14,15,17,19,20,21,25,26],thel:19,them:[2,9,10,11,12,13,14,15,16,17,21,28],therefor:[1,2,4,23,24],thereforc:23,thi:[0,1,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,28],thing:[2,4,9,14,15,16,17,18,28],think:[2,4,5,10,11,17,21,23,24,25,26,28],third:[4,21],those:[11,12,16],though:[5,11,15],thought:23,thread:5,threadidx:5,threadsperblock:5,three:[4,11,12,15,16,17,23],through:[0,4,5,8,9,10,11,12,13,14,15,24],throughout:[3,9,10,18,28],thrown:3,thu:[1,3,24],ties:23,tile:16,time:[0,1,2,5,6,10,11,12,13,14,15,18,19,21,24,26],times_5:6,timesf:[2,21],tini:5,to_index:14,togeth:[5,10,11,14,17,19,21,26],ton:11,tool:[12,13,14],top:[0,4,11,13,14,16,25],topolog:13,topological_sort:[0,13],torch:[4,8,12,14,16],total:11,touch:26,trace:10,track:[0,2,3,13,24,25],tradeoff:21,trail:21,train:[6,11,12,17,20,23,28],trainer:[14,15],transform:[4,11,21,24,26],transpos:[10,25],transposit:14,treat:4,tree:[12,17],trick:[2,3,21,23,25],tricki:13,trigger:4,tupl:[14,25],turn:[11,14,24],tutori:[4,9,12,14,15,18],twice:1,two:[0,1,2,4,6,10,11,12,14,15,18,19,20,21,24,26],txt:[5,9],type:[0,2,3,11,12,13,14,15,16,17,18,19,21,25,26],typic:25,unari:26,under:[6,15,17,18,21],underli:[2,4,8,25,28],understand:[2,4,5,12,13,14,15,16],unexpect:20,unfortun:[11,20],union:14,uniqu:[0,21],unique_id:0,unit:[11,20,28],univari:[2,6,24],unknown:6,unless:3,unlik:[20,21],unnecessari:10,unneed:13,unrol:4,unrolled_input:4,unstabl:23,until:[0,20],unwrap:21,updat:11,upon:13,ups:15,usag:17,use:[0,1,2,3,4,6,9,10,11,12,13,14,15,18,20,21,23,25,28],used:[2,4,5,9,10,11,12,13,16,18,20,21,23,25,26],useful:[0,4,10,13,15,16,19,21,25],user:[1,9,12,14,15,16,17,20,21,25,26],uses:[0,4,11],using:[0,1,2,4,9,10,12,13,14,15,16,17,24,25],util:[3,4,5,11,12,14,15,18],val:[13,16],valid:16,valu:[0,2,3,4,5,6,10,11,12,13,14,15,16,17,18,20,21,23,24],vari:[9,11],variabl:[0,2,5,13,14,16,17],varibl:0,vector1:1,vector2:1,vector:[1,4,23,24,25],venv:9,veri:[4,6,10,11,13,14,15,18,19,20,24,26],version:[1,9,13,15,16,18,19,23],view:[1,4,10,19,23,25,26],virtual:[9,13,14,15,16,28],visdom:16,visual:[4,6,11,13,16,19,23],w_1:11,w_2:11,wai:[1,3,4,6,11,15,17,18,19,20,21,23,24,25,26],wait:20,walk:[4,10,12,25],want:[0,1,11,12,13,15,18,23,25,26],weight:[4,16],weight_shap:16,weight_strid:16,well:[2,3,10,11,16,17,18,23,25,28],were:[10,13,21,25],wget:16,what:[1,2,4,10,11,13,14,15,17,18,21,24,26,28],whatev:11,when:[0,1,2,5,6,9,11,15,17,18,19,20,21,23,25,26,28],whenev:9,where:[0,1,2,5,6,11,13,18,19,20,23,25,26],wherea:[9,21,23],whether:[0,17,23],which:[0,1,2,3,4,5,6,10,11,12,17,19,20,21,23,24,25,26],whichev:28,who:8,whole:[20,21],why:11,wider:11,width:[4,5,16],wiki:[11,12,13,16,18,20],wikipedia:[11,12,13,16,18,20,23],win:15,window:[4,28],wire:13,wish:8,within:[4,18,19,21,26],without:[17,18,24,25,26],word:[3,4,19],work:[0,2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,21,23,24],workspac:[8,9,12],worrisom:11,worth:[10,14],would:[0,1,4,5,6,10,11,21,25,26],wrap:21,wrapper:[21,25],write:[2,5,6,10,11,13,15,18,20,21,23],written:[1,5,16],wrong:[11,28],x_0:[12,13],x_1:[11,12,24],x_2:[11,12,24],x_3:12,x_i:[13,16,23,24],x_n:[12,24],xor:13,year:5,yellow:11,yield:[6,11],you:[0,1,2,3,4,5,6,9,11,12,13,14,15,16,17,18,19,20,21,24,26,28],your:[0,3,5,6,8,9,12,13,14,15,16,20,28],z_i:16,zero:[11,23],zip:[1,4,10,14,15,24,26],zipwith:[12,14,15,18]},titles:["Backpropagation","Broadcasting","Autodifferentiation","Contributing","Convolution","GPU Programming","Derivatives","Dropout","<span class=\"xref std std-doc\">module0</span>","Install","Fusing Operations","ML Primer","Fundamentals","Autodiff","Tensors","Efficiency","Networks","Modules","Parallel Computation","Pooling","Property Testing","Tracking Variables","Setup","Softmax","Tensor Variables","Tensors","Operations","Training","Visualization"],titleterms:{"function":[12,21],algorithm:0,autodiff:[8,13],autodifferenti:2,autograd:14,backprop:0,backpropag:[0,13],backward:2,broadcast:[1,14],chain:[2,13],classifi:16,comput:18,continu:3,contribut:3,convolut:[4,16],core:26,credit:[15,16],cuda:[5,15],data:14,dataset:11,debug:12,deriv:[6,13],document:3,dropout:[7,16],effici:[8,15],exampl:[0,1,10],extra:[15,16],fit:11,fundament:[8,12],fuse:10,get:5,gpu:5,gradient:14,imag:16,index:14,indic:8,instal:9,integr:3,jit:18,loss:11,matrix:[10,15],model:11,modul:[12,17],multiclass:23,multipl:[10,15],network:[8,11,16],neural:11,numba:18,numer:13,oper:[10,12,14,15,26],parallel:[15,18],paramet:11,pool:[16,19],primer:11,program:5,properti:20,python:12,reduct:26,rule:[2,13],run:0,scalar:[13,21],setup:22,shape:25,sigmoid:23,softmax:[16,23],sort:0,start:5,stride:25,style:3,sugar:21,syntact:21,tabl:8,task:[12,13,14,15,16],tensor:[8,14,24,25],test:[3,12,20],todo:[12,13,14,15,16],topolog:0,track:21,train:[13,14,15,16,27],variabl:[21,24],visual:[12,28]}})