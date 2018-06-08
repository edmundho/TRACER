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
  date: "",
  start_time: ,
  end_time: ,
  distance: 4725,
  elevation: 44.477257251739516,
  polyline_string: "qkueFjpbjVmHlLI@IJY`@KRPA_BNcFj@}BX_N~AoPpBoD`@?G?Ff@tHBPMB_D^C@AD?TBj@r@pKtA~Sn@nJJpB@FGiAK}A~@IFGFAH@HBJC`@]NMPCNS`BqCjCmEh@}@TOKKBPDl@TrDj@~Ij@tHrArSLlBPxCF~@LCB`@d@dHh@hI`@fFRpBf@|H@HM@aEf@uDb@EDABCHi@fAcEtH[j@Od@Ij@?b@RvCLA"
)

Route.create(
  user_id: eho.id,
  title: "Anza to AT&T Park via Panhandle",
  date: "",
  start_time: ,
  end_time: ,
  distance: 11537,
  elevation: 91.79758477210999,
  polyline_string: "eoqeFfrrjVzUm@hEOjDO@PFxDL?CwAE}BK{GWoOKoFu@wd@gA{p@]ySQmDDOQyCGu@[{Ec@aHiAeQI{@k@yIg@sHAK\Ex@ItBWxEi@~B]fAOG_@?A^I^ABJ?BPA^EXCFAG@K@OyBQyCKYk@oJcBiW}Eou@K}AAQl@GjC[jDa@zDg@JEAUc@yGYoEOwB{By]i@iIAQG@MyBW{DDAAQ_@yFEs@`@KUWEASQK[PQNQOUOSs@}@sBoC]c@W]QYIUc@m@wC}DKII?E?a@k@s@aAc@m@_AqA{@kAwDeFLGhCeD~A{BtNuRtFyHjFiHDQPI|BaDfAoAIcBB]\FJAK@]GUOq@q@KCw@kAyCaEgBcCqIkLGMMNk@{@wBuCeAyAWU[a@sBmCsDcFsBqCkBiCCOcAyAyDiFHMc@m@qBmCkBiCiA{AoBuCoFiHjJiMr@aA"
)