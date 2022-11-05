import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'

const Products = ({ data }) => {
    
    return (
        <Fragment>
            {
                data.map(v =>
                    <Card style={{ width: '18rem' }} key={v.recipe.lable}>
                        <Card.Img variant="top" src={v.recipe.image} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </Fragment>

    )
}

export default Products