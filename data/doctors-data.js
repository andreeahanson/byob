const doctorsData = [
  {
    name: "Freddie Bassett",
    specialization: "general medicine",
    phone: "303-000-0000",
    patients: [
      {
        name: "Anne Beak",
        phone: "303-111-1111",
        gender: "female"
      },
      {
        name: "Kynan Kouma",
        phone: "303-111-1112",
        gender: "male",
      }
    ]
  },
  {
    name: "George Light",
    specialization: "dermatology",
    phone: "303-000-0001",
    patients: [
      {
        name: "Jessie Greenaway",
        phone: "303-111-1113",
        gender: "female"
      },
      {
        name: "Julie Hibbert",
        phone: "303-111-1114",
        gender: "female",
      },
      {
        name: "Zac Copeland",
        phone: "303-111-1115",
        gender: "male",
      }
    ]
  },
  {
    name: "Marry Lee",
    specialization: "neurology",
    phone: "303-000-0002",
    patients: [
      {
        name: "Macy Mohammed",
        phone: "303-111-1116",
        gender: "female",
      },
      {
        name: "Rosina Salas",
        phone: "303-111-1117",
        gender: "female",
      }
    ]
  },
  {
    name: "Gina Garcia",
    specialization: "plastic surgery",
    phone: "303-000-0003",
    patients: [
      {
        name: "Erin Chase",
        phone: "303-111-1118",
        gender: "female"
      },
      {
        name: "Jamaal Workman",
        phone: "303-111-1119",
        gender: "male"
      }
    ]
  },
  {
    name: "Mayrelis Cordero",
    specialization: "cardiology",
    phone: "303-000-0004",
    patients: [
      {
        name: "Freja Mcguire",
        phone: "303-111-1120",
        gender: "female"
      },
      {
        name: "Rhiana Kerr",
        phone: "303-111-1121",
        gender: "female"
      }
    ]
  },
  {
    name: "Carmen Mendez",
    specialization: "gynecology",
    phone: "303-000-0005",
    patients: [
      {
        name: "Torin Reader",
        phone: "303-111-1122",
        gender: "male"
      },
      {
        name: "Hajrah Williamson",
        phone: "303-111-1123",
        gender: "male"
      },
      {
        name: "Jo Downes",
        phone: "303-111-1124",     
        gender: "non-binary"
      }
    ]
  },
  {
    name: "William Grayson",
    specialization: "podiatry",
    phone: "303-000-00006",
    patients: [
      {
        name: "Cristian Haas",
        phone: "303-111-1125",
        gender: "male"
      },
      {
        name: "Arjun Butt",
        phone: "303-111-1126",      
        gender: "male"
      }
    ],
  },
  {
    name: "Raheel Moyer",
    specialization: "stomatology",
    phone: "303-000-0007",
    patients: [
      {
        name: "Kayleigh Hayward",
        phone: "303-111-1127",
        gender: "female"
      },
      {
        name: "Elmer Roy",
        phone: "303-111-1128",     
        gender: "male"
      }
    ]
  },
  {
    name: "Emmeline Noel",
    specialization: "allergy & immunology",
    phone: "303-000-0008",
    patients: [
      {
        name: "Sannah Galloway",
        phone: "303-111-1129",
        gender: "female"
      },
      {
        name: "Hazel Gross",
        phone: "303-111-1130",
        gender: "female"
      }
    ]
  },
  {
    name: "Jameson Mays",
    genderspecialization: "anesthesiology",
    phone: "303-000-0009",
    patients: [
      {
        name: "Zayan Yates",
        phone: "303-111-1131",
        gender: "male"
      },
      {
        name: "Cherise Kirby",
        phone: "303-111-1132",
        gender: "female"
      }
    ]
  },
  {
    name: "Aleksandra Sawyer",
    specialization: "diagnostic radiology",
    phone: "303-000-0010",
    patients: [
      {
        name: "Natalia Jennings",
        phone: "303-111-1133",
        gender: "female"
      },
      {
        name: "Caolan Tyson",
        phone: "303-111-1134",
        gender: "male"
      }
    ]
  },
  {
    name: "Elina Parkinson",
    specialization: "medical genetics",
    phone: "303-000-0011",
    patients: [
      {
        name: "Che Aldred",
        phone: "303-111-1135",      
        gender: "male"
      },
      {
        name: "Woody Fernandez",
        phone: "303-111-1136",
        gender: "male"
      }
    ]
  },
  {
    name: "Annabel Mora",
    specialization: "thoracic surgery",
    phone: "303-000-0012",
    patients: [
      {
        name: "Leanne Doug",
        phone: "303-111-1137",
        gender: "female"
      },
      {
        name: "Akshay Duran",
        phone: "303-111-1138",
        gender: "male"
      }
    ]
  },
  {
    name: "Jarvis Schofield",
    specialization: "ophthalmology",
    phone: "303-000-0013",
    patients: [
      {
        name: "Danica Pemberton",
        phone: "303-111-1139",
        gender: "female"
      },
      {
        name: "Estelle Chambers",
        phone: "303-111-1140",
        gender: "female"
      }
    ]
  },
  {
    name: "Elle-May Watt",
    specialization: "gastroenterology ",
    phone: "303-000-0016",
    patients: [
      {
        name: "Daruca Edmberton",
        phone: "303-111-1177",
        gender: "female"
      },
      {
        name: "Mestelle McChambers",
        phone: "303-111-1183",
        gender: "female"
      }
    ]
  },
  {
    name: "Clementine Brett",
    specialization: "hematology",
    phone: "303-000-0017",
    patients: [
      {
        name: "Cherry Smith",
        phone: "303-111-7777",
        gender: "female"
      },
      {
        name: "Barry Mith",
        phone: "303-111-4375",      
        gender: "male"
      }
    ]
  },
  {
    name: "Marc Palacios",
    specialization: "infectious disease",
    phone: "303-000-0018",
    patients: [
      {
        name: "Ana Banana",
        phone: "303-111-5938",      
        gender: "female"
      },
      {
        name: "Peach McGrape",
        phone: "303-111-4353",
        gender: "female"
      }
    ]
  },
  {
    name: "Davina Esquivel",
    specialization: "medical microbiology",
    phone: "303-000-0019",
    patients: [
      {
        name: "Chi Long",
        phone: "303-111-2435",    
        gender: "female"
      },
      {
        name: "Mel Carter",
        phone: "303-111-1640",      
        gender: "female"
      }
    ]
  }
]



