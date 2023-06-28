export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      const err = `${filename} cannot be processed`;
      reject(new Error(err));
    } else {
      resolve();
    }
  });
}
