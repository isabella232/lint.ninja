import { h, Component } from 'preact';
import styled from 'styled-components';
import { Link } from 'preact-router/match';
import capitalize from 'capitalize-it';
import linters from '../../data/data';

const CardWrapper = styled.section`
	width: 30%;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #404040;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Logo = styled.h1`
	outline: 1px solid #19f6e8;
	display: inline-block;
	padding: 15px 40px;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.4em;
	font-weight: normal;
	line-height: 32px;
	letter-spacing: 8px;
	transition: all 300ms ease;
	position: relative;
	cursor: pointer;

	a {
		color: #fff;
		text-decoration: none;
	}

	&:before {
		width: 0px;
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background: #19f6e8;
		transition: all 300ms ease;
	}

	&:hover:before {
		width: 100%;
	}

	&:hover a {
		color: #404040;
	}
`;

const Name = styled.span`
	z-index: 2;
	position: relative;
`;

const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
`;

class Card extends Component {
	state = { categories: null };

	getCategories() {
		const categories = linters.reduce((end, linter) => {
			if (end.indexOf(linter.category) === -1) {
				end.push(linter.category);
			}

			return end;
		}, []);

		this.setState({ categories });
	}

	componentDidMount() {
		this.getCategories();
	}

	render({ children }, { categories }) {
		return (
			<Section>
				{categories &&
					categories.map(category =>
						(<CardWrapper>
							<Logo>
								<Name>
									<Link href={`/category/${category}`}>
										{capitalize(category)}
									</Link>
								</Name>
							</Logo>
						</CardWrapper>)
					)}
			</Section>
		);
	}
}

export default Card;
