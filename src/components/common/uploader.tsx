import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Attachment } from "@ts-types/generated";
import Loader from "@components/ui/loader/loader";
import { AiOutlineUpload } from 'react-icons/ai';
import styled from "styled-components";
type Props = {
	setProfileSave: (value: File)=>void;
	setProfile: (value:any)=>void;
	profile?: string;
  };

export default function Uploader({ setProfileSave, profile, setProfile }:Props) {
	const { getRootProps, getInputProps } = useDropzone({
		multiple: false,
		onDrop: async (acceptedFiles: any) => {
			if (acceptedFiles && acceptedFiles.length > 0) {
				previewImage(acceptedFiles[0]);
				setProfileSave(acceptedFiles[0])
			}
		}
	});
	const previewImage = async (e: File) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setProfile(reader.result);
			}
		};
		reader.readAsDataURL(e);
	};

	return (
		<>
			{
				!profile ? (
					<section className="upload">
						<div
							{...getRootProps({
								className:
									"border-dashed border-2 p-2 border-gray-300 h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-gossamer-400 focus:outline-none",
							})}
						>
							<input {...getInputProps()} accept="image/*"/>
							<AiOutlineUpload className="text-gray-300" size={30}/>
							<p className="text-body text-sm mt-4 text-center ">
								<span className="text-primary font-semibold">Faça upload de uma imagem </span> 
								 arrastando o arquivo e soltar na área mostrada ou clicando na área em si. <br />
								<span className="text-xs text-gray-500">PNG,JPG</span>
							</p>
						</div>
					</section>
				) :
					<WraaperUploa>
						<div className="user-preview">
							<div className="remove" onClick={()=>setProfile("")}>x</div>
							<img className="h-40 flex items-center mt-2 ml-2" src={profile} alt="profile image" />
						</div>
					</WraaperUploa>
			}
		</>
	);
}


const WraaperUploa = styled.aside`
	width: 100%;
	height: 250px;
	padding: 10px;
	display: flex;
	justify-content: center;
	position: relative;

	button{
		position: relative;
		z-index: 30;
		right: 0;
		bottom: 0;
		top: 85%;
		padding: 10px;
		background-color: #ccc;
		width: 300px;
		height: 52px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #222;
		font-size: 18px;
	}
	.remove{
		position: absolute;
		z-index: 100;
		right: 0;
		top: 0;
		padding: 10px;
		background-color: #ddd;
		border-radius:50%;
		height: 40px;
		width: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		display: none;
	}
	.user-preview{
		width: 300px;
		height: 250px;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #ddd;
		position: absolute;
		z-index: 3;

		:hover{
			.remove{
				display: flex;
				transition: ease-in-out 4s;
				cursor: pointer;
				
			}
		}

		img{
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`
