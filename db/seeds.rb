# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Route.destroy_all
Activity.destroy_all

eho = User.create(username: 'eho', password: 'fayefaye', first_name: 'Ed', last_name: 'H', birth_date: '1990-11-28')
demo = User.create(username: 'demouser', password: 'password', first_name: "Klay", last_name: "Thompson", birth_date: '2000-01-01')

route1 = Route.create(
  user_id: demo.id,
  title: "Sentinel Building to Marina Green",
  distance: 4725,
  elevation: 44.477257251739516,
  origin: "37.796556,-122.405146",
  destination: "37.806239,-122.439190",
  polyline_string: "qkueFjpbjVmHlLI@IJY`@KRPA_BNcFj@}BX_N~AoPpBoD`@?G?Ff@tHBPMB_D^C@AD?TBj@r@pKtA~Sn@nJJpB@FGiAK}A~@IFGFAH@HBJC`@]NMPCNS`BqCjCmEh@}@TOKKBPDl@TrDj@~Ij@tHrArSLlBPxCF~@LCB`@d@dHh@hI`@fFRpBf@|H@HM@aEf@uDb@EDABCHi@fAcEtH[j@Od@Ij@?b@RvCLA",
  description: "Ride from the Sentinel Building to the Marina Green near Fort Mason."
)

route2 = Route.create(
  user_id: demo.id,
  title: "Anza to AT&T Park via Panhandle",
  distance: 11537,
  elevation: 91.79758477210999,
  origin: "37.777939,-122.489252",
  destination: "37.779825,-122.389474",
  polyline_string: "eoqeFfrrjVzUm@hEOjDO@PFxDL?CwAE}BK{GWoOKoFu@wd@gA{p@]ySQmDDOQyCGu@[{Ec@aHiAeQI{@k@yIg@sHAK\\Ex@ItBWxEi@~B]fAOG_@?A^I^ABJ?BPA^EXCFAG@K@OyBQyCKYk@oJcBiW}Eou@K}AAQl@GjC[jDa@zDg@JEAUc@yGYoEOwB{By]i@iIAQG@MyBW{DDAAQ_@yFEs@`@KUWEASQK[PQNQOUOSs@}@sBoC]c@W]QYIUc@m@wC}DKII?E?a@k@s@aAc@m@_AqA{@kAwDeFLGhCeD~A{BtNuRtFyHjFiHDQPI|BaDfAoAIcBB]\\FJAK@]GUOq@q@KCw@kAyCaEgBcCqIkLGMMNk@{@wBuCeAyAWU[a@sBmCsDcFsBqCkBiCCOcAyAyDiFHMc@m@qBmCkBiCiA{AoBuCoFiHjJiMr@aA"
)

route3 = Route.create(
  user_id: demo.id,
  title: "Columbus to Montgomery to California to Hyde and Back",
  polyline_string: "eyveFhsdjVjFsIxA_CZe@LWDUPY`A_B`A_Bb@s@LGR[Xe@PWzCaF~AiCfFmI`@q@HS@KrBeDj@{@pCoErCyEf@_ApB}Cd@y@fBsCLKCQCPtAMlAMxAUpDc@|Gy@p@|JvArUjB~XrApSd@vHLAE?oCZKBcALaI~@_MzAaGp@uR~B_X`D}APgD`@?E",
  elevation: 133.945611476898,
  distance: 5011,
  sport: 1,
  origin: "37.805192,-122.417514",
  destination: "37.804853,-122.420025",
)


route4 = Route.create(
  user_id: demo.id,
  title: "J-Town to GGB",
  distance: 5888,
  elevation: 44.2821153402328,
  polyline_string:
   "qwreFjigjVW@k@JqBTMBB`@|@jNTbD{Dd@wGv@yJhAiGv@oDb@uUpCkSbC_BPi@gIkC\\yEj@OCw@NaBT{El@mIbAyAL_IdAtBf\\hC~`@BVCh@ZdCFR@JSBLt@Z`D|Bt]hBvYXfDH`@Tj@|@lAPd@Lx@Af@eBvZOnBI\\?RWpCCLEJFHm@n@]Zc@ZaB~@wAh@w@T",
  origin: "37.784660,-122.431294",
  destination: "37.805570,-122.468623",
)

