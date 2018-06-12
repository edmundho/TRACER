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
demo = User.create(username: 'demouser', password: 'password', first_name: "demo user", last_name: "demo user", birth_date: '2000-01-01')

Route.create(
  user_id: demo.id,
  title: "Sentinel Building to Marina Green",
  distance: 4725,
  elevation: 44.477257251739516,
  origin: "37.796556,-122.405146",
  destination: "37.806239,-122.439190",
  polyline_string: "qkueFjpbjVmHlLI@IJY`@KRPA_BNcFj@}BX_N~AoPpBoD`@?G?Ff@tHBPMB_D^C@AD?TBj@r@pKtA~Sn@nJJpB@FGiAK}A~@IFGFAH@HBJC`@]NMPCNS`BqCjCmEh@}@TOKKBPDl@TrDj@~Ij@tHrArSLlBPxCF~@LCB`@d@dHh@hI`@fFRpBf@|H@HM@aEf@uDb@EDABCHi@fAcEtH[j@Od@Ij@?b@RvCLA",
  description: "Ride from the Sentinel Building to the Marina Green near Fort Mason."
)

Route.create(
  user_id: demo.id,
  title: "Anza to AT&T Park via Panhandle",
  distance: 11537,
  elevation: 91.79758477210999,
  origin: "37.777939,-122.489252",
  destination: "37.779825,-122.389474",
  polyline_string: "eoqeFfrrjVzUm@hEOjDO@PFxDL?CwAE}BK{GWoOKoFu@wd@gA{p@]ySQmDDOQyCGu@[{Ec@aHiAeQI{@k@yIg@sHAK\\Ex@ItBWxEi@~B]fAOG_@?A^I^ABJ?BPA^EXCFAG@K@OyBQyCKYk@oJcBiW}Eou@K}AAQl@GjC[jDa@zDg@JEAUc@yGYoEOwB{By]i@iIAQG@MyBW{DDAAQ_@yFEs@`@KUWEASQK[PQNQOUOSs@}@sBoC]c@W]QYIUc@m@wC}DKII?E?a@k@s@aAc@m@_AqA{@kAwDeFLGhCeD~A{BtNuRtFyHjFiHDQPI|BaDfAoAIcBB]\\FJAK@]GUOq@q@KCw@kAyCaEgBcCqIkLGMMNk@{@wBuCeAyAWU[a@sBmCsDcFsBqCkBiCCOcAyAyDiFHMc@m@qBmCkBiCiA{AoBuCoFiHjJiMr@aA"
)

Route.create(
  user_id: demo.id,
  title: "Columbus to Montgomery to California to Hyde and Back",
  polyline_string: "eyveFhsdjVjFsIxA_CZe@LWDUPY`A_B`A_Bb@s@LGR[Xe@PWzCaF~AiCfFmI`@q@HS@KrBeDj@{@pCoErCyEf@_ApB}Cd@y@fBsCLKCQCPtAMlAMxAUpDc@|Gy@p@|JvArUjB~XrApSd@vHLAE?oCZKBcALaI~@_MzAaGp@uR~B_X`D}APgD`@?E",
  elevation: 133.945611476898,
  distance: 5011,
  sport: 1,
  origin: "37.805192,-122.417514",
  destination: "37.804853,-122.420025",
)


Route.create(
  user_id: demo.id,
  title: "J-Town to GGB",
  distance: 5888,
  elevation: 44.2821153402328,
  polyline_string:
   "qwreFjigjVW@k@JqBTMBB`@|@jNTbD{Dd@wGv@yJhAiGv@oDb@uUpCkSbC_BPi@gIkC\\yEj@OCw@NaBT{El@mIbAyAL_IdAtBf\\hC~`@BVCh@ZdCFR@JSBLt@Z`D|Bt]hBvYXfDH`@Tj@|@lAPd@Lx@Af@eBvZOnBI\\?RWpCCLEJFHm@n@]Zc@ZaB~@wAh@w@T",
  origin: "37.784660,-122.431294",
  destination: "37.805570,-122.468623",
)

