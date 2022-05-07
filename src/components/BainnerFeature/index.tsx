import React from 'react'
import { FeatureContainer } from './styles'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { GiMoneyStack } from 'react-icons/gi'
import * as FaIcon from "react-icons/fa";
import StickerCard from '../../components/Cards/StickerCard';
import { formatMoney } from '@utils/use-price';

const BainnerFeature: React.FC = () => {
	return (

		<div className="w-full flex flex-wrap mb-6">
		
			<div className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0">
				<StickerCard
					title="Funcionários"
					subtitle="Descei mais de"
					icon={<FaIcon.FaRestroom/>}
					graphic={<AiOutlineArrowDown/>}
					price={382}
					status={"-20"}
					classIcon={"icon-decrease"}
				/>
			</div>

			<div className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pr-3 mb-6 xl:mb-0">
				<StickerCard
					title="Estudantes"
					subtitle="Descei mais de"
					icon={<FaIcon.FaUserGraduate />}
					price={49939}
					graphic={<AiOutlineArrowDown/>}
					classIcon={"icon-decrease"}
					status={"-10"}
				/>
			</div>
			<div className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pl-0 xl:pl-3 mb-6 xl:mb-0">
				<StickerCard
					title="Total neste mês"
					subtitle="Cresceu mais de"
					icon={<GiMoneyStack />}
					graphic={<AiOutlineArrowUp/>}
					classIcon={"icon-growth"}
					price={formatMoney(39280993)}
					status={"+30"}
				/>
			</div>

			<div className="w-full sm:w-2/4 xl:w-1/4 sm:px-3 sm:pr-0 xl:pl-3 mb-6 xl:mb-0">
				<StickerCard
					title="Receita Hoje"
					icon={<GiMoneyStack />}
					graphic={<AiOutlineArrowUp/>}
					classIcon={"icon-growth"}
					subtitle="Descei mais de"
					price={formatMoney(880993)}
					status={"+80"}
				/>
			</div>
			
		</div>

	)
}

export default BainnerFeature