route5 = Route.create(
  user_id: demo.id,
  title: "Lap of GGP via JFK & MLK Drives",
  distance: 11444,
  elevation: 245.789900779724,
  polyline_string:
   "e`peF`|vjVRiB^wA`@kA`@eAb@y@pAkBnAgApB{AdAo@nDiB^[f@u@IKJOu@sFkB{MWsA[{AqAaGuC{My@_H[oCAi@OoAKe@Sm@{AqCK_@W[YiAe@wB]cBi@_FGwA@kADoAZwDBsACcBOkCC]@}@De@b@yAjBoER{@Da@?e@SiBO_AEm@@iAXaCF{@@o@CkBKeAY_Bk@_CEBTMGWg@mBk@oBsAqEg@cDSsBKcCHaBn@mCt@oC`A_ERyA@uAGi@[gAi@wAWc@kDoFi@kA]oAKkAEuAA{CGyBAgCBeATaDdAsGb@gCLe@N]FYPeBZu@NiAA{B?cARoDTw@DgCNkCT}CTwBFs@Le@QSEEFFJJBD^IVGJEBHBBjAh@RFZDRHRLFJPr@ZlBh@LXUBEb@@N?j@Kp@Ul@KtBtK\\GB?C?]FAFOTKj@WjCCdABh@Jz@JEDTRh@rAhDF`@@b@KxB@^Ln@pApGf@bDB~@En@SfBAPM??PcA@}@Fa@Di@H@NKDs@^a@ZMRaArBa@vAm@vBy@xBQn@G~@?lADfBD|@J|@Hf@Xj@j@r@d@VnATz@LXJZP^Z\\\\IJHPJVRx@zA~Hj@lD\\fCLbADv@YD@\\@\\\\DNHN@VM@VADY|@ANPTLb@@XE`@Sx@Ut@aA|Ba@hAMn@EJ?F@RWvBMdCHfABTQBDb@Z`CDd@?fAGjAWvA[~@Mj@A\\?f@Fx@PhA`AbCnB`E\\hAV~AHbAM@I?DZXtDDrBEtAHh@@pAGhEI|AInCEhDN`G\\rFJjAAHFNVhBL|@f@`CNjAAnBGhAHBXHSvBG~@OCMjAUxBU|Ae@~CIz@?`@M?CFSr@cApC}@jBs@fAo@~@]^e@Z{BfA}@f@{AdAyBfBg@j@kAjBe@~@cA|CQz@KbARCAH",
  origin: "37.770786,-122.510904",
  destination: "37.770404,-122.510915",
)

route6 = Route.create(
  user_id: demo.id,
  title: "Sea Cliff to Nation's Daly City",
  polyline_string: "ydseFjisjVKXAT?LPv@O@JfATdAb@p@Zd@F[DKBEVAr@?bACVCzAC|AMtAIlBCv@KD?BBFPB@@C@YBEF?jBbAp@\\LNPTHZf@Avb@uAjVq@FtEH~D?TXEBAn@q@jDCRGHGb@e@z@Qd@GdAdAp@v@xAzLRbA`CrK\\Al@G`AOh@OxAi@b@I`@Cb@Dd@XfApAh@d@XNXHXBr@CfACVCJ?K?QmLSoLN@jAChSo@tOc@z\\aA@HAIAgAjEIfDMtJ[rEOlJUnOe@rIWxVu@zUq@b@`AfDGHhEBlADB@@@PDpBDTP\\z@fAbAfAjBnBh@l@LSZA`@Bj@?vAMpEcBjBs@TOXSTYTa@Pg@Lo@Fg@A_AUkBk@qDEo@PCXMHg@La@JONGLAb@Ld@P^ATYDMDg@KqBQaAIWKSq@u@S_@CYEa@Ow@Wk@[g@uCmC_@a@OWOc@Gi@A}@Be@VmAtA}F\\cBFYKGZmBZiAHS\\e@`@]vCwBhBsAXS`@Qp@MDPZ?j@FvIlC~C|@h@H~ADz@BxEBvHA|E?lC?fDCzIJhAHd@RTLVJbBTp@BNCj@k@j@Cv@BVNX`@^d@XJ\\?PEPMd@u@LONGpA@~ABnDFxAAbC]z@Oh@En@H`@R^h@L`@Fb@?r@YfAGVLLj@cB\\_AiAbDMMLLj@cBBI\\M`@UXIt@Kl@DpB@|FAvD@lCC~@@n@Ez@I`AWt@Yt@_@z@i@tBoAmAuGt@W`Bm@FMFC",
  elevation: 126.046363353729,
  distance: 12899,
  description: "😎",
  origin: "37.786689,-122.492760",
  destination: "37.702011,-122.482469",
)

