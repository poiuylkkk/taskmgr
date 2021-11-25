import { MatIconRegistry } from '@angular/material/icon/'
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds :DomSanitizer) => {
  ir.addSvgIcon('photo', ds.bypassSecurityTrustResourceUrl('assets/02_photo.svg'))

}