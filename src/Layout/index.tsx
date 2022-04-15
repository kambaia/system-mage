import React, { Children, ReactNode } from 'react';
import { Footer } from '../components/Footer/Footer';
import { SideBar } from '../components/SideBar';
import {TopBar} from '../components/Topbar';
import { WrapperContainer, MainContent, Content} from '../styles/genelStyle';
import CompTabs from './CompTabs';
type Props = {
	children: ReactNode;
}
const Layout: React.FC<Props> = ({ children}) => {
	return (
		<WrapperContainer>
			<SideBar />
			<MainContent>
				<TopBar />
			     <Content>
				 { children }
				 </Content>
			
				<Footer/>
			</MainContent>
		</WrapperContainer>
	)
}
export default Layout;