route7 = Route.create(
  user_id: demo.id,
  title: "Financial District to Inner Richmond",
  distance: 6109,
  elevation: 114.332946777344,
  polyline_string:
   "geteFjbbjV?MLAjDa@fEg@hDe@RlCv@jMj@nIDnA`@bGr@dKL|BP|B~Bj^zBz]t@bLzAzTfB~X@PLAdAMhBSLCVjDHbAN|CEp@RxAr@~KBn@Df@b@`BRx@NjBd@fIj@nIThEHNBXJtAx@tMD`AAb@Et@@|@ZnF@RATl@tJ`@tGPbCWBiMxADdETtLRlL?PE?oFNRvLNvJ",
  sport: "run",
  description: "Fun Run",
  origin: "37.79173502633403,-122.40437881469728",
  destination: "37.784865255178666,-122.46327002274433"
)

route8 = Route.create(
  user_id: demo.id,
  title: "Financial District to Marina",
  distance: 4658,
  elevation: 75.2727379798889,
  polyline_string: "wcteFvvajVbBQzDi@RfDnB`ZpBf[f@hIrArSrAlSuJjAyJlAkOfBcI`AiJfAgLtAqJjAZ~EDxADl@nArRh@fIsJjAh@fIMBcDb@Bf@b@hGJbBZtEB`@XC",
  sport: "bike",
  description: "",
  origin: "37.791463717289886,-122.40266220092775",
  destination: "37.80273099007377,-122.43492767211916"
)

route9 = Route.create(
  user_id: demo.id,
  title: "Nob Hill to USF",
  distance: 3426,
  elevation: 58.9039344787598,
  polyline_string: "{}seFnzcjV`AhO\\zFzDe@xDc@ZtETtDz@xMP`CpAdSv@|Kh@nIZdF|@bN|@xNzDe@@Zd@lHrAlStA|SjA~QtDg@|@ODEAQ",
  sport: "run",
  description: "Rushed to school",
  origin: "37.790242814262946,-122.41330520629884",
  destination: "37.78230645287412,-122.44566337585451"
)

route10 = Route.create(
  user_id: demo.id,
  title: "Ferry Building to Castro",
  distance: 3697,
  elevation: 11.5080275535583,
  polyline_string: "mpteFt~_jVsDzEIT?Lx@nAnEbGxGdJnMlQlA`Bh@p@h@t@rCzDbGhI`FzGxGfJfJdMzEtGv\\td@tC~DCVBN^f@t@Q_AuAfFgHbAvAhAlAj@hA`AjAr@Ic@WOO",
  sport: "run",
  description: "",
  origin: "37.79363416174872,-122.39339248657228",
  destination: "37.77301236527693,-122.41836921691896"
)


