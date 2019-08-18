# CLINIQUE API

This API consists of data on doctors and the patients of each doctor in the clinic. New doctors can be added, as well as new patients of a doctor can be added. *Each doctor can have several patients, but the each patient will only have one doctor.* Doctors and patients can be removed from the database. API access is through HTTP. Data is sent and received as JSON.

#### URL:

https://byob-clinique.herokuapp.com

## DOCTOR DATA ENDPOINTS

GET all the doctors:

```/clinique/doctors```

*Example request*

GET '/clinique/doctors'

*Example response*

```[
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
]```
