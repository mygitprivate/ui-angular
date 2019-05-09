export const Code = {
    html: {
      content: ` 
      <mat-card>  
    <!-- Title of an Card -->  
    <mat-card-title>  
        Registration Form 
    </mat-card-title>
    <mat-card-content>  
      <form #basicDetailsForm="ngForm" (ngSubmit)="basicDetailsForm.form.valid && onFormSubmitBasicDetails(basicDetailsForm.value)" *ngIf="isbasicDetailsForm">  
          <table>  
              <tr>  
                <td>  
                  <mat-form-field class="demo-full-width">  
                      <input  matInput placeholder="First Name" name="firstName"  [(ngModel)]="firstName" required>  
                  </mat-form-field>
                  <mat-error>
                    <span *ngIf="!basicDetailsForm.form.controls.firstName?.valid && basicDetailsForm.form.controls.firstName?.touched">Please enter First Name !!!</span>
                </mat-error>
              </td> 
            </tr>
              <tr> 
              <td>  
                  <mat-form-field class="demo-full-width">  
                      <input  matInput placeholder="Last Name" name="lastName"  [(ngModel)]="lastName" required>  
                  </mat-form-field>
                  <mat-error>
                    <span *ngIf="!basicDetailsForm.form.controls.lastName?.valid && basicDetailsForm.form.controls.lastName?.touched">Please enter Last Name !!!</span>
                 </mat-error>  
              </td> 
              </tr>
              <tr>  
                <td colspan="2">  
                    <mat-form-field class="demo-full-width">  
                        <input  matInput placeholder="Email" name="Email"  [(ngModel)]="email" required>
                        <mat-hint>use like : demo@demo.com</mat-hint>  
                </mat-form-field> 
                </td>  
            </tr> 
            <tr>  
                <td colspan="2">  
                    <mat-form-field class="demo-full-width">  
                        <input  matInput placeholder="PhoneNumber" name="phoneNumber"  [(ngModel)]="phoneNumber" required (keypress)="numberOnly($event)">
                    </mat-form-field>  
                    <mat-error>  
                        <span *ngIf="!basicDetailsForm.form.controls.phoneNumber?.valid && basicDetailsForm.form.controls.phoneNumber?.touched">Please enter proper PhoneNumber    !!!</span>  
                    </mat-error>  
                </td>  
            </tr>   
            <tr>  
                <td colspan="2">  
                    <span>Gender</span><br><br>  
                    <mat-radio-group name="gender"  [(ngModel)]="gender" required>  
                        <mat-radio-button value="Male">Male</mat-radio-button>  
                        <mat-radio-button value="Female">Female</mat-radio-button>  
                    </mat-radio-group>  
                    <mat-error>  
                        <span *ngIf="!basicDetailsForm.form.controls.gender?.valid && basicDetailsForm.form.controls.gender?.touched">Please select any Gender !!!</span>  
                    </mat-error>  
                </td> 
                </tr> 
             <tr>  
                <td colspan="2" class="content-center">  
                    <button mat-raised-button color="accent" [disabled]="basicDetailsForm?.invalid">Next</button>  
                </td>  
            </tr>  
            <tr>  
                <td></td>  
            </tr>  
              </table>
            </form>  
            <form #addressDetailsForm="ngForm" (ngSubmit)="onFormSubmitAddressDetails(addressDetailsForm.value)" *ngIf="isaddressDetailsForm">
                    <table>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <textarea matInput name="address"  [(ngModel)]="address" matInput placeholder="Address" matTextareaAutosize matAutosizeMinRows="2" matAutosizeMaxRows="5" required></textarea>  
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.address?.valid && addressDetailsForm.form.controls.address?.touched">Please enter Address !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <input matInput placeholder="Enter your Door No." name="doorno"  [(ngModel)]="doorno" required>
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.doorno?.valid && addressDetailsForm.form.controls.doorno?.touched">Please enter Door no !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <input  matInput placeholder="Enter your Street" name="street"  [(ngModel)]="street" required>
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.street?.valid && addressDetailsForm.form.controls.street?.touched">Please enter Street!!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <input  matInput placeholder="Enter your City" name="city"  [(ngModel)]="city" required>
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.city?.valid && addressDetailsForm.form.controls.city?.touched">Please enter City !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <mat-select placeholder="Enter your State"  name="state" [(ngModel)]="state" required>
                                        <mat-option *ngFor="let state of states" [value]="state"> 
                                          {{state}}
                                        </mat-option>
                                      </mat-select>
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.state?.valid && addressDetailsForm.form.controls.state?.touched">Please enter State !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field class="demo-full-width">
                                    <input  matInput placeholder="Enter your PinCode" name="pinCode" [(ngModel)]="pinCode" required>
                                </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.pinCode?.valid && addressDetailsForm.form.controls.pinCode?.touched">Please enter PinCode !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <mat-form-field>
                                    <mat-select placeholder="Enter your Country"  name="country" [(ngModel)]="country" required>
                                      <mat-option *ngFor="let country of countries" [value]="country"> 
                                        {{country}}
                                      </mat-option>
                                    </mat-select>
                                  </mat-form-field>
                                <mat-error>
                                    <span *ngIf="!addressDetailsForm.form.controls.country?.valid && addressDetailsForm.form.controls.country?.touched">Please enter Country !!!</span>
                                </mat-error>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" class="content-center">
                                <button mat-raised-button color="accent" [disabled]="!addressDetailsForm?.valid">Next</button>
                            </td>
                        </tr>
                    </table>
                </form>
                <form #professionalDetailsForm="ngForm" (ngSubmit)="onFormSubmitProfessionalDetails(professionalDetailsForm.value)" *ngIf="isprofessionalDetailsForm">
                        <table>
                            <tr>
                                <td>
                                    <mat-form-field class="demo-full-width">
                                        <input  matInput placeholder="Enter your EmployeId" name="employeId" [(ngModel)]="employeId" required>
                                    </mat-form-field>
                                    <mat-error>
                                        <span *ngIf="!professionalDetailsForm.form.controls.employeId?.valid && professionalDetailsForm.form.controls.employeId?.touched">Please enter EmployeId !!!</span>
                                    </mat-error>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <mat-form-field class="demo-full-width">
                                        <input  matInput placeholder="Enter your Department" name="department" [(ngModel)]="department" required>
                                    </mat-form-field>
                                    <mat-error>
                                        <span *ngIf="!professionalDetailsForm.form.controls.department?.valid && professionalDetailsForm.form.controls.department?.touched">Please enter Department !!!</span>
                                    </mat-error>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <mat-form-field class="demo-full-width">
                                        <input  matInput placeholder="Enter your Role" name="role" [(ngModel)]="role" required>
                                    </mat-form-field>
                                    <mat-error>
                                        <span *ngIf="!professionalDetailsForm.form.controls.role?.valid && professionalDetailsForm.form.controls.role?.touched">Please enter Role!!!</span>
                                    </mat-error>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <mat-form-field class="demo-full-width">
                                        <input  matInput placeholder="Enter your password" name="password" [(ngModel)]="password" required>
                                    </mat-form-field>
                                    <mat-error>
                                        <span *ngIf="!professionalDetailsForm.form.controls.password?.valid && professionalDetailsForm.form.controls.password?.touched">Please enter passoword !!!</span>
                                    </mat-error>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <mat-form-field class="demo-full-width">
                                        <input  matInput placeholder="Enter your confirmPassword" name="confirmPassword" [(ngModel)]="confirmPassword" required>
                                    </mat-form-field>
                                    <mat-error>
                                        <span *ngIf="!professionalDetailsForm.form.controls.confirmPassword?.valid && professionalDetailsForm.form.controls.confirmPassword?.touched">Please enter confirmPassword !!!</span>
                                    </mat-error>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="content-center">
                                    <button mat-raised-button color="accent" [disabled]="!professionalDetailsForm?.valid">Next</button>
                                </td>
                            </tr>
                        </table>
                    </form>  
       </mat-card-content> 
  </mat-card>
  `,
      language: 'html'
    },
    ts: {
      content: `
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-e-mat-reactive-forms',
  templateUrl: './e-mat-reactive-forms.component.html',
  styleUrls: ['./e-mat-reactive-forms.component.scss']
})
export class EMatReactiveFormsComponent implements OnInit {
  countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttaranchal",
    "Uttar Pradesh",
    "West Bengal"
]
_showName;
basicDetailsForm: FormGroup;
addressDetailsForm: FormGroup;
professionalDetailsForm: FormGroup;
isaddressDetailsForm: boolean = false;
isbasicDetailsForm: boolean = true;
isprofessionalDetailsForm: boolean = false;
code:any;

onFormSubmitBasicDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = true;
    this.isprofessionalDetailsForm = false;
}
onFormSubmitAddressDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = false;
    this.isprofessionalDetailsForm = true;
}
onFormSubmitProfessionalDetails(form) {
    this.isbasicDetailsForm = false;
    this.isaddressDetailsForm = false;
}
numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
 }
}
`,
    language: 'javascript'
  },
    css: {
      content: `
    /** No CSS for this example */
          `,
      language: 'css'
    }
  }