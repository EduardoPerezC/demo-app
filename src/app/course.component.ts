import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.html'
})

export class CourseComponent {
	name = "Math"
	category = "science"
	title = "this is a new title"
	result = ""
	
	onSave(){
		
		result = "saving changes"
	}
	
	
}