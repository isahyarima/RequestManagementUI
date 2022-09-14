import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-logo-upload',
  templateUrl: './logo-upload.component.html',
  styleUrls: ['./logo-upload.component.css']
})
export class LogoUploadComponent implements OnInit {
  files: FileList;
  file: File;
  @Input() document:any;
  @Input() applicationNumber:any;
  @Input() tenantId:any;
  @Input() logoType:any;
  @Output() closeInput: EventEmitter<boolean> =   new EventEmitter();
  upload: boolean;
  constructor(private service:SharedService,private loadingService: NgxSpinnerService,) { }

  ngOnInit() {
  }

  fileExtention(name: string) {
    var regex = /(?:\.([^.]+))?$/;
    return regex.exec(name)[1];
}

myUploader(event){
  
  this.files = event.files;
  this.file = this.files[0];
  let body = {

    logoType:this.logoType,
    tenantId:this.tenantId,
    fileExtention:this.fileExtention(this.file.name),
    fileName:this.file.name,
    fileType:this.file.type,
  }
  this.loadingService.show();
  this.service.uploadLog(this.file, body).then((result: any) => {
   if(result.success==true){
    this.upload = true;
    Swal.fire(
      'Success!',
     'Uploaded Successfully!',
      'success'
    )
    this.closeInput.emit(this.upload)
    this.loadingService.hide();
   }else{
    Swal.fire(
      'Error!',
      result.error,
      'error'
    )
    this.loadingService.hide();
   }
}, (error) => {
    this.loadingService.hide();
    ////////console.log("error", error);
});
this.loadingService.hide();
}
  
}