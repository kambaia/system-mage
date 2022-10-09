import { FeatureContainer } from "./styles";
const StickerCardOption = ({
	title,
	classIcon,
	subtitle,
	icon,
	graphic,
	price,
	status
}: any) => {
	return (
		<div style={{background:'#ddd'}} className="flex flex-col w-full rounded bg-white shadow hover:bg-red-800">
			<FeatureContainer>
			<div className="items-card  w-full sm:w-2/4 xl:w-1/4  sm:pl-0  mb-3 xl:mb-0">
				<div className="feature-head w-full p-7 " >
					<span className="feature-title">{title}</span>
					<span className="icons">
					{icon}
					</span>
				</div>
				<div className="feature-money-container pl-5">
					<span className="feature-money">{price}</span>
				</div>
				<div className='percentage bg-white p-2 '>
					<span className="feature-sub"></span>
					<span className="feature-rate">
	
						 <span style={{display:'flex', justifyContent:'space-between'}} className={classIcon}><strong>Mais informações</strong><span className="icon-left">{graphic}</span></span>
					</span>

				</div>
			</div>
			</FeatureContainer>
		</div>
	);
};

export default StickerCardOption;
