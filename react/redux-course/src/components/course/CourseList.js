import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, onDeleteClass}) => {
  function onUserRegister() {
    console.log('CourseList: onUserRegister handler');
  }

  function onDeleteHandler() {
    console.log('CourseList: onDeleteHandler handler');
    onDeleteClass();
  }

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} onRegister={onUserRegister} onDelete={onDeleteClass}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClass: PropTypes.func.isRequired
};

export default CourseList;
