const doctors = [
  {
    id: 1,
    name: "Freddie Bassett",
    gender: "male",
    specialization: "general medicine",
    phone: "303-000-0000",
  },
  {
    id: 2,
    name: "George Light",
    gender: "male",
    specialization: "dermatology",
    phone: "303-000-0001",
  },
  {
    id: 3,
    name: "Marry Lee",
    gender: "female",
    specialization: "neurology",
    phone: "303-000-0002",
  },
  {
    id: 4,
    name: "Gina Garcia",
    gender: "female",
    specialization: "plastic surgery",
    phone: "303-000-0003",
  },
  {
    id: 5,
    name: "Mayrelis Cordero",
    gender: "female",
    specialization: "cardiology",
    phone: "303-000-0004",
  },
  {
    id: 6,
    name: "Carmen Mendez",
    gender: "female",
    specialization: "gynecology",
    phone: "303-000-0005",
  },
  {
    id: 7,
    name: "William Grayson",
    gender: "male",
    specialization: "podiatry",
    phone: "303-000-00006",
  },
  {
    id: 8,
    name: "Raheel Moyer",
    gender: "male",
    specialization: "stomatology",
    phone: "303-000-0007",
  },
  {
    id: 9,
    name: "Emmeline Noel",
    gender: "female",
    specialization: "allergy & immunology",
    phone: "303-000-0008",
  },
  {
    id: 10,
    name: "Jameson Mays",
    gender: "non-binary",
    specialization: "anesthesiology",
    phone: "303-000-0009",
  },
  {
    id: 11,
    name: "Aleksandra Sawyer",
    gender: "female",
    specialization: "diagnostic radiology",
    phone: "303-000-0010",
  },
  {
    id: 12,
    name: "Elina Parkinson",
    gender: "female",
    specialization: "medical genetics",
    phone: "303-000-0011",
  },
  {
    id: 13,
    name: "Annabel Mora",
    gender: "female",
    specialization: "thoracic surgery",
    phone: "303-000-0012",
  },
  {
    id: 14,
    name: "Jarvis Schofield",
    gender: "male",
    specialization: "ophthalmology",
    phone: "303-000-0013",
  },
  {
    id: 15,
    name: "Ailish Wolfe",
    gender: "male",
    specialization: "endocrinology",
    phone: "303-000-0014",
  },
  {
    id: 16,
    name: "Najma Penn",
    gender: "female",
    specialization: "urology",
    phone: "303-000-0015",
  },
  {
    id: 17,
    name: "Elle-May Watt",
    gender: "female",
    specialization: "gastroenterology ",
    phone: "303-000-0016",
  },
  {
    id: 18,
    name: "Clementine Brett",
    gender: "female",
    specialization: "hematology",
    phone: "303-000-0017",
  },
  {
    id: 19,
    name: "Marc Palacios",
    gender: "male",
    specialization: "infectious disease",
    phone: "303-000-0018",
  },
  {
    id: 20,
    name: "Davina Esquivel",
    gender: "female",
    specialization: "medical microbiology ",
    phone: "303-000-0019",
  }
]

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

const appointments = [
  {
    doctor_id: 1,
    patient_id: 1000,
    date: "08/20/2019",
    time: "1PM"
  },
  {
    doctor_id: 9,
    patient_id: 1013,
    date: "08/22/2019",
    time: "1:30PM"
  },
  {
    doctor_id: 12,
    patient_id: 1001,
    date: "08/15/2019",
    time: "12PM"
  },
  {
    doctor_id: 13,
    patient_id: 1009,
    date: "08/29/2019",
    time: "3PM"
  },
  {
    doctor_id: 1,
    patient_id: 1003,
    date: "09/01/2019",
    time: "10AM"
  },
  {
    doctor_id: 19,
    patient_id: 1023,
    date: "08/28/2019",
    time: "11AM"
  },
  {
    doctor_id: 18,
    patient_id: 1021,
    date: "08/16/2019",
    time: "8AM"
  },
  {
    doctor_id: 5,
    patient_id: 1008,
    date: "08/24/2019",
    time: "9AM"
  },
  {
    doctor_id: 7,
    patient_id: 1006,
    date: "08/15/2019",
    time: "8:30AM"
  },
  {
    doctor_id: 1,
    patient_id: 1010,
    date: "08/17/2019",
    time: "10:30AM"
  },
  {
    doctor_id: 6,
    patient_id: 1029,
    date: "08/15/2019",
    time: "1PM"
  },
  {
    doctor_id: 10,
    patient_id: 1010,
    date: "08/22/2019",
    time: "4PM"
  },
  {
    doctor_id: 14,
    patient_id: 1000,
    date: "08/22/2019",
    time: "5PM"
  },
  {
    doctor_id: 5,
    patient_id: 1020,
    date: "08/23/2019",
    time: "1:30PM"
  },
  {
    doctor_id: 18,
    patient_id: 1023,
    date: "08/23/2019",
    time: "12:30PM"
  },
  {
    doctor_id: 17,
    patient_id: 1014,
    date: "09/11/2019",
    time: "9:30PM"
  },
  {
    doctor_id: 16,
    patient_id: 1001,
    date: "09/10/2019",
    time: "4:30PM"
  },
  {
    doctor_id: 7,
    patient_id: 1005,
    date: "08/16/2019",
    time: "7:30AM"
  },
  {
    doctor_id: 2,
    patient_id: 1022,
    date: "09/29/2019",
    time: "4:30PM"
  },
  {
    doctor_id: 16,
    patient_id: 1016,
    date: "08/30/2019",
    time: "11:30AM"
  },
  {
    doctor_id: 18,
    patient_id: 1014,
    date: "08/20/2019",
    time: "5:30PM"
  },
  {
    doctor_id: 17,
    patient_id: 1022,
    date: "08/31/2019",
    time: "3:30PM"
  },
  {
    doctor_id: 29,
    patient_id: 1003,
    date: "08/19/2019",
    time: "7AM"
  },
  {
    doctor_id: 15,
    patient_id: 1015,
    date: "10/20/2019",
    time: "1PM"
  },
  {
    doctor_id: 12,
    patient_id: 1003,
    date: "09/20/2019",
    time: "10:30AM"
  },
  {
    doctor_id: 20,
    patient_id: 1028,
    date: "10/11/2019",
    time: "8AM"
  },
  {
    doctor_id: 25,
    patient_id: 1020,
    date: "10/23/2019",
    time: "1:30PM"
  },
  {
    doctor_id: 23,
    patient_id: 1007,
    date: "10/16/2019",
    time: "12:30PM"
  },
  {
    doctor_id: 24,
    patient_id: 1024,
    date: "10/21/2019",
    time: "6PM"
  },
  {
    doctor_id: 27,
    patient_id: 1014,
    date: "11/26/2019",
    time: "10AM"
  },
  {
    doctor_id: 16,
    patient_id: 1005,
    date: "11/26/2019",
    time: "5:30PM"
  },
  {
    doctor_id: 13,
    patient_id: 1008,
    date: "08/14/2019",
    time: "8:30AM"
  },
  {
    doctor_id: 3,
    patient_id: 1007,
    date: "11/12/2019",
    time: "4PM"
  }

]