import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];

  const classR = new ClassRoom(19);
  const classR2 = new ClassRoom(20);
  const classR3 = new ClassRoom(34);

  arr.push(classR, classR2, classR3);

  return arr;
}
