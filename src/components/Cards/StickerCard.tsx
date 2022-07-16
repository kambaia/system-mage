import { FeatureContainer } from "./styles";
const StickerCard = ({
	title,
	classIcon,
	subtitle,
	icon,
	graphic,
	price,
	status
}: any) => {
	return (
		<div className="flex flex-col w-full h-full p-7 rounded bg-white shadow">
			<FeatureContainer>
			<div className="items-card w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pl-0 mb-3 xl:mb-0">
				<div className="feature-head w-full">
					<span className="feature-title">{title}</span>
					<span className="icons">
					{icon}
					</span>
				</div>
				<div className="feature-money-container">
					<span className="feature-money">{price}</span>
				</div>
				<div className='percentage'>
					<span className="feature-sub">{subtitle}</span>
					<span className="feature-rate">
	
						{status} % <span className={classIcon}>{graphic}</span>
					</span>

				</div>
			</div>
			</FeatureContainer>
		</div>
	);
};

export default StickerCard;
