import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const SideCard = (props) => {
	return (
		<div>
			<Card>
				<CardBody>
					{/* <CardTitle>Card title</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle> */}
					<CardText>
						Some quick SideCard text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
};

export default SideCard;