Route.create(
  user_id: demo.id,
  title: "Lap of GGP via JFK & MLK Drives",
  distance: 11444,
  elevation: 245.789900779724,
  polyline_string:
   "e`peF`|vjVRiB^wA`@kA`@eAb@y@pAkBnAgApB{AdAo@nDiB^[f@u@IKJOu@sFkB{MWsA[{AqAaGuC{My@_H[oCAi@OoAKe@Sm@{AqCK_@W[YiAe@wB]cBi@_FGwA@kADoAZwDBsACcBOkCC]@}@De@b@yAjBoER{@Da@?e@SiBO_AEm@@iAXaCF{@@o@CkBKeAY_Bk@_CEBTMGWg@mBk@oBsAqEg@cDSsBKcCHaBn@mCt@oC`A_ERyA@uAGi@[gAi@wAWc@kDoFi@kA]oAKkAEuAA{CGyBAgCBeATaDdAsGb@gCLe@N]FYPeBZu@NiAA{B?cARoDTw@DgCNkCT}CTwBFs@Le@QSEEFFJJBD^IVGJEBHBBjAh@RFZDRHRLFJPr@ZlBh@LXUBEb@@N?j@Kp@Ul@KtBtK\\GB?C?]FAFOTKj@WjCCdABh@Jz@JEDTRh@rAhDF`@@b@KxB@^Ln@pApGf@bDB~@En@SfBAPM??PcA@}@Fa@Di@H@NKDs@^a@ZMRaArBa@vAm@vBy@xBQn@G~@?lADfBD|@J|@Hf@Xj@j@r@d@VnATz@LXJZP^Z\\\\IJHPJVRx@zA~Hj@lD\\fCLbADv@YD@\\@\\\\DNHN@VM@VADY|@ANPTLb@@XE`@Sx@Ut@aA|Ba@hAMn@EJ?F@RWvBMdCHfABTQBDb@Z`CDd@?fAGjAWvA[~@Mj@A\\?f@Fx@PhA`AbCnB`E\\hAV~AHbAM@I?DZXtDDrBEtAHh@@pAGhEI|AInCEhDN`G\\rFJjAAHFNVhBL|@f@`CNjAAnBGhAHBXHSvBG~@OCMjAUxBU|Ae@~CIz@?`@M?CFSr@cApC}@jBs@fAo@~@]^e@Z{BfA}@f@{AdAyBfBg@j@kAjBe@~@cA|CQz@KbARCAH",
  origin: "37.770786,-122.510904",
  destination: "37.770404,-122.510915",
)

Route.create(
  user_id: demo.id,
  title: "Sea Cliff to Nation's Daly City",
  polyline_string: "ydseFjisjVKXAT?LPv@O@JfATdAb@p@Zd@F[DKBEVAr@?bACVCzAC|AMtAIlBCv@KD?BBFPB@@C@YBEF?jBbAp@\\LNPTHZf@Avb@uAjVq@FtEH~D?TXEBAn@q@jDCRGHGb@e@z@Qd@GdAdAp@v@xAzLRbA`CrK\\Al@G`AOh@OxAi@b@I`@Cb@Dd@XfApAh@d@XNXHXBr@CfACVCJ?K?QmLSoLN@jAChSo@tOc@z\\aA@HAIAgAjEIfDMtJ[rEOlJUnOe@rIWxVu@zUq@b@`AfDGHhEBlADB@@@PDpBDTP\\z@fAbAfAjBnBh@l@LSZA`@Bj@?vAMpEcBjBs@TOXSTYTa@Pg@Lo@Fg@A_AUkBk@qDEo@PCXMHg@La@JONGLAb@Ld@P^ATYDMDg@KqBQaAIWKSq@u@S_@CYEa@Ow@Wk@[g@uCmC_@a@OWOc@Gi@A}@Be@VmAtA}F\\cBFYKGZmBZiAHS\\e@`@]vCwBhBsAXS`@Qp@MDPZ?j@FvIlC~C|@h@H~ADz@BxEBvHA|E?lC?fDCzIJhAHd@RTLVJbBTp@BNCj@k@j@Cv@BVNX`@^d@XJ\\?PEPMd@u@LONGpA@~ABnDFxAAbC]z@Oh@En@H`@R^h@L`@Fb@?r@YfAGVLLj@cB\\_AiAbDMMLLj@cBBI\\M`@UXIt@Kl@DpB@|FAvD@lCC~@@n@Ez@I`AWt@Yt@_@z@i@tBoAmAuGt@W`Bm@FMFC",
  elevation: 126.046363353729,
  distance: 12899,
  description: "😎",
  origin: "37.786689,-122.492760",
  destination: "37.702011,-122.482469",
)