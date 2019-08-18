# CLINIQUE API

This API consists of data on doctors and the patients of each doctor in the clinic. New doctors can be added, as well as new patients of a doctor can be added. *Each doctor can have several patients, but the each patient will only have one doctor.* Doctors and patients can be removed from the database. API access is through HTTP. Data is sent and received as JSON.

### URL:

https://byob-clinique.herokuapp.com

## DOCTOR DATA ENDPOINTS

#### GET all the doctors:

```/clinique/doctors```

*Example request*

```GET '/clinique/doctors'```

*Example response*

```
[
{
id: 1,
name: "Freddie Bassett",
specialization: "general medicine",
phone: "303-000-0000",
created_at: "2019-08-16T16:08:26.976Z",
updated_at: "2019-08-16T16:08:26.976Z"
},
{
id: 2,
name: "George Light",
specialization: "dermatology",
phone: "303-000-0001",
created_at: "2019-08-16T16:08:26.984Z",
updated_at: "2019-08-16T16:08:26.984Z"
},
{
id: 3,
name: "Marry Lee",
specialization: "neurology",
phone: "303-000-0002",
created_at: "2019-08-16T16:08:26.990Z",
updated_at: "2019-08-16T16:08:26.990Z"
}
]
```

#### GET a specific doctor:

```/clinique/doctors/<doctor id>```

*Example request*

```GET '/clinique/doctors/1'```

*Example response*

```
{
id: 1,
name: "Freddie Bassett",
specialization: "general medicine",
phone: "303-000-0000",
created_at: "2019-08-16T16:08:26.976Z",
updated_at: "2019-08-16T16:08:26.976Z",
patients: [
{
id: 1,
name: "Kynan Kouma",
phone: "303-111-1112",
gender: "male",
doctor_id: 1,
created_at: "2019-08-16T16:08:27.054Z",
updated_at: "2019-08-16T16:08:27.054Z"
},
{
id: 7,
name: "Anne Beak",
phone: "303-111-1111",
gender: "female",
doctor_id: 1,
created_at: "2019-08-16T16:08:27.052Z",
updated_at: "2019-08-16T16:08:27.052Z"
}
]
}
```

#### POST a new doctor:

```/clinique/doctors```

*Example request*

```POST '/clinique/doctors'```

*Required parameters*

```
Headers:  "Content-Type": "application/json"

Body: 
{
  "name": <String>,
  "specialization" : <String>,
  "phone": <String>
}
```

*Example response*

```
[
    {
        "id": 414,
        "name": "Fred Flinstone",
        "specialization": "general medicine",
        "phone": "303-000-7777",
        "created_at": "2019-08-18T06:18:36.193Z",
        "updated_at": "2019-08-18T06:18:36.193Z"
    }
]
```

#### DELETE a  doctor:

```/clinique/doctors/<doctor id>```

*Example request*

```DELETE '/clinique/doctors/414'```

*Example response*

```
{
    "success": "You have successfully deleted doctor with the id of 414"
}
```

## PATIENT DATA ENDPOINTS

#### GET all the patients of a certain doctor:

```/clinique/doctors/<doctor id>/patients```

*Example request*

```GET '/clinique/doctors/1/patients'```

*Example response*

```
[
{
id: 1,
name: "Kynan Kouma",
phone: "303-111-1112",
gender: "male",
doctor_id: 1,
created_at: "2019-08-16T16:08:27.054Z",
updated_at: "2019-08-16T16:08:27.054Z"
},
{
id: 7,
name: "Anne Beak",
phone: "303-111-1111",
gender: "female",
doctor_id: 1,
created_at: "2019-08-16T16:08:27.052Z",
updated_at: "2019-08-16T16:08:27.052Z"
}
]
```

#### GET a specific patient of a certain doctor:

```/clinique/doctors/<doctor id>/patients/<patient id>```

*Example request*

```GET '/clinique/doctors/1/patients/1'```

*Example response*

```
[
{
id: 1,
name: "Kynan Kouma",
phone: "303-111-1112",
gender: "male",
doctor_id: 1,
created_at: "2019-08-16T16:08:27.054Z",
updated_at: "2019-08-16T16:08:27.054Z"
}
]
```

#### POST a new patient:

```/clinique/doctors/<doctor id>/patients```

*Example request*

```POST '/clinique/doctors/1/patients'```

*Required parameters*

```
Headers:  "Content-Type": "application/json"

Body: 
{
  "name": <String>,
  "phone": <String>,
  "gender": <String>,
  "doctor_id": <Integer>
}
```

*Example response*

```
[
    {
        "id": 1,
        "name": "Anne Beak",
        "phone": "303-111-1111",
        "gender": "female",
        "doctor_id": 1,
        "created_at": "2019-08-18T06:28:43.957Z",
        "updated_at": "2019-08-18T06:28:43.957Z"
    }
]
```

#### DELETE a  patient of a certain doctor:

```/clinique/doctors/<doctor id>/patients/1```

*Example request*

```DELETE '/clinique/doctors/1/patients/1'```

*Example response*

```
{
    "success": "You have successfully deleted patient with the id of 1"
}
```
