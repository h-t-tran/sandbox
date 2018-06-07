import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, onRegister, onDelete}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><button onClick={onRegister}>Register</button></td>
      <td><button onClick={onDelete}>Delete</button></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onRegister: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
