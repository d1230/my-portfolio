import { useState } from "react";


const medicalData = [
  {
    name: "John Doe",
    age: 30,
height: 175,
    medicalHistory: [
      {
        condition: "Hypertension",
        diagnosisDate: "2020-01-15",
        medications: ["Lisinopril","Amlodipine","Hydrochlorothiazide"],
        notes: "Blood pressure well controlled with medication.",
      },
      {
        condition: "Type 2 Diabetes",
        diagnosisDate: "2018-05-20",
    medication: ["Metformin"],
        notes: "Blood sugar levels managed with medication and diet.",
      },
    ],
  },
  {
    name: "Jane Smith",
    age: 25,
    height: 165,
    medicalHistory: [
        {condition: "Asthma",
        diagnosisDate: "2015-03-10",
        medications: ["Albuterol Inhaler"],
        notes: "Occasional asthma attacks, uses inhaler as needed.",
        },
        {condition: "Seasonal Allergies",
        diagnosisDate: "2010-04-15",
        medications: [],
        notes: "Experiences symptoms during spring, manages with over-the-counter antihistamines.",
        },

    ],
  }
];

export const Patient = () => {
    const [selectedPatient, setSelectedPatient] = useState(medicalData[0].name);
    return (
        <div className="patient">
            <h2>Patient Component</h2>
            <p>This is a placeholder for the Patient component.</p>
            <div>   
                <select onChange={(e)=>{setSelectedPatient(e.target.value)}} className="patient-select">    
                    {medicalData.map((patient, index) => (
                        <option key={index} value={patient.name} >{patient.name}</option>
                    ))} 
                </select>
            </div>
            <div>
                <p>Patient details will be displayed here based on the selected patient.</p>
                {medicalData.filter(patient => patient.name === selectedPatient).map((patient,idx) =>(
                    <div key={idx}>
                        <p>Name: {patient.name}</p>
                        <p>Age: {patient.age}</p>
                        <p>Height: {patient.height} cm</p>
                        <h3>Medical History:</h3>
                        {patient.medicalHistory && (patient.medicalHistory.map((history, index) => (
                            <div key={index} style={{border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
                                <p>Condition: {history.condition}</p>
                                <p>Diagnosis Date: {history.diagnosisDate}</p>
                                <p>Medications: {history.medications && history.medications.length > 0 ? history.medications.join(", ") : 'N/A'}</p>
                                <p>Notes: {history.notes}</p>
                            </div>
                        )))}
                    </div>
                ))}
            </div>
                    </div>
    )
}