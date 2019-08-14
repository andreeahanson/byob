const patients = [
  {
    id: 1000,
    name: "Anne Beak",
    gender: "female",
    allergies: [],
    phone: "303-111-1111",
    email: "anne.beak@gmail.com"
  },
  {
    id: 1001,
    name: "Kynan Kouma",
    gender: "male",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)", "Penicillin", "Cephalosporins"],
    phone: "303-111-1112",
    email: "kynan.kouma@gmail.com"
  },
  {
    id: 1002,
    name: "Jessie Greenaway",
    gender: "female",
    allergies: [],
    phone: "303-111-1113",
    email: "jessie.greenaway@gmail.com"
  },
  {
    id: 1003,
    name: "Julie Hibbert",
    gender: "female",
    allergies: [],
    phone: "303-111-1114",
    email: "julie.hibbert@gmail.com"
  },
  {
    id: 1004,
    name: "Zac Copeland",
    gender: "male",
    allergies: ["Cephalosporins", "Sulfonamides"],
    phone: "303-111-1115",
    email: "zac.copeland@gmail.com"
  },
  {
    id: 1005,
    name: "Macy Mohammed",
    gender: "female",
    allergies: [],
    phone: "303-111-1116",
    email: "macy.mohammed@gmail.com"
  },
  {
    id: 1006,
    name: "Rosina Salas",
    gender: "female",
    allergies: ["Intravenous Contrast Dye"],
    phone: "303-111-1117",
    email: "rosina.salas@gmail.com"
  },
  {
    id: 1007,
    name: "Erin Chase",
    gender: "female",
    allergies: [],
    phone: "303-111-1118",
    email: "erin.chase@gmail.com"
  },
  {
    id: 1008,
    name: "Jamaal Workman",
    gender: "male",
    allergies: ["Penicillin"],
    phone: "303-111-1119",
    email: "jamaal.workman@gmail.com"
  },
  {
    id: 1009,
    name: "Freja Mcguire",
    gender: "female",
    allergies: [],
    phone: "303-111-1120",
    email: "freja.mcguire@gmail.com"
  },
  {
    id: 1010,
    name: "Rhiana Kerr",
    gender: "female",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)"],
    phone: "303-111-1121",
    email: "rhiana.kerr@gmail.com"
  },
  {
    id: 1011,
    name: "Torin Reader",
    gender: "male",
    allergies: ["Intravenous Contrast Dye"],
    phone: "303-111-1122",
    email: "torin.reader@gmail.com"
  },
  {
    id: 1012,
    name: "Hajrah Williamson",
    gender: "male",
    allergies: ["Cephalosporins"],
    phone: "303-111-1123",
    email: "hajrah.williamson@gmail.com"
  },
  {
    id: 1013,
    name: "Jo Downes",
    gender: "non-binary",
    allergies: ["Tetracycline", "Dilantin"],
    phone: "303-111-1124",
    email: "jo.downes@gmail.com"
  },
  {
    id: 1014,
    name: "Cristian Haas",
    gender: "male",
    allergies: ["Sulfonamides", "Cromolyn Sodium", "Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1125",
    email: "cristian.haas@gmail.com"
  },
  {
    id: 1015,
    name: "Arjun Butt",
    gender: "male",
    allergies: [],
    phone: "303-111-1126",
    email: "arjun.butt@gmail.com"
  },
  {
    id: 1016,
    name: "Kayleigh Hayward",
    gender: "female",
    allergies: [],
    phone: "303-111-1127",
    email: "kayleigh.hayward@gmail.com"
  },
  {
    id: 1017,
    name: "Elmer Roy",
    gender: "male",
    allergies: ["Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1128",
    email: "elmer.roy@gmail.com"
  },
  {
    id: 1018,
    name: "Sannah Galloway",
    gender: "female",
    allergies: [],
    phone: "303-111-1129",
    email: "sannah.galloway@gmail.com"
  },
  {
    id: 1019,
    name: "Hazel Gross",
    gender: "female",
    allergies: ["Tetracycline", "Dilantin", "Nedocromil Sodium", "Intravenous Contrast Dye"],
    phone: "303-111-1130",
    email: "hazel.gross@gmail.com"
  },
  {
    id: 1020,
    name: "Zayan Yates",
    gender: "male",
    allergies: [],
    phone: "303-111-1131",
    email: "zayan.yates@gmail.com"
  },
  {
    id: 1021,
    name: "Cherise Kirby",
    gender: "female",
    allergies: ["Penicillin"],
    phone: "303-111-1132",
    email: "cherise.kirby@gmail.com"
  },
  {
    id: 1022,
    name: "Natalia Jennings",
    gender: "female",
    allergies: [],
    phone: "303-111-1133",
    email: "natalia.jennings@gmail.com"
  },
  {
    id: 1023,
    name: "Caolan Tyson",
    gender: "male",
    allergies: [],
    phone: "303-111-1134",
    email: " caolan.tyson@gmail.com"
  },
  {
    id: 1024,
    name: "Che Aldred",
    gender: "male",
    allergies: [],
    phone: "303-111-1135",
    email: "che.aldred@gmail.com"
  },
  {
    id: 1025,
    name: "Woody Fernandez",
    gender: "male",
    allergies: ["Tetracycline", "Dilantin", "Tegretol (Carbamazepine)"],
    phone: "303-111-1136",
    email: "woody.fernandez@gmail.com"
  },
  {
    id: 1026,
    name: "Leanne Doug",
    gender: "female",
    allergies: [],
    phone: "303-111-1137",
    email: "leanne.doug@gmail.com"
  },
  {
    id: 1027,
    name: "Akshay Duran",
    gender: "male",
    allergies: [],
    phone: "303-111-1138",
    email: "akshay.duran@gmail.com"
  },
  {
    id: 1028,
    name: "Danica Pemberton",
    gender: "female",
    allergies: ["Dilantin"],
    phone: "303-111-1139",
    email: "danica.pemberton@gmail.com"
  },
  {
    id: 1029,
    name: "Estelle Chambers",
    gender: "female",
    allergies: ["Tetracycline", "Penicillin", "Cromolyn Sodium"],
    phone: "303-111-1140",
    email: "estelle.chambers@gmail.com"
  }
  

]