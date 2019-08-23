import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.html'
})

export class CourseComponent {
	name = "Universal History"
	category = "Literal"
	title = "this is a new title"
	result = ""
	
	onSave(){
		
		this.result = this.name
	}
	
	
}