route11 = Route.create(
  user_id: demo.id,
  title: "Russian Hill to Fillmore",
  distance: 3676,
  elevation: 69.9546661376953,
  polyline_string: "uaveFj~ejVI{AUgDtDe@tH{@xFs@zDe@`Eg@bUkCpKuAll@cHnM{AdBUTxDP|Cd@zH`BjW^|Fd@hGZpFFhAyDd@MsB",
  sport: "run",
  description: "",
  origin: "37.801569306558314,-122.4242486190796",
  destination: "37.77966080968367,-122.42957012176515"
)

route12 = Route.create(
  user_id: demo.id,
  title: "GGB to Stonestown",
  distance: 12558,
  elevation: 298.540764808655,
  polyline_string:
    "a{veFvsnjVpBq@z@a@`BeA\\[l@o@T^ZZf@c@fCyBHC~G\\hEXlA?^JXPPXL^Dh@AVSfAAh@F\\RTx@l@`@R\\Bb@A^GPIRUL]NaAVgBFMPWLGJA^D^XnBhB\\d@bAxBJHVB^KXKf@ERBXNTZTWZe@F_@Ci@Qc@_@e@Ye@Ok@A]Y}AK]OWy@w@_@a@Sg@Oo@Ac@@y@FgAL_@PYnBqBf@Wx@i@NWH_@h@cEH]HMJIr@[l@UZOdAgApAeADE@GAUFAHCNILKZa@Xm@N_AB_AF_AXcAl@gBNUPKp@@bAHr@Bn@GxAe@`@ANDNLFLXhARl@JLrUy@`M]|BG?RFjEpJYZ?EoEAUhBEdGQjGQ~AIt@AfGSbAA?b@@v@BdCDxBHtEh@v[@Z~DMlFQbACb@@AW`@?AR@~@\\DZAbBOZK^Gd@GDRDd@XEL?NFXTvCrE`A~ADV?d@O`@NR@C`@NFJLLJh@HHXLBKH]La@Z{@nBkEx@{AZ[b@Oz@MtAMdBGjA@PhLP?IwEGqEO{J?o@zBIjFOpCIp]eA|Qm@tA?DHVBnCd@f@Dt@Cd@Mj@Wd@Yx@q@j@o@b@u@^i@xAyAjAuAv@y@d@]l@[vCqA\\QdC}BvD}D`@_@^Md@BRPh@f@^b@PL\\d@T\\rBvCfEzFbHpJGLCN@NDPHHJDL?JCHIDMBK|AF~APp@JjA^pAv@r@p@v@j@jAh@~A^zAT\\bA|@lBl@~@bAhAlBtB~@nAfA|AdAbBrIxKdBhBPXNLRJ`DNvO\\Wp@CX_CvG}@rCwAdEG^@zAzHUlB@pA@P?AF",
  sport: "bike",
  description: "",
  origin: "37.8054626449897,-122.46861723480276",
  destination: "37.73008231764921,-122.47601720850383"
)

