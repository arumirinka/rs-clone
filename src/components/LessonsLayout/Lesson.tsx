import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './Lesson.css';

type Props = {
  lesson: string,
  number: number,
};

const Lesson = ({ lesson, number }: Props) => (
  <Button type="primary" className="lessons__lesson">{lesson} {number}</Button>
);
export default Lesson;
