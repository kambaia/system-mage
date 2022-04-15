import React from 'react';
import * as C from './styles';
import * as FiIcon from 'react-icons/fi';
import * as FaIcon from 'react-icons/fa';
import * as MdIcon from 'react-icons/md';
import * as AiIcon from 'react-icons/ai';
import logo from '../../assets/school/martires.png';
import Link from 'next/link';
export const SideBar: React.FC<{}> = () => {
	return (
		<C.Container>
			<ul>
				<span className="logo">
					<img src={logo} alt="logo" />
				</span>
				<div className="content-nav ">
					<li>
						<Link as={'/school/dashboard'} href="/school/dashboard">
							<a>
								<span className="icon">
									<FiIcon.FiHome className="color-icon" />
								</span>
								<span className="title">Dashboard</span>
							</a>
						</Link>
					</li>
					<li>
						<Link as={'/school/user'} href="/school/user">
							<a href="#">
								<span className="icon">
									<FaIcon.FaUsers className="color-icon" />
								</span>
								<span className="title">Usuários</span>
							</a>
						</Link>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<AiIcon.AiOutlineUsergroupAdd className="color-icon" />
							</span>
							<span className="title">Funcionários</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<FaIcon.FaUserGraduate className="color-icon" />
							</span>
							<span className="title">Estudantes</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<FaIcon.FaIdCard className="color-icon" />
							</span>
							<span className="title">Matriculas</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<MdIcon.MdPayments className="color-icon" />
							</span>
							<span className="title">Plano de Aulas</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<FaIcon.FaRegCalendarAlt className="color-icon" />
							</span>
							<span className="title">Notas & Planificaões</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<MdIcon.MdPayments className="color-icon" />
							</span>
							<span className="title">Pagamentos</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<MdIcon.MdPayments className="color-icon" />
							</span>
							<span className="title">Configurações</span>
						</a>
					</li>

					<li>
						<a href="#">
							<span className="icon">
								<FiIcon.FiHelpCircle className="color-icon" />
							</span>
							<span className="title">Ajuda</span>
						</a>
					</li>
				</div>
				<div className="footer-bar">
					<div className="checkbox">
						<input type="checkbox" className="checkbox-input" />
						<label htmlFor="checkbox-input"></label>
					</div>
				</div>
			</ul>
		</C.Container>
	);
};
