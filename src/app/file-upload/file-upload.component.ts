import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  mutliple:boolean=true;
  maxFileSize!:number;
  
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
