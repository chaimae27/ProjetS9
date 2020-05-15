import { Component, OnInit } from "@angular/core";
import { Patient } from 'shared/patient';
import { PatientService } from '../../../service/patient.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';


@Component({
  selector: "app-addpatient",
  templateUrl: "./addpatient.component.html",
  styleUrls: ["./addpatient.component.css"]
})
export class AddpatientComponent implements OnInit {
  id;
  checkoutForm;

  datas: any[];
  patient: Patient[] = [];
  constructor(private patientService: PatientService, private formBuilder: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) { }

  public ngOnInit() {

    var id = +this.activeRoute.snapshot.paramMap.get('id');
    this.id = id;
    console.log(this.id);
    // let sport = new Sport(this.id);

    this.checkoutForm = this.formBuilder.group({
      Nom_P: '',
      Prenom_P: '',
      CIN: '',
      Adresse: '',
      Telephone: '',
      Email: '',
      Sexe: '',
      Date_Naiss: '',
    });
  }

  onSubmit(customerData) {
    // console.log(customerData);
    if (
      this.patientService.save(customerData).subscribe(() => { console.log("well executed") },
        (err) => { console.log(err) }
      )) {
      this.router.navigate(["/ListPatient/" + this.id]);
    }
  }
}
