import styled from 'styled-components'
import ButtonImage from '../../assets/buttons/ButtonOn.png'

export default function TextImage ({textImage}) {
	return (
		<ImageText textImage={textImage} />
	)
}


const ImageText = styled.span`
  background-image: url(../../assets/buttons/ButtonOn.png);
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  letter-spacing: 2px; 
  width: 250px;
  height: 90px;

  &::before {
    content: ${props => props.textImage || " "};
    font-size: 25px;
    font-weight: 700;
    color: #e1e1e1;
    position: absolute;
    top: 30px;
    left: 97px;
  }
`




/*
.image-text {
			background-image: url(../../assets/buttons/ButtonOn.png);
			width: 250px;
			height: 90px;
			background-repeat: no-repeat;
			background-position: center;
			position: relative;
			letter-spacing: 2px;

			&::before {
				content: 'Mint';
				font-size: 25px;
				font-weight: 700;
				color: var(--white);
				position: absolute;
				top: 30px;
				left: 97px;
			}
		}
*/