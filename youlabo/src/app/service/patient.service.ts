import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { Patient } from 'shared/patient';


@Injectable({
  providedIn: "root"
})
export class PatientService {
  // private patients: any = [];
  private apiUrl = "http://localhost:58810/api/Patients";


  constructor(private httpClient: HttpClient) { }



  getPatient() {
    return this.httpClient.get(this.apiUrl);
  }

  getPatientById(id: number) {
    return this.httpClient.get<Patient>(this.apiUrl + "/" + id);
  }

  delete(id) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
  }

  save(ss) {
    console.log(ss);
    return this.httpClient.post<any>(this.apiUrl, ss);
  }

}

