import { CourseService, createCourseService } from '../../services/course.service';
import { httpClient } from '../../clients/http.client';
import { CourseViewModel, createCourseViewModel } from '../../view-models/course.view-model';
import React from 'react';

const courseService = createCourseService({ httpClient });
const courseViewModel = createCourseViewModel({ courseService });

export interface CourseContextType {
	courseViewModel: CourseViewModel;
	courseService: CourseService;
}

export const CourseContext = React.createContext<CourseContextType>({ courseViewModel, courseService });
