import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  
  PostUpload(file: File, body: any) {

    return new Promise((resolve, reject) => {

        let url = `${this.baseUrl}fileUpload`;

        let xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };
       // xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.open('POST', url, true);
        let formData = new FormData();

        formData.append("file", file, file.name);

        for (var key in body) {
            formData.append(key, body[key]);
        }

        let token = localStorage.getItem('token')
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        

        xhr.send(formData);
    });
}

getFileUploadForUser(userId,userTypeId) {
    return this.http.get(this.baseUrl + `fileUpload/${userId}/userId/${userTypeId}/userTypeId`);
  }

  getFileUpload() {
    return this.http.get(this.baseUrl + `fileUpload`);
  }
  deleteFileUpload(fileUploadId) {
    return this.http.delete(this.baseUrl + `fileUpload/${fileUploadId}/fileUploadId`);
  }


  uploadFile(file: File, body: any): any {
    return new Promise((resolve, reject) => {
  
        let url = this.baseUrl + `admin_DocumentUpload/upload`;
        // let url = `${AppConstant.API_BASE}media/upload-file`;
        let xhr: XMLHttpRequest = new XMLHttpRequest();
  
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };
  
        xhr.open('POST', url, true);
        let formData = new FormData();
  
        formData.append("file", file, file.name);
  
        for (var key in body) {
            formData.append(key, body[key]);
        }
  
        let loginResultDto = JSON.parse(localStorage.getItem('loginResultDto'));
        let token = loginResultDto.access_token;
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  
        xhr.send(formData);
       return xhr.response;
    });
  }


  uploadLog(file: File, body: any): any {
    return new Promise((resolve, reject) => {
  
        let url = this.baseUrl + `admin_Tenant/upload`;
        // let url = `${AppConstant.API_BASE}media/upload-file`;
        let xhr: XMLHttpRequest = new XMLHttpRequest();
  
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        };
  
        xhr.open('POST', url, true);
        let formData = new FormData();
  
        formData.append("file", file, file.name);
  
        for (var key in body) {
            formData.append(key, body[key]);
        }
  
        let loginResultDto = JSON.parse(localStorage.getItem('loginResultDto'));
        let token = loginResultDto.access_token;
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  
        xhr.send(formData);
       return xhr.response;
    });
  }
}

