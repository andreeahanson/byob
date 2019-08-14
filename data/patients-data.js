const patients = [
  {
    id: 1000,
    name: "Anne Beak",
    gender: "female",
    allergies: [],
    phone: "303-111-1111",
    email: "anne.beak@gmail.com",
    doctor_id: 1
  },
  {
    id: 1001,
    name: "Kynan Kouma",
    gender: "male",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)", "Penicillin", "Cephalosporins"],
    phone: "303-111-1112",
    email: "kynan.kouma@gmail.com",
    doctor_id: 12
  },
  {
    id: 1002,
    name: "Jessie Greenaway",
    gender: "female",
    allergies: [],
    phone: "303-111-1113",
    email: "jessie.greenaway@gmail.com",
    doctor_id: 1
  },
  {
    id: 1003,
    name: "Julie Hibbert",
    gender: "female",
    allergies: [],
    phone: "303-111-1114",
    email: "julie.hibbert@gmail.com",
    doctor_id: 29
  },
  {
    id: 1004,
    name: "Zac Copeland",
    gender: "male",
    allergies: ["Cephalosporins", "Sulfonamides"],
    phone: "303-111-1115",
    email: "zac.copeland@gmail.com",
    doctor_id: 7
  },
  {
    id: 1005,
    name: "Macy Mohammed",
    gender: "female",
    allergies: [],
    phone: "303-111-1116",
    email: "macy.mohammed@gmail.com",
    doctor_id: 16
  },
  {
    id: 1006,
    name: "Rosina Salas",
    gender: "female",
    allergies: ["Intravenous Contrast Dye"],
    phone: "303-111-1117",
    email: "rosina.salas@gmail.com",
    doctor_id: 7
  },
  {
    id: 1007,
    name: "Erin Chase",
    gender: "female",
    allergies: [],
    phone: "303-111-1118",
    email: "erin.chase@gmail.com",
    doctor_id: 3
  },
  {
    id: 1008,
    name: "Jamaal Workman",
    gender: "male",
    allergies: ["Penicillin"],
    phone: "303-111-1119",
    email: "jamaal.workman@gmail.com",
    doctor_id: 5
  },
  {
    id: 1009,
    name: "Freja Mcguire",
    gender: "female",
    allergies: [],
    phone: "303-111-1120",
    email: "freja.mcguire@gmail.com",
    doctor_id: 13
  },
  {
    id: 1010,
    name: "Rhiana Kerr",
    gender: "female",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)"],
    phone: "303-111-1121",
    email: "rhiana.kerr@gmail.com",
    doctor_id: 10
  },
  {
    id: 1011,
    name: "Torin Reader",
    gender: "male",
    allergies: ["Intravenous Contrast Dye"],
    phone: "303-111-1122",
    email: "torin.reader@gmail.com",
    doctor_id: 13
  },
  {
    id: 1012,
    name: "Hajrah Williamson",
    gender: "male",
    allergies: ["Cephalosporins"],
    phone: "303-111-1123",
    email: "hajrah.williamson@gmail.com",
    doctor_id: 17
  },
  {
    id: 1013,
    name: "Jo Downes",
    gender: "non-binary",
    allergies: ["Tetracycline", "Dilantin"],
    phone: "303-111-1124",
    email: "jo.downes@gmail.com",
    doctor_id: 9
  },
  {
    id: 1014,
    name: "Cristian Haas",
    gender: "male",
    allergies: ["Sulfonamides", "Cromolyn Sodium", "Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1125",
    email: "cristian.haas@gmail.com",
    doctor_id: 18
  },
  {
    id: 1015,
    name: "Arjun Butt",
    gender: "male",
    allergies: [],
    phone: "303-111-1126",
    email: "arjun.butt@gmail.com",
    doctor_id: 15
  },
  {
    id: 1016,
    name: "Kayleigh Hayward",
    gender: "female",
    allergies: [],
    phone: "303-111-1127",
    email: "kayleigh.hayward@gmail.com",
    doctor_id: 16
  },
  {
    id: 1017,
    name: "Elmer Roy",
    gender: "male",
    allergies: ["Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1128",
    email: "elmer.roy@gmail.com",
    doctor_id: 27
  },
  {
    id: 1018,
    name: "Sannah Galloway",
    gender: "female",
    allergies: [],
    phone: "303-111-1129",
    email: "sannah.galloway@gmail.com",
    doctor_id: 5
  },
  {
    id: 1019,
    name: "Hazel Gross",
    gender: "female",
    allergies: ["Tetracycline", "Dilantin", "Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1130",
    email: "hazel.gross@gmail.com",
    doctor_id: 2
  },
  {
    id: 1020,
    name: "Zayan Yates",
    gender: "male",
    allergies: [],
    phone: "303-111-1131",
    email: "zayan.yates@gmail.com",
    doctor_id: 25
  },
  {
    id: 1021,
    name: "Cherise Kirby",
    gender: "female",
    allergies: ["Penicillin"],
    phone: "303-111-1132",
    email: "cherise.kirby@gmail.com",
    doctor_id: 18
  },
  {
    id: 1022,
    name: "Natalia Jennings",
    gender: "female",
    allergies: [],
    phone: "303-111-1133",
    email: "natalia.jennings@gmail.com",
    doctor_id: 17
  },
  {
    id: 1023,
    name: "Caolan Tyson",
    gender: "male",
    allergies: [],
    phone: "303-111-1134",
    email: " caolan.tyson@gmail.com",
    doctor_id: 19
  },
  {
    id: 1024,
    name: "Che Aldred",
    gender: "male",
    allergies: [],
    phone: "303-111-1135",
    email: "che.aldred@gmail.com",
    doctor_id: 18
  },
  {
    id: 1025,
    name: "Woody Fernandez",
    gender: "male",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)"],
    phone: "303-111-1136",
    email: "woody.fernandez@gmail.com",
    doctor_id: 12
  },
  {
    id: 1026,
    name: "Leanne Doug",
    gender: "female",
    allergies: [],
    phone: "303-111-1137",
    email: "leanne.doug@gmail.com",
    doctor_id: 14
  },
  {
    id: 1027,
    name: "Akshay Duran",
    gender: "male",
    allergies: [],
    phone: "303-111-1138",
    email: "akshay.duran@gmail.com",
    doctor_id: 15
  },
  {
    id: 1028,
    name: "Danica Pemberton",
    gender: "female",
    allergies: ["Dilantin"],
    phone: "303-111-1139",
    email: "danica.pemberton@gmail.com",
    doctor_id: 2
  },
  {
    id: 1029,
    name: "Estelle Chambers",
    gender: "female",
    allergies: ["Tetracycline", "Penicillin", "Cromolyn Sodium"],
    phone: "303-111-1140",
    email: "estelle.chambers@gmail.com",
    doctor_id: 5
  }
  

]