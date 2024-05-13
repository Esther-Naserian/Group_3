class Appointment{
    constructor(doctorName,specialization,name){
        this.doctorName = doctorName
        this.specialization= specialization
        this.availability = true
    }
    patientDetails(name,age,condition,preference){
        console.log (`Hello my name is ${name} and I am ${age} ,my condition is ${condition} and I want ${preference}`)
    }
    doctorsAvailability(date){
        if  (this.availability == true){
        console.log(`My name is ${this.name} I have booked ${this.doctorName} who is a ${this.specialization}  on ${date}`);
        }else{
         console.log(`Wait until another date`);
        }
    }
}
const Smith = new Appointment("Naserian","Optician");
Smith.patientDetails("Naserian",20,"malaria","I will come with an NHIF");
Smith.doctorsAvailability("28th,May,2024")
