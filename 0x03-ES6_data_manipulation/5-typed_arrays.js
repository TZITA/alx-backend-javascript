export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const tArr = new ArrayBuffer(length);
  const dataView = new DataView(tArr);

  dataView.setInt8(position, value);

  return dataView;
}