route13 = Route.create(
  user_id: demo.id,
  title: "Millbrae BART to SFSU",
  distance: 18744,
  elevation: 99.4013433456421,
  polyline_string:
    "kpndFzr~iVkBpBAPTr@r@xAcAfAyCnDcEdF}EjGuDnF_BxCwAhCgE`GcD|E}CnEu@`A{AzAy@|@oE_HgB`C\\f@BD?`@ADaBx@_Ap@qBpB}DlDgCzB{AyDcGbEmFvDyCtB_DnB_G|DmClBwAx@y@n@s@VaAl@gCjB_C~AuBbByAz@mM~FgB|@}OzHmB~@EFCPPz@{@@Ac@?KGUQMMAIDSXIFKBQEEAu@\\gEnBcBz@{@b@IHAPgBz@iKzEEwACKQMKE_RLkOJyCBlAvEzChLy@\\uFpCHZe@VmBjAw@`@wBhAm@`@gAx@wCfC}FrEoC|BSZKN`@d@[d@o@d@uErDcBfByArAwAdAcBfAeBz@gAf@cAl@kA|@iAjAcCrCQRYPILOj@M`@yAjCS^?XXb@?Jg@dA[r@]`@MZ_@|Aa@fAiA`CcAxAa@`@YR[LMHIXMn@Op@Yv@U`@_@f@_@PMAeAeC_AwAoA{AiAwASUOEY_@e@c@UOkBe@}D}@sD_AsBm@eDaA{IwBkBc@aB]cFqAs@KkEgA}Bk@gAzGUfA{@`CcCnFiA~Bk@v@y@~@q@v@U^oDzHoD|HcBfEi@xAAJq@|AoHlPoIlReG|M}GhOiGfNeDzH}DrImDdISZeAhAgAjAoAlAs@z@qArAeBfBq@v@i@d@oHjEq@XkJrBcBZ_AP{Fl@{MrAmAHiTd@kU`@cKRmAM_Ee@_BLk@Da@JSr@SbBE|@EzWIjBcDE{BKQEE\\E\\?NFNLN~@n@g@nAuDoCMBo@zAwAjB[TaCDyH@aH?A_@?AUAE@IxACBE?Ge@GYMGSECVW|BIdB@rHEt@YrAQ?QFk@x@WLkANqBPUBI?MKm@e@?MCKGIIAI@GFCH?H?FuCtFC?A?G@E@CB_@]GCGBaBNqKdAWJYTIJAH?JLtBgDZCCKAMBQTCR?N@LEHEBKBcAAq@CKB",
  sport: "bike",
  description: "",
  origin: "37.598910993577896,-122.38659338791194",
  destination: "37.72081533934614,-122.47612097589752"
)

route14 = Route.create(
  user_id: demo.id,
  title: "Bay to Columbus to Kearny Coit Tower and Back",
  distance: 3962,
  elevation: 105.14267873764,
  polyline_string:
    "w`weF~kbjVMJQFEJJnAR|CrBr[nAhSp@bLHz@h@c@?E?KIe@BC`@q@hAkB~AiCvAyB^q@J_@~AiCt@mA\\k@LG\\i@j@_AvC{ElI}M^u@@Kd@q@xAcCfBsCxAcCvBkDb@{@NUUDe@DiD^AMMBw@LaAJm@F?B?HE@AIMBiCXo@HyDd@cD^Ci@Eg@AMEMMYUS[G]HsA|@[\\QHEL?D@BAC?E@EJKHEP@NMAP@l@B`AGv@HD@FKn@JzAJvAaAPkBPyDd@uDd@IgAGEE?E?EGAWD]GSOcBGq@DA",
  sport: "run",
  description: "",
  origin: "37.806180793921484,-122.40609542846681",
  destination: "37.80549286949131,-122.40695471954348"
)

route15 = Route.create(
  user_id: demo.id,
  title: "Ferry Building to Palace of Fine Arts",
  distance: 5672,
  elevation: 66.6309201717377,
  polyline_string:
    "{fteFbh`jVoD|Eg@l@MLHLIJEESY}BVuH|@UB@^ADIL]TCd@]ZGR[`AAN?DI@LxALdBb@dHl@~IVnEi@r@uAxBg@|@uB`Dc@z@wBjDyAbCaEvGe@p@AJ_@t@kDvFyH`MHt@NlCMB{ATkAPAKAIKP}@vAa@p@K^_@p@wAxBkEfHi@x@KJDl@d@dHzAvTbA|OLABf@JtAVjErAlS\\hEN~Ah@|HlAtQNb@KH?PW~@e@dAUj@zAzANPJLpApBp@vA`@bATp@h@hCTpALjAp@dKrAtSJnBKNmArBmAJYNc@@?P",
  sport: "run",
  description: "",
  origin: "37.79200633438197,-122.39502326965334",
  destination: "37.801578333258746,-122.44784115183717"
)

