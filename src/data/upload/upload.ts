import { Profile } from "@ts-types/generated";
import { deleteObject,  getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../config/firebase';
export async function UploadImage(email: string, file: File) {
	if (["image/jpg", "image/jpeg", "image/webp", "image/svg+xml", "image/png"].includes(file.type)) {
		let newFile = ref(storage, `files/school/users/${email}-${file.name}`);
		let upload = await uploadBytes(newFile, file);
		let img_url = await getDownloadURL(upload.ref);
		return {
			name: upload.ref.name,
			thumbnail: img_url
		} as Profile
	} else {
		return new Error("Tipo de arquivo não permitido")
	}
}

export async function deleteImage(file: File) {
	let desertRef = ref(storage, `files/school/users/${file}`)
	deleteObject(desertRef).then(() => {
		// File deleted successfully
	}).catch((error) => {
		// Uh-oh, an error occurred!
	});
}