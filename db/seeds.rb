# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Route.destroy_all

eho = User.create(username: 'eho', password: 'fayefaye', first_name: 'Ed', last_name: 'H', birth_date: '1990-11-28')
User.create(username: 'demouser', password: 'password', first_name: "demo user", last_name: "demo user", birth_date: '2000-01-01')

Route.create(
  user_id: eho.id,
  title: "Sentinel Building to Marina Green",
  distance: 4725,
  elevation: 44.477257251739516,
  polyline_string: "qkueFjpbjVmHlLI@IJY`@KRPA_BNcFj@}BX_N~AoPpBoD`@?G?Ff@tHBPMB_D^C@AD?TBj@r@pKtA~Sn@nJJpB@FGiAK}A~@IFGFAH@HBJC`@]NMPCNS`BqCjCmEh@}@TOKKBPDl@TrDj@~Ij@tHrArSLlBPxCF~@LCB`@d@dHh@hI`@fFRpBf@|H@HM@aEf@uDb@EDABCHi@fAcEtH[j@Od@Ij@?b@RvCLA",
  description: "Ride from the Sentinel Building to the Marina Green near Fort Mason."
)

Route.create(
  user_id: eho.id,
  title: "Anza to AT&T Park via Panhandle",
  distance: 11537,
  elevation: 91.79758477210999,
  polyline_string: "eoqeFfrrjVzUm@hEOjDO@PFxDL?CwAE}BK{GWoOKoFu@wd@gA{p@]ySQmDDOQyCGu@[{Ec@aHiAeQI{@k@yIg@sHAK\\Ex@ItBWxEi@~B]fAOG_@?A^I^ABJ?BPA^EXCFAG@K@OyBQyCKYk@oJcBiW}Eou@K}AAQl@GjC[jDa@zDg@JEAUc@yGYoEOwB{By]i@iIAQG@MyBW{DDAAQ_@yFEs@`@KUWEASQK[PQNQOUOSs@}@sBoC]c@W]QYIUc@m@wC}DKII?E?a@k@s@aAc@m@_AqA{@kAwDeFLGhCeD~A{BtNuRtFyHjFiHDQPI|BaDfAoAIcBB]\\FJAK@]GUOq@q@KCw@kAyCaEgBcCqIkLGMMNk@{@wBuCeAyAWU[a@sBmCsDcFsBqCkBiCCOcAyAyDiFHMc@m@qBmCkBiCiA{AoBuCoFiHjJiMr@aA"
)

Route.create(
  userid: eho.id,
  title: "Columbus to Montgomery to California to Hyde and Back",
  polyline_string: "eyveFhsdjVjFsIxA_CZe@LWDUPY`A_B`A_Bb@s@LGR[Xe@PWzCaF~AiCfFmI`@q@HS@KrBeDj@{@pCoErCyEf@_ApB}Cd@y@fBsCLKCQCPtAMlAMxAUpDc@|Gy@p@|JvArUjB~XrApSd@vHLAE?oCZKBcALaI~@_MzAaGp@uR~B_X`D}APgD`@?E",
  elevation: 133.945611476898,
  distance: 5011,
  sport: 1
)

Route.create(
  userid: eho.id,
  title: "Sea Cliff to Nation's Daly City",
  polyline_string: "ydseFjisjVKXAT?LPv@O@JfATdAb@p@Zd@F[DKBEVAr@?bACVCzAC|AMtAIlBCv@KD?BBFPB@@C@YBEF?jBbAp@\\LNPTHZf@Avb@uAjVq@FtEH~D?TXEBAn@q@jDCRGHGb@e@z@Qd@GdAdAp@v@xAzLRbA`CrK\\Al@G`AOh@OxAi@b@I`@Cb@Dd@XfApAh@d@XNXHXBr@CfACVCJ?K?QmLSoLN@jAChSo@tOc@z\\aA@HAIAgAjEIfDMtJ[rEOlJUnOe@rIWxVu@zUq@b@`AfDGHhEBlADB@@@PDpBDTP\\z@fAbAfAjBnBh@l@LSZA`@Bj@?vAMpEcBjBs@TOXSTYTa@Pg@Lo@Fg@A_AUkBk@qDEo@PCXMHg@La@JONGLAb@Ld@P^ATYDMDg@KqBQaAIWKSq@u@S_@CYEa@Ow@Wk@[g@uCmC_@a@OWOc@Gi@A}@Be@VmAtA}F\\cBFYKGZmBZiAHS\\e@`@]vCwBhBsAXS`@Qp@MDPZ?j@FvIlC~C|@h@H~ADz@BxEBvHA|E?lC?fDCzIJhAHd@RTLVJbBTp@BNCj@k@j@Cv@BVNX`@^d@XJ\\?PEPMd@u@LONGpA@~ABnDFxAAbC]z@Oh@En@H`@R^h@L`@Fb@?r@YfAGVLLj@cB\\_AiAbDMMLLj@cBBI\\M`@UXIt@Kl@DpB@|FAvD@lCC~@@n@Ez@I`AWt@Yt@_@z@i@tBoAmAuGt@W`Bm@FMFC",
  elevation: 126.046363353729,
  distance: 12899,
  description: "😎"
)