route16 = Route.create(
  user_id: demo.id,
  title: "Lap around Potrero Hill",
  distance: 7043,
  elevation: 31.0103724002838,
  polyline_string:
    "yqmeFb}~iVkFXaDJeCJoFZwGHiFP}CLiCNw@@cCFY@DV?TJ~DRtIVnKNtD@|@En@DrBFrBDdBVlJb@xQTtK`@zOJfE@P@?|AGrCM|FW~FW`Os@tAE|ESJDv@?vBKfKe@fFUbNm@zAIPCp@WR@lAg@pCkAPGDSAI@HAPBBHP\\|CDPC@C@AC?ACAOHKH?@@@\\Sd@g@PU^SBA@Di@T@gATuB@KYSIKIKQUKOGc@E{@AmAGi@Ia@@e@@K@EMECEAGEg@IG@oACQ?W?u@SwI[eOUkJWqJDQEsBAs@QuDKsDDyDAyAMsGMcDYFQ?gFBkDPaBJ_ABsDJw@FmFV",
  sport: "run",
  description: "Dogpatch to 16th & Potrero to Cesar Chavez and back",
  origin: "37.75788316818406,-122.38822612535273",
  destination: "37.75555906587538,-122.38806196289067"
)

route17 = Route.create(
  user_id: demo.id,
  title: "Wash to Dolores Park via Panhandle",
  distance: 7995,
  elevation: 96.5673313140869,
  polyline_string:
    "knqeFnrrjVpSi@v@CHrEtJ]?QpAHx@DrB\\V_CFuCMiBMyABgAF_@^eA~@aC`@XFDLk@n@qBHs@@i@Cy@SkAK{@Ak@Bw@PeBL_B@}AEaASyA[gB_@_BULe@mBo@}BuAyESgA[cCWkCEeA@wAH{@j@{Bn@uB~@_EVyAD_AEe@Kk@YaAg@gA_BuCaBoCUg@[{@Q{@Gi@IqBA_BCuCIgC?eAFmAPgB`@cCv@kEp@aENyAr@mId@yFVsD\\}EFs@DM@MBs@A{@@oAG[sAuEG_@NAf@Eb@Er@GlBUi@mIsAqS{@uMsCuc@_Ca^xDg@i@iIxDc@ScDUcD|ASlBUhBUXCAYAMtIc@nCKl@Ep@CvAKh@@nQ{@FAIwCQaH`DMpDMjHYHA",
  sport: "bike",
  description: "",
  origin: "37.77781601182648,-122.48891238505257",
  destination: "37.75965051856917,-122.42820446792604"
)

route18 = Route.create(
  user_id: demo.id,
  title: "Land's End Run",
  distance: 2354,
  elevation: 113.656320571899,
  polyline_string:
    "scseF|qsjVk@bBUz@@j@DpBFdADj@Gr@EZ@^@bBCd@Mp@OX_@b@y@|@Yh@o@dBSv@K\\AVHpADFHBN@LTTh@JJ@J?TG\\?ZDLHJn@\\BHGHW^W`@K`@?n@C`@BRNt@Jt@F\\BTFRTdAXpAF`@@f@FbBJl@R\\HHZFj@DLABCTKHAPNTDH?TEPIx@?HHd@v@LNDPLTXVJV?\\?`ABTJd@BTAn@SnAC^BXZt@DVLbATr@fAhDz@vALTFP@~@FfABZJj@P^LTNLb@RXF`@CVEJGTMLIRALLBDFJ@D?FLVFR?BBFh@LVBCJGJ?VMbALHb@PNEHAd@h@LJDVGFABFn@DN?LCd@@\\",
  sport: "run",
  description: "Start at Sea Cliff and End at Sutro Baths",
  origin: "37.7862915241683,-122.49392329476211",
  destination: "37.78104332165231,-122.51403944550532"
)


