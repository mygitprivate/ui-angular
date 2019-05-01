export const Code = {
    html: {
      content: ` 
      <input type="file" id="photo"  (change)="onFileUpload($event.target.files)"  accept="image/png, image/jpeg" />
  `,
      language: 'html'
    },
    ts: {
      content: `
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-e-mat-file-upload',
        templateUrl: './e-mat-file-upload.component.html',
        styleUrls: ['./e-mat-file-upload.component.scss']
      })
      export class EMatFileUploadComponent {
        photoFormData:FormData
        onFileUpload(files) {
          this.photoFormData = new FormData();
          this.photoFormData.append("multiPartFile", files[0]);
          this.photoFormData.append("uploadType", "PROFILE_PICTURE");
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