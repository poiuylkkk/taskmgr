import { MatIconRegistry } from '@angular/material/icon/'
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds :DomSanitizer) => {
  const imgDir = 'assets/img'
  const sidebarDir = `${imgDir}/sidebar`
  const dayDir = `${imgDir}/days`
  const iconDir = `${imgDir}/icons`
  const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const avatarDir = `${imgDir}/avatar`
  ir.addSvgIcon('photo', ds.bypassSecurityTrustResourceUrl('assets/02_photo.svg'))
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`))
  ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`))
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`))
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`))
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`))
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`))
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`))
  ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`))
  ir.addSvgIconSetInNamespace('avatar', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`))

  day.forEach(item => {
    ir.addSvgIcon(`day${item}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${item}.svg`))
  })
}