Activity.create(
  user_id: demo.id,
  title: "Evening Run",
  sport: "run",
  date: "Sat, 23 Jun 2018",
  duration: 5640,
  distance: 4.23,
  elevation: 102.0,
  route_id: route16.id,
  description: "Note to self: do not run hungry!",
  time: "Sat, 01 Jan 2000 19:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride",
  sport: "bike",
  date: "Fri, 08 Jun 2018",
  duration: 8400,
  distance: 3.53,
  elevation: 145.0,
  route_id: route4.id,
  description: "",
  time: "Sat, 01 Jan 2000 16:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride",
  sport: "bike",
  date: "Sat, 12 May 2018",
  duration: 14880,
  distance: 7.53,
  elevation: 979.0,
  route_id: route12.id,
  description: "Tough ride",
  time: "Sat, 01 Jan 2000 15:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride Downtown",
  sport: "bike",
  date: "Sun, 20 May 2018",
  duration: 984033,
  distance: 7.0,
  elevation: 300.0,
  route_id: route2.id,
  description: "Tons of traffic downtown.",
  time: "Sat, 01 Jan 2000 14:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride Daly City",
  sport: "bike",
  date: "Sat, 19 May 2018",
  duration: 8700,
  distance: 7.75,
  elevation: 250.0,
  route_id: route6.id,
  description: "The pie made this worth it.",
  time: "Sat, 01 Jan 2000 14:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride",
  sport: "bike",
  date: "Sat, 09 Jun 2018",
  duration: 11100,
  distance: 10.91,
  elevation: 470.0,
  description: "",
  time: "Sat, 01 Jan 2000 14:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride",
  sport: "bike",
  date: "Thu, 31 May 2018",
  duration: 4860,
  distance: 2.83,
  elevation: 150.0,
  route_id: route1.id,
  description: "",
  time: "Sat, 01 Jan 2000 13:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Evening Run",
  sport: "run",
  date: "Thu, 14 Jun 2018",
  duration: 150019,
  distance: 2.22,
  elevation: 38.0,
  route_id: route10.id,
  description: "More traffic than usual",
  time: "Sat, 01 Jan 2000 19:00:00 UTC -08:00"
)

Activity.create(
  user_id: 32,
  title: "Sunday Afternoon Run",
  sport: "run",
  date: "Sun, 03 Jun 2018",
  duration: 1500,
  distance: 2.22,
  elevation: 40.0,
  route_id: nil,
  description: "Must... improve... pace",
  time: nil
)

Activity.create(
  user_id: demo.id,
  title: "Afternoon Ride",
  sport: "bike",
  date: "Sat, 09 Jun 2018",
  duration: 15300,
  distance: 11.0,
  elevation: 326.0,
  route_id: nil,
  description: "Weather was a perfect 70 degrees. Very windy towards Marina District.",
  time: nil
)

Activity.create(
  user_id: demo.id,
  title: "Slow night run",
  sport: "run",
  date: "Fri, 01 Jun 2018",
  duration: 2700,
  distance: 3.0,
  elevation: 39.0,
  route_id: nil,
  description: "",
  time: nil
)

Activity.create(
  user_id: demo.id,
  title: "Morning Run",
  sport: "run",
  date: "Sun, 10 Jun 2018",
  duration: 228025,
  distance: 3.01,
  elevation: 439.0,
  route_id: route3.id,
  description: "",
  time: "Sat, 01 Jan 2000 09:00:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
  title: "Morning Run",
  sport: "run",
  date: "Sun, 27 May 2018",
  duration: 246011,
  distance: 2.21,
  elevation: 229.0,
  route_id: route11.id,
  description: "Nothing like an early morning sweat",
  time: "Sat, 01 Jan 2000 08:00:00 UTC -08:00"
)

Activity.create(
user_id: demo.id,
 title: "Morning Ride",
 sport: "bike",
 date: "Fri, 15 Jun 2018",
 duration: 3960,
 distance: 4.8,
 elevation: 317.0,
 route_id: route17.id,
 description: "The view makes this more than worth it!",
 time: "Sat, 01 Jan 2000 11:49:00 UTC -08:00"
)

Activity.create(
  user_id: demo.id,
 title: "Morning Run",
 sport: "run",
 date: "Wed, 20 Jun 2018",
 duration: 1500,
 distance: 1.41,
 elevation: 373.0,
 route_id: route18.id,
 description: "Chilly",
 time: "Sat, 01 Jan 2000 06:49:00 UTC -08:00"
)
